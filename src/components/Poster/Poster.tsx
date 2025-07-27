import { JSX } from 'react';
import "./Poster.scss";
import { useAppSelector } from '@/app/hooks';
import { getFeaturedMovie } from '@/features/movies/moviesSlice';
import PosterInfo from '../PosterInfo/PosterInfo';

function Poster(): JSX.Element {
  const movie = useAppSelector(getFeaturedMovie)
  const bgImage = `./images/FeaturedCoverImage.png`;

  return (
    <div className='Poster' style={{
      backgroundImage: `url(${bgImage})`,
    }}>
      <PosterInfo movie={movie} />
    </div >
  );
}

export default Poster;
