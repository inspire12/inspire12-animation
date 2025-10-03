import React, { useState } from 'react'
import './AnimationPage.css'

const FlipAnimation = () => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="animation-page">
      <div className="page-header">
        <h1>Flip Animation</h1>
        <p>3D 카드 뒤집기 효과를 보여주는 애니메이션입니다.</p>
      </div>

      <div className="demo-section">
        <h2>Interactive Demo</h2>
        <div className="demo-controls">
          <button 
            className="demo-button"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {isFlipped ? 'Flip Back' : 'Flip Card'}
          </button>
        </div>
        
        <div className="demo-area">
          <div className={`flip-container ${isFlipped ? 'flipped' : ''}`}>
            <div className="flip-element">
              <div className="flip-front">
                🃏 Front
              </div>
              <div className="flip-back">
                🎴 Back
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="examples-section">
        <h2>Different Flip Effects</h2>
        <div className="examples-grid">
          <div className="example-item">
            <h3>Horizontal Flip</h3>
            <div className="flip-container horizontal-flip">
              <div className="flip-element">
                <div className="flip-front">📱</div>
                <div className="flip-back">📲</div>
              </div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Vertical Flip</h3>
            <div className="flip-container vertical-flip">
              <div className="flip-element">
                <div className="flip-front">📖</div>
                <div className="flip-back">📕</div>
              </div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Diagonal Flip</h3>
            <div className="flip-container diagonal-flip">
              <div className="flip-element">
                <div className="flip-front">🎲</div>
                <div className="flip-back">🎯</div>
              </div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Cube Flip</h3>
            <div className="flip-container cube-flip">
              <div className="flip-element">
                <div className="flip-front">🟦</div>
                <div className="flip-back">🟨</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="code-section">
        <h2>CSS Code</h2>
        <pre className="code-block">
{`.flip-container {
  perspective: 1000px;
  width: 100px;
  height: 100px;
}

.flip-element {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flipped .flip-element {
  transform: rotateY(180deg);
}

.flip-front, .flip-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #f0f0f0;
}

.flip-back {
  transform: rotateY(180deg);
  background: #e0e0e0;
}

.horizontal-flip .flip-element {
  animation: flipHorizontal 3s infinite;
}

.vertical-flip .flip-element {
  animation: flipVertical 3s infinite;
}

.diagonal-flip .flip-element {
  animation: flipDiagonal 3s infinite;
}

.cube-flip .flip-element {
  animation: flipCube 4s infinite;
}

@keyframes flipHorizontal {
  0%, 100% { transform: rotateY(0deg); }
  50% { transform: rotateY(180deg); }
}

@keyframes flipVertical {
  0%, 100% { transform: rotateX(0deg); }
  50% { transform: rotateX(180deg); }
}

@keyframes flipDiagonal {
  0%, 100% { transform: rotate3d(1, 1, 0, 0deg); }
  50% { transform: rotate3d(1, 1, 0, 180deg); }
}

@keyframes flipCube {
  0% { transform: rotateX(0deg) rotateY(0deg); }
  25% { transform: rotateX(90deg) rotateY(0deg); }
  50% { transform: rotateX(90deg) rotateY(90deg); }
  75% { transform: rotateX(0deg) rotateY(90deg); }
  100% { transform: rotateX(0deg) rotateY(0deg); }
}`}
        </pre>
      </div>
    </div>
  )
}

export default FlipAnimation