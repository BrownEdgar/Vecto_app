import { useEffect, useRef, useState } from 'react'
import './Navbar.scss'
import { bottomLinks, sidebarLinks } from '@/shared/Icons'
import { Link } from 'react-router-dom'

interface INavbar {
  toggleNavbar: boolean
  setToggleNavbar: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar = ({ toggleNavbar, setToggleNavbar }: INavbar) => {
  const [activeItem, setActiveItem] = useState('Home')

  const handleSwitchMenu = (label: string) => {
    setActiveItem(label)
  }

  const navbarRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const navbarWrapper = navbarRef.current
    const handleClick = (e: MouseEvent) => {
      const condition =
        !!navbarWrapper && navbarWrapper.contains(e.target as Node)
      setToggleNavbar(() => condition)
    }
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [setToggleNavbar])

  return (
    <div
      className={`Navbar ${toggleNavbar ? 'Navbar-active' : ''}`}
      ref={navbarRef}
    >
      <div className="Navbar__topSection">
        <div
          className={`Navbar__User ${!toggleNavbar ? 'Navbar__User-hide' : ''}`}
        >
          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="avatar"
            className="avatar"
          />
          <p className="username">Sebastian</p>
        </div>

        <nav className="nav">
          {sidebarLinks.map((link) => (
            <div
              key={link.label}
              className={`
              nav__item  ${activeItem === link.label ? 'nav__item-active' : ''} ${!toggleNavbar ? 'nav__item-circle' : ''}
            `}
              onClick={() => handleSwitchMenu(link.label)}
            >
              <img src={link.icon} alt={link.label} />
              {toggleNavbar && <span>{link.label}</span>}
            </div>
          ))}
        </nav>
      </div>

      {toggleNavbar ? (
        <div className="Navbar__Bottom">
          {bottomLinks.map((label) => (
            <div key={label} className="bottomItem">
              <Link to="#">{label}</Link>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default Navbar
