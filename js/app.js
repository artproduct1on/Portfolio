
document.addEventListener("DOMContentLoaded", () => {
	// imports
	const 	loading = document.querySelector(".loading"),
			loadingTitle = document.querySelector(".loading_title"),
			navUl = document.querySelector(".nav_ul"),
			navProgress = document.querySelector(".nav_progress");
	// values
	let model,
		pX = 0,
		pY = 1.4,
		pZ = -1.1,
		centerY = window.innerHeight / 2,
		centerX = window.innerWidth / 2,
		mouseX = 0, 
		mouseY = 0;
	// scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
	camera.position.set(pX, pY, pZ);
	// camera.rotateY(1.57);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
	// light
	const ambientLight = new THREE.AmbientLight("wihte", .7);
	scene.add(ambientLight);

	// Додавання спрямованого світла
	const directionalLight = new THREE.DirectionalLight("gray", 10);
	directionalLight.position.set(5, 10, 7.5);
	scene.add(directionalLight);

	// Додавання точкового світла
	const pointLight1 = new THREE.PointLight("yellow", 1, 10);
	pointLight1.position.set(-3, 3, 3);
	scene.add(pointLight1);

	const pointLight2 = new THREE.PointLight("yellow", 1, 10);
	pointLight2.position.set(3, 3, 3);
	scene.add(pointLight2);
	// var
	const loader = new THREE.GLTFLoader();
	const modelUrl = './assets/model.glb';

	const endLoading = () => {
		loading.remove();
		document.body.style.overflowY = "auto";
		window.scrollTo(0, 0);
	}

	loader.load( 
		modelUrl, 
		( gltf ) => {
			model = gltf.scene
			// model config
			const box = new THREE.Box3().setFromObject(model);
			const size = new THREE.Vector3();
			model.position.set(0, 0, 0);
			box.getSize(size);

			scene.add( model );
			endLoading()
		},
		(xhr) => {
			let load = Math.round(xhr.loaded / xhr.total * 100)
			loadingTitle.textContent = `Loading ${load}` 
		},
		(error) => {
			console.error(error);
		}
	);




	function animate() {
		requestAnimationFrame( animate );
		renderer.render( scene, camera );
	}
	animate();
	// window size
	window.addEventListener('resize', () => {
		centerY = window.innerHeight / 2;
		centerX = window.innerWidth / 2;
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	});

	// scroll


	const scroll = () => {
		let docHeight = document.documentElement.scrollHeight - window.innerHeight;
		let h = window.scrollY / docHeight;
	
		navProgress.style.width = h*100+"%";
		camera.position.set(pX, pY+h/4, pZ+h);

	};

	window.addEventListener("scroll", () => {
		scroll();
	});







	navUl.addEventListener('click', (event) => {
		const target = event.target;
		if (target.classList.contains('nav_li')) {
			const childrenArray = Array.from(navUl.children);
			const index = childrenArray.indexOf(target);
			const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = window.innerHeight;

			window.scrollTo({
                top: (scrollHeight - clientHeight) * (1/childrenArray.length * index),
                behavior: 'smooth'
            });
		};
	});

	function onMouseMove(event) {
		mouseX = event.clientX - centerX;
		mouseY = centerY - event.clientY; 
		model.rotation.y = mouseX/8000
		model.rotation.z = mouseY/8000
	}

	window.addEventListener('mousemove', onMouseMove, false);

});


