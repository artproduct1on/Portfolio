
document.addEventListener("DOMContentLoaded", () => {
	// imports
	const 	loading = document.querySelector(".loading"),
			loadingTitle = document.querySelector(".loading_title"),
			navUl = document.querySelector(".nav_ul"),
			navProgress = document.querySelector(".nav_progress");
	// values
	let 	model,
			load,
			innerH = window.innerHeight,
			innerW = window.innerWidth,
			docHeight = document.documentElement.scrollHeight - innerH,
			pX = 0,
			pY = 1.4,
			pZ = -1.1,
			centerY = innerH / 2,
			centerX = window.innerWidth / 2,
			mouseX = 0, 
			mouseY = 0;
	// scene
    const 	scene = new THREE.Scene(),
    	 	camera = new THREE.PerspectiveCamera( 100, innerW / innerH, 0.1, 1000 ),
			renderer = new THREE.WebGLRenderer();

	camera.position.set(pX, pY, pZ);
    renderer.setSize( innerW, innerH );

    document.body.appendChild( renderer.domElement );
	// light
	const 	ambientLight = new THREE.AmbientLight("#ffffff", .7),
			directionalLight = new THREE.DirectionalLight("gray", 10),
			pointLight1 = new THREE.PointLight("blue", 1, 1000),
			pointLight2 = new THREE.PointLight("yellow", 1, 1000);

	directionalLight.position.set(5, 10, 7.5);
	pointLight1.position.set(-3, 3, 3);
	pointLight2.position.set(-3, 2, 3);
	// light_add
	scene.add(ambientLight, directionalLight, pointLight1, pointLight2);

	// var
	const 	loader = new THREE.GLTFLoader(),
			modelUrl = './assets/model.glb';

	// remove_progress
	const endLoading = () => {
		loading.remove();
		document.body.style.overflowY = "auto";
		window.scrollTo(0, 0);
	};

	// model
	loader.load( 
		modelUrl, 
		( gltf ) => {
			model = gltf.scene
			const 	box = new THREE.Box3().setFromObject(model),
			 		size = new THREE.Vector3();
			model.position.set(0, 0, 0);
			box.getSize(size);
			scene.add( model );
			endLoading();
		},
		(xhr) => {
			load = Math.round(xhr.loaded / xhr.total * 100)
			loadingTitle.textContent = `Loading ${load}` 
		},
		(error) => {
			console.error(error);
		}
	);

	// animate
	const animate = () => {
		requestAnimationFrame( animate );
		renderer.render( scene, camera );
	};
	animate();

	// window_size
	window.addEventListener('resize', () => {
		innerH = window.innerHeight;
		innerW = window.innerWidth;
		//
		docHeight = document.documentElement.scrollHeight - innerH;
		//
		centerY = innerH / 2;
		centerX = innerW / 2;
		//
		camera.aspect = innerW / innerH;
		camera.updateProjectionMatrix();
		renderer.setSize(innerW, innerH);
	});

	// scroll
	const scroll = () => {
		let h = window.scrollY / docHeight;
		navProgress.style.width = h*100+"%";
		camera.position.set(pX, pY+h/4, pZ+h);
	};
	window.addEventListener("scroll", scroll);

	// mouse 
	const onMouseMove = (e) => {
		mouseX = e.clientX - centerX;
		mouseY = centerY - e.clientY; 
		if (model) {
			model.rotation.y = mouseX/8000
			model.rotation.z = mouseY/8000
		}
	};
	window.addEventListener('mousemove', onMouseMove);

	// navigation 
	navUl.addEventListener('click', (event) => {
		const target = event.target;
		if (target.classList.contains('nav_li')) {
			const 	childrenArray = Array.from(navUl.children),
					index = childrenArray.indexOf(target),
			 		scrollHeight = document.documentElement.scrollHeight;

			window.scrollTo({
                top: (scrollHeight - innerH) * (1/childrenArray.length * index),
                behavior: 'smooth'
            });
		};
	});
});


