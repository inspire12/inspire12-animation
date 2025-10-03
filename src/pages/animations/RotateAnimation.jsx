import React, { useState } from 'react'
import './AnimationPage.css'

const RotateAnimation = () => {
  const [isRotating, setIsRotating] = useState(false)

  return (
    <div className="animation-page">
      <div className="page-header">
        <h1>Rotate Animation</h1>
        <p>다양한 회전 효과를 보여주는 애니메이션입니다.</p>
      </div>

      <div className="demo-section">
        <h2>Interactive Demo</h2>
        <div className="demo-controls">
          <button 
            className="demo-button"
            onClick={() => setIsRotating(!isRotating)}
          >
            {isRotating ? 'Stop Rotation' : 'Start Rotation'}
          </button>
        </div>
        
        <div className="demo-area">
          <div className={`rotate-element ${isRotating ? 'rotating' : ''}`}>
            ⚡
          </div>
        </div>
      </div>

      <div className="examples-section">
        <h2>Different Rotation Effects</h2>
        <div className="examples-grid">
          <div className="example-item">
            <h3>Slow Spin</h3>
            <div className="rotate-element slow-rotate">🔄</div>
          </div>
          
          <div className="example-item">
            <h3>Fast Spin</h3>
            <div className="rotate-element fast-rotate">💫</div>
          </div>
          
          <div className="example-item">
            <h3>Wobble</h3>
            <div className="rotate-element wobble-rotate">🎯</div>
          </div>
          
          <div className="example-item">
            <h3>3D Flip</h3>
            <div className="rotate-element flip-rotate">🎲</div>
          </div>
        </div>
      </div>

      <div className="code-section">
        <h2>CSS Code</h2>
        <pre className="code-block">
{`.rotating {
  animation: rotate360 2s linear infinite;
}

.slow-rotate {
  animation: rotate360 4s linear infinite;
}

.fast-rotate {
  animation: rotate360 0.5s linear infinite;
}

.wobble-rotate {
  animation: wobble 1s ease-in-out infinite;
}

.flip-rotate {
  animation: flip3D 2s ease-in-out infinite;
}

@keyframes rotate360 {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes wobble {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-15deg); }
  75% { transform: rotate(15deg); }
  100% { transform: rotate(0deg); }
}

@keyframes flip3D {
  0% { transform: rotateY(0deg); }
  50% { transform: rotateY(180deg); }
  100% { transform: rotateY(360deg); }
}`}
        </pre>
      </div>
    </div>
  )
}

export default RotateAnimation