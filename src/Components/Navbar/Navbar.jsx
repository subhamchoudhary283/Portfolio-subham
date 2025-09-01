import React, { useRef, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Navbar.css'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
  }
  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
  }

  return (
    <div className='navbar'>
      <div className='subh'>SUBHAM CHOUDHARY</div>
      <img onClick={openMenu} className='nav-mob-open' src={menu_open} alt="" />
      <ul ref={menuRef} className='nav-menu'>
        <img onClick={closeMenu} className='nav-mob-close' src={menu_close} alt="" />
        <li onClick={() => setMenu('home')}>
          <AnchorLink className='al' href='#home' >
            <p className={menu === 'home' ? 'active' : ''}>Home</p>
          </AnchorLink>
        </li>
        <li onClick={() => setMenu('about')}>
          <AnchorLink className='al' href='#about' offset={50}>
            <p className={menu === 'about' ? 'active' : ''}>About Me</p>
          </AnchorLink>
        </li>
        <li onClick={() => setMenu('services')}>
          <AnchorLink className='al' href='#services' offset={50}>
            <p className={menu === 'services' ? 'active' : ''}>Services</p>
          </AnchorLink>
        </li>
        <li onClick={() => setMenu('portfolio')}>
          <AnchorLink className='al' href='#work' offset={50}>
            <p className={menu === 'portfolio' ? 'active' : ''}>Portfolio</p>
          </AnchorLink>
        </li>
        <li onClick={() => setMenu('contact')}>
          <AnchorLink className='al' href='#contact' offset={50}>
            <p className={menu === 'contact' ? 'active' : ''}>Contact</p>
          </AnchorLink>
        </li>
      </ul>
      <div className='nav-connect'>
        <AnchorLink className='al' href='#contact' offset={50}>
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  )
}

export default Navbar
