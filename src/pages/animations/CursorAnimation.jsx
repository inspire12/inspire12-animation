import React, { useState, useEffect, useRef } from 'react'
import './AnimationPage.css'

const CursorAnimation = () => {
  const [cursorType, setCursorType] = useState('follow')
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)
  const cursorRef = useRef(null)
  const trailRef = useRef([])
  const lastTrailTime = useRef(0)

  useEffect(() => {
    let animationId = null
    
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        setMousePos({ x, y })

        // 커서 트레일 효과 (throttling 적용)
        if (cursorType === 'trail') {
          const now = Date.now()
          if (now - lastTrailTime.current > 16) { // 60fps 제한
            createTrail(x, y)
            lastTrailTime.current = now
          }
        }
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove)
      }
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      // trail 정리
      trailRef.current.forEach(trail => {
        if (trail.parentNode) {
          trail.remove()
        }
      })
      trailRef.current = []
    }
  }, [cursorType])

  const createTrail = (x, y) => {
    // 최대 trail 개수 제한
    if (trailRef.current.length >= 20) {
      const oldTrail = trailRef.current.shift()
      if (oldTrail && oldTrail.parentNode) {
        oldTrail.remove()
      }
    }

    const trail = document.createElement('div')
    trail.className = 'cursor-trail'
    trail.style.left = (x - 5) + 'px'
    trail.style.top = (y - 5) + 'px'
    trail.style.zIndex = '999'
    
    if (containerRef.current) {
      containerRef.current.appendChild(trail)
      trailRef.current.push(trail)
      
      setTimeout(() => {
        if (trail.parentNode) {
          trail.remove()
        }
        // 배열에서도 제거
        const index = trailRef.current.indexOf(trail)
        if (index > -1) {
          trailRef.current.splice(index, 1)
        }
      }, 600)
    }
  }

  return (
    <div className="animation-page">
      <div className="page-header">
        <h1>Cursor Animation</h1>
        <p>마우스 커서의 다양한 애니메이션 효과를 보여줍니다.</p>
      </div>

      <div className="demo-section">
        <h2>Interactive Demo</h2>
        <div className="demo-controls">
          {['follow', 'trail', 'magnetic', 'ripple', 'glow'].map(type => (
            <button 
              key={type}
              className={`demo-button ${cursorType === type ? 'active' : ''}`}
              onClick={() => setCursorType(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
        
        <div 
          ref={containerRef}
          className={`cursor-demo cursor-${cursorType}`}
        >
          <div className="cursor-demo-content">
            <h3>Move your mouse around this area</h3>
            <p>Experience different cursor effects!</p>
            
            {cursorType === 'follow' && (
              <div 
                className="custom-cursor follow-cursor"
                style={{
                  left: mousePos.x - 10,
                  top: mousePos.y - 10
                }}
              />
            )}
            
            {cursorType === 'magnetic' && (
              <>
                <div className="magnetic-target">Hover Me</div>
                <div 
                  className="custom-cursor magnetic-cursor"
                  style={{
                    left: mousePos.x - 15,
                    top: mousePos.y - 15
                  }}
                />
              </>
            )}
            
            {cursorType === 'ripple' && (
              <div 
                className="custom-cursor ripple-cursor"
                style={{
                  left: mousePos.x - 20,
                  top: mousePos.y - 20
                }}
              />
            )}
            
            {cursorType === 'glow' && (
              <div 
                className="custom-cursor glow-cursor"
                style={{
                  left: mousePos.x - 25,
                  top: mousePos.y - 25
                }}
              />
            )}
            
            {cursorType === 'trail' && (
              <div 
                className="custom-cursor trail-cursor"
                style={{
                  left: mousePos.x - 8,
                  top: mousePos.y - 8
                }}
              />
            )}
          </div>
        </div>
      </div>

      <div className="examples-section">
        <h2>Different Cursor Effects</h2>
        <div className="examples-grid">
          <div className="example-item">
            <h3>Hover Grow</h3>
            <div className="cursor-example hover-grow">
              <button>Hover Me</button>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Color Change</h3>
            <div className="cursor-example color-change">
              <div className="color-zone">Move Here</div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Text Cursor</h3>
            <div className="cursor-example text-cursor">
              <span>Click to Edit</span>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Loading Cursor</h3>
            <div className="cursor-example loading-cursor">
              <div className="loading-area">Processing...</div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Grab Cursor</h3>
            <div className="cursor-example grab-cursor">
              <div className="draggable">Drag Me</div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Pointer Events</h3>
            <div className="cursor-example pointer-events">
              <button>Click</button>
              <span>Text</span>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Custom Shape</h3>
            <div className="cursor-example custom-shape">
              <div className="shape-area">Custom Area</div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Crosshair</h3>
            <div className="cursor-example crosshair">
              <div className="target-area">Target Zone</div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>No Cursor</h3>
            <div className="cursor-example no-cursor">
              <div className="hidden-cursor">Invisible Cursor</div>
            </div>
          </div>
        </div>
      </div>

      <div className="code-section">
        <h2>CSS Code</h2>
        <pre className="code-block">
{`/* Cursor Demo Container */
.cursor-demo {
  position: relative;
  height: 300px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 12px;
  overflow: hidden;
  cursor: none;
}

.cursor-demo-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  text-align: center;
}

/* Custom Cursors */
.custom-cursor {
  position: absolute;
  pointer-events: none;
  z-index: 1000;
  transition: transform 0.1s ease;
}

.follow-cursor {
  width: 20px;
  height: 20px;
  background: #ff6b6b;
  border-radius: 50%;
  animation: cursorPulse 2s ease-in-out infinite;
}

.magnetic-cursor {
  width: 30px;
  height: 30px;
  border: 2px solid #4ecdc4;
  border-radius: 50%;
  background: rgba(78, 205, 196, 0.2);
  animation: magneticPulse 1.5s ease-in-out infinite;
}

.ripple-cursor {
  width: 40px;
  height: 40px;
  border: 2px solid #45b7d1;
  border-radius: 50%;
  background: transparent;
  animation: rippleExpand 1s ease-out infinite;
}

.glow-cursor {
  width: 50px;
  height: 50px;
  background: radial-gradient(circle, rgba(255, 107, 107, 0.6), transparent);
  border-radius: 50%;
  animation: glowPulse 2s ease-in-out infinite;
  filter: blur(5px);
}

.cursor-trail {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #4ecdc4;
  border-radius: 50%;
  pointer-events: none;
  animation: trailFade 1s ease-out forwards;
}

/* Magnetic Target */
.magnetic-target {
  padding: 20px 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  font-weight: bold;
  cursor: none;
  transition: transform 0.3s ease;
}

.magnetic-target:hover {
  transform: scale(1.1);
}

/* Cursor Examples */
.hover-grow button {
  padding: 12px 24px;
  background: #ff6b6b;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.hover-grow button:hover {
  cursor: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="%23ff6b6b"/></svg>') 16 16, auto;
  transform: scale(1.1);
}

.color-change .color-zone {
  width: 100%;
  height: 60px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  cursor: crosshair;
}

.text-cursor span {
  padding: 10px;
  border: 1px dashed #ccc;
  cursor: text;
  display: inline-block;
}

.loading-cursor .loading-area {
  padding: 20px;
  background: #f0f0f0;
  border-radius: 8px;
  cursor: wait;
}

.grab-cursor .draggable {
  padding: 15px;
  background: #4ecdc4;
  border-radius: 6px;
  color: white;
  cursor: grab;
  user-select: none;
}

.grab-cursor .draggable:active {
  cursor: grabbing;
}

.pointer-events button {
  margin: 0 10px;
  padding: 8px 16px;
  cursor: pointer;
}

.pointer-events span {
  cursor: text;
}

.custom-shape .shape-area {
  width: 100%;
  height: 60px;
  background: #45b7d1;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><polygon points="12,2 22,20 12,17 2,20" fill="%23ff6b6b"/></svg>') 12 12, auto;
}

.crosshair .target-area {
  width: 100%;
  height: 60px;
  background: #6c5ce7;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: crosshair;
}

.no-cursor .hidden-cursor {
  width: 100%;
  height: 60px;
  background: #2d3436;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: none;
}

/* Keyframes */
@keyframes cursorPulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.7; }
}

@keyframes magneticPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@keyframes rippleExpand {
  0% { 
    transform: scale(1);
    opacity: 1;
  }
  100% { 
    transform: scale(2);
    opacity: 0;
  }
}

@keyframes glowPulse {
  0%, 100% { 
    transform: scale(1);
    opacity: 0.6;
  }
  50% { 
    transform: scale(1.2);
    opacity: 0.9;
  }
}

@keyframes trailFade {
  0% { 
    transform: scale(1);
    opacity: 1;
  }
  100% { 
    transform: scale(0);
    opacity: 0;
  }
}`}
        </pre>
      </div>
    </div>
  )
}

export default CursorAnimation