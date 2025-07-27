import { JSX, RefObject, useEffect } from 'react';
import "./Poster.scss";
import { useAppSelector } from '@/app/hooks';
import { getFeaturedMovie } from '@/features/movies/moviesSlice';
import PosterInfo from '../PosterInfo/PosterInfo';
import { IMovieTrending } from '@/types';

interface IPosterProps {
  isPlaying: boolean
  videoRef: RefObject<HTMLVideoElement | null>;
}

function Poster({ isPlaying, videoRef }: IPosterProps): JSX.Element {
  const selectedMovie = useAppSelector(getFeaturedMovie)!
  const bgImage = `./images/FeaturedCoverImage.png`;

  useEffect(() => {
    if (videoRef.current && isPlaying) {
      videoRef.current.load(); // перезагружает видео
      videoRef.current.play(); // запускает
    }
  }, [selectedMovie, isPlaying]);

  return (
    <>
      <div className='Poster' >
        <div className="Poster__Content" style={{
          backgroundImage: `url(${bgImage})`,
        }}>
          <PosterInfo movie={selectedMovie} />
        </div>
        (
        <video
          className={`Poster__video ${!isPlaying ? 'Poster__video-hide' : ''}`}
          ref={videoRef}
          autoPlay
          muted>
          {
            isPlaying && selectedMovie && Object.hasOwn(selectedMovie, 'VideoUrl')
              ? <source src={(selectedMovie as IMovieTrending).VideoUrl} type="video/mp4" />
              : null
          }
        </video>
        )
      </div>

    </>

  );
}

export default Poster;
