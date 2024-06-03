import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useCharacterAnimations } from "../context/CharAnimation";
import gsap from "gsap";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const Fox = (props) => {
  const redirectToURL = (url) => {
    window.open(url, "_blank");
  };
  const texture = useLoader(TextureLoader, "./images/batman.jpeg");
  const group = useRef();
  const meshRef = useRef();
  const { nodes, materials, animations } = useGLTF("./model/fox1.gltf");
  const { actions, names } = useAnimations(animations, group);
  const { setAnimations, animationIndex, setAnimationIndex } =
    useCharacterAnimations();

  useEffect(() => {
    setAnimations(names);
  }, [names]);
  useEffect(() => {
    actions[names[animationIndex]].reset().fadeIn(0.5).play();
    return () => {
      actions[names[animationIndex]].fadeOut(0.5);
    };
  }, [animationIndex]);

  useEffect(() => {
    if (animationIndex === 7) {
      gsap.to(group.current.rotation, {
        y: Math.PI / 2,
        z: -Math.PI / 2,
        x: Math.PI / 2,

        duration: 0,
      });
      gsap.to(group.current.position, {
        x: 15,
        duration: 3.5,
        onComplete: () => {
          gsap.to(group.current.rotation, { y: 0, z: 0, x: 0, duration: 0.5 });
          setTimeout(() => {
            setAnimationIndex(2);
          }, 150);
          actions[names[animationIndex]].play();
          actions[names[animationIndex]].fadeOut(0.5);

          const timeout = setTimeout(() => {
            actions[names[animationIndex]].fadeOut(1);
            setTimeout(() => {
              actions[names[animationIndex]].stop();
            }, 250);
          }, 500);

          return () => {
            clearTimeout(timeout);

            actions[names[animationIndex]].fadeOut(0.5);
          };
        },
      });
    }
  }, [animationIndex]);

  useEffect(() => {
    if (animationIndex === 5) {
      gsap.to(group.current.rotation, {
        y: Math.PI / 2,
        z: -Math.PI / 2,
        x: Math.PI / 2,

        duration: 0,
      });
      gsap.to(group.current.position, {
        x: 12.5,
        duration: 1,
        onComplete: () => {
          gsap.to(group.current.rotation, { y: 0, z: 0, x: 0, duration: 0.5 });
          setTimeout(() => {
            setAnimationIndex(4);
            gsap.to(meshRef.current.position, { y: 5, duration: 2 });
          }, 150);

          actions[names[animationIndex]].play();
          actions[names[animationIndex]].fadeOut(0.5);

          const timeout = setTimeout(() => {
            actions[names[animationIndex]].fadeOut(1);
            setTimeout(() => {
              actions[names[animationIndex]].stop();
            }, 250);
          }, 500);

          return () => {
            clearTimeout(timeout);

            actions[names[animationIndex]].fadeOut(0.5);
          };
        },
      });
    }
  }, [animationIndex]);
  console.log(animationIndex);

  useEffect(() => {
    if (animationIndex === 2) {
      actions[names[animationIndex]].reset().fadeIn(0.5).play();
      setTimeout(() => {
        setAnimationIndex(4);
      }, 3000);
    } else {
      actions[names[animationIndex]].reset().fadeIn(0.5).play();
    }
    return () => {
      actions[names[animationIndex]].fadeOut(0.5);
    };
  }, [animationIndex]);

  return (
    <>
      <mesh
        ref={meshRef}
        position={[15, 15, 0]}
        transparent
        envMapIntensity={2}
        onClick={() => redirectToURL("https://innovationx.mozillavit.in/")}
      >
        <planeGeometry attach="geometry" args={[4, 4]} />
        <meshStandardMaterial attach="material" map={texture} transparent />
      </mesh>
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group
            name="metarig"
            position={[-0.001, 0.126, 0.053]}
            rotation={[-0.048, 0.008, -0.001]}
          >
            <primitive object={nodes.spine} />
            <primitive object={nodes.IK} />
            <primitive object={nodes.neutral_bone} />
            <group name="Cube002">
              <skinnedMesh
                castShadow
                name="Cube002_1"
                geometry={nodes.Cube002_1.geometry}
                material={materials.Base}
                skeleton={nodes.Cube002_1.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Cube002_2"
                geometry={nodes.Cube002_2.geometry}
                material={materials["Material.001"]}
                skeleton={nodes.Cube002_2.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Cube002_3"
                geometry={nodes.Cube002_3.geometry}
                material={materials["Material.003"]}
                skeleton={nodes.Cube002_3.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Cube002_4"
                geometry={nodes.Cube002_4.geometry}
                material={materials["Material.002"]}
                skeleton={nodes.Cube002_4.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Cube002_5"
                geometry={nodes.Cube002_5.geometry}
                material={materials.Mouth}
                skeleton={nodes.Cube002_5.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Cube002_6"
                geometry={nodes.Cube002_6.geometry}
                material={materials["Material.004"]}
                skeleton={nodes.Cube002_6.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Cube002_7"
                geometry={nodes.Cube002_7.geometry}
                material={materials["Material.005"]}
                skeleton={nodes.Cube002_7.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Cube002_8"
                geometry={nodes.Cube002_8.geometry}
                material={materials["Material.006"]}
                skeleton={nodes.Cube002_8.skeleton}
              />
            </group>
          </group>
        </group>
      </group>
    </>
  );
};
export default Fox;
useGLTF.preload("./model/fox1.gltf");
