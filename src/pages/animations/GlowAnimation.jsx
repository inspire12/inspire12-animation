import React, { useState } from 'react'
import './AnimationPage.css'

const GlowAnimation = () => {
  const [glowType, setGlowType] = useState('pulse')

  return (
    <div className="animation-page">
      <div className="page-header">
        <h1>Glow Animation</h1>
        <p>발광과 네온 효과를 보여주는 애니메이션입니다.</p>
      </div>

      <div className="demo-section">
        <h2>Interactive Demo</h2>
        <div className="demo-controls">
          {['pulse', 'breathing', 'rainbow', 'neon'].map(type => (
            <button 
              key={type}
              className={`demo-button ${glowType === type ? 'active' : ''}`}
              onClick={() => setGlowType(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)} Glow
            </button>
          ))}
        </div>
        
        <div className="demo-area">
          <div className={`glow-element glow-${glowType}`}>
            ✨ GLOW ✨
          </div>
        </div>
      </div>

      <div className="examples-section">
        <h2>Different Glow Effects</h2>
        <div className="examples-grid">
          <div className="example-item">
            <h3>Soft Glow</h3>
            <div className="glow-element soft-glow">Soft</div>
          </div>
          
          <div className="example-item">
            <h3>Neon Sign</h3>
            <div className="glow-element neon-sign">NEON</div>
          </div>
          
          <div className="example-item">
            <h3>Electric Glow</h3>
            <div className="glow-element electric-glow">⚡</div>
          </div>
          
          <div className="example-item">
            <h3>Fire Glow</h3>
            <div className="glow-element fire-glow">🔥</div>
          </div>
          
          <div className="example-item">
            <h3>Ice Glow</h3>
            <div className="glow-element ice-glow">❄️</div>
          </div>
          
          <div className="example-item">
            <h3>Rainbow Glow</h3>
            <div className="glow-element rainbow-glow">🌈</div>
          </div>
        </div>
      </div>

      <div className="code-section">
        <h2>CSS Code</h2>
        <pre className="code-block">
{`.glow-pulse {
  animation: glowPulse 2s ease-in-out infinite;
  box-shadow: 0 0 20px #4ecdc4;
}

.glow-breathing {
  animation: glowBreathing 3s ease-in-out infinite;
  box-shadow: 0 0 30px #ff6b6b;
}

.glow-rainbow {
  animation: glowRainbow 3s linear infinite;
}

.glow-neon {
  animation: glowNeon 1.5s ease-in-out infinite;
  color: #00ff41;
  text-shadow: 0 0 5px #00ff41;
  border: 2px solid #00ff41;
  box-shadow: 
    0 0 5px #00ff41,
    0 0 10px #00ff41,
    0 0 15px #00ff41,
    0 0 20px #00ff41;
}

.soft-glow {
  box-shadow: 
    0 0 10px rgba(78, 205, 196, 0.5),
    0 0 20px rgba(78, 205, 196, 0.3),
    0 0 30px rgba(78, 205, 196, 0.1);
  animation: softGlow 4s ease-in-out infinite;
}

.neon-sign {
  background: #000;
  color: #ff006e;
  border: 2px solid #ff006e;
  text-shadow: 
    0 0 5px #ff006e,
    0 0 10px #ff006e,
    0 0 15px #ff006e;
  box-shadow: 
    0 0 5px #ff006e,
    0 0 10px #ff006e,
    0 0 15px #ff006e,
    inset 0 0 5px #ff006e;
  animation: neonFlicker 2s infinite;
}

.electric-glow {
  animation: electricGlow 0.5s infinite;
  color: #ffff00;
  text-shadow: 0 0 10px #ffff00;
  box-shadow: 
    0 0 10px #ffff00,
    0 0 20px #ffff00,
    0 0 30px #ffff00;
}

.fire-glow {
  animation: fireGlow 1s ease-in-out infinite;
  box-shadow: 
    0 0 10px #ff4500,
    0 0 20px #ff6500,
    0 0 30px #ff8500;
}

.ice-glow {
  animation: iceGlow 2s ease-in-out infinite;
  box-shadow: 
    0 0 10px #00bfff,
    0 0 20px #87ceeb,
    0 0 30px #b0e0e6;
}

.rainbow-glow {
  animation: rainbowGlow 3s linear infinite;
}

@keyframes glowPulse {
  0%, 100% { 
    box-shadow: 0 0 20px #4ecdc4, 0 0 30px #4ecdc4; 
  }
  50% { 
    box-shadow: 0 0 30px #4ecdc4, 0 0 40px #4ecdc4, 0 0 50px #4ecdc4; 
  }
}

@keyframes glowBreathing {
  0%, 100% { 
    box-shadow: 0 0 15px #ff6b6b; 
    transform: scale(1);
  }
  50% { 
    box-shadow: 0 0 35px #ff6b6b, 0 0 45px #ff6b6b; 
    transform: scale(1.05);
  }
}

@keyframes glowRainbow {
  0% { box-shadow: 0 0 20px #ff0000; }
  16.66% { box-shadow: 0 0 20px #ff8000; }
  33.33% { box-shadow: 0 0 20px #ffff00; }
  50% { box-shadow: 0 0 20px #80ff00; }
  66.66% { box-shadow: 0 0 20px #0080ff; }
  83.33% { box-shadow: 0 0 20px #8000ff; }
  100% { box-shadow: 0 0 20px #ff0000; }
}

@keyframes glowNeon {
  0%, 100% { 
    box-shadow: 
      0 0 5px #00ff41,
      0 0 10px #00ff41,
      0 0 15px #00ff41,
      0 0 20px #00ff41;
  }
  50% { 
    box-shadow: 
      0 0 10px #00ff41,
      0 0 20px #00ff41,
      0 0 30px #00ff41,
      0 0 40px #00ff41;
  }
}

@keyframes softGlow {
  0%, 100% { 
    box-shadow: 
      0 0 10px rgba(78, 205, 196, 0.3),
      0 0 20px rgba(78, 205, 196, 0.2);
  }
  50% { 
    box-shadow: 
      0 0 20px rgba(78, 205, 196, 0.6),
      0 0 30px rgba(78, 205, 196, 0.4);
  }
}

@keyframes neonFlicker {
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    text-shadow: 
      0 0 5px #ff006e,
      0 0 10px #ff006e,
      0 0 15px #ff006e;
    box-shadow: 
      0 0 5px #ff006e,
      0 0 10px #ff006e,
      0 0 15px #ff006e;
  }
  20%, 24%, 55% {
    text-shadow: none;
    box-shadow: none;
  }
}

@keyframes electricGlow {
  0%, 100% { 
    box-shadow: 
      0 0 5px #ffff00,
      0 0 10px #ffff00;
  }
  50% { 
    box-shadow: 
      0 0 20px #ffff00,
      0 0 30px #ffff00,
      0 0 40px #ffff00;
  }
}

@keyframes fireGlow {
  0%, 100% { 
    box-shadow: 
      0 0 10px #ff4500,
      0 0 20px #ff6500;
  }
  25% { 
    box-shadow: 
      0 0 15px #ff6500,
      0 0 25px #ff8500,
      0 0 35px #ffa500;
  }
  50% { 
    box-shadow: 
      0 0 20px #ff8500,
      0 0 30px #ffa500,
      0 0 40px #ffb500;
  }
  75% { 
    box-shadow: 
      0 0 15px #ff6500,
      0 0 25px #ff7500;
  }
}

@keyframes iceGlow {
  0%, 100% { 
    box-shadow: 
      0 0 10px #00bfff,
      0 0 20px #87ceeb;
  }
  50% { 
    box-shadow: 
      0 0 20px #00bfff,
      0 0 30px #87ceeb,
      0 0 40px #b0e0e6;
  }
}

@keyframes rainbowGlow {
  0% { 
    box-shadow: 0 0 20px #ff0000, 0 0 30px #ff0000;
  }
  14.28% { 
    box-shadow: 0 0 20px #ff8000, 0 0 30px #ff8000;
  }
  28.57% { 
    box-shadow: 0 0 20px #ffff00, 0 0 30px #ffff00;
  }
  42.85% { 
    box-shadow: 0 0 20px #80ff00, 0 0 30px #80ff00;
  }
  57.14% { 
    box-shadow: 0 0 20px #00ff80, 0 0 30px #00ff80;
  }
  71.42% { 
    box-shadow: 0 0 20px #0080ff, 0 0 30px #0080ff;
  }
  85.71% { 
    box-shadow: 0 0 20px #8000ff, 0 0 30px #8000ff;
  }
  100% { 
    box-shadow: 0 0 20px #ff0000, 0 0 30px #ff0000;
  }
}`}
        </pre>
      </div>
    </div>
  )
}

export default GlowAnimation