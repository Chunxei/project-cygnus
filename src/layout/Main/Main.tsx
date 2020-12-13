import React, {
  Suspense,
  lazy,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import './Main.scss';
import { Route, Switch, Redirect } from 'react-router-dom';

import Loading from '../Loading';

const homePreload = import('../../routes/Home');

const Home = lazy(() => homePreload);

function Main(): JSX.Element {
  //
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const DOMLoadedHandler = useCallback(() => {
    if (overlayRef.current) {
      if (!sessionStorage.pageLoaded) {
        overlayRef.current.classList.add('page-loaded');
        sessionStorage.setItem('pageLoaded', 'yes');
      } else {
        overlayRef.current.style.visibility = 'hidden';
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('load', DOMLoadedHandler);
    return () => {
      window.removeEventListener('load', DOMLoadedHandler);
    };
  }, [DOMLoadedHandler]);

  return (
    <div className="Main">
      <Suspense fallback={<Loading loader="dot" forPageLoad />}>
        <div className="welcome-overlay" ref={overlayRef}>
          <div className="overlay-top-slide">
            A STEP FOR YOU.
          </div>
          <div className="overlay-bottom-slide">
            A LEAP FOR HUMANITY.
          </div>
        </div>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Redirect exact from="/" to="/home" />
        </Switch>
      </Suspense>
    </div>
  );
}

export default Main;
