import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type ScrollProps = {
  setBannerTitle: React.Dispatch<React.SetStateAction<string>>
}

function ScrollToTop(props: ScrollProps): null {
  const {
    setBannerTitle
  } = props;
  const { pathname } = useLocation();

  useEffect(() => {
    const pathArray = pathname.match(/^\/\w*(?:-*\w*)*(?=\/?)/i);
    const currentPage = pathArray ? pathArray[0] : '/';
    // console.log(currentPage);
    const pageName = currentPage[1]
      ? currentPage[1].toUpperCase() + currentPage.substr(2)
        .replace('-', ' ')
        .replace(/(?<=\s)\w/i, (match) => (
          match.toUpperCase()
        )) : currentPage[0];
    // console.log(pageName);

    switch (pageName) {
      case 'Missions':
      case 'Worlds':
        if (pathname.match(new RegExp(`(?<=${pageName}\\/)\\w+`, 'i'))) {
          document.title = `${pageName.substr(0, pageName.length - 1)} Details - Project Cygnus`;
          setBannerTitle(pageName === 'Missions' ? 'Missions' : 'Planet');
        } else {
          document.title = `${pageName} - Project Cygnus`;
          setBannerTitle(pageName);
        }
        break;
      case 'Starview':
      case 'About':
      case 'Enroll':
        document.title = `${pageName} - Project Cygnus`;
        setBannerTitle(pageName);
        break;
      case '/':
      case 'Home':
        setBannerTitle('Home');
        document.title = 'Project Cygnus';
        break;
      default:
        setBannerTitle('');
        document.title = 'Project Cygnus';
        break;
    }
    window.scrollTo(0, 0);
  }, [pathname, setBannerTitle]);

  return null;
}

export default ScrollToTop;
