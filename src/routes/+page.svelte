<script lang="ts">
	import * as Threlte from '@threlte/core';
	import { DoubleSide, Mesh } from 'three';
	import * as Three from 'three';
	import * as Utils from 'three/src/math/MathUtils';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
</script>

<Threlte.Canvas>
	<Threlte.PerspectiveCamera position={{ x: 20, y: 20, z: 20 }}>
		<Threlte.OrbitControls autoRotate />
	</Threlte.PerspectiveCamera>

	<Threlte.AmbientLight intensity={0.2} />
	<Threlte.DirectionalLight
		intensity={2}
		position={{ x: 10, y: 20 }}
		shadow={{
			camera: { top: 10 }
		}}
	/>

	<Threlte.Mesh
		geometry={new Three.SphereGeometry(4, 64, 64)}
		material={new Three.MeshStandardMaterial({
			color: 'red'
		})}
		castShadow
	/>

	<Threlte.Mesh
		geometry={new Three.PlaneGeometry(20, 20)}
		material={new Three.MeshStandardMaterial({
			color: 'white',
			side: Three.DoubleSide
		})}
		rotation={{ x: Utils.DEG2RAD * 90 }}
		position={{ y: -4 }}
		receiveShadow
	/>
</Threlte.Canvas>
