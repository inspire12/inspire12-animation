import React, { useState } from 'react'
import './AnimationPage.css'

const SlideAnimation = () => {
  const [slideDirection, setSlideDirection] = useState('right')

  return (
    <div className="animation-page">
      <div className="page-header">
        <h1>Slide Animation</h1>
        <p>다양한 방향의 슬라이드 효과를 보여주는 애니메이션입니다.</p>
      </div>

      <div className="demo-section">
        <h2>Interactive Demo</h2>
        <div className="demo-controls">
          {['left', 'right', 'up', 'down'].map(direction => (
            <button 
              key={direction}
              className={`demo-button ${slideDirection === direction ? 'active' : ''}`}
              onClick={() => setSlideDirection(direction)}
            >
              Slide {direction.charAt(0).toUpperCase() + direction.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="demo-area">
          <div className={`slide-element slide-${slideDirection}`}>
            Sliding {slideDirection}
          </div>
        </div>
      </div>

      <div className="examples-section">
        <h2>Continuous Slide Effects</h2>
        <div className="examples-grid">
          <div className="example-item">
            <h3>Horizontal Slide</h3>
            <div className="slide-element horizontal-slide">←→</div>
          </div>
          
          <div className="example-item">
            <h3>Vertical Slide</h3>
            <div className="slide-element vertical-slide">↑↓</div>
          </div>
          
          <div className="example-item">
            <h3>Diagonal Slide</h3>
            <div className="slide-element diagonal-slide">↗↙</div>
          </div>
          
          <div className="example-item">
            <h3>Slide & Fade</h3>
            <div className="slide-element slide-fade">Mix</div>
          </div>
        </div>
      </div>

      <div className="code-section">
        <h2>CSS Code</h2>
        <pre className="code-block">
{`.slide-right {
  animation: slideRight 0.5s ease-out;
}

.slide-left {
  animation: slideLeft 0.5s ease-out;
}

.horizontal-slide {
  animation: slideHorizontal 3s infinite;
}

.vertical-slide {
  animation: slideVertical 2s infinite;
}

@keyframes slideRight {
  from { transform: translateX(-100px); }
  to { transform: translateX(0); }
}

@keyframes slideLeft {
  from { transform: translateX(100px); }
  to { transform: translateX(0); }
}

@keyframes slideHorizontal {
  0%, 100% { transform: translateX(-20px); }
  50% { transform: translateX(20px); }
}

@keyframes slideVertical {
  0%, 100% { transform: translateY(-15px); }
  50% { transform: translateY(15px); }
}`}
        </pre>
      </div>
    </div>
  )
}

export default SlideAnimation