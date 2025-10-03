import React, { useState } from 'react'
import './AnimationPage.css'

const GlitchAnimation = () => {
  const [glitchType, setGlitchType] = useState('digital')

  return (
    <div className="animation-page">
      <div className="page-header">
        <h1>Glitch Animation</h1>
        <p>디지털 글리치와 사이버펑크 효과를 보여주는 애니메이션입니다.</p>
      </div>

      <div className="demo-section">
        <h2>Interactive Demo</h2>
        <div className="demo-controls">
          {['digital', 'rgb', 'static', 'corrupt'].map(type => (
            <button 
              key={type}
              className={`demo-button ${glitchType === type ? 'active' : ''}`}
              onClick={() => setGlitchType(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)} Glitch
            </button>
          ))}
        </div>
        
        <div className="demo-area">
          <div 
            className={`glitch-element glitch-${glitchType}`}
            data-text="GLITCH"
          >
            GLITCH
          </div>
        </div>
      </div>

      <div className="examples-section">
        <h2>Different Glitch Effects</h2>
        <div className="examples-grid">
          <div className="example-item">
            <h3>Text Glitch</h3>
            <div className="glitch-text" data-text="ERROR">ERROR</div>
          </div>
          
          <div className="example-item">
            <h3>RGB Split</h3>
            <div className="glitch-rgb" data-text="RGB">RGB</div>
          </div>
          
          <div className="example-item">
            <h3>Scanlines</h3>
            <div className="glitch-scanlines">
              <div className="glitch-content">SCAN</div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Data Corruption</h3>
            <div className="glitch-corrupt" data-text="DATA">DATA</div>
          </div>
          
          <div className="example-item">
            <h3>Screen Tear</h3>
            <div className="glitch-tear">TEAR</div>
          </div>
          
          <div className="example-item">
            <h3>Digital Noise</h3>
            <div className="glitch-noise">NOISE</div>
          </div>
          
          <div className="example-item">
            <h3>Matrix Glitch</h3>
            <div className="glitch-matrix">MATRIX</div>
          </div>
          
          <div className="example-item">
            <h3>Cyber Punk</h3>
            <div className="glitch-cyber" data-text="CYBER">CYBER</div>
          </div>
          
          <div className="example-item">
            <h3>VHS Distortion</h3>
            <div className="glitch-vhs">VHS</div>
          </div>
        </div>
      </div>

      <div className="code-section">
        <h2>CSS Code</h2>
        <pre className="code-block">
{`.glitch-digital {
  position: relative;
  color: #fff;
  animation: digitalGlitch 2s infinite;
}

.glitch-digital::before,
.glitch-digital::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch-digital::before {
  animation: glitchTop 1s infinite;
  color: #ff0000;
  z-index: -1;
}

.glitch-digital::after {
  animation: glitchBottom 1.5s infinite;
  color: #00ffff;
  z-index: -2;
}

.glitch-rgb {
  position: relative;
  color: #fff;
  animation: rgbGlitch 3s infinite;
}

.glitch-rgb::before,
.glitch-rgb::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch-rgb::before {
  color: #ff0000;
  animation: rgbShift1 2s infinite;
  mix-blend-mode: multiply;
}

.glitch-rgb::after {
  color: #0000ff;
  animation: rgbShift2 2.5s infinite;
  mix-blend-mode: multiply;
}

.glitch-static {
  position: relative;
  animation: staticNoise 0.5s infinite;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
}

.glitch-corrupt {
  position: relative;
  animation: dataCorrupt 1.5s infinite;
}

.glitch-corrupt::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  color: #ff00ff;
  animation: corruptShift 1s infinite;
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
}

.glitch-text {
  position: relative;
  color: #00ff41;
  font-family: 'Courier New', monospace;
  animation: textGlitch 2s infinite;
}

.glitch-text::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  color: #ff0041;
  animation: textShake 0.5s infinite;
}

.glitch-scanlines {
  position: relative;
  overflow: hidden;
}

.glitch-scanlines::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(255,255,255,0.1) 2px,
    rgba(255,255,255,0.1) 4px
  );
  animation: scanlines 2s infinite;
}

.glitch-tear {
  position: relative;
  animation: screenTear 1s infinite;
  background: linear-gradient(90deg, #ff0000, #00ff00, #0000ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.glitch-noise {
  position: relative;
  animation: digitalNoise 0.1s infinite;
  color: #fff;
  text-shadow: 0 0 10px #00ff41;
}

.glitch-matrix {
  color: #00ff41;
  font-family: 'Courier New', monospace;
  animation: matrixGlitch 1.5s infinite;
  text-shadow: 0 0 5px #00ff41;
}

.glitch-cyber {
  position: relative;
  color: #ff006e;
  text-shadow: 0 0 10px #ff006e;
  animation: cyberGlitch 2s infinite;
}

.glitch-cyber::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  color: #00ffff;
  animation: cyberShift 1.5s infinite;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
}

.glitch-vhs {
  position: relative;
  animation: vhsDistortion 3s infinite;
  color: #fff;
  background: linear-gradient(90deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@keyframes digitalGlitch {
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

@keyframes rgbGlitch {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-1px, 1px); }
  40% { transform: translate(1px, -1px); }
  60% { transform: translate(-1px, -1px); }
  80% { transform: translate(1px, 1px); }
}

@keyframes rgbShift1 {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  75% { transform: translateX(2px); }
}

@keyframes rgbShift2 {
  0%, 100% { transform: translateX(0); }
  33% { transform: translateX(2px); }
  66% { transform: translateX(-2px); }
}

@keyframes staticNoise {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

@keyframes dataCorrupt {
  0%, 90%, 100% { opacity: 1; }
  92%, 98% { opacity: 0.7; }
}

@keyframes corruptShift {
  0%, 100% { transform: translate(0); clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%); }
  25% { transform: translate(-2px, 1px); clip-path: polygon(0 20%, 100% 20%, 100% 60%, 0 60%); }
  50% { transform: translate(1px, -1px); clip-path: polygon(0 40%, 100% 40%, 100% 80%, 0 80%); }
  75% { transform: translate(-1px, 2px); clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%); }
}

@keyframes textGlitch {
  0%, 99% { transform: translate(0); }
  10% { transform: translate(-1px, 1px); }
  20% { transform: translate(1px, -1px); }
  30% { transform: translate(-1px, -1px); }
  40% { transform: translate(1px, 1px); }
}

@keyframes textShake {
  0%, 100% { transform: translate(0); }
  25% { transform: translate(-1px, 0); }
  75% { transform: translate(1px, 0); }
}

@keyframes scanlines {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

@keyframes screenTear {
  0%, 100% { transform: translateX(0) skew(0deg); }
  25% { transform: translateX(2px) skew(-2deg); }
  50% { transform: translateX(-1px) skew(1deg); }
  75% { transform: translateX(1px) skew(-1deg); }
}

@keyframes digitalNoise {
  0%, 100% { filter: brightness(1) contrast(1); }
  25% { filter: brightness(1.2) contrast(1.5); }
  50% { filter: brightness(0.8) contrast(1.2); }
  75% { filter: brightness(1.1) contrast(0.9); }
}

@keyframes matrixGlitch {
  0%, 100% { opacity: 1; transform: scale(1); }
  20% { opacity: 0.8; transform: scale(1.05); }
  40% { opacity: 0.9; transform: scale(0.95); }
  60% { opacity: 0.7; transform: scale(1.02); }
  80% { opacity: 1; transform: scale(0.98); }
}

@keyframes cyberGlitch {
  0%, 100% { 
    text-shadow: 0 0 10px #ff006e;
    filter: hue-rotate(0deg);
  }
  25% { 
    text-shadow: 2px 0 10px #ff006e, -2px 0 10px #00ffff;
    filter: hue-rotate(90deg);
  }
  50% { 
    text-shadow: 0 0 20px #ff006e;
    filter: hue-rotate(180deg);
  }
  75% { 
    text-shadow: -1px 0 10px #ff006e, 1px 0 10px #00ffff;
    filter: hue-rotate(270deg);
  }
}

@keyframes cyberShift {
  0%, 100% { transform: translateX(0); }
  33% { transform: translateX(-2px); }
  66% { transform: translateX(2px); }
}

@keyframes vhsDistortion {
  0%, 100% { 
    filter: hue-rotate(0deg) saturate(1);
    transform: scale(1);
  }
  25% { 
    filter: hue-rotate(90deg) saturate(1.5);
    transform: scale(1.02) translateX(1px);
  }
  50% { 
    filter: hue-rotate(180deg) saturate(0.8);
    transform: scale(0.98) translateX(-1px);
  }
  75% { 
    filter: hue-rotate(270deg) saturate(1.2);
    transform: scale(1.01) translateX(0.5px);
  }
}`}
        </pre>
      </div>
    </div>
  )
}

export default GlitchAnimation