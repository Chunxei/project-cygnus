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
      case 'Worlds':
      case 'Missions':
      case 'Starview':
      case 'About':
      case 'Enroll':
        document.title = `${pageName} - Project Cygnus`;
        setBannerTitle(pageName);
        break;
      case '/':
      case 'Home':
      default:
        setBannerTitle('Home');
        document.title = 'Project Cygnus';
        break;
    }
    window.scrollTo(0, 0);
  }, [pathname, setBannerTitle]);

  return null;
}

export default ScrollToTop;
