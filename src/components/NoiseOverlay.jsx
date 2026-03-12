const NoiseOverlay = () => {
  return (
    <>
      <svg className="hidden">
        <filter id="noiseFilter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.65" 
            numOctaves="3" 
            stitchTiles="stitch" 
          />
        </filter>
      </svg>
      <div 
        className="noise-overlay" 
        style={{ filter: 'url(#noiseFilter)' }}
      />
    </>
  );
};

export default NoiseOverlay;
