import React, { useState } from 'react'
import './AnimationPage.css'

const MorphAnimation = () => {
  const [morphType, setMorphType] = useState('circle-square')

  return (
    <div className="animation-page">
      <div className="page-header">
        <h1>Morph Animation</h1>
        <p>도형과 아이콘의 변형 애니메이션을 보여줍니다.</p>
      </div>

      <div className="demo-section">
        <h2>Interactive Demo</h2>
        <div className="demo-controls">
          {['circle-square', 'star-heart', 'menu-close', 'play-pause'].map(type => (
            <button 
              key={type}
              className={`demo-button ${morphType === type ? 'active' : ''}`}
              onClick={() => setMorphType(type)}
            >
              {type.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' → ')}
            </button>
          ))}
        </div>
        
        <div className="demo-area">
          <div className={`morph-container morph-${morphType}`}>
            <div className="morph-shape"></div>
          </div>
        </div>
      </div>

      <div className="examples-section">
        <h2>Different Morph Effects</h2>
        <div className="examples-grid">
          <div className="example-item">
            <h3>Circle to Square</h3>
            <div className="morph-example circle-to-square">
              <div className="morph-shape"></div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Star Morph</h3>
            <div className="morph-example star-morph">
              <div className="star-shape">★</div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Heart Beat</h3>
            <div className="morph-example heart-morph">
              <div className="heart-shape">❤️</div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Loading Dots</h3>
            <div className="morph-example loading-morph">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Button Morph</h3>
            <div className="morph-button">
              <span>Click Me</span>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Icon Transition</h3>
            <div className="icon-morph">
              <div className="icon-shape">☀️</div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Text Morph</h3>
            <div className="text-morph">
              <span>HELLO</span>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Blob Morph</h3>
            <div className="blob-morph">
              <div className="blob"></div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Arrow Rotate</h3>
            <div className="arrow-morph">
              <div className="arrow">→</div>
            </div>
          </div>
        </div>
      </div>

      <div className="code-section">
        <h2>CSS Code</h2>
        <pre className="code-block">
{`/* Basic Morph Shapes */
.morph-container {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.morph-shape {
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.morph-circle-square .morph-shape {
  border-radius: 50%;
  animation: circleToSquare 3s ease-in-out infinite;
}

.morph-star-heart .morph-shape {
  background: none;
  position: relative;
  animation: starToHeart 3s ease-in-out infinite;
}

.morph-star-heart .morph-shape::before {
  content: "★";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  color: #ff6b6b;
  animation: iconMorph 3s ease-in-out infinite;
}

/* Circle to Square Morph */
.circle-to-square .morph-shape {
  border-radius: 50%;
  animation: morphCircleSquare 2s ease-in-out infinite;
}

.star-morph .star-shape {
  font-size: 2rem;
  animation: starPulse 2s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
}

.heart-morph .heart-shape {
  font-size: 2rem;
  animation: heartBeat 1.5s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Loading Dots Morph */
.loading-morph {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
}

.loading-morph .dot {
  width: 12px;
  height: 12px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border-radius: 50%;
  animation: dotMorph 1.5s ease-in-out infinite;
}

.loading-morph .dot:nth-child(2) {
  animation-delay: 0.2s;
}

.loading-morph .dot:nth-child(3) {
  animation-delay: 0.4s;
}

/* Button Morph */
.morph-button {
  padding: 12px 24px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border: none;
  border-radius: 25px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.morph-button:hover {
  border-radius: 8px;
  transform: scale(1.05);
  background: linear-gradient(45deg, #4ecdc4, #45b7d1);
}

.morph-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255,255,255,0.3);
  border-radius: 50%;
  transition: all 0.6s ease;
  transform: translate(-50%, -50%);
}

.morph-button:hover::before {
  width: 200px;
  height: 200px;
}

/* Icon Morph */
.icon-morph .icon-shape {
  font-size: 2rem;
  animation: iconDayNight 4s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Text Morph */
.text-morph {
  font-size: 1.5rem;
  font-weight: bold;
  color: #4ecdc4;
  position: relative;
  overflow: hidden;
}

.text-morph span {
  display: inline-block;
  animation: textWave 2s ease-in-out infinite;
}

/* Blob Morph */
.blob-morph {
  display: flex;
  align-items: center;
  justify-content: center;
}

.blob {
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: blobMorph 3s ease-in-out infinite;
}

/* Arrow Morph */
.arrow-morph .arrow {
  font-size: 2rem;
  color: #4ecdc4;
  animation: arrowRotate 2s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Keyframes */
@keyframes circleToSquare {
  0%, 100% { border-radius: 50%; }
  50% { border-radius: 0%; }
}

@keyframes starToHeart {
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.2) rotate(180deg); }
}

@keyframes iconMorph {
  0%, 100% { content: "★"; }
  50% { content: "❤️"; }
}

@keyframes morphCircleSquare {
  0%, 100% { 
    border-radius: 50%; 
    transform: rotate(0deg);
  }
  25% { 
    border-radius: 25%; 
    transform: rotate(45deg);
  }
  50% { 
    border-radius: 0%; 
    transform: rotate(90deg);
  }
  75% { 
    border-radius: 25%; 
    transform: rotate(135deg);
  }
}

@keyframes starPulse {
  0%, 100% { 
    transform: scale(1) rotate(0deg);
    color: #ff6b6b;
  }
  50% { 
    transform: scale(1.3) rotate(72deg);
    color: #4ecdc4;
  }
}

@keyframes heartBeat {
  0%, 100% { transform: scale(1); }
  25% { transform: scale(1.2); }
  50% { transform: scale(1); }
  75% { transform: scale(1.1); }
}

@keyframes dotMorph {
  0%, 100% { 
    transform: scale(1);
    border-radius: 50%;
  }
  50% { 
    transform: scale(1.5);
    border-radius: 0%;
  }
}

@keyframes iconDayNight {
  0%, 100% { 
    content: "☀️";
    transform: rotate(0deg);
  }
  50% { 
    content: "🌙";
    transform: rotate(180deg);
  }
}

@keyframes textWave {
  0%, 100% { 
    transform: translateY(0) scale(1);
    color: #4ecdc4;
  }
  50% { 
    transform: translateY(-10px) scale(1.2);
    color: #ff6b6b;
  }
}

@keyframes blobMorph {
  0%, 100% { 
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    transform: rotate(0deg);
  }
  25% { 
    border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
    transform: rotate(90deg);
  }
  50% { 
    border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
    transform: rotate(180deg);
  }
  75% { 
    border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
    transform: rotate(270deg);
  }
}

@keyframes arrowRotate {
  0% { transform: rotate(0deg); content: "→"; }
  25% { transform: rotate(90deg); content: "↓"; }
  50% { transform: rotate(180deg); content: "←"; }
  75% { transform: rotate(270deg); content: "↑"; }
  100% { transform: rotate(360deg); content: "→"; }
}

/* Menu to Close Icon */
.menu-to-close {
  position: relative;
  width: 30px;
  height: 20px;
  cursor: pointer;
}

.menu-to-close span {
  position: absolute;
  width: 100%;
  height: 3px;
  background: #4ecdc4;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.menu-to-close span:nth-child(1) { top: 0; }
.menu-to-close span:nth-child(2) { top: 50%; transform: translateY(-50%); }
.menu-to-close span:nth-child(3) { bottom: 0; }

.menu-to-close:hover span:nth-child(1) {
  transform: rotate(45deg);
  top: 50%;
  margin-top: -1.5px;
}

.menu-to-close:hover span:nth-child(2) {
  opacity: 0;
}

.menu-to-close:hover span:nth-child(3) {
  transform: rotate(-45deg);
  bottom: 50%;
  margin-bottom: -1.5px;
}`}
        </pre>
      </div>
    </div>
  )
}

export default MorphAnimation