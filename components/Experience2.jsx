'use client';
import { Environment, OrbitControls, useTexture } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { Avatar2 } from './Avatar2';

export const Experience2 = ({ selectedScript }) => {
  const texture = useTexture('/textures/office.jpg');
  const viewport = useThree((state) => state.viewport);

  OrbitControls.enabled = false;

  return (
    <>
      <OrbitControls enabled={false} />
      <Environment preset='warehouse' />
      <Avatar2
        position={[0, -3, 5]}
        scale={2}
        selectedScript={selectedScript}
      />

      <mesh>
        <planeGeometry args={[viewport.width * 1.2, viewport.height * 1.2]} />
        <meshBasicMaterial map={texture} opacity={0.3} />
      </mesh>
    </>
  );
};
