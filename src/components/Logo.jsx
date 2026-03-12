const Logo = ({ className = "w-48", color = "currentColor", textClass = "fill-brand-navy" }) => {
  return (
    <svg 
      viewBox="0 0 950 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g transform="translate(100, 100)">
        {/* Red outer circle (radius 80) */}
        <circle cx="-80" cy="0" r="10" fill="#E5242A"/>
        <circle cx="-73.9" cy="-30.6" r="10" fill="#E5242A"/>
        <circle cx="-56.5" cy="-56.5" r="10" fill="#E5242A"/>
        <circle cx="-30.6" cy="-73.9" r="10" fill="#E5242A"/>
        <circle cx="0" cy="-80" r="10" fill="#E5242A"/>
        <circle cx="30.6" cy="-73.9" r="10" fill="#E5242A"/>
        <circle cx="56.5" cy="-56.5" r="10" fill="#E5242A"/>
        <circle cx="73.9" cy="-30.6" r="10" fill="#E5242A"/>
        
        <circle cx="-73.9" cy="30.6" r="10" fill="#E5242A"/>
        <circle cx="-56.5" cy="56.5" r="10" fill="#E5242A"/>
        <circle cx="-30.6" cy="73.9" r="10" fill="#E5242A"/>
        <circle cx="0" cy="80" r="10" fill="#E5242A"/>
        <circle cx="30.6" cy="73.9" r="10" fill="#E5242A"/>

        {/* Blue inner circle (radius 50) */}
        <circle cx="-47.5" cy="-15.4" r="6" fill="#2E4DA7"/>
        <circle cx="-35.3" cy="-35.3" r="6" fill="#2E4DA7"/>
        <circle cx="-15.4" cy="-47.5" r="6" fill="#2E4DA7"/>
        <circle cx="9.5" cy="-49.1" r="6" fill="#2E4DA7"/>
        <circle cx="32.1" cy="-38.3" r="6" fill="#2E4DA7"/>
        <circle cx="48.5" cy="-12.1" r="6" fill="#2E4DA7"/>

        <circle cx="-47.5" cy="15.4" r="6" fill="#2E4DA7"/>
        <circle cx="-35.3" cy="35.3" r="6" fill="#2E4DA7"/>
        <circle cx="-15.4" cy="47.5" r="6" fill="#2E4DA7"/>
        <circle cx="9.5" cy="49.1" r="6" fill="#2E4DA7"/>
        <circle cx="32.1" cy="38.3" r="6" fill="#2E4DA7"/>
      </g>
      <text 
        x="210" 
        y="125" 
        fontFamily="Inter, sans-serif" 
        fontWeight="700" 
        fontSize="90" 
        letterSpacing="-1.5" 
        className={`transition-colors duration-300 \${textClass}`}
      >
        Lunas Solution
      </text>
    </svg>
  );
};

export default Logo;
