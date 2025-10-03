import React, { useState } from 'react'
import './AnimationPage.css'

const BounceAnimation = () => {
  const [isBouncing, setIsBouncing] = useState(false)

  return (
    <div className="animation-page">
      <div className="page-header">
        <h1>Bounce Animation</h1>
        <p>탄성 있는 바운스 효과를 보여주는 애니메이션입니다.</p>
      </div>

      <div className="demo-section">
        <h2>Interactive Demo</h2>
        <div className="demo-controls">
          <button 
            className="demo-button"
            onClick={() => setIsBouncing(!isBouncing)}
          >
            {isBouncing ? 'Stop Bounce' : 'Start Bounce'}
          </button>
        </div>
        
        <div className="demo-area">
          <div className={`bounce-element ${isBouncing ? 'bouncing' : ''}`}>
            🏀
          </div>
        </div>
      </div>

      <div className="examples-section">
        <h2>Different Bounce Effects</h2>
        <div className="examples-grid">
          <div className="example-item">
            <h3>Gentle Bounce</h3>
            <div className="bounce-element gentle-bounce">🎾</div>
          </div>
          
          <div className="example-item">
            <h3>High Bounce</h3>
            <div className="bounce-element high-bounce">⚽</div>
          </div>
          
          <div className="example-item">
            <h3>Rubber Ball</h3>
            <div className="bounce-element rubber-bounce">🔴</div>
          </div>
          
          <div className="example-item">
            <h3>Bounce In</h3>
            <div className="bounce-element bounce-in">✨</div>
          </div>
        </div>
      </div>

      <div className="code-section">
        <h2>CSS Code</h2>
        <pre className="code-block">
{`.bouncing {
  animation: bounce 1s ease-in-out infinite;
}

.gentle-bounce {
  animation: gentleBounce 2s ease-in-out infinite;
}

.high-bounce {
  animation: highBounce 1.5s ease-in-out infinite;
}

.rubber-bounce {
  animation: rubberBounce 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
}

.bounce-in {
  animation: bounceIn 2s ease-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  25% { transform: translateY(-20px); }
  50% { transform: translateY(0); }
  75% { transform: translateY(-10px); }
}

@keyframes gentleBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes highBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-40px); }
}

@keyframes bounceIn {
  0% { transform: scale(0.3) translateY(0); opacity: 0; }
  50% { transform: scale(1.05) translateY(-30px); opacity: 1; }
  100% { transform: scale(1) translateY(0); opacity: 1; }
}`}
        </pre>
      </div>
    </div>
  )
}

export default BounceAnimation