import React, { useState, useEffect } from 'react'
import './AnimationPage.css'

const TypewriterAnimation = () => {
  const [currentText, setCurrentText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  
  const texts = [
    'Hello World!',
    '안녕하세요!',
    'Welcome to CSS Animation',
    'Typewriter Effect'
  ]

  useEffect(() => {
    if (isTyping) {
      const text = texts[textIndex]
      let index = 0
      
      const timer = setInterval(() => {
        setCurrentText(text.slice(0, index + 1))
        index++
        
        if (index >= text.length) {
          clearInterval(timer)
          setTimeout(() => {
            setTextIndex((prev) => (prev + 1) % texts.length)
            setCurrentText('')
          }, 2000)
        }
      }, 100)
      
      return () => clearInterval(timer)
    }
  }, [isTyping, textIndex])

  return (
    <div className="animation-page">
      <div className="page-header">
        <h1>Typewriter Animation</h1>
        <p>타이핑 효과를 보여주는 애니메이션입니다.</p>
      </div>

      <div className="demo-section">
        <h2>Interactive Demo</h2>
        <div className="demo-controls">
          <button 
            className="demo-button"
            onClick={() => setIsTyping(!isTyping)}
          >
            {isTyping ? 'Stop Typing' : 'Start Typing'}
          </button>
        </div>
        
        <div className="demo-area">
          <div className="typewriter-element">
            <span className="typed-text">{currentText}</span>
            <span className="cursor">|</span>
          </div>
        </div>
      </div>

      <div className="examples-section">
        <h2>Different Typewriter Effects</h2>
        <div className="examples-grid">
          <div className="example-item">
            <h3>Classic Typewriter</h3>
            <div className="typewriter-text classic-typewriter">
              Hello World!
            </div>
          </div>
          
          <div className="example-item">
            <h3>Fast Typing</h3>
            <div className="typewriter-text fast-typewriter">
              Fast typing effect
            </div>
          </div>
          
          <div className="example-item">
            <h3>Code Typing</h3>
            <div className="typewriter-text code-typewriter">
              const hello = 'world';
            </div>
          </div>
          
          <div className="example-item">
            <h3>Slow Typing</h3>
            <div className="typewriter-text slow-typewriter">
              Slow and steady...
            </div>
          </div>
          
          <div className="example-item">
            <h3>Blinking Cursor</h3>
            <div className="typewriter-text">
              Text with cursor<span className="blinking-cursor">_</span>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Terminal Style</h3>
            <div className="typewriter-text terminal-typewriter">
              $ npm install
            </div>
          </div>
        </div>
      </div>

      <div className="code-section">
        <h2>CSS Code</h2>
        <pre className="code-block">
{`.typewriter-text {
  font-family: 'Courier New', monospace;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid #007bff;
}

.classic-typewriter {
  width: 0;
  animation: typewriter 4s steps(12) infinite,
             blinkCursor 1s step-end infinite;
}

.fast-typewriter {
  width: 0;
  animation: typewriter 2s steps(17) infinite,
             blinkCursor 0.5s step-end infinite;
}

.code-typewriter {
  width: 0;
  background: #2d3748;
  color: #68d391;
  padding: 8px 12px;
  border-radius: 4px;
  animation: typewriter 3s steps(21) infinite,
             blinkCursor 1s step-end infinite;
}

.slow-typewriter {
  width: 0;
  animation: typewriter 6s steps(17) infinite,
             blinkCursor 1.5s step-end infinite;
}

.terminal-typewriter {
  background: #1a202c;
  color: #68d391;
  padding: 8px 12px;
  border-radius: 4px;
  width: 0;
  animation: typewriter 3s steps(13) infinite,
             blinkCursor 1s step-end infinite;
}

.cursor {
  opacity: 1;
  animation: blinkCursor 1s infinite;
}

.blinking-cursor {
  animation: blinkCursor 1s infinite;
}

@keyframes typewriter {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blinkCursor {
  0%, 50% { 
    border-color: transparent; 
    opacity: 1;
  }
  51%, 100% { 
    border-color: #007bff; 
    opacity: 0;
  }
}

/* Alternative blinking */
@keyframes blinkText {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Multi-line typewriter effect */
.multi-line-typewriter {
  overflow: hidden;
  white-space: nowrap;
  animation: 
    typewriter 3s steps(30) 1s both,
    blinkCursor 1s step-end infinite;
}

/* Typewriter with delete effect */
.delete-typewriter {
  animation: 
    typewriter 2s steps(10) forwards,
    deleteText 2s steps(10) 3s forwards,
    typewriter 2s steps(15) 5s forwards;
}

@keyframes deleteText {
  from { width: 100%; }
  to { width: 0; }
}`}
        </pre>
      </div>
    </div>
  )
}

export default TypewriterAnimation