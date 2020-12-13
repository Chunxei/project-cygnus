import React from 'react';
import './Home.scss';

import Button from '../../components/Button';

import cardboardCutout1 from '../../assets/images/cardboard-space-cutout-small-2.png';
import cardboardCutout2 from '../../assets/images/cardboard-space-cutout-large-3.png';
import cloudsSmall1 from '../../assets/images/clouds-sm.png';
import cloudsMedium1 from '../../assets/images/clouds-md.png';
import cloudsLarge1 from '../../assets/images/clouds-lg.png';
// import { ReactComponent as Cutout } from '../../assets/images/cardboard-space-cutout-large.svg';

function Home(): JSX.Element {
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
            since the dawn of sentience
            <br />
            we have dreamed of a
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

          <h2>PROJECT CYGNUS</h2>
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
    </main>
  );
}

export default Home;
