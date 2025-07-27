
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { fetchTodo, getAllMovies } from '@/features/movies/moviesSlice';
import Navbar from '@/components/Navbar/Navbar';
import Poster from '@/components/Poster/Poster';
import SliderRow from '@/components/Slider/SliderRow';

export default function Home() {
  const dispatch = useAppDispatch()
  const movies = useAppSelector(getAllMovies)
  const [toggleNavbar, setToggleNavbar] = useState(false);
  console.log("toggleNavbar", toggleNavbar);

  useEffect(() => {
    dispatch(fetchTodo())
  }, [dispatch])

  return (
    <div className='wrapper'>
      <main className='main'>
        <Navbar toggleNavbar={toggleNavbar} setToggleNavbar={setToggleNavbar} />
        <Poster />
        <SliderRow />
      </main>
    </div>
  )
}
