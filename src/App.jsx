import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import FadeAnimation from './pages/animations/FadeAnimation'
import SlideAnimation from './pages/animations/SlideAnimation'
import RotateAnimation from './pages/animations/RotateAnimation'
import ScaleAnimation from './pages/animations/ScaleAnimation'
import BounceAnimation from './pages/animations/BounceAnimation'
import FlipAnimation from './pages/animations/FlipAnimation'
import ShakeAnimation from './pages/animations/ShakeAnimation'
import WaveAnimation from './pages/animations/WaveAnimation'
import TypewriterAnimation from './pages/animations/TypewriterAnimation'
import GlowAnimation from './pages/animations/GlowAnimation'
import LoadingAnimation from './pages/animations/LoadingAnimation'
import TextEffectsAnimation from './pages/animations/TextEffectsAnimation'
import GlitchAnimation from './pages/animations/GlitchAnimation'
import Transform3DAnimation from './pages/animations/Transform3DAnimation'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animation/fade" element={<FadeAnimation />} />
        <Route path="/animation/slide" element={<SlideAnimation />} />
        <Route path="/animation/rotate" element={<RotateAnimation />} />
        <Route path="/animation/scale" element={<ScaleAnimation />} />
        <Route path="/animation/bounce" element={<BounceAnimation />} />
        <Route path="/animation/flip" element={<FlipAnimation />} />
        <Route path="/animation/shake" element={<ShakeAnimation />} />
        <Route path="/animation/wave" element={<WaveAnimation />} />
        <Route path="/animation/typewriter" element={<TypewriterAnimation />} />
        <Route path="/animation/glow" element={<GlowAnimation />} />
        <Route path="/animation/loading" element={<LoadingAnimation />} />
        <Route path="/animation/text-effects" element={<TextEffectsAnimation />} />
        <Route path="/animation/glitch" element={<GlitchAnimation />} />
        <Route path="/animation/transform3d" element={<Transform3DAnimation />} />
      </Routes>
    </Layout>
  )
}

export default App