import SearchIcon from '@assets/icons/SearchIcon.png'
import HomeIcon from '@assets/icons/Home.png'
import MaskIcon from '@assets/icons/Mask.png'
import MovieIcon from '@assets/icons/Movie.png'
import PlayerIcon from '@assets/icons/Player.png'
import WatchLeterIcon from '@assets/icons/Timer.png'
import { SidebarLink } from '@/types/interfaces'

export const sidebarLinks: SidebarLink[] = [
  { label: 'Search', icon: SearchIcon },
  { label: 'Home', icon: HomeIcon },
  { label: 'TV Shows', icon: PlayerIcon },
  { label: 'Movies', icon: MovieIcon },
  { label: 'Genres', icon: MaskIcon },
  { label: 'Watch Later', icon: WatchLeterIcon },
]

export const bottomLinks: string[] = ['LANGUAGE', 'GET HELP', 'EXIT']
