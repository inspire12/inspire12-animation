import React, { useState, useEffect, useRef } from 'react'
import './AnimationPage.css'

const ParallaxAnimation = () => {
  const [scrollY, setScrollY] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)))
        setScrollY(scrollProgress * 100)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // 초기 실행

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="animation-page">
      <div className="page-header">
        <h1>Parallax Animation</h1>
        <p>스크롤 기반 시차 효과와 깊이감 애니메이션입니다.</p>
      </div>

      <div className="demo-section">
        <h2>Interactive Demo</h2>
        <div className="demo-controls">
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
            페이지를 스크롤하여 패럴랙스 효과를 확인하세요
          </p>
        </div>
        
        <div 
          ref={containerRef}
          className="parallax-demo"
          style={{ height: '300px', position: 'relative', overflow: 'hidden' }}
        >
          <div 
            className="parallax-layer parallax-bg"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          >
            Background
          </div>
          <div 
            className="parallax-layer parallax-mid"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          >
            Middle
          </div>
          <div 
            className="parallax-layer parallax-front"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            Foreground
          </div>
        </div>
      </div>

      <div className="examples-section">
        <h2>Different Parallax Effects</h2>
        <div className="examples-grid">
          <div className="example-item">
            <h3>Layered Clouds</h3>
            <div className="parallax-example clouds-parallax">
              <div className="cloud cloud-1">☁️</div>
              <div className="cloud cloud-2">☁️</div>
              <div className="cloud cloud-3">☁️</div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Mountain Layers</h3>
            <div className="parallax-example mountain-parallax">
              <div className="mountain mountain-1">🏔️</div>
              <div className="mountain mountain-2">⛰️</div>
              <div className="mountain mountain-3">🗻</div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Space Depth</h3>
            <div className="parallax-example space-parallax">
              <div className="star star-1">⭐</div>
              <div className="star star-2">✨</div>
              <div className="star star-3">💫</div>
              <div className="planet">🪐</div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Ocean Waves</h3>
            <div className="parallax-example ocean-parallax">
              <div className="wave wave-1">🌊</div>
              <div className="wave wave-2">🌊</div>
              <div className="wave wave-3">🌊</div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Forest Depth</h3>
            <div className="parallax-example forest-parallax">
              <div className="tree tree-1">🌲</div>
              <div className="tree tree-2">🌳</div>
              <div className="tree tree-3">🌲</div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>City Skyline</h3>
            <div className="parallax-example city-parallax">
              <div className="building building-1">🏢</div>
              <div className="building building-2">🏬</div>
              <div className="building building-3">🏦</div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Floating Cards</h3>
            <div className="parallax-example cards-parallax">
              <div className="card card-1">1</div>
              <div className="card card-2">2</div>
              <div className="card card-3">3</div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Depth Layers</h3>
            <div className="parallax-example depth-parallax">
              <div className="layer layer-1"></div>
              <div className="layer layer-2"></div>
              <div className="layer layer-3"></div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Text Depth</h3>
            <div className="parallax-example text-parallax">
              <div className="text text-1">BACK</div>
              <div className="text text-2">MID</div>
              <div className="text text-3">FRONT</div>
            </div>
          </div>
        </div>
      </div>

      <div className="spacer" style={{ height: '100vh', background: 'linear-gradient(180deg, #1a1a2e, #16213e)' }}>
        <div style={{ padding: '50px', textAlign: 'center' }}>
          <h2 style={{ color: 'white' }}>Scroll to see parallax effects above!</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)' }}>This extra space helps demonstrate the scroll-based parallax animations.</p>
        </div>
      </div>

      <div className="code-section">
        <h2>CSS Code</h2>
        <pre className="code-block">
{`/* Parallax Demo */
.parallax-demo {
  position: relative;
  height: 300px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 12px;
  overflow: hidden;
}

.parallax-layer {
  position: absolute;
  width: 100%;
  height: 120%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  font-size: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.parallax-bg {
  background: rgba(255, 107, 107, 0.3);
  z-index: 1;
}

.parallax-mid {
  background: rgba(78, 205, 196, 0.3);
  z-index: 2;
}

.parallax-front {
  background: rgba(69, 183, 209, 0.3);
  z-index: 3;
}

/* Parallax Examples */
.parallax-example {
  position: relative;
  height: 80px;
  background: linear-gradient(135deg, #74b9ff, #0984e3);
  border-radius: 8px;
  overflow: hidden;
}

/* Clouds Parallax */
.clouds-parallax {
  background: linear-gradient(135deg, #87ceeb, #4682b4);
}

.cloud {
  position: absolute;
  font-size: 1.2rem;
  animation: cloudFloat ease-in-out infinite;
}

.cloud-1 {
  top: 20%;
  left: 10%;
  animation-duration: 4s;
  animation-delay: 0s;
}

.cloud-2 {
  top: 50%;
  left: 50%;
  animation-duration: 6s;
  animation-delay: 1s;
  font-size: 1rem;
  opacity: 0.7;
}

.cloud-3 {
  top: 30%;
  left: 80%;
  animation-duration: 5s;
  animation-delay: 2s;
  font-size: 0.8rem;
  opacity: 0.5;
}

/* Mountain Parallax */
.mountain-parallax {
  background: linear-gradient(135deg, #6c5ce7, #a29bfe);
}

.mountain {
  position: absolute;
  bottom: 0;
  font-size: 1.5rem;
  animation: mountainSway ease-in-out infinite;
}

.mountain-1 {
  left: 10%;
  animation-duration: 6s;
  z-index: 3;
}

.mountain-2 {
  left: 40%;
  animation-duration: 8s;
  animation-delay: 1s;
  opacity: 0.8;
  z-index: 2;
}

.mountain-3 {
  left: 70%;
  animation-duration: 10s;
  animation-delay: 2s;
  opacity: 0.6;
  z-index: 1;
}

/* Space Parallax */
.space-parallax {
  background: linear-gradient(135deg, #2c3e50, #34495e);
}

.star {
  position: absolute;
  animation: starTwinkle ease-in-out infinite;
}

.star-1 {
  top: 20%;
  left: 20%;
  animation-duration: 2s;
}

.star-2 {
  top: 60%;
  left: 70%;
  animation-duration: 3s;
  animation-delay: 1s;
}

.star-3 {
  top: 40%;
  left: 85%;
  animation-duration: 4s;
  animation-delay: 2s;
}

.planet {
  position: absolute;
  top: 30%;
  left: 50%;
  font-size: 2rem;
  animation: planetOrbit 8s linear infinite;
}

/* Ocean Parallax */
.ocean-parallax {
  background: linear-gradient(135deg, #00b4db, #0083b0);
}

.wave {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  animation: waveMotion ease-in-out infinite;
}

.wave-1 {
  animation-duration: 3s;
  z-index: 3;
}

.wave-2 {
  animation-duration: 4s;
  animation-delay: 1s;
  opacity: 0.7;
  z-index: 2;
}

.wave-3 {
  animation-duration: 5s;
  animation-delay: 2s;
  opacity: 0.5;
  z-index: 1;
}

/* Forest Parallax */
.forest-parallax {
  background: linear-gradient(135deg, #56ab2f, #a8e6cf);
}

.tree {
  position: absolute;
  bottom: 0;
  animation: treeSwing ease-in-out infinite;
}

.tree-1 {
  left: 15%;
  animation-duration: 4s;
  z-index: 3;
}

.tree-2 {
  left: 50%;
  animation-duration: 6s;
  animation-delay: 1s;
  opacity: 0.8;
  z-index: 2;
}

.tree-3 {
  left: 80%;
  animation-duration: 5s;
  animation-delay: 2s;
  opacity: 0.6;
  z-index: 1;
}

/* City Parallax */
.city-parallax {
  background: linear-gradient(135deg, #4b79a1, #283e51);
}

.building {
  position: absolute;
  bottom: 0;
  animation: buildingGlow ease-in-out infinite;
}

.building-1 {
  left: 20%;
  animation-duration: 3s;
  z-index: 3;
}

.building-2 {
  left: 50%;
  animation-duration: 4s;
  animation-delay: 1s;
  opacity: 0.8;
  z-index: 2;
}

.building-3 {
  left: 80%;
  animation-duration: 5s;
  animation-delay: 2s;
  opacity: 0.6;
  z-index: 1;
}

/* Cards Parallax */
.cards-parallax {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.card {
  position: absolute;
  width: 20px;
  height: 20px;
  background: rgba(255,255,255,0.9);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #333;
  animation: cardFloat ease-in-out infinite;
}

.card-1 {
  top: 20%;
  left: 20%;
  animation-duration: 3s;
  z-index: 3;
}

.card-2 {
  top: 50%;
  left: 50%;
  animation-duration: 4s;
  animation-delay: 1s;
  opacity: 0.8;
  z-index: 2;
}

.card-3 {
  top: 30%;
  left: 80%;
  animation-duration: 5s;
  animation-delay: 2s;
  opacity: 0.6;
  z-index: 1;
}

/* Depth Layers */
.depth-parallax {
  background: linear-gradient(135deg, #1e3c72, #2a5298);
}

.layer {
  position: absolute;
  width: 60px;
  height: 40px;
  border-radius: 8px;
  animation: layerFloat ease-in-out infinite;
}

.layer-1 {
  top: 10%;
  left: 20%;
  background: rgba(255, 107, 107, 0.8);
  animation-duration: 3s;
  z-index: 3;
}

.layer-2 {
  top: 40%;
  left: 50%;
  background: rgba(78, 205, 196, 0.6);
  animation-duration: 4s;
  animation-delay: 1s;
  z-index: 2;
}

.layer-3 {
  top: 20%;
  left: 80%;
  background: rgba(69, 183, 209, 0.4);
  animation-duration: 5s;
  animation-delay: 2s;
  z-index: 1;
}

/* Text Parallax */
.text-parallax {
  background: linear-gradient(135deg, #ff9a9e, #fecfef);
}

.text {
  position: absolute;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  animation: textFloat ease-in-out infinite;
}

.text-1 {
  top: 20%;
  left: 20%;
  font-size: 0.8rem;
  opacity: 0.6;
  animation-duration: 6s;
  z-index: 1;
}

.text-2 {
  top: 40%;
  left: 40%;
  font-size: 1rem;
  opacity: 0.8;
  animation-duration: 4s;
  animation-delay: 1s;
  z-index: 2;
}

.text-3 {
  top: 30%;
  left: 60%;
  font-size: 1.2rem;
  animation-duration: 3s;
  animation-delay: 2s;
  z-index: 3;
}

/* Keyframes */
@keyframes cloudFloat {
  0%, 100% { transform: translateX(0) translateY(0); }
  50% { transform: translateX(10px) translateY(-5px); }
}

@keyframes mountainSway {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(5px); }
}

@keyframes starTwinkle {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
}

@keyframes planetOrbit {
  0% { transform: translateX(0) rotate(0deg); }
  100% { transform: translateX(20px) rotate(360deg); }
}

@keyframes waveMotion {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes treeSwing {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(2deg); }
}

@keyframes buildingGlow {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
}

@keyframes cardFloat {
  0%, 100% { 
    transform: translateY(0) rotate(0deg);
  }
  50% { 
    transform: translateY(-10px) rotate(5deg);
  }
}

@keyframes layerFloat {
  0%, 100% { 
    transform: translateY(0) scale(1);
  }
  50% { 
    transform: translateY(-8px) scale(1.05);
  }
}

@keyframes textFloat {
  0%, 100% { 
    transform: translateY(0);
  }
  50% { 
    transform: translateY(-8px);
  }
}

/* Scroll-based Parallax (requires JavaScript) */
.parallax-scroll {
  transform: translateY(var(--scroll-offset, 0));
  transition: transform 0.1s ease-out;
}`}
        </pre>
      </div>
    </div>
  )
}

export default ParallaxAnimation