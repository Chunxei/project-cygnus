import React, {
  useEffect,
  useRef,
  useState
} from 'react';
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
  const [headerType, setHeaderType] = useState<'home' | 'worlds' | 'starview' | 'missions' | 'about' | ''>('home');
  const headerRef = useRef<HTMLElement | null>(null);

  const scrollHandler = () => {
    if (headerType === 'home') {
      if (window.scrollY > 40 && headerRef.current && !headerRef.current.classList.contains('scrolled')) {
        headerRef.current.classList.add('scrolled');
      } else if (window.scrollY <= 40 && headerRef.current && headerRef.current.classList.contains('scrolled')) {
        headerRef.current.classList.remove('scrolled');
      }
    }
  };

  useEffect(() => {
    switch (bannerTitle) {
      case 'Worlds':
        setHeaderType('worlds');
        break;
      case 'Starview':
        setHeaderType('starview');
        break;
      case 'Missions':
      case 'Planet':
        setHeaderType('missions');
        break;
      case 'About':
      case 'Enroll':
        setHeaderType('about');
        break;
      case '/':
      case 'Home':
        setHeaderType('home');
        break;
      default:
        setHeaderType('');
        break;
    }
  }, [bannerTitle]);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => (
      window.removeEventListener('scroll', scrollHandler)
    );
  }, []);

  return (
    <header className={`Header ${headerType}`} ref={headerRef}>
      <div className="header-bg" />
      <div className="banner-title">
        { bannerTitle }
      </div>
      <Link to="/home" className="brand-logo-shadowed">
        <img src={cygnusLogo} alt="project cygnus logo" />
      </Link>
      <Navigation headerType={headerType} />
    </header>
  );
}

export default Header;
