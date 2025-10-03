import React, { useState } from 'react'
import './AnimationPage.css'

const FadeAnimation = () => {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className="animation-page">
      <div className="page-header">
        <h1>Fade Animation</h1>
        <p>페이드 인/아웃 효과를 보여주는 애니메이션입니다.</p>
      </div>

      <div className="demo-section">
        <h2>Interactive Demo</h2>
        <div className="demo-controls">
          <button 
            className="demo-button"
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? 'Fade Out' : 'Fade In'}
          </button>
        </div>
        
        <div className="demo-area">
          <div className={`fade-element ${isVisible ? 'fade-in' : 'fade-out'}`}>
            Fade Effect
          </div>
        </div>
      </div>

      <div className="examples-section">
        <h2>Different Fade Effects</h2>
        <div className="examples-grid">
          <div className="example-item">
            <h3>Slow Fade</h3>
            <div className="fade-element slow-fade">Slow</div>
          </div>
          
          <div className="example-item">
            <h3>Fast Fade</h3>
            <div className="fade-element fast-fade">Fast</div>
          </div>
          
          <div className="example-item">
            <h3>Pulse Effect</h3>
            <div className="fade-element pulse-fade">Pulse</div>
          </div>
        </div>
      </div>

      <div className="code-section">
        <h2>CSS Code</h2>
        <pre className="code-block">
{`.fade-in {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}

.fade-out {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.slow-fade {
  animation: fadeInOut 4s infinite;
}

.fast-fade {
  animation: fadeInOut 1s infinite;
}

.pulse-fade {
  animation: pulse 2s infinite;
}

@keyframes fadeInOut {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.3; }
  100% { opacity: 1; }
}`}
        </pre>
      </div>
    </div>
  )
}

export default FadeAnimation