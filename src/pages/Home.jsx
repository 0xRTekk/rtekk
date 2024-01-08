import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Model = () => {
  const gltf = useLoader(GLTFLoader, './models/planet/scene.gltf');
  return <primitive object={gltf.scene} />;
}

const Home = () => {
  return (
    <Suspense>
      <Model />
    </Suspense>
  );
}

export default Home;