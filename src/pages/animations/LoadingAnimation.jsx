import React, { useState } from 'react'
import './AnimationPage.css'

const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="animation-page">
      <div className="page-header">
        <h1>Loading Animation</h1>
        <p>다양한 로딩 스피너와 프로그레스 애니메이션을 보여줍니다.</p>
      </div>

      <div className="demo-section">
        <h2>Interactive Demo</h2>
        <div className="demo-controls">
          <button 
            className="demo-button"
            onClick={() => setIsLoading(!isLoading)}
          >
            {isLoading ? 'Stop Loading' : 'Start Loading'}
          </button>
        </div>
        
        <div className="demo-area">
          {isLoading && (
            <div className="loading-spinner-demo">
              <div className="spinner-ring"></div>
              <p>Loading...</p>
            </div>
          )}
          {!isLoading && (
            <div className="loading-complete">
              <span>✅ Complete!</span>
            </div>
          )}
        </div>
      </div>

      <div className="examples-section">
        <h2>Different Loading Effects</h2>
        <div className="examples-grid">
          <div className="example-item">
            <h3>Spinning Ring</h3>
            <div className="spinner-ring"></div>
          </div>
          
          <div className="example-item">
            <h3>Pulsing Dots</h3>
            <div className="loading-dots">
              <div></div><div></div><div></div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Progress Bar</h3>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Bouncing Balls</h3>
            <div className="bouncing-balls">
              <div></div><div></div><div></div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Rotating Square</h3>
            <div className="rotating-square"></div>
          </div>
          
          <div className="example-item">
            <h3>Wave Loader</h3>
            <div className="wave-loader">
              <div></div><div></div><div></div><div></div><div></div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Orbit Spinner</h3>
            <div className="orbit-spinner">
              <div></div><div></div><div></div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Skeleton Loading</h3>
            <div className="skeleton-loader">
              <div className="skeleton-line"></div>
              <div className="skeleton-line short"></div>
              <div className="skeleton-line"></div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Circular Progress</h3>
            <div className="circular-progress">
              <svg viewBox="0 0 36 36">
                <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="circle" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="code-section">
        <h2>CSS Code</h2>
        <pre className="code-block">
{`.spinner-ring {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(78, 205, 196, 0.3);
  border-top: 4px solid #4ecdc4;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto;
}

.loading-dots {
  display: flex;
  gap: 5px;
  justify-content: center;
}

.loading-dots div {
  width: 8px;
  height: 8px;
  background: #4ecdc4;
  border-radius: 50%;
  animation: dotPulse 1.4s ease-in-out infinite;
}

.loading-dots div:nth-child(2) { animation-delay: 0.2s; }
.loading-dots div:nth-child(3) { animation-delay: 0.4s; }

.progress-bar {
  width: 100%;
  height: 8px;
  background: rgba(78, 205, 196, 0.3);
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4ecdc4, #ff6b6b);
  border-radius: 4px;
  animation: progressFill 2s ease-in-out infinite;
}

.bouncing-balls {
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: end;
  height: 40px;
}

.bouncing-balls div {
  width: 10px;
  height: 10px;
  background: #ff6b6b;
  border-radius: 50%;
  animation: bounce 0.6s ease-in-out infinite alternate;
}

.bouncing-balls div:nth-child(2) { animation-delay: 0.2s; }
.bouncing-balls div:nth-child(3) { animation-delay: 0.4s; }

.rotating-square {
  width: 30px;
  height: 30px;
  background: #4ecdc4;
  margin: 0 auto;
  animation: rotateSquare 1.2s ease-in-out infinite;
}

.wave-loader {
  display: flex;
  gap: 2px;
  justify-content: center;
  align-items: end;
  height: 40px;
}

.wave-loader div {
  width: 4px;
  background: #ff6b6b;
  animation: waveLoad 1s ease-in-out infinite;
}

.wave-loader div:nth-child(1) { height: 20px; animation-delay: 0s; }
.wave-loader div:nth-child(2) { height: 15px; animation-delay: 0.1s; }
.wave-loader div:nth-child(3) { height: 25px; animation-delay: 0.2s; }
.wave-loader div:nth-child(4) { height: 15px; animation-delay: 0.3s; }
.wave-loader div:nth-child(5) { height: 20px; animation-delay: 0.4s; }

.orbit-spinner {
  position: relative;
  width: 50px;
  height: 50px;
  margin: 0 auto;
}

.orbit-spinner div {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #4ecdc4;
  border-radius: 50%;
  animation: orbit 2s linear infinite;
}

.orbit-spinner div:nth-child(1) { animation-delay: 0s; }
.orbit-spinner div:nth-child(2) { animation-delay: 0.66s; }
.orbit-spinner div:nth-child(3) { animation-delay: 1.33s; }

.skeleton-loader {
  width: 100%;
}

.skeleton-line {
  height: 12px;
  background: linear-gradient(90deg, 
    rgba(78, 205, 196, 0.3) 0%, 
    rgba(78, 205, 196, 0.5) 50%, 
    rgba(78, 205, 196, 0.3) 100%);
  border-radius: 4px;
  margin-bottom: 8px;
  animation: skeletonWave 1.5s ease-in-out infinite;
}

.skeleton-line.short {
  width: 60%;
}

.circular-progress {
  width: 40px;
  height: 40px;
  margin: 0 auto;
}

.circular-progress svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.circle-bg {
  fill: none;
  stroke: rgba(78, 205, 196, 0.3);
  stroke-width: 3.8;
}

.circle {
  fill: none;
  stroke: #4ecdc4;
  stroke-width: 3.8;
  stroke-linecap: round;
  stroke-dasharray: 75, 100;
  animation: circularProgress 2s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes dotPulse {
  0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
  40% { transform: scale(1); opacity: 1; }
}

@keyframes progressFill {
  0% { width: 0%; }
  50% { width: 70%; }
  100% { width: 100%; }
}

@keyframes bounce {
  to { 
    height: 30px; 
    transform: translateY(-20px); 
  }
}

@keyframes rotateSquare {
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(0.8); }
  100% { transform: rotate(360deg) scale(1); }
}

@keyframes waveLoad {
  0%, 40%, 100% { transform: scaleY(0.4); }
  20% { transform: scaleY(1); }
}

@keyframes orbit {
  0% { 
    transform: rotate(0deg) translateX(20px) rotate(0deg); 
  }
  100% { 
    transform: rotate(360deg) translateX(20px) rotate(-360deg); 
  }
}

@keyframes skeletonWave {
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
}

@keyframes circularProgress {
  0% { stroke-dasharray: 0, 100; }
  100% { stroke-dasharray: 75, 100; }
}`}
        </pre>
      </div>
    </div>
  )
}

export default LoadingAnimation