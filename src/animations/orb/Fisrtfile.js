import Orb from './animations/orb/Orb';

function Demo() {
  return (
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <Orb
        hoverIntensity={0.5}
        rotateOnHover={true}
        hue={0}
        forceHoverState={true}
      />
    </div>
  );
}

export default Demo;
