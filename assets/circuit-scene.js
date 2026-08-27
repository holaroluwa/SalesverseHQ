/**
 * SalesverseHQ Circuit S — shared 3D mark, mounted per-page with a mode:
 *   'ambient'  — Home: nodes settled on the S-curve, slow ambient drift/rotate
 *   'assemble' — Kit: nodes start scattered, converge onto the S-curve on scroll-into-view
 *   'flow'     — Service: nodes settled, a bright pulse travels the curve on loop
 *
 * No build step — classic (non-module) Three.js from CDN, one global THREE.
 * Falls back to a flat logo image on: no WebGL, no THREE, or prefers-reduced-motion.
 */
(function () {
  "use strict";

  var ELECTRIC_BLUE = 0x4a9eff;
  var NODE_COUNT = 42;

  function showStaticFallback(canvasEl) {
    var img = document.createElement("img");
    img.src = "images/saleverse-icon-transparent-512.png";
    img.alt = "";
    img.className = "circuit-fallback-img";
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "contain";
    img.style.opacity = "0.85";
    if (canvasEl.parentNode) canvasEl.parentNode.replaceChild(img, canvasEl);
  }

  function buildSCurve() {
    // A loose, dimensional S-curve through 3D space (not a literal letterform —
    // an abstract circuit path that reads as "S" from the front).
    var pts = [
      [0.55, 0.85, -0.2], [0.15, 0.7, 0.15], [-0.4, 0.55, -0.1],
      [-0.55, 0.2, 0.2], [-0.15, 0.0, -0.15], [0.4, -0.05, 0.1],
      [0.55, -0.35, -0.1], [0.15, -0.55, 0.2], [-0.4, -0.7, -0.15],
      [-0.55, -0.85, 0.1],
    ];
    var vecs = pts.map(function (p) {
      return new THREE.Vector3(p[0], p[1], p[2]);
    });
    return new THREE.CatmullRomCurve3(vecs, false, "catmullrom", 0.5);
  }

  function initCircuitScene(canvasEl, opts) {
    opts = opts || {};
    var mode = opts.mode || "ambient";

    var reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      showStaticFallback(canvasEl);
      return;
    }
    if (typeof THREE === "undefined") {
      showStaticFallback(canvasEl);
      return;
    }

    var renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas: canvasEl,
        antialias: true,
        alpha: true,
      });
    } catch (e) {
      showStaticFallback(canvasEl);
      return;
    }
    if (!renderer.getContext()) {
      showStaticFallback(canvasEl);
      return;
    }

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(38, 1, 0.1, 10);
    camera.position.set(0, 0, 3.4);

    function resize() {
      var w = canvasEl.clientWidth || canvasEl.parentNode.clientWidth;
      var h = canvasEl.clientHeight || w;
      renderer.setSize(w, h, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }

    var group = new THREE.Group();
    scene.add(group);

    var curve = buildSCurve();
    var settledPositions = curve.getSpacedPoints(NODE_COUNT - 1);

    var nodeGeo = new THREE.SphereGeometry(0.02, 10, 10);
    var nodeMat = new THREE.MeshBasicMaterial({ color: ELECTRIC_BLUE });
    var nodes = [];
    var scatterRadius = 1.4;

    for (var i = 0; i < NODE_COUNT; i++) {
      var mesh = new THREE.Mesh(nodeGeo, nodeMat);
      var settled = settledPositions[i];
      var scattered = new THREE.Vector3(
        (Math.random() - 0.5) * scatterRadius * 2,
        (Math.random() - 0.5) * scatterRadius * 2,
        (Math.random() - 0.5) * scatterRadius * 2
      );
      var startAt = mode === "assemble" ? scattered : settled;
      mesh.position.copy(startAt);
      mesh.userData.settled = settled;
      mesh.userData.scattered = scattered;
      group.add(mesh);
      nodes.push(mesh);
    }

    // Connecting line along the settled S-curve — always present, faint.
    var linePts = curve.getPoints(80);
    var lineGeo = new THREE.BufferGeometry().setFromPoints(linePts);
    var lineMat = new THREE.LineBasicMaterial({
      color: ELECTRIC_BLUE,
      transparent: true,
      opacity: 0.28,
    });
    var lineObj = new THREE.Line(lineGeo, lineMat);
    group.add(lineObj);
    if (mode === "assemble") lineObj.visible = false; // line reveals once assembled

    // Flow pulse — a single brighter point traveling the curve, 'flow' mode only.
    var pulse = null;
    if (mode === "flow") {
      var pulseGeo = new THREE.SphereGeometry(0.045, 12, 12);
      var pulseMat = new THREE.MeshBasicMaterial({
        color: 0x9fcaff,
        transparent: true,
        opacity: 0.95,
      });
      pulse = new THREE.Mesh(pulseGeo, pulseMat);
      group.add(pulse);
    }

    // Assemble trigger — starts once the canvas scrolls into view.
    var assembleStart = null;
    var ASSEMBLE_DURATION = 1.6; // seconds
    if (mode === "assemble" && "IntersectionObserver" in window) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting && assembleStart === null) {
              assembleStart = performance.now() / 1000;
            }
          });
        },
        { threshold: 0.35 }
      );
      io.observe(canvasEl);
    } else if (mode === "assemble") {
      assembleStart = 0; // no IO support — assemble immediately
    }

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    var clock = new THREE.Clock();
    var raf;

    function animate() {
      raf = requestAnimationFrame(animate);
      var t = clock.getElapsedTime();

      // Ambient continuous motion — always on, restrained pace (per revised
      // motion language: not scroll-tied, a slow constant drift).
      group.rotation.y = t * 0.12;
      group.rotation.x = Math.sin(t * 0.08) * 0.08;

      if (mode === "assemble") {
        if (assembleStart !== null) {
          var elapsed = performance.now() / 1000 - assembleStart;
          var progress = Math.min(elapsed / ASSEMBLE_DURATION, 1);
          var eased = easeOutCubic(progress);
          nodes.forEach(function (n) {
            n.position.lerpVectors(
              n.userData.scattered,
              n.userData.settled,
              eased
            );
          });
          if (progress >= 1) lineObj.visible = true;
        }
      }

      if (mode === "flow" && pulse) {
        var loopT = (t * 0.12) % 1;
        var p = curve.getPointAt(loopT);
        pulse.position.copy(p);
        var pulseScale = 1 + Math.sin(t * 6) * 0.15;
        pulse.scale.setScalar(pulseScale);
      }

      renderer.render(scene, camera);
    }

    resize();
    window.addEventListener("resize", resize);
    animate();

    canvasEl._circuitSceneCleanup = function () {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      renderer.dispose();
    };
  }

  window.SalesverseCircuitScene = { init: initCircuitScene };
})();
