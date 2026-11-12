import * as THREE from 'three';

export interface Aether3DController {
  dispose: () => void;
  resize: () => void;
  setPaused: (paused: boolean) => void;
}

/**
 * Initializes the interactive Three.js 3D Quantum Data Core for AetherPro
 */
export function initAether3D(canvas: HTMLCanvasElement): Aether3DController {
  // Software WebGL detection guard per Three.js skill guidelines
  const isSoftwareGl = (() => {
    const gl = document.createElement('canvas').getContext('webgl2');
    if (!gl) return true;
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
    const gpu = String(gl.getParameter(param));
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
  })();

  const width = canvas.clientWidth || 460;
  const height = canvas.clientHeight || 520;

  // Scene & Camera
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
  camera.position.set(0, 0, 5.7);

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: !isSoftwareGl,
    powerPreference: 'high-performance',
  });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
  renderer.setSize(width, height, false);

  // Lighting Rig (Key Light + Fill Light + Internal Core Glow)
  const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
  keyLight.position.set(4, 5, 4);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0x38bdf8, 1.4);
  fillLight.position.set(-4, -2, -3);
  scene.add(fillLight);

  const ambientLight = new THREE.AmbientLight(0xdbeafe, 0.65);
  scene.add(ambientLight);

  const corePointLight = new THREE.PointLight(0x00e5ff, 2.5, 8);
  scene.add(corePointLight);

  // Root Composite 3D Group
  const aetherGroup = new THREE.Group();
  scene.add(aetherGroup);

  // 1. Central Faceted Quantum Core
  const coreGeo = new THREE.IcosahedronGeometry(1.15, 0);
  const coreMat = new THREE.MeshPhysicalMaterial({
    color: 0x1169dc,
    emissive: 0x0284c7,
    emissiveIntensity: 0.35,
    roughness: 0.15,
    metalness: 0.85,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    flatShading: true,
  });
  const coreMesh = new THREE.Mesh(coreGeo, coreMat);
  aetherGroup.add(coreMesh);

  // Wireframe holographic lattice around core
  const wireGeo = new THREE.IcosahedronGeometry(1.35, 1);
  const wireMat = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
    wireframe: true,
    transparent: true,
    opacity: 0.35,
  });
  const wireMesh = new THREE.Mesh(wireGeo, wireMat);
  aetherGroup.add(wireMesh);

  // 2. Three Concentric Gimbal Data Rings (Torus)
  const ringMaterials = [
    new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.9, roughness: 0.2 }),
    new THREE.MeshStandardMaterial({ color: 0x00e5ff, metalness: 0.8, roughness: 0.25 }),
    new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.92, roughness: 0.18 }), // Gold VIP accent
  ];

  const ringGroup1 = new THREE.Group();
  const ring1 = new THREE.Mesh(new THREE.TorusGeometry(1.85, 0.035, 16, 80), ringMaterials[0]);
  ringGroup1.add(ring1);
  aetherGroup.add(ringGroup1);

  const ringGroup2 = new THREE.Group();
  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.25, 0.032, 16, 90), ringMaterials[1]);
  ringGroup2.add(ring2);
  aetherGroup.add(ringGroup2);

  const ringGroup3 = new THREE.Group();
  const ring3 = new THREE.Mesh(new THREE.TorusGeometry(2.68, 0.03, 16, 100), ringMaterials[2]);
  ringGroup3.add(ring3);
  aetherGroup.add(ringGroup3);

  // Add small orbiting data ticker beads along each ring
  const beadGeo = new THREE.SphereGeometry(0.065, 12, 12);
  const beadMatCyan = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
  const beadMatGold = new THREE.MeshBasicMaterial({ color: 0xfbbf24 });

  for (let i = 0; i < 4; i++) {
    const angle = (i / 4) * Math.PI * 2;
    const b1 = new THREE.Mesh(beadGeo, beadMatCyan);
    b1.position.set(Math.cos(angle) * 1.85, Math.sin(angle) * 1.85, 0);
    ringGroup1.add(b1);

    const b2 = new THREE.Mesh(beadGeo, beadMatCyan);
    b2.position.set(Math.cos(angle + 0.4) * 2.25, Math.sin(angle + 0.4) * 2.25, 0);
    ringGroup2.add(b2);

    const b3 = new THREE.Mesh(beadGeo, beadMatGold);
    b3.position.set(Math.cos(angle + 0.8) * 2.68, Math.sin(angle + 0.8) * 2.68, 0);
    ringGroup3.add(b3);
  }

  // 3. Floating 3D Financial Candlestick Bars
  const candlesGroup = new THREE.Group();
  aetherGroup.add(candlesGroup);

  const candleCount = 12;
  const candleGreenMat = new THREE.MeshStandardMaterial({
    color: 0x10b981,
    emissive: 0x059669,
    emissiveIntensity: 0.3,
    roughness: 0.25,
    metalness: 0.4,
  });
  const candleRedMat = new THREE.MeshStandardMaterial({
    color: 0xef4444,
    emissive: 0xdc2626,
    emissiveIntensity: 0.3,
    roughness: 0.25,
    metalness: 0.4,
  });

  const candleWickMat = new THREE.LineBasicMaterial({ color: 0x94a3b8 });

  for (let i = 0; i < candleCount; i++) {
    const angle = (i / candleCount) * Math.PI * 2;
    const rad = 2.05 + (i % 3) * 0.25;
    const isBull = i % 2 === 0;
    const h = 0.35 + (i % 4) * 0.12;

    const bodyMesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.12, h, 0.12),
      isBull ? candleGreenMat : candleRedMat
    );

    const x = Math.cos(angle) * rad;
    const z = Math.sin(angle) * rad;
    const y = ((i % 5) - 2) * 0.32;
    bodyMesh.position.set(x, y, z);
    bodyMesh.rotation.y = angle;

    // Wick line
    const points = [
      new THREE.Vector3(x, y - h * 0.75, z),
      new THREE.Vector3(x, y + h * 0.75, z)
    ];
    const wickGeo = new THREE.BufferGeometry().setFromPoints(points);
    const wickLine = new THREE.Line(wickGeo, candleWickMat);

    candlesGroup.add(bodyMesh);
    candlesGroup.add(wickLine);
  }

  // 4. Quantum Data Particle Swarm (Cloud of points)
  const particleCount = 160;
  const particlePositions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    const r = 1.4 + Math.random() * 1.8;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    particlePositions[i * 3 + 2] = r * Math.cos(phi);
  }
  const particleGeo = new THREE.BufferGeometry();
  particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
  const particleMat = new THREE.PointsMaterial({
    color: 0x38bdf8,
    size: 0.055,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending,
  });
  const particleCloud = new THREE.Points(particleGeo, particleMat);
  aetherGroup.add(particleCloud);

  // Contact shadow radial plane beneath core
  const shadowCanvas = document.createElement('canvas');
  shadowCanvas.width = 128;
  shadowCanvas.height = 128;
  const sCtx = shadowCanvas.getContext('2d');
  if (sCtx) {
    const grad = sCtx.createRadialGradient(64, 64, 0, 64, 64, 64);
    grad.addColorStop(0, 'rgba(17, 105, 220, 0.45)');
    grad.addColorStop(0.5, 'rgba(17, 105, 220, 0.15)');
    grad.addColorStop(1, 'rgba(17, 105, 220, 0)');
    sCtx.fillStyle = grad;
    sCtx.fillRect(0, 0, 128, 128);
  }
  const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
  const shadowMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(5.8, 5.8),
    new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      depthWrite: false,
      opacity: 0.62,
    })
  );
  shadowMesh.rotation.x = -Math.PI / 2;
  shadowMesh.position.y = -2.6;
  scene.add(shadowMesh);

  // Mouse drag & tilt interaction
  let isDragging = false;
  let prevMouseX = 0;
  let prevMouseY = 0;
  let targetRotY = 0;
  let targetRotX = 0;
  let currentRotY = 0;
  let currentRotX = 0;
  let isPaused = false;

  const onPointerDown = (e: PointerEvent) => {
    isDragging = true;
    prevMouseX = e.clientX;
    prevMouseY = e.clientY;
    try { canvas.setPointerCapture(e.pointerId); } catch {}
  };

  const onPointerMove = (e: PointerEvent) => {
    if (isDragging) {
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      targetRotY += deltaX * 0.01;
      targetRotX += deltaY * 0.01;
      targetRotX = Math.max(-0.6, Math.min(0.6, targetRotX));
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    } else {
      // Subtle parallax hover tilt
      const rect = canvas.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotY = nx * 0.4;
      targetRotX = -ny * 0.3;
    }
  };

  const onPointerUp = (e: PointerEvent) => {
    isDragging = false;
    try { canvas.releasePointerCapture(e.pointerId); } catch {}
  };

  canvas.addEventListener('pointerdown', onPointerDown);
  canvas.addEventListener('pointermove', onPointerMove);
  canvas.addEventListener('pointerup', onPointerUp);
  canvas.addEventListener('pointercancel', onPointerUp);

  // Resize handler
  const handleResize = () => {
    const w = canvas.clientWidth || 460;
    const h = canvas.clientHeight || 520;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
  };
  window.addEventListener('resize', handleResize);

  // Animation Loop with Three.js Clock
  const clock = new THREE.Clock();
  let frameId = 0;

  const animate = () => {
    frameId = requestAnimationFrame(animate);
    if (isPaused) return;

    const delta = clock.getDelta();
    const time = clock.getElapsedTime();

    // Smooth rotational damping toward target
    currentRotX = THREE.MathUtils.damp(currentRotX, targetRotX, 4.0, delta);
    currentRotY = THREE.MathUtils.damp(currentRotY, targetRotY, 4.0, delta);

    aetherGroup.rotation.x = currentRotX + Math.sin(time * 0.5) * 0.05;
    aetherGroup.rotation.y = currentRotY + time * 0.25;

    // Harmonic rotation of concentric data rings
    ringGroup1.rotation.x = time * 0.8;
    ringGroup1.rotation.y = time * 0.5;

    ringGroup2.rotation.y = time * -0.7;
    ringGroup2.rotation.z = time * 0.6;

    ringGroup3.rotation.z = time * 0.9;
    ringGroup3.rotation.x = time * -0.4;

    // Core facet pulse & wireframe breathing
    const scale = 1.0 + Math.sin(time * 2.5) * 0.04;
    coreMesh.scale.set(scale, scale, scale);
    wireMesh.scale.set(scale * 1.02, scale * 1.02, scale * 1.02);
    corePointLight.intensity = 2.2 + Math.sin(time * 3.0) * 0.8;

    // Orbiting candlesticks undulating floating
    candlesGroup.children.forEach((child, idx) => {
      if (child instanceof THREE.Mesh) {
        child.position.y += Math.sin(time * 2.0 + idx) * 0.0015;
      }
    });

    // Particle cloud slow counter-rotation
    particleCloud.rotation.y = time * -0.15;

    renderer.render(scene, camera);
  };

  animate();

  return {
    dispose: () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerup', onPointerUp);
      canvas.removeEventListener('pointercancel', onPointerUp);

      coreGeo.dispose();
      coreMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ringMaterials.forEach(m => m.dispose());
      beadGeo.dispose();
      beadMatCyan.dispose();
      beadMatGold.dispose();
      candleGreenMat.dispose();
      candleRedMat.dispose();
      candleWickMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      shadowTexture.dispose();
      renderer.dispose();
    },
    resize: handleResize,
    setPaused: (paused: boolean) => {
      isPaused = paused;
    }
  };
}
