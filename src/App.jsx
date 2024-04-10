import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Interface from "./components/Interface";

function App() {
  return (
    <>
      <Canvas camera={{ position: [1, 0.5, 22.5], fov: 30 }} shadows>
        <Experience />
      </Canvas>
      <Interface />
    </>
  );
}

export default App;
