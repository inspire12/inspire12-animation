import React, { useState } from 'react'
import './AnimationPage.css'

const TextEffectsAnimation = () => {
  const [effectType, setEffectType] = useState('rainbow')

  return (
    <div className="animation-page">
      <div className="page-header">
        <h1>Text Effects Animation</h1>
        <p>다양한 텍스트 애니메이션 효과를 보여줍니다.</p>
      </div>

      <div className="demo-section">
        <h2>Interactive Demo</h2>
        <div className="demo-controls">
          {['rainbow', 'gradient', 'neon', 'glitch'].map(type => (
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
          <div 
            className={`text-effect text-${effectType}`}
            data-text="AMAZING TEXT"
          >
            AMAZING TEXT
          </div>
        </div>
      </div>

      <div className="examples-section">
        <h2>Different Text Effects</h2>
        <div className="examples-grid">
          <div className="example-item">
            <h3>Typing Effect</h3>
            <div className="text-typing">Hello World!</div>
          </div>
          
          <div className="example-item">
            <h3>Wave Text</h3>
            <div className="text-wave-effect">
              <span>W</span><span>A</span><span>V</span><span>E</span>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Glowing Text</h3>
            <div className="text-glow">GLOW</div>
          </div>
          
          <div className="example-item">
            <h3>3D Text</h3>
            <div className="text-3d">3D</div>
          </div>
          
          <div className="example-item">
            <h3>Flickering</h3>
            <div className="text-flicker">FLICKER</div>
          </div>
          
          <div className="example-item">
            <h3>Bounce Letters</h3>
            <div className="text-bounce">
              <span>B</span><span>O</span><span>U</span><span>N</span><span>C</span><span>E</span>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Matrix Effect</h3>
            <div className="text-matrix">MATRIX</div>
          </div>
          
          <div className="example-item">
            <h3>Gradient Flow</h3>
            <div className="text-gradient-flow">GRADIENT</div>
          </div>
          
          <div className="example-item">
            <h3>Split Color</h3>
            <div className="text-split-color">SPLIT</div>
          </div>
        </div>
      </div>

      <div className="code-section">
        <h2>CSS Code</h2>
        <pre className="code-block">
{`.text-rainbow {
  background: linear-gradient(45deg, 
    #ff0000, #ff8000, #ffff00, #80ff00, 
    #00ff80, #0080ff, #8000ff, #ff0080);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: rainbowText 3s ease-in-out infinite;
}

.text-gradient {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 2s ease-in-out infinite;
}

.text-neon {
  color: #00ff41;
  text-shadow: 
    0 0 5px #00ff41,
    0 0 10px #00ff41,
    0 0 15px #00ff41,
    0 0 20px #00ff41;
  animation: neonPulse 1.5s ease-in-out infinite;
}

.text-glitch {
  position: relative;
  color: #fff;
  animation: glitchText 2s infinite;
}

.text-glitch::before,
.text-glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.text-glitch::before {
  animation: glitchTop 2s infinite;
  color: #ff0000;
  z-index: -1;
}

.text-glitch::after {
  animation: glitchBottom 1.5s infinite;
  color: #00ffff;
  z-index: -2;
}

.text-typing {
  font-family: 'Courier New', monospace;
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  border-right: 2px solid #4ecdc4;
  animation: typing 3s steps(12) infinite,
             blinkCursor 1s step-end infinite;
}

.text-wave-effect {
  display: inline-flex;
}

.text-wave-effect span {
  display: inline-block;
  animation: textWaveEffect 2s ease-in-out infinite;
  color: #4ecdc4;
  font-weight: bold;
}

.text-wave-effect span:nth-child(2) { animation-delay: 0.1s; }
.text-wave-effect span:nth-child(3) { animation-delay: 0.2s; }
.text-wave-effect span:nth-child(4) { animation-delay: 0.3s; }

.text-glow {
  color: #fff;
  text-shadow: 0 0 10px #4ecdc4, 0 0 20px #4ecdc4, 0 0 30px #4ecdc4;
  animation: textGlowPulse 2s ease-in-out infinite;
}

.text-3d {
  color: #4ecdc4;
  text-shadow: 
    1px 1px 0 #ff6b6b,
    2px 2px 0 #ff6b6b,
    3px 3px 0 #ff6b6b,
    4px 4px 0 #ff6b6b,
    5px 5px 10px rgba(0,0,0,0.3);
  animation: text3DMove 3s ease-in-out infinite;
}

.text-flicker {
  animation: flicker 1.5s infinite;
}

.text-bounce {
  display: inline-flex;
}

.text-bounce span {
  display: inline-block;
  animation: bounceLetters 1s ease-in-out infinite;
  color: #ff6b6b;
  font-weight: bold;
}

.text-bounce span:nth-child(2) { animation-delay: 0.1s; }
.text-bounce span:nth-child(3) { animation-delay: 0.2s; }
.text-bounce span:nth-child(4) { animation-delay: 0.3s; }
.text-bounce span:nth-child(5) { animation-delay: 0.4s; }
.text-bounce span:nth-child(6) { animation-delay: 0.5s; }

.text-matrix {
  color: #00ff41;
  font-family: 'Courier New', monospace;
  animation: matrixEffect 2s infinite;
  text-shadow: 0 0 5px #00ff41;
}

.text-gradient-flow {
  background: linear-gradient(90deg, 
    #ff6b6b, #4ecdc4, #45b7d1, #ff6b6b);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientFlow 3s linear infinite;
}

.text-split-color {
  background: linear-gradient(90deg, 
    #ff6b6b 50%, #4ecdc4 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: splitColorShift 2s ease-in-out infinite;
}

@keyframes rainbowText {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes neonPulse {
  0%, 100% { 
    text-shadow: 
      0 0 5px #00ff41,
      0 0 10px #00ff41,
      0 0 15px #00ff41;
  }
  50% { 
    text-shadow: 
      0 0 10px #00ff41,
      0 0 20px #00ff41,
      0 0 30px #00ff41,
      0 0 40px #00ff41;
  }
}

@keyframes glitchText {
  0%, 99% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
}

@keyframes glitchTop {
  0%, 99% { transform: translate(0); }
  20% { transform: translate(-2px, -2px); }
  40% { transform: translate(-2px, 2px); }
  60% { transform: translate(2px, -2px); }
  80% { transform: translate(2px, 2px); }
}

@keyframes glitchBottom {
  0%, 99% { transform: translate(0); }
  20% { transform: translate(2px, 2px); }
  40% { transform: translate(2px, -2px); }
  60% { transform: translate(-2px, 2px); }
  80% { transform: translate(-2px, -2px); }
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes textWaveEffect {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes textGlowPulse {
  0%, 100% { 
    text-shadow: 0 0 10px #4ecdc4, 0 0 20px #4ecdc4;
  }
  50% { 
    text-shadow: 0 0 20px #4ecdc4, 0 0 30px #4ecdc4, 0 0 40px #4ecdc4;
  }
}

@keyframes text3DMove {
  0%, 100% { transform: rotateX(0deg) rotateY(0deg); }
  25% { transform: rotateX(10deg) rotateY(10deg); }
  50% { transform: rotateX(0deg) rotateY(20deg); }
  75% { transform: rotateX(-10deg) rotateY(10deg); }
}

@keyframes flicker {
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
  20%, 24%, 55% { opacity: 0.2; }
}

@keyframes bounceLetters {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@keyframes matrixEffect {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.1); }
}

@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  100% { background-position: 300% 50%; }
}

@keyframes splitColorShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 200% 50%; }
}`}
        </pre>
      </div>
    </div>
  )
}

export default TextEffectsAnimation