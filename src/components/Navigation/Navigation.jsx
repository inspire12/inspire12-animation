import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  const location = useLocation()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const animationItems = [
    { path: '/animation/fade', label: 'Fade' },
    { path: '/animation/slide', label: 'Slide' },
    { path: '/animation/rotate', label: 'Rotate' },
    { path: '/animation/scale', label: 'Scale' },
    { path: '/animation/bounce', label: 'Bounce' },
    { path: '/animation/flip', label: 'Flip' },
    { path: '/animation/shake', label: 'Shake' },
    { path: '/animation/wave', label: 'Wave' },
    { path: '/animation/typewriter', label: 'Typewriter' },
    { path: '/animation/glow', label: 'Glow' },
    { path: '/animation/loading', label: 'Loading' },
    { path: '/animation/text-effects', label: 'Text Effects' },
    { path: '/animation/glitch', label: 'Glitch' },
    { path: '/animation/transform3d', label: '3D Transform' }
  ]

  const isAnimationActive = animationItems.some(item => item.path === location.pathname)

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Animation Gallery
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Gallery
            </Link>
          </li>
          <li 
            className="nav-item dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span 
              className={`nav-link dropdown-trigger ${isAnimationActive ? 'active' : ''}`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Animations ▼
            </span>
            <ul className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
              {animationItems.map((item) => (
                <li key={item.path} className="dropdown-item">
                  <Link 
                    to={item.path} 
                    className={`dropdown-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation