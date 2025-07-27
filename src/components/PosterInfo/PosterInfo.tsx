import { JSX } from 'react'
import './PosterInfo.scss'
import { IMovieFeatured } from '@/types'
import { secondsToHoursAndMinutes } from '@/utils/secondsToHoursAndMinutes'

interface IPosterInfo {
  movie: IMovieFeatured | undefined
  isPlaying: boolean,
  togglePlaying: () => void
}
function PosterInfo({ movie, isPlaying, togglePlaying }: IPosterInfo): JSX.Element {
  return (
    <div className="PosterInfo">
      <div className="PosterInfo__content">
        <h1 className="PosterInfo__Title">{movie?.Title}</h1>
        <ul className="PosterInfo__Time">
          <li>{movie?.ReleaseYear}</li>
          <li>{movie?.MpaRating}</li>
          <li>{movie?.Duration && secondsToHoursAndMinutes(movie.Duration)}</li>
        </ul>
        <p className="PosterInfo__Text">{movie?.Description}</p>
        <div className="PosterInfo__Buttons">
          <button
            className="PosterInfo__Buttons-Play"
            onClick={togglePlaying}
          >
            {isPlaying ? "⏹︎ Stop" : "► Play"}
          </button>
          <button className="PosterInfo__Buttons-Info">More info</button>
        </div>
      </div>
    </div>
  )
}

export default PosterInfo
