import React from 'react'
import { Link } from 'react-router-dom'
import './AnimationCard.css'

const AnimationCard = ({ title, description, path, preview }) => {
  return (
    <Link to={path} className="animation-card">
      <div className="card-preview">
        {preview}
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </Link>
  )
}

export default AnimationCard