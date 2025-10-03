import React, { useState } from 'react'
import './AnimationPage.css'

const ScaleAnimation = () => {
  const [isScaled, setIsScaled] = useState(false)

  return (
    <div className="animation-page">
      <div className="page-header">
        <h1>Scale Animation</h1>
        <p>크기 변화 효과를 보여주는 애니메이션입니다.</p>
      </div>

      <div className="demo-section">
        <h2>Interactive Demo</h2>
        <div className="demo-controls">
          <button 
            className="demo-button"
            onClick={() => setIsScaled(!isScaled)}
          >
            {isScaled ? 'Scale Down' : 'Scale Up'}
          </button>
        </div>
        
        <div className="demo-area">
          <div className={`scale-element ${isScaled ? 'scaled' : ''}`}>
            📦
          </div>
        </div>
      </div>

      <div className="examples-section">
        <h2>Different Scale Effects</h2>
        <div className="examples-grid">
          <div className="example-item">
            <h3>Pulse</h3>
            <div className="scale-element pulse-scale">💗</div>
          </div>
          
          <div className="example-item">
            <h3>Elastic Scale</h3>
            <div className="scale-element elastic-scale">🎈</div>
          </div>
          
          <div className="example-item">
            <h3>Scale X Only</h3>
            <div className="scale-element scale-x">↔️</div>
          </div>
          
          <div className="example-item">
            <h3>Scale Y Only</h3>
            <div className="scale-element scale-y">↕️</div>
          </div>
        </div>
      </div>

      <div className="code-section">
        <h2>CSS Code</h2>
        <pre className="code-block">
{`.scaled {
  transform: scale(1.5);
  transition: transform 0.3s ease;
}

.pulse-scale {
  animation: pulse 1.5s ease-in-out infinite;
}

.elastic-scale {
  animation: elasticScale 2s ease-in-out infinite;
}

.scale-x {
  animation: scaleX 2s ease-in-out infinite;
}

.scale-y {
  animation: scaleY 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

@keyframes elasticScale {
  0% { transform: scale(1); }
  30% { transform: scale(1.3); }
  60% { transform: scale(0.8); }
  100% { transform: scale(1); }
}

@keyframes scaleX {
  0%, 100% { transform: scaleX(1); }
  50% { transform: scaleX(1.5); }
}

@keyframes scaleY {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(1.5); }
}`}
        </pre>
      </div>
    </div>
  )
}

export default ScaleAnimation