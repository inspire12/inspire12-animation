import React, { useState, useEffect, useRef } from 'react'
import './AnimationPage.css'

const CelebrationAnimation = () => {
  const [celebrationType, setCelebrationType] = useState('confetti')
  const [isActive, setIsActive] = useState(false)
  const containerRef = useRef(null)
  const confettiIntervalRef = useRef(null)

  const triggerCelebration = () => {
    setIsActive(true)
    
    if (celebrationType === 'confetti') {
      createConfetti()
    } else if (celebrationType === 'fireworks') {
      createFireworks()
    } else if (celebrationType === 'hearts') {
      createHearts()
    } else if (celebrationType === 'success') {
      createSuccess()
    }

    setTimeout(() => setIsActive(false), 3000)
  }

  const createConfetti = () => {
    const container = containerRef.current
    if (!container) return

    // 기존 파티클 제거
    container.querySelectorAll('.celebration-particle').forEach(p => p.remove())

    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div')
      confetti.className = 'celebration-particle confetti-piece'
      
      const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff']
      confetti.style.background = colors[Math.floor(Math.random() * colors.length)]
      confetti.style.left = Math.random() * 100 + '%'
      confetti.style.animationDelay = Math.random() * 1 + 's'
      confetti.style.animationDuration = (Math.random() * 2 + 1) + 's'
      
      container.appendChild(confetti)
      
      setTimeout(() => confetti.remove(), 3000)
    }
  }

  const createFireworks = () => {
    const container = containerRef.current
    if (!container) return

    container.querySelectorAll('.celebration-particle').forEach(p => p.remove())

    // 여러 개의 폭죽을 랜덤 위치에서 발사
    for (let firework = 0; firework < 5; firework++) {
      setTimeout(() => {
        const startX = Math.random() * 80 + 10 // 10% ~ 90% 위치
        const burstHeight = Math.random() * 30 + 20 // 폭발 높이
        
        // 발사체 생성
        const rocket = document.createElement('div')
        rocket.className = 'celebration-particle firework-rocket'
        rocket.style.left = startX + '%'
        rocket.style.bottom = '0px'
        rocket.style.setProperty('--burst-height', burstHeight + '%')
        container.appendChild(rocket)
        
        // 폭발 효과 (발사체가 올라간 후)
        setTimeout(() => {
          rocket.remove()
          
          // 폭발 파티클들
          for (let i = 0; i < 20; i++) {
            const spark = document.createElement('div')
            spark.className = 'celebration-particle firework-spark'
            
            const angle = (i / 20) * 360
            const distance = Math.random() * 60 + 40
            spark.style.setProperty('--angle', angle + 'deg')
            spark.style.setProperty('--distance', distance + 'px')
            spark.style.left = startX + '%'
            spark.style.bottom = burstHeight + '%'
            
            const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#ffd700', '#ff9f43', '#a29bfe']
            spark.style.background = colors[Math.floor(Math.random() * colors.length)]
            
            container.appendChild(spark)
            
            setTimeout(() => spark.remove(), 1500)
          }
        }, 800)
        
        setTimeout(() => rocket.remove(), 2000)
      }, firework * 200)
    }
  }

  const createHearts = () => {
    const container = containerRef.current
    if (!container) return

    container.querySelectorAll('.celebration-particle').forEach(p => p.remove())

    for (let i = 0; i < 20; i++) {
      const heart = document.createElement('div')
      heart.className = 'celebration-particle heart-particle'
      heart.textContent = '❤️'
      
      heart.style.left = Math.random() * 100 + '%'
      heart.style.animationDelay = Math.random() * 1 + 's'
      heart.style.animationDuration = (Math.random() * 2 + 2) + 's'
      
      container.appendChild(heart)
      
      setTimeout(() => heart.remove(), 4000)
    }
  }

  const createPulse = () => {
    const container = containerRef.current
    if (!container) return

    container.querySelectorAll('.celebration-particle').forEach(p => p.remove())

    // 중심에서 퍼지는 원형 파동 효과
    for (let i = 0; i < 5; i++) {
      const pulse = document.createElement('div')
      pulse.className = 'celebration-particle pulse-ring'
      pulse.style.left = '50%'
      pulse.style.top = '50%'
      pulse.style.animationDelay = (i * 0.2) + 's'
      
      container.appendChild(pulse)
      
      setTimeout(() => pulse.remove(), 2000)
    }
  }

  const createRipple = () => {
    const container = containerRef.current
    if (!container) return

    container.querySelectorAll('.celebration-particle').forEach(p => p.remove())

    // 물결 파동 효과
    for (let i = 0; i < 8; i++) {
      const ripple = document.createElement('div')
      ripple.className = 'celebration-particle ripple-wave'
      
      const angle = (i / 8) * 360
      ripple.style.setProperty('--angle', angle + 'deg')
      ripple.style.left = '50%'
      ripple.style.top = '50%'
      ripple.style.animationDelay = (i * 0.1) + 's'
      
      container.appendChild(ripple)
      
      setTimeout(() => ripple.remove(), 2500)
    }
  }

  const createGlow = () => {
    const container = containerRef.current
    if (!container) return

    container.querySelectorAll('.celebration-particle').forEach(p => p.remove())

    // 빛나는 오브 효과
    for (let i = 0; i < 12; i++) {
      const glow = document.createElement('div')
      glow.className = 'celebration-particle glow-orb'
      
      const x = Math.random() * 100
      const y = Math.random() * 100
      glow.style.left = x + '%'
      glow.style.top = y + '%'
      glow.style.animationDelay = Math.random() * 1 + 's'
      
      container.appendChild(glow)
      
      setTimeout(() => glow.remove(), 3000)
    }
  }

  const createSpiral = () => {
    const container = containerRef.current
    if (!container) return

    container.querySelectorAll('.celebration-particle').forEach(p => p.remove())

    // 나선형 파티클 효과
    for (let i = 0; i < 20; i++) {
      const spiral = document.createElement('div')
      spiral.className = 'celebration-particle spiral-particle'
      
      spiral.style.setProperty('--index', i)
      spiral.style.left = '50%'
      spiral.style.top = '50%'
      spiral.style.animationDelay = (i * 0.05) + 's'
      
      container.appendChild(spiral)
      
      setTimeout(() => spiral.remove(), 3000)
    }
  }

  const createBurst = () => {
    const container = containerRef.current
    if (!container) return

    container.querySelectorAll('.celebration-particle').forEach(p => p.remove())

    // 기하학적 폭발 효과
    for (let i = 0; i < 16; i++) {
      const burst = document.createElement('div')
      burst.className = 'celebration-particle burst-particle'
      
      const angle = (i / 16) * 360
      const distance = 80 + Math.random() * 40
      burst.style.setProperty('--angle', angle + 'deg')
      burst.style.setProperty('--distance', distance + 'px')
      burst.style.left = '50%'
      burst.style.top = '50%'
      burst.style.animationDelay = Math.random() * 0.3 + 's'
      
      container.appendChild(burst)
      
      setTimeout(() => burst.remove(), 2000)
    }
  }

  return (
    <div className="animation-page">
      <div className="page-header">
        <h1>Celebration Animation</h1>
        <p>축하와 성공을 표현하는 다양한 애니메이션 효과들입니다.</p>
      </div>

      <div className="demo-section">
        <h2>Interactive Demo</h2>
        <div className="demo-controls">
          {['confetti', 'fireworks', 'hearts', 'pulse', 'ripple', 'glow', 'spiral', 'burst'].map(type => (
            <button 
              key={type}
              className={`demo-button ${celebrationType === type ? 'active' : ''} ${isActive && celebrationType === type ? 'running' : ''}`}
              onClick={() => {
                setCelebrationType(type)
                // 타입 설정 후 애니메이션 즉시 실행
                setTimeout(() => {
                  setIsActive(true)
                  
                  if (type === 'confetti') {
                    createConfetti()
                  } else if (type === 'fireworks') {
                    createFireworks()
                  } else if (type === 'hearts') {
                    createHearts()
                  } else if (type === 'pulse') {
                    createPulse()
                  } else if (type === 'ripple') {
                    createRipple()
                  } else if (type === 'glow') {
                    createGlow()
                  } else if (type === 'spiral') {
                    createSpiral()
                  } else if (type === 'burst') {
                    createBurst()
                  }

                  setTimeout(() => setIsActive(false), 3000)
                }, 10)
              }}
              disabled={isActive}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
              {isActive && celebrationType === type && ' 🎉'}
            </button>
          ))}
        </div>
        
        <div className="demo-area celebration-demo">
          <div 
            ref={containerRef}
            className={`celebration-container celebration-${celebrationType} ${isActive ? 'active' : ''}`}
          >
            <div className="celebration-message">
              {isActive ? `🎉 ${celebrationType.charAt(0).toUpperCase() + celebrationType.slice(1)} Celebration! 🎉` : 'Click any button above!'}
            </div>
          </div>
        </div>
      </div>

      <div className="examples-section">
        <h2>Different Celebration Effects</h2>
        <div className="examples-grid">
          <div className="example-item">
            <h3>Success Checkmark</h3>
            <div className="celebration-example success-check">
              <div className="checkmark">
                <svg viewBox="0 0 50 50">
                  <path className="check-path" d="M 15 25 L 22 32 L 35 18" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Trophy Award</h3>
            <div className="celebration-example trophy-award">
              <div className="trophy">🏆</div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Star Burst</h3>
            <div className="celebration-example star-burst">
              <div className="star">⭐</div>
              <div className="star">✨</div>
              <div className="star">💫</div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Balloon Float</h3>
            <div className="celebration-example balloon-float">
              <div className="balloon">🎈</div>
              <div className="balloon">🎈</div>
              <div className="balloon">🎈</div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Gift Box</h3>
            <div className="celebration-example gift-box">
              <div className="gift">🎁</div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Medal Shine</h3>
            <div className="celebration-example medal-shine">
              <div className="medal">🥇</div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Party Popper</h3>
            <div className="celebration-example party-popper">
              <div className="popper">🎊</div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Clapping Hands</h3>
            <div className="celebration-example clapping-hands">
              <div className="hands">👏</div>
            </div>
          </div>
          
          <div className="example-item">
            <h3>Rainbow Arc</h3>
            <div className="celebration-example rainbow-arc">
              <div className="rainbow">🌈</div>
            </div>
          </div>
        </div>
      </div>

      <div className="code-section">
        <h2>CSS Code</h2>
        <pre className="code-block">
{`/* Celebration Container */
.celebration-container {
  position: relative;
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.celebration-message {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  z-index: 10;
  position: relative;
}

.celebration-container.active .celebration-message {
  animation: celebrationPulse 1s ease-in-out;
}

/* Confetti Particles */
.confetti-piece {
  position: absolute;
  width: 8px;
  height: 8px;
  top: -10px;
  animation: confettiFall linear forwards;
}

/* Firework Sparks */
.firework-spark {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #ffff00;
  border-radius: 50%;
  animation: fireworkExplode ease-out forwards;
  transform-origin: center;
}

/* Heart Particles */
.heart-particle {
  position: absolute;
  font-size: 1.2rem;
  top: 100%;
  animation: heartFloat ease-out forwards;
}

/* Success Checkmark */
.success-check {
  background: linear-gradient(135deg, #4ecdc4, #44a08d);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkmark {
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: checkmarkAppear 1s ease-out infinite;
}

.checkmark svg {
  width: 30px;
  height: 30px;
}

.check-path {
  fill: none;
  stroke: #4ecdc4;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 20;
  stroke-dashoffset: 20;
  animation: drawCheck 2s ease-in-out infinite;
}

/* Trophy Award */
.trophy-award {
  background: linear-gradient(135deg, #f7971e, #ffd200);
  display: flex;
  align-items: center;
  justify-content: center;
}

.trophy {
  font-size: 2rem;
  animation: trophyBounce 2s ease-in-out infinite;
}

/* Star Burst */
.star-burst {
  background: linear-gradient(135deg, #2c3e50, #34495e);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.star-burst .star {
  position: absolute;
  font-size: 1.2rem;
  animation: starBurst 3s ease-out infinite;
}

.star-burst .star:nth-child(1) { animation-delay: 0s; }
.star-burst .star:nth-child(2) { animation-delay: 0.5s; }
.star-burst .star:nth-child(3) { animation-delay: 1s; }

/* Balloon Float */
.balloon-float {
  background: linear-gradient(135deg, #74b9ff, #0984e3);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.balloon {
  position: absolute;
  font-size: 1.5rem;
  animation: balloonRise 4s ease-out infinite;
}

.balloon:nth-child(1) { left: 20%; animation-delay: 0s; }
.balloon:nth-child(2) { left: 50%; animation-delay: 1s; }
.balloon:nth-child(3) { left: 80%; animation-delay: 2s; }

/* Gift Box */
.gift-box {
  background: linear-gradient(135deg, #ff9a9e, #fecfef);
  display: flex;
  align-items: center;
  justify-content: center;
}

.gift {
  font-size: 2rem;
  animation: giftPop 2s ease-in-out infinite;
}

/* Medal Shine */
.medal-shine {
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.medal {
  font-size: 2rem;
  animation: medalSpin 3s linear infinite;
  position: relative;
}

.medal::after {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent);
  border-radius: 50%;
  animation: shineRotate 2s linear infinite;
}

/* Party Popper */
.party-popper {
  background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popper {
  font-size: 2rem;
  animation: popperExplode 2s ease-in-out infinite;
}

/* Clapping Hands */
.clapping-hands {
  background: linear-gradient(135deg, #feca57, #ff9ff3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hands {
  font-size: 2rem;
  animation: clap 1.5s ease-in-out infinite;
}

/* Rainbow Arc */
.rainbow-arc {
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.rainbow {
  font-size: 2rem;
  animation: rainbowSlide 3s ease-in-out infinite;
}

/* Keyframes */
@keyframes celebrationPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@keyframes confettiFall {
  0% { 
    top: -10px; 
    transform: rotate(0deg);
    opacity: 1;
  }
  100% { 
    top: 210px; 
    transform: rotate(360deg);
    opacity: 0;
  }
}

@keyframes fireworkExplode {
  0% { 
    transform: scale(0) translate(0, 0);
    opacity: 1;
  }
  100% { 
    transform: scale(1) translate(
      calc(cos(var(--angle)) * 60px), 
      calc(sin(var(--angle)) * 60px)
    );
    opacity: 0;
  }
}

@keyframes heartFloat {
  0% { 
    top: 100%;
    opacity: 1;
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% { 
    top: -20px;
    opacity: 0;
    transform: scale(0.8);
  }
}

@keyframes checkmarkAppear {
  0%, 100% { 
    transform: scale(1);
    box-shadow: 0 0 0 rgba(78, 205, 196, 0.4);
  }
  50% { 
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(78, 205, 196, 0.6);
  }
}

@keyframes drawCheck {
  0% { stroke-dashoffset: 20; }
  50% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -20; }
}

@keyframes trophyBounce {
  0%, 100% { 
    transform: translateY(0) scale(1);
  }
  25% { 
    transform: translateY(-10px) scale(1.1);
  }
  50% { 
    transform: translateY(0) scale(1);
  }
  75% { 
    transform: translateY(-5px) scale(1.05);
  }
}

@keyframes starBurst {
  0% { 
    transform: scale(0) rotate(0deg);
    opacity: 0;
  }
  20% { 
    opacity: 1;
  }
  50% { 
    transform: scale(1.5) rotate(180deg);
    opacity: 1;
  }
  100% { 
    transform: scale(0) rotate(360deg);
    opacity: 0;
  }
}

@keyframes balloonRise {
  0% { 
    bottom: -20px;
    opacity: 0;
  }
  20% { 
    opacity: 1;
  }
  80% { 
    opacity: 1;
  }
  100% { 
    bottom: 100px;
    opacity: 0;
  }
}

@keyframes giftPop {
  0%, 100% { 
    transform: scale(1) rotate(0deg);
  }
  25% { 
    transform: scale(1.2) rotate(-5deg);
  }
  50% { 
    transform: scale(1.1) rotate(0deg);
  }
  75% { 
    transform: scale(1.2) rotate(5deg);
  }
}

@keyframes medalSpin {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
}

@keyframes shineRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes popperExplode {
  0%, 80%, 100% { 
    transform: scale(1) rotate(0deg);
  }
  10%, 30%, 50%, 70% { 
    transform: scale(1.1) rotate(-5deg);
  }
  20%, 40%, 60% { 
    transform: scale(1.1) rotate(5deg);
  }
}

@keyframes clap {
  0%, 100% { 
    transform: scale(1) rotate(0deg);
  }
  25% { 
    transform: scale(1.1) rotate(-10deg);
  }
  75% { 
    transform: scale(1.1) rotate(10deg);
  }
}

@keyframes rainbowSlide {
  0%, 100% { 
    transform: translateX(-20px);
  }
  50% { 
    transform: translateX(20px);
  }
}

/* Celebrate Button */
.celebrate-btn {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4) !important;
  animation: celebrateButtonPulse 2s ease-in-out infinite;
}

.celebrate-btn:disabled {
  opacity: 0.6;
  animation: none;
}

@keyframes celebrateButtonPulse {
  0%, 100% { 
    transform: scale(1);
    box-shadow: 0 0 0 rgba(78, 205, 196, 0.4);
  }
  50% { 
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(78, 205, 196, 0.6);
  }
}`}
        </pre>
      </div>
    </div>
  )
}

export default CelebrationAnimation