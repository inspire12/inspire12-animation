import React, { useState } from 'react'
import './AnimationPage.css'

const Transform3DAnimation = () => {
  const [transformType, setTransformType] = useState('cube')

  return (
    <div className="animation-page">
      <div className="page-header">
        <h1>3D Transform Animation</h1>
        <p>3차원 변환과 원근감을 활용한 애니메이션입니다.</p>
      </div>

      <div className="demo-section">
        <h2>Interactive Demo</h2>
        <div className="demo-controls">
          {['cube', 'card', 'pyramid', 'sphere'].map(type => (
            <button 
              key={type}
              className={`demo-button ${transformType === type ? 'active' : ''}`}
              onClick={() => setTransformType(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="demo-area">
          <div className={`transform3d-container transform3d-${transformType}`}>
            <div className="transform3d-element">
              <div className="face front">Front</div>
              <div className="face back">Back</div>
              <div className="face right">Right</div>
              <div className="face left">Left</div>
              <div className="face top">Top</div>
              <div className="face bottom">Bottom</div>
            </div>
          </div>
        </div>
      </div>

      <div className="examples-section">
        <h2>Different 3D Effects</h2>
        <div className="examples-grid">
          <div className="example-item">
            <h3>Rotating Cube</h3>
            <div className="cube-container">
              <div className="cube rotating-cube">
                <div className="cube-face front">1</div>
                <div className="cube-face back">2</div>
                <div className="cube-face right">3</div>
                <div className="cube-face left">4</div>
                <div className="cube-face top">5</div>
                <div className="cube-face bottom">6</div>
              </div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Card Flip</h3>
            <div className="card-3d">
              <div className="card-face card-front">💳</div>
              <div className="card-face card-back">🔒</div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Perspective Box</h3>
            <div className="perspective-box">
              <div className="box-face">📦</div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Floating Card</h3>
            <div className="floating-card">
              <div className="card-content">Float</div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>3D Button</h3>
            <div className="button-3d">
              <span>CLICK</span>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Isometric Box</h3>
            <div className="isometric-box">
              <div className="iso-face iso-front"></div>
              <div className="iso-face iso-right"></div>
              <div className="iso-face iso-top"></div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Prism Effect</h3>
            <div className="prism-container">
              <div className="prism">🔺</div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Layered Depth</h3>
            <div className="layered-depth">
              <div className="layer layer-1">1</div>
              <div className="layer layer-2">2</div>
              <div className="layer layer-3">3</div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Sphere Rotation</h3>
            <div className="sphere-container">
              <div className="sphere">🌍</div>
            </div>
          </div>
        </div>
      </div>

      <div className="code-section">
        <h2>CSS Code</h2>
        <pre className="code-block">
{`/* 3D Container Setup */
.transform3d-container {
  perspective: 1000px;
  width: 120px;
  height: 120px;
  margin: 0 auto;
}

.transform3d-element {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: rotate3D 6s linear infinite;
}

.face {
  position: absolute;
  width: 120px;
  height: 120px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border: 2px solid rgba(255,255,255,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  opacity: 0.9;
}

.front { transform: rotateY(0deg) translateZ(60px); }
.back { transform: rotateY(180deg) translateZ(60px); }
.right { transform: rotateY(90deg) translateZ(60px); }
.left { transform: rotateY(-90deg) translateZ(60px); }
.top { transform: rotateX(90deg) translateZ(60px); }
.bottom { transform: rotateX(-90deg) translateZ(60px); }

/* Cube Animation */
.cube-container {
  perspective: 800px;
  width: 80px;
  height: 80px;
  margin: 0 auto;
}

.cube {
  position: relative;
  width: 80px;
  height: 80px;
  transform-style: preserve-3d;
}

.rotating-cube {
  animation: cubeRotate 4s linear infinite;
}

.cube-face {
  position: absolute;
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, #4ecdc4, #45b7d1);
  border: 1px solid rgba(255,255,255,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  font-size: 1.2rem;
}

.cube-face.front { transform: rotateY(0deg) translateZ(40px); }
.cube-face.back { transform: rotateY(180deg) translateZ(40px); }
.cube-face.right { transform: rotateY(90deg) translateZ(40px); }
.cube-face.left { transform: rotateY(-90deg) translateZ(40px); }
.cube-face.top { transform: rotateX(90deg) translateZ(40px); }
.cube-face.bottom { transform: rotateX(-90deg) translateZ(40px); }

/* Card 3D Flip */
.card-3d {
  perspective: 600px;
  width: 80px;
  height: 60px;
  margin: 0 auto;
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: transform 0.6s;
}

.card-3d {
  animation: cardFlip3D 3s ease-in-out infinite;
}

.card-back {
  transform: rotateY(180deg);
}

/* Perspective Box */
.perspective-box {
  perspective: 500px;
  width: 80px;
  height: 80px;
  margin: 0 auto;
}

.box-face {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #4ecdc4, #45b7d1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transform-origin: center;
  animation: perspectiveMove 3s ease-in-out infinite;
}

/* Floating Card */
.floating-card {
  perspective: 1000px;
  width: 80px;
  height: 60px;
  margin: 0 auto;
}

.card-content {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  transform-origin: center;
  animation: floatingCard 4s ease-in-out infinite;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

/* 3D Button */
.button-3d {
  perspective: 600px;
  width: 80px;
  height: 40px;
  margin: 0 auto;
  cursor: pointer;
}

.button-3d span {
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #4ecdc4, #45b7d1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  transition: transform 0.2s;
  animation: button3DPulse 2s ease-in-out infinite;
}

.button-3d:hover span {
  transform: translateZ(10px) rotateX(-10deg);
}

/* Isometric Box */
.isometric-box {
  position: relative;
  width: 60px;
  height: 60px;
  margin: 20px auto;
}

.iso-face {
  position: absolute;
  width: 60px;
  height: 60px;
}

.iso-front {
  background: #4ecdc4;
  transform: rotateX(0deg) rotateY(0deg);
}

.iso-right {
  background: #45b7d1;
  transform: rotateY(90deg) translateZ(60px);
  transform-origin: right;
}

.iso-top {
  background: #ff6b6b;
  transform: rotateX(90deg) translateZ(60px);
  transform-origin: top;
}

.isometric-box {
  animation: isoRotate 5s linear infinite;
}

/* Prism Effect */
.prism-container {
  perspective: 800px;
  width: 80px;
  height: 80px;
  margin: 0 auto;
}

.prism {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  animation: prismRotate 3s ease-in-out infinite;
  transform-origin: center;
}

/* Layered Depth */
.layered-depth {
  perspective: 1000px;
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto;
}

.layer {
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
}

.layer-1 {
  background: #ff6b6b;
  transform: translateZ(0px);
  animation: layerFloat1 3s ease-in-out infinite;
}

.layer-2 {
  background: #4ecdc4;
  transform: translateZ(20px);
  animation: layerFloat2 3s ease-in-out infinite 0.5s;
}

.layer-3 {
  background: #45b7d1;
  transform: translateZ(40px);
  animation: layerFloat3 3s ease-in-out infinite 1s;
}

/* Sphere Rotation */
.sphere-container {
  perspective: 800px;
  width: 80px;
  height: 80px;
  margin: 0 auto;
}

.sphere {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #4ecdc4, #45b7d1, #2c3e50);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  animation: sphereRotate 4s linear infinite;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

/* Keyframes */
@keyframes rotate3D {
  0% { transform: rotateX(0deg) rotateY(0deg); }
  25% { transform: rotateX(90deg) rotateY(0deg); }
  50% { transform: rotateX(90deg) rotateY(90deg); }
  75% { transform: rotateX(0deg) rotateY(90deg); }
  100% { transform: rotateX(0deg) rotateY(360deg); }
}

@keyframes cubeRotate {
  0% { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}

@keyframes cardFlip3D {
  0%, 100% { transform: rotateY(0deg); }
  50% { transform: rotateY(180deg); }
}

@keyframes perspectiveMove {
  0%, 100% { transform: rotateX(0deg) rotateY(0deg) translateZ(0px); }
  25% { transform: rotateX(15deg) rotateY(15deg) translateZ(20px); }
  50% { transform: rotateX(0deg) rotateY(30deg) translateZ(0px); }
  75% { transform: rotateX(-15deg) rotateY(15deg) translateZ(20px); }
}

@keyframes floatingCard {
  0%, 100% { 
    transform: rotateX(0deg) rotateY(0deg) translateZ(0px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  }
  25% { 
    transform: rotateX(10deg) rotateY(10deg) translateZ(30px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.4);
  }
  50% { 
    transform: rotateX(0deg) rotateY(20deg) translateZ(10px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.35);
  }
  75% { 
    transform: rotateX(-10deg) rotateY(10deg) translateZ(30px);
    box-shadow: 0 25px 60px rgba(0,0,0,0.5);
  }
}

@keyframes button3DPulse {
  0%, 100% { transform: translateZ(0px) rotateX(0deg); }
  50% { transform: translateZ(5px) rotateX(-5deg); }
}

@keyframes isoRotate {
  0%, 100% { transform: rotateX(60deg) rotateY(0deg); }
  25% { transform: rotateX(60deg) rotateY(90deg); }
  50% { transform: rotateX(60deg) rotateY(180deg); }
  75% { transform: rotateX(60deg) rotateY(270deg); }
}

@keyframes prismRotate {
  0%, 100% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
  33% { transform: rotateX(120deg) rotateY(120deg) rotateZ(0deg); }
  66% { transform: rotateX(240deg) rotateY(240deg) rotateZ(0deg); }
}

@keyframes layerFloat1 {
  0%, 100% { transform: translateZ(0px) rotateY(0deg); }
  50% { transform: translateZ(10px) rotateY(180deg); }
}

@keyframes layerFloat2 {
  0%, 100% { transform: translateZ(20px) rotateX(0deg); }
  50% { transform: translateZ(30px) rotateX(180deg); }
}

@keyframes layerFloat3 {
  0%, 100% { transform: translateZ(40px) rotateZ(0deg); }
  50% { transform: translateZ(50px) rotateZ(180deg); }
}

@keyframes sphereRotate {
  0% { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}`}
        </pre>
      </div>
    </div>
  )
}

export default Transform3DAnimation