import React, { useEffect, useRef } from 'react';
import './MissionCard.scss';

import Button from '../Button';

import geryonThumb1 from '../../assets/images/geryon-thumb-1.png';

type MissionCardProps = {
  id: string,
  title: string,
  type: string,
  planet: string,
  starSystem: string,
  duration: string,
  image: string | Blob,
  style?: Record<string, string | number>
  onLoadStyle?: Record<string, string | number>
}

function MissionCard(props: MissionCardProps): JSX.Element {
  //
  const {
    id,
    title,
    type,
    planet,
    starSystem,
    duration,
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
    <div className="MissionCard" style={style} ref={missionCardRef}>
      <div
        className="mission-card-image"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/${image})` }}
      />

      <div className="mission-card-details">
        <h3>{ title }</h3>

        <div className="mission-card-fields">
          <div className="mission-card-field">
            <h6>type</h6>
            <p>{ type }</p>
          </div>
          <div className="mission-card-field">
            <h6>planet</h6>
            <p>{ planet }</p>
          </div>
          <div className="mission-card-field">
            <h6>star system</h6>
            <p>{ starSystem }</p>
          </div>
          <div className="mission-card-field">
            <h6>duration</h6>
            <p>{ duration }</p>
          </div>
          <div className="mission-card-field">
            <Button
              href={`/missions/${planet}/${id}`}
              width="120px"
              height="40px"
              fSize="14px"
              fWeight={600}
              borderWidth="4px"
              borderColor="#fff"
              rad="40px"
            >
              DETAILS
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionCard;
