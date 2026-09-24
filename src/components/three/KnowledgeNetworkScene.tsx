import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface NodeData {
  position: THREE.Vector3
  originalPosition: THREE.Vector3
  velocity: THREE.Vector3
  label?: string
  radius: number
  color: THREE.Color
  pulsePhase: number
}

export const KnowledgeNetworkScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Accessibility check: reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Detect device scale & performance tier
    const isMobile = window.innerWidth < 768
    const nodeCount = isMobile ? 42 : prefersReducedMotion ? 40 : 110
    const connectionDistance = isMobile ? 45 : 65

    // Three.js Scene, Camera, Renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 180

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    // Palette: Electric Violet, Deep Indigo, Subtle Ice Cyan
    const violet = new THREE.Color('#8B5CF6')
    const lightViolet = new THREE.Color('#C4B5FD')
    const cyan = new THREE.Color('#38BDF8')
    const subtleNode = new THREE.Color('#6366F1')

    // Create Nodes
    const nodes: NodeData[] = []
    const spreadX = isMobile ? 120 : 240
    const spreadY = isMobile ? 90 : 140
    const spreadZ = 70

    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * spreadX
      const y = (Math.random() - 0.5) * spreadY
      const z = (Math.random() - 0.5) * spreadZ

      const pos = new THREE.Vector3(x, y, z)
      const colorPick = Math.random()
      const color = colorPick > 0.7 ? violet : colorPick > 0.4 ? cyan : colorPick > 0.15 ? subtleNode : lightViolet

      nodes.push({
        position: pos.clone(),
        originalPosition: pos.clone(),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * (prefersReducedMotion ? 0.02 : 0.12),
          (Math.random() - 0.5) * (prefersReducedMotion ? 0.02 : 0.12),
          (Math.random() - 0.5) * (prefersReducedMotion ? 0.01 : 0.08)
        ),
        radius: Math.random() * 1.5 + 1.2,
        color,
        pulsePhase: Math.random() * Math.PI * 2,
      })
    }

    // Geometry for Nodes (Points)
    const pointsGeometry = new THREE.BufferGeometry()
    const positions = new Float32Array(nodeCount * 3)
    const colors = new Float32Array(nodeCount * 3)
    const sizes = new Float32Array(nodeCount)

    nodes.forEach((node, i) => {
      positions[i * 3] = node.position.x
      positions[i * 3 + 1] = node.position.y
      positions[i * 3 + 2] = node.position.z

      colors[i * 3] = node.color.r
      colors[i * 3 + 1] = node.color.g
      colors[i * 3 + 2] = node.color.b

      sizes[i] = node.radius * 2.8
    })

    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    pointsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    // Node Canvas Texture for delicate soft glow dots
    const canvas = document.createElement('canvas')
    canvas.width = 64
    canvas.height = 64
    const ctx = canvas.getContext('2d')
    if (ctx) {
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
      gradient.addColorStop(0.3, 'rgba(216, 180, 254, 0.85)')
      gradient.addColorStop(0.6, 'rgba(139, 92, 246, 0.4)')
      gradient.addColorStop(1, 'rgba(139, 92, 246, 0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, 64, 64)
    }
    const texture = new THREE.CanvasTexture(canvas)

    const pointsMaterial = new THREE.PointsMaterial({
      size: isMobile ? 8 : 12,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      depthWrite: false,
    })

    const pointCloud = new THREE.Points(pointsGeometry, pointsMaterial)
    scene.add(pointCloud)

    // Geometry for dynamic lines (connections)
    const maxLines = (nodeCount * (nodeCount - 1)) / 2
    const linePositions = new Float32Array(maxLines * 6)
    const lineColors = new Float32Array(maxLines * 6)

    const linesGeometry = new THREE.BufferGeometry()
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    linesGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3))

    const linesMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      linewidth: 1,
    })

    const lineSegments = new THREE.LineSegments(linesGeometry, linesMaterial)
    scene.add(lineSegments)

    // Mouse Interaction
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      worldX: 0,
      worldY: 0,
    }

    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1)

      mouse.targetX = nx
      mouse.targetY = ny

      // Unproject to world coordinate plane
      mouse.worldX = nx * (spreadX * 0.45)
      mouse.worldY = ny * (spreadY * 0.45)
    }

    window.addEventListener('mousemove', onPointerMove, { passive: true })

    // Responsive Resize
    const handleResize = () => {
      if (!container) return
      const width = container.clientWidth
      const height = container.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    // Pause when out of viewport for peak performance
    let isVisible = true
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting
      },
      { threshold: 0.1 }
    )
    observer.observe(container)

    // Animation Loop
    let animationFrameId: number
    let clock = new THREE.Clock()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      if (!isVisible) return

      const delta = clock.getDelta()
      const time = clock.getElapsedTime()

      // Smooth mouse lerping
      mouse.x += (mouse.targetX - mouse.x) * 0.05
      mouse.y += (mouse.targetY - mouse.y) * 0.05

      // Gentle camera parallax
      camera.position.x = mouse.x * 12
      camera.position.y = mouse.y * 10
      camera.lookAt(0, 0, 0)

      const posAttr = pointsGeometry.attributes.position as THREE.BufferAttribute
      const colAttr = pointsGeometry.attributes.color as THREE.BufferAttribute
      const linePosAttr = linesGeometry.attributes.position as THREE.BufferAttribute
      const lineColAttr = linesGeometry.attributes.color as THREE.BufferAttribute

      let lineVertexIndex = 0
      let lineCount = 0

      // Update node positions and calculate network connections
      for (let i = 0; i < nodeCount; i++) {
        const node = nodes[i]

        // Gentle drift
        node.position.x += node.velocity.x
        node.position.y += node.velocity.y
        node.position.z += node.velocity.z

        // Bounds bounce back
        if (Math.abs(node.position.x) > spreadX * 0.55) node.velocity.x *= -1
        if (Math.abs(node.position.y) > spreadY * 0.55) node.velocity.y *= -1
        if (Math.abs(node.position.z) > spreadZ * 0.55) node.velocity.z *= -1

        // Mouse proximity reaction: delicate gentle attraction / repulsion
        const dx = mouse.worldX - node.position.x
        const dy = mouse.worldY - node.position.y
        const distToCursor = Math.sqrt(dx * dx + dy * dy)
        const interactionRadius = 55

        if (distToCursor < interactionRadius && !isMobile) {
          const force = (1 - distToCursor / interactionRadius) * 0.6
          node.position.x += (dx / distToCursor) * force
          node.position.y += (dy / distToCursor) * force
        }

        // Pulse size / brightness
        node.pulsePhase += delta * 1.5
        const pulse = Math.sin(node.pulsePhase) * 0.2 + 0.9

        posAttr.setXYZ(i, node.position.x, node.position.y, node.position.z)

        // Brighten nodes close to mouse
        const isHovered = distToCursor < interactionRadius && !isMobile
        const brightness = isHovered ? 1.6 : pulse
        colAttr.setXYZ(
          i,
          Math.min(1, node.color.r * brightness),
          Math.min(1, node.color.g * brightness),
          Math.min(1, node.color.b * brightness)
        )

        // Find connections to neighboring nodes
        for (let j = i + 1; j < nodeCount; j++) {
          const otherNode = nodes[j]
          const distSq = node.position.distanceToSquared(otherNode.position)
          const maxDistSq = connectionDistance * connectionDistance

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq)
            const alpha = 1 - dist / connectionDistance

            // Extra brightness if near cursor
            const midX = (node.position.x + otherNode.position.x) / 2
            const midY = (node.position.y + otherNode.position.y) / 2
            const midCursorDist = Math.sqrt((mouse.worldX - midX) ** 2 + (mouse.worldY - midY) ** 2)
            const cursorBoost = midCursorDist < 60 ? (1 - midCursorDist / 60) * 0.6 : 0
            const finalAlpha = Math.min(0.85, (alpha * 0.35 + cursorBoost) * 0.75)

            // Line segment vertices
            linePosAttr.setXYZ(lineVertexIndex, node.position.x, node.position.y, node.position.z)
            lineColAttr.setXYZ(
              lineVertexIndex,
              node.color.r * finalAlpha,
              node.color.g * finalAlpha,
              node.color.b * finalAlpha
            )
            lineVertexIndex++

            linePosAttr.setXYZ(lineVertexIndex, otherNode.position.x, otherNode.position.y, otherNode.position.z)
            lineColAttr.setXYZ(
              lineVertexIndex,
              otherNode.color.r * finalAlpha,
              otherNode.color.g * finalAlpha,
              otherNode.color.b * finalAlpha
            )
            lineVertexIndex++

            lineCount++
          }
        }
      }

      posAttr.needsUpdate = true
      colAttr.needsUpdate = true
      linePosAttr.needsUpdate = true
      lineColAttr.needsUpdate = true

      linesGeometry.setDrawRange(0, lineCount * 2)

      // Very subtle global rotation for depth
      scene.rotation.y = time * 0.02
      scene.rotation.x = Math.sin(time * 0.015) * 0.04

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', onPointerMove)
      window.removeEventListener('resize', handleResize)
      observer.disconnect()

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }

      pointsGeometry.dispose()
      pointsMaterial.dispose()
      linesGeometry.dispose()
      linesMaterial.dispose()
      texture.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-auto overflow-hidden opacity-90 transition-opacity duration-1000"
      aria-hidden="true"
    />
  )
}
