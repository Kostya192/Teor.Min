/* Three.js — частицы по бокам экрана */
(function () {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const wrap = document.createElement('div');
    wrap.id = 'physics-bg';
    wrap.setAttribute('aria-hidden', 'true');
    document.body.insertBefore(wrap, document.body.firstChild);

    function start() {
        if (!window.THREE) return;
        const THREE = window.THREE;

        const isMobile = window.innerWidth < 768;
        if (isMobile) {
            wrap.classList.add('physics-bg--mobile');
        }

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !isMobile });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        wrap.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 200);
        camera.position.z = 42;

        const count = isMobile ? 35 : 90;
        const spread = isMobile ? 28 : 48;
        const positions = new Float32Array(count * 3);
        const velocities = [];

        for (let i = 0; i < count; i++) {
            let x;
            do {
                x = (Math.random() - 0.5) * spread * 2;
            } while (!isMobile && Math.abs(x) < 9);

            const y = (Math.random() - 0.5) * spread * 1.4;
            const z = (Math.random() - 0.5) * 16;
            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
            velocities.push({
                x: (Math.random() - 0.5) * 0.018,
                y: (Math.random() - 0.5) * 0.018,
                z: (Math.random() - 0.5) * 0.01
            });
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const primary = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim() || '#2563eb';
        const pointsMat = new THREE.PointsMaterial({
            color: new THREE.Color(primary),
            size: isMobile ? 0.22 : 0.28,
            transparent: true,
            opacity: 0.75,
            sizeAttenuation: true
        });
        const points = new THREE.Points(geometry, pointsMat);
        scene.add(points);

        const linePositions = [];
        const maxDist = isMobile ? 5.5 : 7;
        for (let i = 0; i < count; i++) {
            for (let j = i + 1; j < count; j++) {
                const dx = positions[i * 3] - positions[j * 3];
                const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
                const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                if (dist < maxDist) {
                    linePositions.push(
                        positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
                        positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
                    );
                }
            }
        }

        const lineGeo = new THREE.BufferGeometry();
        lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
        const linesMat = new THREE.LineBasicMaterial({
            color: new THREE.Color(primary),
            transparent: true,
            opacity: 0.12
        });
        const lines = new THREE.LineSegments(lineGeo, linesMat);
        scene.add(lines);

        function resize() {
            const w = window.innerWidth;
            const h = window.innerHeight;
            renderer.setSize(w, h);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
        }
        resize();
        window.addEventListener('resize', resize);

        let frame = 0;
        function animate() {
            frame++;
            const pos = geometry.attributes.position.array;

            for (let i = 0; i < count; i++) {
                const i3 = i * 3;
                pos[i3] += velocities[i].x;
                pos[i3 + 1] += velocities[i].y;
                pos[i3 + 2] += velocities[i].z;

                if (pos[i3] > spread || pos[i3] < -spread) velocities[i].x *= -1;
                if (pos[i3 + 1] > spread * 0.75 || pos[i3 + 1] < -spread * 0.75) velocities[i].y *= -1;
                if (pos[i3 + 2] > 10 || pos[i3 + 2] < -10) velocities[i].z *= -1;
            }
            geometry.attributes.position.needsUpdate = true;
            points.rotation.y = Math.sin(frame * 0.001) * 0.08;
            lines.rotation.y = points.rotation.y;

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate();
    }

    if (window.THREE) {
        start();
    } else {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js';
        script.onload = start;
        document.head.appendChild(script);
    }
})();
