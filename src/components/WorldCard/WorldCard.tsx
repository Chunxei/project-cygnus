import React, { useEffect, useRef } from 'react';
import './WorldCard.scss';
import { Link } from 'react-router-dom';

type WorldCardProps = {
  id: string,
  planet: string,
  starSystem: 'eos' | 'eupraxia' | 'cacus' | 'pistis' | 'solar' | string,
  description: string,
  image: string | Blob,
  style?: Record<string, string | number>
  onLoadStyle?: Record<string, string | number>
}

function WorldCard(props: WorldCardProps): JSX.Element {
  //
  const {
    id,
    planet,
    starSystem,
    description,
    image,
    style,
    onLoadStyle
  } = props;
  const missionCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let missionCardNode: HTMLDivElement;

    if (missionCardRef.current) {
      missionCardNode = missionCardRef.current;
      Object.assign(missionCardRef.current.style, onLoadStyle);
    }

    return () => {
      if (onLoadStyle && missionCardNode) {
        Object.keys(onLoadStyle).forEach((key) => {
          const styleRule = key as keyof CSSStyleDeclaration;
          delete missionCardNode.style[styleRule];
        });
      }
    };
  }, []);

  return (
    <div className="WorldCard" style={style} ref={missionCardRef}>
      <div className="world-card-image">
        <img src={`${process.env.PUBLIC_URL}/images/${image}`} alt="" />
      </div>

      <div className="world-card-body">
        <p className="world-card-planet-name-backdrop">
          { planet }
          <span>
            {' - '}
            { starSystem }
          </span>
        </p>
        <div className="world-card-details">
          <h3 className="world-card-planet-name">{ planet }</h3>
          <div className="world-card-description">
            { `${description.substr(0, 180)}...` }
          </div>
        </div>

        <div className="world-card-links">
          <Link to={`/worlds/${planet}`}>
            DETAILS
          </Link>
          <Link to={`/starview/${starSystem}`}>
            STARVIEW
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WorldCard;
