import React, { useState, useEffect, useRef } from 'react'
import './AnimationPage.css'

const ParticleAnimation = () => {
  const [particleType, setParticleType] = useState('snow')
  const [isActive, setIsActive] = useState(true)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!isActive) return

    const container = containerRef.current
    if (!container) return

    // 기존 파티클 제거
    container.innerHTML = ''

    const createParticles = () => {
      const particleCount = particleType === 'explosion' ? 30 : 50
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div')
        particle.className = `particle particle-${particleType}`
        
        // 랜덤 위치 설정
        const x = Math.random() * 100
        const y = Math.random() * 100
        const delay = Math.random() * 2
        const duration = 2 + Math.random() * 3
        
        particle.style.left = `${x}%`
        particle.style.top = `${y}%`
        particle.style.animationDelay = `${delay}s`
        particle.style.animationDuration = `${duration}s`
        
        if (particleType === 'explosion') {
          const angle = (i / particleCount) * 360
          particle.style.setProperty('--angle', `${angle}deg`)
        }
        
        container.appendChild(particle)
      }
    }

    createParticles()

    const interval = setInterval(() => {
      if (particleType === 'fireworks' || particleType === 'explosion') {
        createParticles()
      }
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [particleType, isActive])

  return (
    <div className="animation-page">
      <div className="page-header">
        <h1>Particle Animation</h1>
        <p>다양한 파티클 시스템 효과를 보여주는 애니메이션입니다.</p>
      </div>

      <div className="demo-section">
        <h2>Interactive Demo</h2>
        <div className="demo-controls">
          {['snow', 'rain', 'stars', 'fireworks', 'explosion'].map(type => (
            <button 
              key={type}
              className={`demo-button ${particleType === type ? 'active' : ''}`}
              onClick={() => setParticleType(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
          <button 
            className="demo-button"
            onClick={() => setIsActive(!isActive)}
          >
            {isActive ? 'Stop' : 'Start'}
          </button>
        </div>
        
        <div className="demo-area particle-demo">
          <div 
            ref={containerRef}
            className={`particle-container particle-${particleType} ${isActive ? 'active' : ''}`}
          >
          </div>
        </div>
      </div>

      <div className="examples-section">
        <h2>Different Particle Effects</h2>
        <div className="examples-grid">
          <div className="example-item">
            <h3>Floating Bubbles</h3>
            <div className="particle-example bubbles-effect">
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Twinkling Stars</h3>
            <div className="particle-example stars-effect">
              <div className="star">✨</div>
              <div className="star">⭐</div>
              <div className="star">✨</div>
              <div className="star">⭐</div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Confetti</h3>
            <div className="particle-example confetti-effect">
              <div className="confetti"></div>
              <div className="confetti"></div>
              <div className="confetti"></div>
              <div className="confetti"></div>
              <div className="confetti"></div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Energy Orbs</h3>
            <div className="particle-example orbs-effect">
              <div className="orb"></div>
              <div className="orb"></div>
              <div className="orb"></div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Dust Particles</h3>
            <div className="particle-example dust-effect">
              <div className="dust"></div>
              <div className="dust"></div>
              <div className="dust"></div>
              <div className="dust"></div>
              <div className="dust"></div>
              <div className="dust"></div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Lightning</h3>
            <div className="particle-example lightning-effect">
              <div className="lightning">⚡</div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Leaves Fall</h3>
            <div className="particle-example leaves-effect">
              <div className="leaf">🍃</div>
              <div className="leaf">🍂</div>
              <div className="leaf">🍃</div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Fire Sparks</h3>
            <div className="particle-example fire-effect">
              <div className="spark"></div>
              <div className="spark"></div>
              <div className="spark"></div>
              <div className="spark"></div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Magic Trail</h3>
            <div className="particle-example magic-effect">
              <div className="magic-particle">✨</div>
              <div className="magic-particle">💫</div>
              <div className="magic-particle">⭐</div>
            </div>
          </div>
        </div>
      </div>

      <div className="code-section">
        <h2>CSS Code</h2>
        <pre className="code-block">
{`/* Particle Container */
.particle-container {
  position: relative;
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  border-radius: 12px;
  overflow: hidden;
}

.particle-demo {
  min-height: 250px;
}

/* Basic Particle Styles */
.particle {
  position: absolute;
  pointer-events: none;
  user-select: none;
}

/* Snow Particles */
.particle-snow {
  width: 4px;
  height: 4px;
  background: white;
  border-radius: 50%;
  animation: snowfall linear infinite;
}

/* Rain Particles */
.particle-rain {
  width: 2px;
  height: 15px;
  background: linear-gradient(transparent, #87ceeb, transparent);
  animation: rainfall linear infinite;
}

/* Star Particles */
.particle-stars {
  width: 6px;
  height: 6px;
  background: #fff;
  border-radius: 50%;
  animation: starTwinkle ease-in-out infinite;
  box-shadow: 0 0 6px #fff;
}

/* Fireworks Particles */
.particle-fireworks {
  width: 3px;
  height: 3px;
  background: #ff6b6b;
  border-radius: 50%;
  animation: fireworksExplode ease-out forwards;
}

/* Explosion Particles */
.particle-explosion {
  width: 4px;
  height: 4px;
  background: #ff4500;
  border-radius: 50%;
  animation: explode ease-out forwards;
  transform-origin: center;
}

/* Bubble Effects */
.bubbles-effect {
  position: relative;
  height: 80px;
  background: linear-gradient(135deg, #74b9ff, #0984e3);
  border-radius: 8px;
  overflow: hidden;
}

.bubble {
  position: absolute;
  bottom: -20px;
  width: 15px;
  height: 15px;
  background: rgba(255,255,255,0.3);
  border-radius: 50%;
  animation: bubbleFloat 4s linear infinite;
}

.bubble:nth-child(1) { left: 10%; animation-delay: 0s; }
.bubble:nth-child(2) { left: 25%; animation-delay: 1s; width: 10px; height: 10px; }
.bubble:nth-child(3) { left: 50%; animation-delay: 2s; width: 20px; height: 20px; }
.bubble:nth-child(4) { left: 75%; animation-delay: 0.5s; width: 12px; height: 12px; }
.bubble:nth-child(5) { left: 90%; animation-delay: 1.5s; width: 8px; height: 8px; }

/* Stars Effect */
.stars-effect {
  position: relative;
  height: 80px;
  background: linear-gradient(135deg, #2c3e50, #34495e);
  border-radius: 8px;
  overflow: hidden;
}

.star {
  position: absolute;
  font-size: 1rem;
  animation: starFloat 3s ease-in-out infinite;
}

.star:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
.star:nth-child(2) { top: 60%; left: 70%; animation-delay: 1s; }
.star:nth-child(3) { top: 30%; left: 50%; animation-delay: 2s; }
.star:nth-child(4) { top: 70%; left: 20%; animation-delay: 0.5s; }

/* Confetti Effect */
.confetti-effect {
  position: relative;
  height: 80px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 8px;
  overflow: hidden;
}

.confetti {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #ff6b6b;
  animation: confettiFall 3s linear infinite;
}

.confetti:nth-child(1) { left: 20%; background: #ff6b6b; animation-delay: 0s; }
.confetti:nth-child(2) { left: 40%; background: #4ecdc4; animation-delay: 0.5s; }
.confetti:nth-child(3) { left: 60%; background: #45b7d1; animation-delay: 1s; }
.confetti:nth-child(4) { left: 80%; background: #96ceb4; animation-delay: 1.5s; }
.confetti:nth-child(5) { left: 10%; background: #feca57; animation-delay: 2s; }

/* Energy Orbs */
.orbs-effect {
  position: relative;
  height: 80px;
  background: radial-gradient(circle, #1a1a2e, #16213e);
  border-radius: 8px;
  overflow: hidden;
}

.orb {
  position: absolute;
  width: 20px;
  height: 20px;
  background: radial-gradient(circle, #00d4ff, #0066ff);
  border-radius: 50%;
  animation: orbFloat 4s ease-in-out infinite;
  box-shadow: 0 0 20px #00d4ff;
}

.orb:nth-child(1) { top: 30%; left: 20%; animation-delay: 0s; }
.orb:nth-child(2) { top: 50%; left: 50%; animation-delay: 1.5s; }
.orb:nth-child(3) { top: 20%; left: 80%; animation-delay: 3s; }

/* Dust Particles */
.dust-effect {
  position: relative;
  height: 80px;
  background: linear-gradient(135deg, #8b5a2b, #a0522d);
  border-radius: 8px;
  overflow: hidden;
}

.dust {
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(255,255,255,0.6);
  border-radius: 50%;
  animation: dustFloat 6s linear infinite;
}

.dust:nth-child(1) { left: 15%; animation-delay: 0s; }
.dust:nth-child(2) { left: 30%; animation-delay: 1s; }
.dust:nth-child(3) { left: 45%; animation-delay: 2s; }
.dust:nth-child(4) { left: 60%; animation-delay: 3s; }
.dust:nth-child(5) { left: 75%; animation-delay: 4s; }
.dust:nth-child(6) { left: 90%; animation-delay: 5s; }

/* Lightning Effect */
.lightning-effect {
  position: relative;
  height: 80px;
  background: linear-gradient(135deg, #2c3e50, #34495e);
  border-radius: 8px;
  overflow: hidden;
}

.lightning {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  color: #fff;
  animation: lightningFlash 2s ease-in-out infinite;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff;
}

/* Leaves Effect */
.leaves-effect {
  position: relative;
  height: 80px;
  background: linear-gradient(135deg, #74b9ff, #0984e3);
  border-radius: 8px;
  overflow: hidden;
}

.leaf {
  position: absolute;
  font-size: 1.2rem;
  animation: leafFall 4s linear infinite;
}

.leaf:nth-child(1) { left: 20%; animation-delay: 0s; }
.leaf:nth-child(2) { left: 50%; animation-delay: 1s; }
.leaf:nth-child(3) { left: 80%; animation-delay: 2s; }

/* Fire Sparks */
.fire-effect {
  position: relative;
  height: 80px;
  background: linear-gradient(135deg, #ff4500, #ff6347);
  border-radius: 8px;
  overflow: hidden;
}

.spark {
  position: absolute;
  bottom: 0;
  width: 3px;
  height: 3px;
  background: #ffff00;
  border-radius: 50%;
  animation: sparkFly 2s ease-out infinite;
  box-shadow: 0 0 6px #ffff00;
}

.spark:nth-child(1) { left: 25%; animation-delay: 0s; }
.spark:nth-child(2) { left: 45%; animation-delay: 0.5s; }
.spark:nth-child(3) { left: 65%; animation-delay: 1s; }
.spark:nth-child(4) { left: 85%; animation-delay: 1.5s; }

/* Magic Effect */
.magic-effect {
  position: relative;
  height: 80px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 8px;
  overflow: hidden;
}

.magic-particle {
  position: absolute;
  font-size: 1rem;
  animation: magicFloat 3s ease-in-out infinite;
}

.magic-particle:nth-child(1) { top: 20%; left: 30%; animation-delay: 0s; }
.magic-particle:nth-child(2) { top: 60%; left: 60%; animation-delay: 1s; }
.magic-particle:nth-child(3) { top: 40%; left: 80%; animation-delay: 2s; }

/* Keyframes */
@keyframes snowfall {
  0% { 
    transform: translateY(-20px) translateX(0px);
    opacity: 0;
  }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { 
    transform: translateY(220px) translateX(50px);
    opacity: 0;
  }
}

@keyframes rainfall {
  0% { 
    transform: translateY(-20px);
    opacity: 0;
  }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { 
    transform: translateY(220px);
    opacity: 0;
  }
}

@keyframes starTwinkle {
  0%, 100% { 
    opacity: 0.3;
    transform: scale(0.8);
  }
  50% { 
    opacity: 1;
    transform: scale(1.2);
  }
}

@keyframes fireworksExplode {
  0% { 
    transform: scale(0);
    opacity: 1;
  }
  50% { 
    transform: scale(1.5);
    opacity: 0.7;
  }
  100% { 
    transform: scale(0);
    opacity: 0;
  }
}

@keyframes explode {
  0% { 
    transform: scale(0) translate(0, 0);
    opacity: 1;
  }
  100% { 
    transform: scale(1) translate(calc(cos(var(--angle)) * 50px), calc(sin(var(--angle)) * 50px));
    opacity: 0;
  }
}

@keyframes bubbleFloat {
  0% { 
    bottom: -20px;
    opacity: 0;
  }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { 
    bottom: 100px;
    opacity: 0;
  }
}

@keyframes starFloat {
  0%, 100% { 
    transform: translateY(0) scale(1);
    opacity: 0.7;
  }
  50% { 
    transform: translateY(-10px) scale(1.2);
    opacity: 1;
  }
}

@keyframes confettiFall {
  0% { 
    top: -10px;
    transform: rotate(0deg);
    opacity: 1;
  }
  100% { 
    top: 90px;
    transform: rotate(360deg);
    opacity: 0;
  }
}

@keyframes orbFloat {
  0%, 100% { 
    transform: translateY(0) scale(1);
  }
  50% { 
    transform: translateY(-20px) scale(1.1);
  }
}

@keyframes dustFloat {
  0% { 
    bottom: -5px;
    opacity: 0;
  }
  10% { opacity: 0.6; }
  90% { opacity: 0.6; }
  100% { 
    bottom: 85px;
    opacity: 0;
  }
}

@keyframes lightningFlash {
  0%, 90%, 100% { opacity: 0; }
  5%, 85% { opacity: 1; }
}

@keyframes leafFall {
  0% { 
    top: -20px;
    transform: rotate(0deg);
  }
  100% { 
    top: 100px;
    transform: rotate(360deg);
  }
}

@keyframes sparkFly {
  0% { 
    bottom: 0;
    opacity: 1;
    transform: scale(1);
  }
  100% { 
    bottom: 80px;
    opacity: 0;
    transform: scale(0.5);
  }
}

@keyframes magicFloat {
  0%, 100% { 
    transform: translateY(0) rotate(0deg);
    opacity: 0.7;
  }
  50% { 
    transform: translateY(-15px) rotate(180deg);
    opacity: 1;
  }
}`}
        </pre>
      </div>
    </div>
  )
}

export default ParticleAnimation