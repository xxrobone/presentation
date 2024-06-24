'use client'
import { useEffect, useRef, useState } from 'react';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import * as THREE from 'three';

const corresponding = {
  A: 'viseme_PP',
  B: 'viseme_kk',
  C: 'viseme_I',
  D: 'viseme_AA',
  E: 'viseme_O',
  F: 'viseme_U',
  G: 'viseme_FF',
  H: 'viseme_TH',
  X: 'viseme_PP',
};

export const Avatar2 = ({ selectedScript, ...props }) => {
  const audio = useRef(new Audio());
  const [lipsync, setLipsync] = useState(null);

  const { headFollow, smoothMorphTarget, morphTargetSmoothing } = useControls({
    headFollow: true,
    smoothMorphTarget: true,
    morphTargetSmoothing: 0.5,
  });

  // Load 3D model and animations
  const { nodes, materials } = useGLTF('/models/robtalk.glb');
 /*  console.log('Loaded GLTF nodes:', nodes); // Log GLTF nodes */
  const { animations: idleAnimation } = useFBX('/animations/Idle.fbx');
  const { animations: happyAnimation } = useFBX('/animations/Happy Idle.fbx');
  const { animations: greetingAnimation } = useFBX(
    '/animations/Neutral Idle.fbx'
  );

  idleAnimation[0].name = 'Idle';
  happyAnimation[0].name = 'Happy';
  greetingAnimation[0].name = 'Greeting';

  const [animation, setAnimation] = useState('Idle');
  const group = useRef();
  const { actions } = useAnimations(
    [idleAnimation[0], happyAnimation[0], greetingAnimation[0]],
    group
  );

  useEffect(() => {
    const loadAudioAndLipsync = async () => {
      try {
        // If selectedScript is stop, pause, or empty, set animation to Idle and return
        if (
          selectedScript === 'stop' ||
          selectedScript === 'pause' ||
          selectedScript === ''
        ) {
          setAnimation('Idle');
          return;
        }

        // Load audio file
        audio.current.src = `/audios/${selectedScript}.mp3`;

        // Load lipsync data
        const response = await fetch(`/audios/${selectedScript}.json`);
        if (!response.ok) {
          throw new Error(`Failed to fetch lipsync data for ${selectedScript}`);
        }
        const data = await response.json();
        setLipsync(data);

        // Play audio
        audio.current.play();

        // Set animation based on selectedScript
        if (selectedScript === 'welcome') {
          setAnimation('Greeting');
        } else if (selectedScript === 'degaming') {
          setAnimation('Idle');
        } else {
          setAnimation('Idle');
        }
      } catch (error) {
        console.error('Error loading audio or lipsync data:', error);
      }
    };

    loadAudioAndLipsync();

    // Cleanup audio on unmount or when selectedScript changes to 'stop'
    return () => {
      audio.current.pause();
      audio.current.src = '';
    };
  }, [selectedScript]);

  // Handle camera follow and lipsync morph target updates
  useFrame((state) => {
    if (headFollow) {
      const head = group.current.getObjectByName('Wolf3D_Head');
      if (head) {
        head.lookAt(state.camera.position);
      } else {
        console.warn('Wolf3D_Head not found in the scene');
      }
    }

    if (lipsync && !audio.current.paused) {
      const currentAudioTime = audio.current.currentTime;
      for (let i = 0; i < lipsync.mouthCues.length; i++) {
        const mouthCue = lipsync.mouthCues[i];
        if (
          currentAudioTime >= mouthCue.start &&
          currentAudioTime <= mouthCue.end
        ) {
          Object.keys(corresponding).forEach((key) => {
            const value = corresponding[key];
            const targetIndex = nodes.Wolf3D_Head.morphTargetDictionary[value];
            const targetInfluence = key === mouthCue.value ? 1 : 0;
            nodes.Wolf3D_Head.morphTargetInfluences[targetIndex] =
              smoothMorphTarget
                ? THREE.MathUtils.lerp(
                    nodes.Wolf3D_Head.morphTargetInfluences[targetIndex],
                    targetInfluence,
                    morphTargetSmoothing
                  )
                : targetInfluence;

            nodes.Wolf3D_Teeth.morphTargetInfluences[targetIndex] =
              smoothMorphTarget
                ? THREE.MathUtils.lerp(
                    nodes.Wolf3D_Teeth.morphTargetInfluences[targetIndex],
                    targetInfluence,
                    morphTargetSmoothing
                  )
                : targetInfluence;
          });
          break;
        }
      }
    }
  });

  // Handle animation changes
  useEffect(() => {
    if (actions[animation]) {
      actions[animation].reset().fadeIn(0.5).play();
    } else {
      console.warn(`Animation ${animation} not found`);
    }
    return () => {
      if (actions[animation]) {
        actions[animation].fadeOut(0.5);
      }
    };
  }, [actions, animation]);

  // Cleanup audio on unmount
  useEffect(() => {
    const audioElement = audio.current;

    return () => {
      audioElement.pause();
      audioElement.src = '';
    };
  }, []);

  return (
    <group {...props} ref={group} dispose={null}>
      <group>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          geometry={nodes.Wolf3D_Glasses.geometry}
          material={materials.Wolf3D_Glasses}
          skeleton={nodes.Wolf3D_Glasses.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
        <skinnedMesh
          name='EyeLeft'
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name='EyeRight'
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          name='Wolf3D_Head'
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          name='Wolf3D_Teeth'
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
        <skinnedMesh
          name='Wolf3D_Beard'
          geometry={nodes.Wolf3D_Beard.geometry}
          material={materials.Wolf3D_Beard}
          skeleton={nodes.Wolf3D_Beard.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Beard.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Beard.morphTargetInfluences}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/models/robtalk.glb');
