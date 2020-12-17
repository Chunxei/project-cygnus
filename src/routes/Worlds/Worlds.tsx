import React from 'react';
import './Worlds.scss';

import randomInRange from '../../utils/randomNumberInRange';

import WorldCard from '../../components/WorldCard';

import worldsData from '../../data/planets.mock.json';

function Worlds(): JSX.Element {
  //
  const worldsList = worldsData.map((world, ind) => (
    <WorldCard
      key={world.id}
      id={world.id}
      planet={world.planet}
      starSystem={world.starSystem}
      image={world.images.space[randomInRange(0, world.images.space.length - 1)]}
      description={world.description}
      style={{
        marginBottom: '50px',
        marginTop: '20px',
        opacity: 0,
        transform: 'translateX(250px)'
      }}
      onLoadStyle={{
        transition: `transform 0.5s 0.${ind}s ease-in-out, opacity 0.7s 0.${ind}s ease-in-out`,
        opacity: 1,
        transform: 'translateX(0)'
      }}
    />
  ));

  return (
    <div className="Worlds">
      <h1 className="page-title page-title--light">Worlds</h1>
      { worldsList }
    </div>
  );
}

export default Worlds;
