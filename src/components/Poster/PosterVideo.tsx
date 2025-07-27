// components/UI/PosterVideo.tsx
import { RefObject } from 'react'


interface PosterVideoProps {
  isPlaying: boolean
  videoRef: RefObject<HTMLVideoElement | null>
  videoUrl?: string

}

export default function PosterVideo({ isPlaying, videoRef, videoUrl }: PosterVideoProps) {
  if (!isPlaying || !videoUrl) return null
  return (
    <video
      className={`Poster__video ${!isPlaying ? 'Poster__video-hide' : ''}`}
      ref={videoRef}
      autoPlay
      muted
    >
      <source src={videoUrl} type="video/mp4" />
    </video>
  )
}
