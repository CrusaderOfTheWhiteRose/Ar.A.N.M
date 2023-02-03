import { AnimatePresence, motion } from "framer-motion"
import * as React from "react"
import * as THREE from "three"
import { SignInComponent } from "./sign-in"
import { LogInComponent } from "./log-in"

export default function LogSignInRoute() {
	React.useEffect(() => {
		//Init scene
		const scene = new THREE.Scene()
		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
		const renderer = new THREE.WebGLRenderer()
		//Scene size
		renderer.setSize(window.innerWidth, window.innerHeight)
		//Background tag for the scene, i tried canvas but it did not work that well
		document.getElementsByTagName("div")[0].appendChild(renderer.domElement)
		//Create cube
		const geom = new THREE.BoxGeometry(10, 10, 10)
		const mat = new THREE.MeshBasicMaterial({ color: "black" })
		const cube = new THREE.Mesh(geom, mat)
		scene.add(cube)
		//Its just camera and lights
		camera.position.x = -5
		camera.position.y = 0
		camera.position.z = 10
		const light = new THREE.AmbientLight(0x404040)
		scene.add(light)
		const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7)
		scene.add(directionalLight)
		//Listen to keys user presses
		document.addEventListener("keydown", onDocumentKeyDown, false)
		function onDocumentKeyDown(event: any) {
			//Sets random colour to mesh
			cube.material.color.setHex(0x1000000 + Math.random() * 0xffffff)
			//Random cube transform
			if (Math.random() >= 0.6) {
				if (Math.random() >= 0.5) {
					cube.rotation.x += Math.random()
					cube.position.x += Math.random()
				} else {
					cube.rotation.x -= Math.random()
					cube.position.x -= Math.random()
				}
			} else if (Math.random() <= 0.3) {
				if (Math.random() >= 0.5) {
					cube.rotation.y += Math.random()
					cube.position.y += Math.random()
				} else {
					cube.rotation.y -= Math.random()
					cube.position.y -= Math.random()
				}
			} else {
				if (Math.random() >= 0.5) {
					cube.rotation.z += Math.random()
					cube.position.z += Math.random()
				} else {
					cube.rotation.z -= Math.random()
					cube.position.z -= Math.random()
				}
			}
			//If cube is leaving scene
			if (cube.position.x >= 10) {
				cube.position.x -= 20
			}
			if (cube.position.y >= 10) {
				cube.position.y -= 20
			}
			if (cube.position.z >= 10) {
				cube.position.z -= 20
			}
		}
		//Scene config function
		const render = function () {
			//To update frames
			requestAnimationFrame(render)
			//Render scene (with cube) and camera
			renderer.render(scene, camera)
		}
		//Render everything
		render()
	}, [])
	//Select to sign in or log in
	const [selectedTab, setSelectedTab] = React.useState(0)
	return (
		<>
			<div className='absolute z-[-2]'></div>
			<div className='px-[4em] py-[2em] w-screen overflow-clip h-screen flex flex-col justify-center items-center shadow-md def-theme-back lg:w-[25vw] '>
				<div className='flex flex-row gap-[2.6vw] w-auto lg:gap-6 lg:w-[10rem] justify-center'>
					<div
						className='def-theme-text'
						onClick={() => {
							setSelectedTab(0)
						}}>
						Sign In
					</div>
					<div
						className='def-theme-text'
						onClick={() => {
							setSelectedTab(1)
						}}>
						Log In
					</div>
				</div>
				<AnimatePresence>
					<motion.div
						key={selectedTab}
						initial={{ y: 10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -10, opacity: 0, position: "absolute" }}
						transition={{ duration: 0.2 }}>
						{selectedTab == 0 ? <SignInComponent /> : selectedTab == 1 ? <LogInComponent /> : null}
					</motion.div>
				</AnimatePresence>
			</div>
		</>
	)
}
