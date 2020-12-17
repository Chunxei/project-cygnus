import React,
{
  useRef,
  useEffect,
  useCallback
} from 'react';
import './Home.scss';

import Button from '../../components/Button';

import cardboardCutout1 from '../../assets/images/cardboard-space-cutout-small-2.png';
import cardboardCutout2 from '../../assets/images/cardboard-space-cutout-large-3.png';
import cloudsSmall1 from '../../assets/images/clouds-sm.png';
import cloudsMedium1 from '../../assets/images/clouds-md.png';
import cloudsLarge1 from '../../assets/images/clouds-lg.png';
import marginCutout from '../../assets/images/margin-cutout.png';
import hemeraUnderwater from '../../assets/images/astronaut-swim.png';
import ISS from '../../assets/images/ISS.png';
import manOnMoon1 from '../../assets/images/man-on-moon-1.png';
import manOnMoon2 from '../../assets/images/man-on-moon-2.png';
import galaxies from '../../assets/images/cardboard-space-cutout-galaxies-2.png';
import galaxiesSmall from '../../assets/images/cardboard-space-cutout-small-galaxies.png';
import cloudsSmallGalaxies2 from '../../assets/images/clouds-sm-galaxies-2.png';
import cloudsSmallGalaxies1 from '../../assets/images/clouds-sm-galaxies.png';
import cloudGalaxies1 from '../../assets/images/cloud-galaxies.png';
import discoverOtherPaths from '../../assets/images/discover-other-paths-2.png';
import cloudDiscover1 from '../../assets/images/cloud-discover-other-paths-1.png';
import cloudsSmallDiscover1 from '../../assets/images/clouds-sm-discover-other-paths-1.png';
import leftPortal from '../../assets/images/left-portal.png';
import rightPortal from '../../assets/images/right-portal.png';
import cygnusLogoLarge from '../../assets/images/cygnus-logo-large-shadowed.png';

import nasaLogo from '../../assets/images/nasa-logo.png';
import cnesLogo from '../../assets/images/cnes-logo.png';
import jaxaLogo from '../../assets/images/jaxa-logo.png';
import ukSpaceAgencyLogo from '../../assets/images/uk-space-agency.png';
import roscosmosLogo from '../../assets/images/roscosmos-logo.png';
import cnsaLogo from '../../assets/images/cnsa-logo.png';

// import { ReactComponent as Cutout } from '../../assets/images/cardboard-space-cutout-large.svg';

