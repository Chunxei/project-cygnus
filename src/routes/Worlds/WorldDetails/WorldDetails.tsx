/* eslint-disable react/jsx-props-no-spreading */
import React, { ImgHTMLAttributes, useState } from 'react';
import './WorldDetails.scss';
import { useParams } from 'react-router-dom';

import planetsData from '../../../data/planets.mock.json';

function WorldDetails(): JSX.Element {
  //
  const { planetName } = useParams() as Record<string, string>;
  const planetInfo = planetsData.filter((planet) => planet.planet === planetName)[0];
  const planetPhotos = [...planetInfo.images.space, ...planetInfo.images.surface];

  const [selectedImage, setSelectedImage] = useState({
    src: `${process.env.PUBLIC_URL}/images/${planetInfo.images.space[0]}`,
    style: { maxWidth: '98%' }
  } as ImgHTMLAttributes<HTMLImageElement>);

  const photoGallery = planetPhotos.map((planetImage, ind) => {
    const imgProps: ImgHTMLAttributes<HTMLImageElement> = {
      src: `${process.env.PUBLIC_URL}/images/${planetImage}`,
      style: { maxWidth: ind === 0 ? '98%' : '' }
    };

    return (
      <button
        key={planetImage}
        className="world-details__image-thumb"
        type="button"
        onClick={() => setSelectedImage(imgProps)}
      >
        <img {...imgProps} alt="" />
      </button>
    );
  });

  return (
    <div className="WorldDetails world-details">
      <h1 className="page-title page-title--dark page-title--planet">{ planetName }</h1>
      <div className="world-details__data-and-images">
        <div className="world-details__images-card">
          <img {...selectedImage} alt="" />

          <div className="world-details__image-thumbs">
            { photoGallery }
          </div>
        </div>
        <div className="world-details__data-card">
          {}
        </div>
      </div>
      <div className="world-details__description">
        { planetInfo.description }
      </div>
    </div>
  );
}

export default WorldDetails;
