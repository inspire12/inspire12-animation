import React, { useState } from 'react'
import './AnimationPage.css'

const ShakeAnimation = () => {
  const [isShaking, setIsShaking] = useState(false)

  return (
    <div className="animation-page">
      <div className="page-header">
        <h1>Shake Animation</h1>
        <p>진동과 흔들림 효과를 보여주는 애니메이션입니다.</p>
      </div>

      <div className="demo-section">
        <h2>Interactive Demo</h2>
        <div className="demo-controls">
          <button 
            className="demo-button"
            onClick={() => {
              setIsShaking(true)
              setTimeout(() => setIsShaking(false), 1000)
            }}
          >
            Shake It!
          </button>
        </div>
        
        <div className="demo-area">
          <div className={`shake-element ${isShaking ? 'shaking' : ''}`}>
            📱
          </div>
        </div>
      </div>

      <div className="examples-section">
        <h2>Different Shake Effects</h2>
        <div className="examples-grid">
          <div className="example-item">
            <h3>Horizontal Shake</h3>
            <div className="shake-element horizontal-shake">🔔</div>
          </div>
          
          <div className="example-item">
            <h3>Vertical Shake</h3>
            <div className="shake-element vertical-shake">📞</div>
          </div>
          
          <div className="example-item">
            <h3>Crazy Shake</h3>
            <div className="shake-element crazy-shake">🎉</div>
          </div>
          
          <div className="example-item">
            <h3>Error Shake</h3>
            <div className="shake-element error-shake">❌</div>
          </div>
          
          <div className="example-item">
            <h3>Wobble</h3>
            <div className="shake-element wobble-shake">🎈</div>
          </div>
          
          <div className="example-item">
            <h3>Jello</h3>
            <div className="shake-element jello-shake">🍮</div>
          </div>
        </div>
      </div>

      <div className="code-section">
        <h2>CSS Code</h2>
        <pre className="code-block">
{`.shaking {
  animation: shake 0.8s ease-in-out;
}

.horizontal-shake {
  animation: shakeHorizontal 2s infinite;
}

.vertical-shake {
  animation: shakeVertical 2s infinite;
}

.crazy-shake {
  animation: shakeCrazy 1s infinite;
}

.error-shake {
  animation: errorShake 0.5s ease-in-out infinite;
}

.wobble-shake {
  animation: wobble 2s ease-in-out infinite;
}

.jello-shake {
  animation: jello 1.5s infinite;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-3px); }
  20%, 40%, 60%, 80% { transform: translateX(3px); }
}

@keyframes shakeHorizontal {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

@keyframes shakeVertical {
  0%, 100% { transform: translateY(0); }
  25% { transform: translateY(-5px); }
  75% { transform: translateY(5px); }
}

@keyframes shakeCrazy {
  0% { transform: translate(0); }
  10% { transform: translate(-2px, -1px) rotate(1deg); }
  20% { transform: translate(-1px, 1px) rotate(-1deg); }
  30% { transform: translate(2px, 1px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 1px) rotate(-1deg); }
  60% { transform: translate(-2px, 0px) rotate(1deg); }
  70% { transform: translate(2px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 1px) rotate(0deg); }
  100% { transform: translate(0); }
}

@keyframes errorShake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  75% { transform: translateX(4px); }
}

@keyframes wobble {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
}

@keyframes jello {
  0%, 100% { transform: skewX(0deg) skewY(0deg); }
  25% { transform: skewX(-5deg) skewY(-5deg); }
  50% { transform: skewX(5deg) skewY(5deg); }
  75% { transform: skewX(-3deg) skewY(-3deg); }
}`}
        </pre>
      </div>
    </div>
  )
}

export default ShakeAnimation