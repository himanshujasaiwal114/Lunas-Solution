interface Env {
  MAILER_URL: string;
  MAILER_CLIENT_KEY: string;
  MAILER_ORIGIN_TOKEN: string;
  TURNSTILE_SECRET: string;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let body: any;
  try {
    body = await request.json();
  } catch {
    return new Response("invalid json", { status: 400 });
  }

  const { fields, reply_to, attachment, token } = body;
  if (!Array.isArray(fields) || !fields.length || !token) {
    return new Response("missing fields", { status: 400 });
  }

  const ts = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: env.TURNSTILE_SECRET,
      response: token,
      remoteip: request.headers.get("cf-connecting-ip") ?? "",
    }),
  }).then(r => r.json<{ success: boolean }>());

  if (!ts.success) return new Response("challenge failed", { status: 403 });

  const res = await fetch(env.MAILER_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-Client-Key": env.MAILER_CLIENT_KEY,
      "X-Origin-Token": env.MAILER_ORIGIN_TOKEN,
    },
    body: JSON.stringify({ data: { fields }, reply_to, attachment }),
  });

  if (!res.ok) {
    console.error("mailer error", res.status, await res.text());
    return new Response("send failed", { status: 502 });
  }
  return new Response(JSON.stringify({ ok: true }), {
    headers: { "content-type": "application/json" },
  });
};
