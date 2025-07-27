

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import './SliderRow.scss'
import { getTrendingMovies, setFeature } from '@/features/movies/moviesSlice';
import { useEffect, useRef } from 'react';
import { IMovieFeatured } from '@/types';



function SliderRow() {
  const trandingMovies = useAppSelector(getTrendingMovies)
  const dispath = useAppDispatch()
  const elRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = elRef.current!;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault()
      element.scrollTo({
        left: element.scrollLeft + e.deltaY,
        behavior: "smooth"
      })
    }
    element.addEventListener('wheel', onWheel)
    return () => {
      element.removeEventListener('wheel', onWheel)
    };
  }, []);
  const changePoster = (movie: IMovieFeatured) => {
    dispath(setFeature(movie))
  }

  return (
    <div className='row'>
      <div className="row__posters" ref={elRef}>
        {
          trandingMovies?.map(movie => {
            return (
              <img
                className='row__poster'
                key={movie.Id}
                onClick={() => changePoster(movie)}
                src={`images/${movie.CoverImage}`}
                alt={movie?.Title}
              />
            )
          })
        }
      </div>
    </div>
  )
}
export default SliderRow