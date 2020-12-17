import React from 'react';
import './Missions.scss';
import { useParams } from 'react-router-dom';

import randomInRange from '../../utils/randomNumberInRange';

import MissionCard from '../../components/MissionCard';

import missionsData from '../../data/missions.mock.json';

function Missions(): JSX.Element {
  //
  const { planetName } = useParams() as Record<string, string | undefined>;

  const missionsDataFiltered = planetName
    ? missionsData.filter((mission) => mission.planet === planetName)
    : missionsData;

  const missionsList = missionsDataFiltered.map((mission, ind) => (
    <MissionCard
      key={mission.id}
      id={mission.id}
      title={mission.title}
      type={mission.type}
      planet={mission.planet}
      starSystem={mission.starSystem}
      duration={mission.duration}
      image={mission.images.surface[randomInRange(0, mission.images.surface.length - 1)]}
      style={{
        marginBottom: '50px',
        opacity: 0,
        transform: 'translateX(250px)'
      }}
      onLoadStyle={{
        // transition: `transform 0.${5 + ind}s ease-in-out, opacity 0.${7 + ind}s ease-in-out`,
        transition: `transform 0.5s 0.${ind}s ease-in-out, opacity 0.7s 0.${ind}s ease-in-out`,
        opacity: 1,
        transform: 'translateX(0)'
      }}
    />
  ));

  return (
    <div className="Missions">
      <h1 className="page-title page-title--dark">Missions</h1>
      { missionsList }
    </div>
  );
}

export default Missions;
