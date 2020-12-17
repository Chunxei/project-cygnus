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
const missionsPreload = import('../../routes/Missions');
const worldsPreload = import('../../routes/Worlds');
const worldDetailsPreload = import('../../routes/Worlds/WorldDetails');

const Home = lazy(() => homePreload);
const Missions = lazy(() => missionsPreload);
const Worlds = lazy(() => worldsPreload);
const WorldDetails = lazy(() => worldDetailsPreload);

function Main(): JSX.Element {
  //
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const DOMLoadedHandler = useCallback(() => {
    if (overlayRef.current) {
      if (!sessionStorage.pageLoaded) {
        overlayRef.current.classList.add('page-loaded');
        sessionStorage.setItem('pageLoaded', 'yes');
        window.scrollTo(0, 0);
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
      <div className="welcome-overlay" ref={overlayRef}>
        <div className="overlay-top-slide">
          A STEP FOR YOU.
        </div>
        <div className="overlay-bottom-slide">
          A LEAP FOR HUMANITY.
        </div>
      </div>

      <Suspense fallback={<Loading loader="dot" forPageLoad />}>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/missions">
            <Missions />
          </Route>
          <Route exact path="/missions/:planetName">
            <Missions />
          </Route>
          <Route path="/missions/:planetName/:missionId">
            <Missions />
          </Route>
          <Redirect exact from="/starview" to="/starview/solar" />
          <Route path="/starview/:starSystem">
            <Missions />
          </Route>
          <Route exact path="/worlds">
            <Worlds />
          </Route>
          <Route path="/worlds/:planetName">
            <WorldDetails />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default Main;
