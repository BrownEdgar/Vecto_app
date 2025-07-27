import { JSX, RefObject, useEffect } from 'react'
import './Poster.scss'
import { useAppSelector } from '@/app/hooks'
import { getFeaturedMovie } from '@/features/movies/moviesSlice'
import PosterInfo from '@components/PosterInfo/PosterInfo'
import { IMovieTrending } from '@/types'
import PosterVideo from './PosterVideo/PosterVideo'

interface IPosterProps {
  isPlaying: boolean
  videoRef: RefObject<HTMLVideoElement | null>
  togglePlaying: () => void
}

function Poster({
  isPlaying,
  videoRef,
  togglePlaying,
}: IPosterProps): JSX.Element {
  const selectedMovie = useAppSelector(getFeaturedMovie)!
  const bgImage = `./images/FeaturedCoverImage.png`

  useEffect(() => {
    if (videoRef.current && isPlaying) {
      videoRef.current.load()
      videoRef.current.play()
    }
  }, [selectedMovie, isPlaying, videoRef])

  return (
    <>
      <div className="Poster">
        <div
          className="Poster__Content"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          <PosterInfo
            movie={selectedMovie}
            isPlaying={isPlaying}
            togglePlaying={togglePlaying}
          />
        </div>
        <PosterVideo
          isPlaying={isPlaying}
          videoRef={videoRef}
          videoUrl={(selectedMovie as IMovieTrending)?.VideoUrl}
        />
      </div>
    </>
  )
}

export default Poster
