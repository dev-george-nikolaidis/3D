/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { Suspense, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

export default function ModelTest({ ...props}) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/ApplewatchClone1_13.glb')
  const {scene,clock } = useThree()

      useFrame(()=>{
        if (group.current ) {
          // group.current.rotation.y += 0.0055;
            
          group.current.position.z = Math.sin(clock.getElapsedTime()) * 0.08;
      }
      })

  return (
 

    <group ref={group} {...props} dispose={null} castShadow={true} >
      <mesh geometry={nodes.Cube002.geometry} material={materials.Glass} material-color = "#000"/>
      <mesh geometry={nodes.Cube002_1.geometry} material={materials.Frame} />
      <mesh geometry={nodes.Cube002_2.geometry} material={materials.GlassBack} />
      <mesh
        geometry={nodes.BandTop.geometry}
        material={nodes.BandTop.material}
        position={[0, 0, -0.04]}
        rotation={[-3.13, 0, 0]}
        scale={[0.93, 0.93, 0.93]}
        />
      <group position={[0, -0.02, -0.04]} rotation={[-3.14, 0, 0]} scale={0.93} >
        <mesh geometry={nodes.Cylinder004.geometry} material={nodes.Cylinder004.material}  />
        <mesh geometry={nodes.Cylinder004_1.geometry} material={materials.Metal} />
      </group>
    </group>
   
  )
}

useGLTF.preload('/ApplewatchClone1_13.glb')