function Home(): JSX.Element {
//
  const milestoneTimelineRef = useRef<HTMLDivElement | null>(null);
  const astronautSwimRef = useRef<HTMLDivElement | null>(null);
  const spacePhotosRef = useRef<HTMLDivElement | null>(null);
  const exploreTheFringesRef = useRef<HTMLElement | null>(null);
  const discoverOtherPathsRef = useRef<HTMLElement | null>(null);

  const handleScrollIntoView = useCallback(() => {
    if (milestoneTimelineRef.current) {
      Array.prototype.forEach.call(milestoneTimelineRef.current.children,
        (child: HTMLDivElement) => {
          const childTop = child.getBoundingClientRect().top;

          if (window.innerHeight > childTop
            && !child.classList.contains('visible')
            && child.classList.contains('milestone-step')) {
            child.classList.add('visible');
          } else if (window.innerHeight < childTop
            && child.classList.contains('visible')
            && child.classList.contains('milestone-step')) {
            child.classList.remove('visible');
          }
        });
    }

    if (astronautSwimRef.current) {
      const astroSwim = astronautSwimRef.current;
      const astroTop = astroSwim.getBoundingClientRect().top;

      if (window.innerHeight > astroTop
        && !astroSwim.classList.contains('visible')) {
        astroSwim.classList.add('visible');
      } else if (window.innerHeight < astroTop
        && astroSwim.classList.contains('visible')) {
        astroSwim.classList.remove('visible');
      }
    }

    if (spacePhotosRef.current) {
      Array.prototype.forEach.call(spacePhotosRef.current.children,
        (child: HTMLImageElement) => {
          const childTop = child.getBoundingClientRect().top;

          if (window.innerHeight > childTop - 100
            && !child.classList.contains('visible')) {
            child.classList.add('visible');
          } else if (window.innerHeight < childTop - 100
            && child.classList.contains('visible')) {
            child.classList.remove('visible');
          }
        });
    }

    if (exploreTheFringesRef.current) {
      const fringes = exploreTheFringesRef.current;
      const fringesTop = fringes.getBoundingClientRect().top;
      if (window.innerHeight > fringesTop + 200
        && !fringes.classList.contains('visible')) {
        fringes.classList.add('visible');
      }
    }

    if (discoverOtherPathsRef.current) {
      const paths = discoverOtherPathsRef.current;
      const pathsTop = paths.getBoundingClientRect().top;
      if (window.innerHeight > pathsTop + 200
        && !paths.classList.contains('visible')) {
        console.log('discover-other-paths visible');
        paths.classList.add('visible');
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollIntoView);
    return () => {
      window.removeEventListener('scroll', handleScrollIntoView);
    };
  }, [handleScrollIntoView]);

  return (
    <main className="Home">
      <section className="landing-page">
        <div className="cardboard-cutout-1">
          <img src={cardboardCutout1} alt="" />
        </div>
        <div className="cardboard-cutout-2">
          <img src={cardboardCutout2} alt="" />
          {/* <Cutout /> */}
        </div>
        <img src={cloudsSmall1} className="clouds-small-1" alt="" />
        <img src={cloudsMedium1} className="clouds-medium-1" alt="" />
        <img src={cloudsLarge1} className="clouds-large-1" alt="" />

        <div className="landing-page-text">
          <h1>space out</h1>
          <h4>join the expedition</h4>
          <p className="since-the-dawn">
            since the dawn of humanity
            <br />
            we have dreamed of a life
            <br />
            among the stars, and a legacy
            <br />
            that spans galaxies.
            <br />
            Dream no more.
          </p>

          <Button
            href="/missions"
            width="200px"
            height="60px"
            fSize="20px"
            fWeight={500}
            rad="40px"
            borderWidth="4px"
            borderColor="#fff"
          >
            GET STARTED
          </Button>

          <h2>
            CHART THE COURSE FOR OUR FUTURE.
            <br />
            OPEN NEW DOORS IN SCIENCE.
            <br />
            SEED OTHER PLANETS.
            <br />
            SAVE DYING STARS.
          </h2>
          <p className="landing-page-space-poem">
            Wild men who caught and sang the sun in flight
            <br />
            Rage, rage against the dying of the light.
            <br />
            Do not go gentle into that good night.
            <br />
            Rage, rage against the dying of the light.
          </p>
        </div>
      </section>

      <section className="journey-so-far" id="#space-milestones">
        <img src={marginCutout} className="margin-cutout" alt="" />

        <div className="space-milestones">
          <div className="space-milestones-title">
            <h1>THE JOURNEY SO FAR</h1>
            <h4>MAJOR MILESTONES IN HUMAN SPACE EXPLORATION</h4>
          </div>

          <div className="space-milestones-timeline-section">
            <div className="space-milestones-timeline" ref={milestoneTimelineRef}>
              <div className="milestone-step">
                <div className="milestone-step-date">
                  Oct. 4, 1957
                </div>
                <div className="milestone-step-achievement">
                  First artificial Earth satellite (Sputnik 1)
                </div>
              </div>
              <div className="milestone-step">
                <div className="milestone-step-date">
                  July 20, 1969
                </div>
                <div className="milestone-step-achievement">
                  First human to walk on the Moon (Neil Armstrong)
                </div>
              </div>
              <div className="milestone-step">
                <div className="milestone-step-date">
                  Dec. 15, 1970
                </div>
                <div className="milestone-step-achievement">
                  First soft landing on another planet (Venus)
                </div>
              </div>
              <div className="milestone-step">
                <div className="milestone-step-date">
                  July 14, 2015
                </div>
                <div className="milestone-step-achievement">
                  First spacecraft to fly by Pluto
                </div>
              </div>
              <div className="milestone-step">
                <div className="milestone-step-date milestone-step-emphasis">
                  Jan 11, 2021
                </div>
                <div className="milestone-step-achievement milestone-step-emphasis milestone-step-achievement-tall">
                  first confirmed evidence of an advanced alien species on an exoplanet (hemera)
                </div>
              </div>
            </div>

            <div className="space-milestones-photos" ref={spacePhotosRef}>
              <img src={ISS} alt="" />
              <img src={manOnMoon1} alt="" />
              <img src={manOnMoon2} alt="" />
              <img src={hemeraUnderwater} alt="" />
            </div>
          </div>

          <div className="space-milestones-underwater-photo" ref={astronautSwimRef}>
            <img src={hemeraUnderwater} alt="" />
          </div>

          <h6 className="your-legacy-begins">YOUR LECACY BEGINS HERE.</h6>
        </div>
      </section>

      <section className="explore-the-fringes" ref={exploreTheFringesRef}>
        <div className="explore-the-fringes-images">
          <img src={galaxies} className="galaxies-image" alt="" />
          <img src={galaxiesSmall} className="galaxies-image-2" alt="" />
          <img src={cloudsSmallGalaxies2} className="clouds-small-galaxies-2" alt="" />
          <img src={cloudsSmallGalaxies1} className="clouds-small-galaxies-1" alt="" />
          <img src={cloudGalaxies1} className="cloud-galaxies-1" alt="" />
        </div>
        <div className="explore-the-fringes-text">
          <h1>EXPLORE THE FRINGES</h1>
          <h4>OF THE MILKY WAY</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur
            <br />
            adipiscing elit. Integer eu eget amet, eget et.
            <br />
            Eget sem adipiscing integer nunc fringilla.
            <br />
            Fermentum, est nisi, urna est vel. Turpis
            <br />
            aliquet luctus cras morbi egestas nec ultrices
            <br />
            blandit.
          </p>

          <Button
            href="/worlds"
            fSize="18px"
            fWeight={600}
            width="200px"
            height="55px"
            rad="40px"
            borderWidth="4px"
            borderColor="#fff"
          >
            LEARN MORE
          </Button>
        </div>
      </section>

      <section className="discover-other-paths" ref={discoverOtherPathsRef}>
        <div className="discover-other-paths-text">
          <h1>
            DISCOVER OTHER
            {' '}
            <span>PATHS</span>
          </h1>
          <p>
            The March of Progress isn’t always made in the same direction - or by the same
            <br />
            species. Document your encounters with other distinguished bearers of higher
            <br />
            intelligence.
          </p>
        </div>
        <img src={discoverOtherPaths} className="discover-other-paths-image" alt="" />
        <img src={cloudDiscover1} className="discover-other-paths-cloud-1" alt="" />
        <img src={cloudsSmallDiscover1} className="discover-other-paths-clouds-small-1" alt="" />
      </section>

      <section className="project-cygnus-about">
        <div className="project-cygnus-crossover">
          <img src={leftPortal} className="portal-image left-portal-image" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ducimus,
            autem sequi nemo quibusdam aspernatur exercitationem aliquam hic maxime est,
            maiores ex enim repellendus architecto aperiam illo dolorem! Accusantium, dolores.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ducimus,
            autem sequi nemo quibusdam aspernatur exercitationem aliquam hic maxime est,
            maiores ex enim repellendus architecto aperiam illo dolorem! Accusantium, dolores.
          </p>
          <img src={rightPortal} className="portal-image right-portal-image" alt="" />
          <img src={cygnusLogoLarge} className="cygnus-logo-large" alt="" />
        </div>

        <div className="supporters-logos">
          <img src={nasaLogo} alt="" />
          <img src={cnesLogo} alt="" />
          <img src={jaxaLogo} alt="" />
          <img src={ukSpaceAgencyLogo} alt="" />
          <img src={roscosmosLogo} alt="" />
          <img src={cnsaLogo} alt="" />
        </div>
      </section>
    </main>
  );
}

export default Home;
