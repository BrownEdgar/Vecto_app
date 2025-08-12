// components/UI/PosterVideo.tsx
import { RefObject } from 'react'
import './PosterVideo.scss'

interface PosterVideoProps {
  isPlaying: boolean
  videoRef: RefObject<HTMLVideoElement | null>
  videoUrl?: string
}

export default function PosterVideo({
  isPlaying,
  videoRef,
  videoUrl,
}: PosterVideoProps) {
  if (!isPlaying || !videoUrl) return null
  return (
    <div className={`PosterVideo ${!isPlaying ? 'PosterVideoVideo-hide' : ''}`}>
      <div className="PosterVideo__fon"></div>
      <video className={`PosterVideo__box`} ref={videoRef} autoPlay muted>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  )
}
