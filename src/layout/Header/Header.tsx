import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

import Navigation from '../Navigation';

import cygnusLogo from '../../assets/images/cygnus-logo-shadowed-2.png';

type HeaderProps = {
  bannerTitle: string
};

function Header(props: HeaderProps): JSX.Element {
  //
  const {
    bannerTitle
  } = props;

  const headerRef = useRef<HTMLElement | null>(null);

  const scrollHandler = () => {
    if (window.scrollY > 40 && headerRef.current && !headerRef.current.classList.contains('scrolled')) {
      headerRef.current.classList.add('scrolled');
    } else if (window.scrollY <= 40 && headerRef.current && headerRef.current.classList.contains('scrolled')) {
      headerRef.current.classList.remove('scrolled');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => (
      window.removeEventListener('scroll', scrollHandler)
    );
  }, []);

  return (
    <header className="Header" ref={headerRef}>
      <div className="header-bg" />
      <div className="banner-title">
        { bannerTitle }
      </div>
      <Link to="home" className="brand-logo-shadowed">
        <img src={cygnusLogo} alt="project cygnus logo" />
      </Link>
      <Navigation />
    </header>
  );
}

export default Header;
