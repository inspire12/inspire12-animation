import React, { useState } from 'react'
import './AnimationPage.css'

const HoverEffectsAnimation = () => {
  const [effectType, setEffectType] = useState('grow')

  return (
    <div className="animation-page">
      <div className="page-header">
        <h1>Hover Effects Animation</h1>
        <p>마우스 호버 시 발생하는 인터랙티브 애니메이션 효과들입니다.</p>
      </div>

      <div className="demo-section">
        <h2>Interactive Demo</h2>
        <div className="demo-controls">
          {['grow', 'tilt', 'glow', 'slide'].map(type => (
            <button 
              key={type}
              className={`demo-button ${effectType === type ? 'active' : ''}`}
              onClick={() => setEffectType(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="demo-area">
          <div className={`hover-element hover-${effectType}`}>
            Hover Me!
          </div>
        </div>
      </div>

      <div className="examples-section">
        <h2>Different Hover Effects</h2>
        <div className="examples-grid">
          <div className="example-item">
            <h3>Scale Up</h3>
            <div className="hover-card hover-scale">
              <span>Scale</span>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Lift & Shadow</h3>
            <div className="hover-card hover-lift">
              <span>Lift</span>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Tilt 3D</h3>
            <div className="hover-card hover-tilt-3d">
              <span>Tilt</span>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Glow Border</h3>
            <div className="hover-card hover-glow-border">
              <span>Glow</span>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Slide Overlay</h3>
            <div className="hover-card hover-slide-overlay">
              <span>Slide</span>
              <div className="overlay"></div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Flip Card</h3>
            <div className="hover-flip-container">
              <div className="hover-flip-card">
                <div className="flip-front">Front</div>
                <div className="flip-back">Back</div>
              </div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Zoom In</h3>
            <div className="hover-card hover-zoom">
              <span>Zoom</span>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Rotate</h3>
            <div className="hover-card hover-rotate">
              <span>Rotate</span>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Pulse</h3>
            <div className="hover-card hover-pulse">
              <span>Pulse</span>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Skew</h3>
            <div className="hover-card hover-skew">
              <span>Skew</span>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Color Shift</h3>
            <div className="hover-card hover-color-shift">
              <span>Color</span>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Border Expand</h3>
            <div className="hover-card hover-border-expand">
              <span>Border</span>
            </div>
          </div>
        </div>
      </div>

      <div className="code-section">
        <h2>CSS Code</h2>
        <pre className="code-block">
{`/* Basic Hover Effects */
.hover-grow {
  transition: transform 0.3s ease;
}

.hover-grow:hover {
  transform: scale(1.1);
}

.hover-tilt {
  transition: transform 0.3s ease;
}

.hover-tilt:hover {
  transform: rotateZ(-5deg);
}

.hover-glow {
  transition: box-shadow 0.3s ease;
}

.hover-glow:hover {
  box-shadow: 0 0 20px rgba(78, 205, 196, 0.6);
}

.hover-slide {
  transition: transform 0.3s ease;
}

.hover-slide:hover {
  transform: translateX(10px);
}

/* Advanced Hover Effects */
.hover-card {
  width: 80px;
  height: 60px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.hover-scale:hover {
  transform: scale(1.15);
}

.hover-lift {
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.3);
}

.hover-tilt-3d {
  perspective: 1000px;
}

.hover-tilt-3d:hover {
  transform: rotateX(10deg) rotateY(-10deg);
}

.hover-glow-border {
  border: 2px solid transparent;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4) padding-box,
              linear-gradient(45deg, #ff6b6b, #4ecdc4) border-box;
}

.hover-glow-border:hover {
  box-shadow: 0 0 15px rgba(78, 205, 196, 0.8);
  animation: borderGlow 1s ease-in-out;
}

.hover-slide-overlay {
  position: relative;
}

.hover-slide-overlay .overlay {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.6s ease;
}

.hover-slide-overlay:hover .overlay {
  left: 100%;
}

/* Flip Card Effect */
.hover-flip-container {
  perspective: 1000px;
  width: 80px;
  height: 60px;
  margin: 0 auto;
}

.hover-flip-card {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.hover-flip-container:hover .hover-flip-card {
  transform: rotateY(180deg);
}

.flip-front, .flip-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}

.flip-back {
  transform: rotateY(180deg);
  background: linear-gradient(45deg, #4ecdc4, #45b7d1);
}

.hover-zoom:hover {
  transform: scale(1.2);
}

.hover-rotate:hover {
  transform: rotate(180deg);
}

.hover-pulse:hover {
  animation: hoverPulse 0.6s ease-in-out;
}

.hover-skew:hover {
  transform: skew(-10deg, 5deg);
}

.hover-color-shift {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  transition: background 0.5s ease;
}

.hover-color-shift:hover {
  background: linear-gradient(45deg, #4ecdc4, #45b7d1);
}

.hover-border-expand {
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.hover-border-expand:hover {
  border-color: #4ecdc4;
  transform: scale(1.05);
}

/* Button Hover Effects */
.hover-button {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  color: white;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.hover-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.6s ease;
}

.hover-button:hover::before {
  left: 100%;
}

.hover-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}

/* Link Hover Effects */
.hover-link {
  color: #4ecdc4;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}

.hover-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #4ecdc4;
  transition: width 0.3s ease;
}

.hover-link:hover {
  color: #ff6b6b;
}

.hover-link:hover::after {
  width: 100%;
}

/* Image Hover Effects */
.hover-image {
  width: 80px;
  height: 60px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.hover-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.hover-image:hover::before {
  opacity: 1;
}

.hover-image:hover {
  transform: scale(1.05);
}

@keyframes borderGlow {
  0%, 100% { box-shadow: 0 0 15px rgba(78, 205, 196, 0.8); }
  50% { box-shadow: 0 0 25px rgba(78, 205, 196, 1); }
}

@keyframes hoverPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

/* Responsive Design */
@media (max-width: 768px) {
  .hover-card {
    width: 60px;
    height: 45px;
    font-size: 0.8rem;
  }
  
  .hover-flip-container {
    width: 60px;
    height: 45px;
  }
}`}
        </pre>
      </div>
    </div>
  )
}

export default HoverEffectsAnimation