import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
	const computer = useGLTF("./desktop_pc/scene.gltf");
	return (
		<mesh>
			<hemisphereLight intensity={7} groundColor="black" />
			{/* <pointLight intensity={50} position={[-2, -3.2, 4]}/> */}
			{/* <pointLight intensity={50} position={[0, -3.2, -5]}/> */}
			<pointLight intensity={2} position={[0, -1, 5.5]} />
			<spotLight
				position={[-8, 0, 0]}
				angle={0.12}
				penumbra={1}
				intensity={100}
				castShadow
				shadow-mapsize={1024}
			/>

			<primitive
				object={computer.scene}
				scale={isMobile ? 0.3 : 0.45}
				position={isMobile ? [0, -1.3, -0.2] : [0, -2.6, 0]}
				rotation={[-0.01, -0.2, -0.1]}
			/>
		</mesh>
	);
};

const ComputersCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 640px)");
		setIsMobile(mediaQuery.matches);

		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches);
		};

		mediaQuery.addEventListener("change", handleMediaQueryChange);

		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

	return (
		<Canvas
			frameLoop="demand"
			shadows
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
				<Computers isMobile={isMobile} />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;
