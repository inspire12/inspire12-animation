import React from 'react'
import AnimationCard from '../../components/AnimationCard/AnimationCard'
import './Home.css'

const Home = () => {
  const animations = [
    {
      id: 'fade',
      title: 'Fade Animation',
      description: '부드러운 페이드 인/아웃 효과를 보여주는 애니메이션입니다.',
      path: '/animation/fade',
      preview: <div className="preview-element fade-preview"></div>
    },
    {
      id: 'slide',
      title: 'Slide Animation',
      description: '좌우 및 상하 슬라이드 효과를 보여주는 애니메이션입니다.',
      path: '/animation/slide',
      preview: <div className="preview-element slide-preview"></div>
    },
    {
      id: 'rotate',
      title: 'Rotate Animation',
      description: '회전 효과를 보여주는 다양한 애니메이션입니다.',
      path: '/animation/rotate',
      preview: <div className="preview-element rotate-preview"></div>
    },
    {
      id: 'scale',
      title: 'Scale Animation',
      description: '크기 변경 효과를 보여주는 애니메이션입니다.',
      path: '/animation/scale',
      preview: <div className="preview-element scale-preview"></div>
    },
    {
      id: 'bounce',
      title: 'Bounce Animation',
      description: '탄성 있는 바운스 효과를 보여주는 애니메이션입니다.',
      path: '/animation/bounce',
      preview: <div className="preview-element bounce-preview"></div>
    },
    {
      id: 'flip',
      title: 'Flip Animation',
      description: '3D 카드 뒤집기 효과를 보여주는 애니메이션입니다.',
      path: '/animation/flip',
      preview: <div className="preview-element flip-preview"></div>
    },
    {
      id: 'shake',
      title: 'Shake Animation',
      description: '진동과 흔들림 효과를 보여주는 애니메이션입니다.',
      path: '/animation/shake',
      preview: <div className="preview-element shake-preview"></div>
    },
    {
      id: 'wave',
      title: 'Wave Animation',
      description: '파도와 물결 효과를 보여주는 애니메이션입니다.',
      path: '/animation/wave',
      preview: <div className="preview-element wave-preview"></div>
    },
    {
      id: 'typewriter',
      title: 'Typewriter Animation',
      description: '타이핑 효과를 보여주는 애니메이션입니다.',
      path: '/animation/typewriter',
      preview: <div className="preview-element typewriter-preview"></div>
    },
    {
      id: 'glow',
      title: 'Glow Animation',
      description: '발광과 네온 효과를 보여주는 애니메이션입니다.',
      path: '/animation/glow',
      preview: <div className="preview-element glow-preview"></div>
    },
    {
      id: 'loading',
      title: 'Loading Animation',
      description: '다양한 로딩 스피너와 프로그레스 애니메이션입니다.',
      path: '/animation/loading',
      preview: <div className="preview-element loading-preview"></div>
    },
    {
      id: 'text-effects',
      title: 'Text Effects Animation',
      description: '다양한 텍스트 애니메이션 효과를 보여줍니다.',
      path: '/animation/text-effects',
      preview: <div className="preview-element text-effects-preview"></div>
    },
    {
      id: 'glitch',
      title: 'Glitch Animation',
      description: '디지털 글리치와 사이버펑크 효과 애니메이션입니다.',
      path: '/animation/glitch',
      preview: <div className="preview-element glitch-preview"></div>
    },
    {
      id: 'transform3d',
      title: '3D Transform Animation',
      description: '3차원 변환과 원근감을 활용한 애니메이션입니다.',
      path: '/animation/transform3d',
      preview: <div className="preview-element transform3d-preview"></div>
    },
    {
      id: 'hover-effects',
      title: 'Hover Effects Animation',
      description: '마우스 호버 시 발생하는 인터랙티브 애니메이션입니다.',
      path: '/animation/hover-effects',
      preview: <div className="preview-element hover-effects-preview"></div>
    },
    {
      id: 'morph',
      title: 'Morph Animation',
      description: '도형과 아이콘의 변형 애니메이션입니다.',
      path: '/animation/morph',
      preview: <div className="preview-element morph-preview"></div>
    },
    {
      id: 'particle',
      title: 'Particle Animation',
      description: '다양한 파티클 시스템 효과 애니메이션입니다.',
      path: '/animation/particle',
      preview: <div className="preview-element particle-preview"></div>
    },
    {
      id: 'parallax',
      title: 'Parallax Animation',
      description: '스크롤 기반 시차 효과와 깊이감 애니메이션입니다.',
      path: '/animation/parallax',
      preview: <div className="preview-element parallax-preview"></div>
    },
    {
      id: 'celebration',
      title: 'Celebration Animation',
      description: '축하와 성공을 표현하는 다양한 애니메이션 효과입니다.',
      path: '/animation/celebration',
      preview: <div className="preview-element celebration-preview"></div>
    }
  ]

  return (
    <div className="home">
      <div className="home-header">
        <h1 className="home-title">Animation Gallery</h1>
        <p className="home-description">
          다양한 웹 애니메이션 효과들을 탐색해보세요. 각 카드를 클릭하면 상세한 애니메이션 데모를 볼 수 있습니다.
        </p>
      </div>
      
      <div className="animation-grid">
        {animations.map((animation) => (
          <AnimationCard
            key={animation.id}
            title={animation.title}
            description={animation.description}
            path={animation.path}
            preview={animation.preview}
          />
        ))}
      </div>
    </div>
  )
}

export default Home