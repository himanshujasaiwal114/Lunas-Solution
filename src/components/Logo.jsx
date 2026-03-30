const Logo = ({ className = "h-10 w-auto" }) => {
  return (
    <img 
      src="/logo.png" 
      alt="Lunas Solution Logo" 
      className={`object-contain ${className}`}
    />
  );
};

export default Logo;
