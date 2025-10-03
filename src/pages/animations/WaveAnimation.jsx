import React, { useState } from 'react'
import './AnimationPage.css'

const WaveAnimation = () => {
  const [waveType, setWaveType] = useState('sine')

  return (
    <div className="animation-page">
      <div className="page-header">
        <h1>Wave Animation</h1>
        <p>파도와 물결 효과를 보여주는 애니메이션입니다.</p>
      </div>

      <div className="demo-section">
        <h2>Interactive Demo</h2>
        <div className="demo-controls">
          {['sine', 'cosine', 'zigzag', 'pulse'].map(type => (
            <button 
              key={type}
              className={`demo-button ${waveType === type ? 'active' : ''}`}
              onClick={() => setWaveType(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)} Wave
            </button>
          ))}
        </div>
        
        <div className="demo-area">
          <div className={`wave-element wave-${waveType}`}>
            🌊
          </div>
        </div>
      </div>

      <div className="examples-section">
        <h2>Different Wave Effects</h2>
        <div className="examples-grid">
          <div className="example-item">
            <h3>Ocean Wave</h3>
            <div className="wave-container">
              <div className="wave-element ocean-wave">🌊</div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Text Wave</h3>
            <div className="text-wave">
              <span>W</span><span>A</span><span>V</span><span>E</span>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Floating Wave</h3>
            <div className="wave-element floating-wave">🎈</div>
          </div>
          
          <div className="example-item">
            <h3>Loading Wave</h3>
            <div className="loading-wave">
              <div></div><div></div><div></div><div></div><div></div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Ripple Effect</h3>
            <div className="ripple-container">
              <div className="ripple-element">💧</div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Sound Wave</h3>
            <div className="sound-wave">
              <div></div><div></div><div></div><div></div><div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="code-section">
        <h2>CSS Code</h2>
        <pre className="code-block">
{`.wave-sine {
  animation: waveSine 2s ease-in-out infinite;
}

.wave-cosine {
  animation: waveCosine 2s ease-in-out infinite;
}

.wave-zigzag {
  animation: waveZigzag 1.5s linear infinite;
}

.wave-pulse {
  animation: wavePulse 1s ease-in-out infinite;
}

.ocean-wave {
  animation: oceanWave 3s ease-in-out infinite;
}

.text-wave span {
  display: inline-block;
  animation: textWave 1.5s ease-in-out infinite;
}

.text-wave span:nth-child(2) { animation-delay: 0.1s; }
.text-wave span:nth-child(3) { animation-delay: 0.2s; }
.text-wave span:nth-child(4) { animation-delay: 0.3s; }

.floating-wave {
  animation: floatingWave 2.5s ease-in-out infinite;
}

.loading-wave div {
  display: inline-block;
  width: 8px;
  height: 20px;
  background: #007bff;
  margin: 0 2px;
  animation: loadingWave 1s ease-in-out infinite;
}

.loading-wave div:nth-child(2) { animation-delay: 0.1s; }
.loading-wave div:nth-child(3) { animation-delay: 0.2s; }
.loading-wave div:nth-child(4) { animation-delay: 0.3s; }
.loading-wave div:nth-child(5) { animation-delay: 0.4s; }

.ripple-element::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border: 2px solid #007bff;
  border-radius: 50%;
  animation: rippleWave 2s infinite;
}

.sound-wave div {
  display: inline-block;
  width: 4px;
  background: #28a745;
  margin: 0 2px;
  animation: soundWave 1s ease-in-out infinite;
}

.sound-wave div:nth-child(1) { height: 20px; animation-delay: 0s; }
.sound-wave div:nth-child(2) { height: 30px; animation-delay: 0.1s; }
.sound-wave div:nth-child(3) { height: 40px; animation-delay: 0.2s; }
.sound-wave div:nth-child(4) { height: 25px; animation-delay: 0.3s; }
.sound-wave div:nth-child(5) { height: 35px; animation-delay: 0.4s; }

@keyframes waveSine {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-10px) rotate(5deg); }
  50% { transform: translateY(0) rotate(0deg); }
  75% { transform: translateY(10px) rotate(-5deg); }
}

@keyframes waveCosine {
  0% { transform: translateY(10px) rotate(-5deg); }
  25% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
  75% { transform: translateY(0) rotate(0deg); }
  100% { transform: translateY(10px) rotate(-5deg); }
}

@keyframes waveZigzag {
  0%, 100% { transform: translateX(0) translateY(0); }
  25% { transform: translateX(10px) translateY(-10px); }
  50% { transform: translateX(0) translateY(0); }
  75% { transform: translateX(-10px) translateY(10px); }
}

@keyframes wavePulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.7; }
}

@keyframes oceanWave {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  33% { transform: translateY(-8px) rotate(3deg); }
  66% { transform: translateY(5px) rotate(-2deg); }
}

@keyframes textWave {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@keyframes floatingWave {
  0%, 100% { transform: translateY(0) rotate(-3deg); }
  50% { transform: translateY(-20px) rotate(3deg); }
}

@keyframes loadingWave {
  0%, 100% { height: 10px; background: #007bff; }
  50% { height: 30px; background: #0056b3; }
}

@keyframes rippleWave {
  0% { width: 0; height: 0; opacity: 1; }
  100% { width: 60px; height: 60px; opacity: 0; }
}

@keyframes soundWave {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(0.3); }
}`}
        </pre>
      </div>
    </div>
  )
}

export default WaveAnimation