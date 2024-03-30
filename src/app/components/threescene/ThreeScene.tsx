'use client'
import { NextPage } from 'next'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const ThreeScenePage: NextPage = () => {
	const containerRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		const scene = new THREE.Scene()
		const camera = new THREE.PerspectiveCamera(
			75,
			innerWidth / innerHeight,
			0.1,
			1000
		)
		const renderer = new THREE.WebGLRenderer()
		renderer.setSize(innerWidth, innerHeight)
		containerRef.current?.appendChild(renderer.domElement)
		camera.position.z = 3
		const color = 0xffffff
		const intensity = 1
		const light = new THREE.AmbientLight(color, intensity)
		scene.add(light)
		const loader = new GLTFLoader()
		const loaderTexture = new THREE.TextureLoader()
		loader.load('/3d/valery/source/valery.glb', gltf => {
			scene.add(gltf.scene)
		})
		// loaderTexture.load('/3d/valery/textures/gltf_embedded_1.jpeg', texture => {
		// 	const material = new THREE.MeshBasicMaterial({ map: texture })
		//     console.log('Tdone!!!')
		// })
		console.log(scene.children)
		function update() {
			requestAnimationFrame(update)

			renderer.render(scene, camera)
		}
		update()
	}, [])

	return <div ref={containerRef} />
}

export default ThreeScenePage
