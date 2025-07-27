import { RefObject, useEffect, useRef, useState } from 'react'
import { useAppDispatch } from '@/app/hooks'
import { fetchTodo } from '@/features/movies/moviesSlice'
import Navbar from '@/components/Navbar/Navbar'
import Poster from '@/components/Poster/Poster'
import SliderRow from '@/components/Slider/SliderRow'

export default function Home() {
  const dispatch = useAppDispatch()
  const [toggleNavbar, setToggleNavbar] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null) as RefObject<HTMLVideoElement | null>

  const togglePlaying = () => {
    setIsPlaying((prevValue) => !prevValue)
  }
  useEffect(() => {
    const element = videoRef.current
    if (!element) return
    const handleEnded = () => {
      setIsPlaying(false)
    }

    element.addEventListener('ended', handleEnded)
    return () => {
      element.removeEventListener('ended', handleEnded)
    }
  }, [videoRef])

  useEffect(() => {
    dispatch(fetchTodo())
  }, [dispatch])

  return (
    <div className="wrapper">
      <main className="main">
        <Navbar toggleNavbar={toggleNavbar} setToggleNavbar={setToggleNavbar} />
        <Poster
          isPlaying={isPlaying}
          videoRef={videoRef}
          togglePlaying={togglePlaying}
        />
        <SliderRow togglePlaying={togglePlaying} isPlaying={isPlaying} />
      </main>
    </div>
  )
}
