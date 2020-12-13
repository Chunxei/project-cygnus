import React from 'react';
import './Loading.scss';
import DotLoader from 'react-spinners/DotLoader';
import RotateLoader from 'react-spinners/RotateLoader';

type LoadingProps = {
  loader: 'dot' | 'rotate',
  loading?: true,
  forPageLoad?: boolean,
  size?: number,
  color?: string,
};

function Loading({
  loading,
  loader,
  forPageLoad,
  size,
  color
}: LoadingProps): JSX.Element {
  //
  const loaders = {
    dot: (
      <DotLoader
        // css="margin: 40vh 47vw;"
        size={size || 10}
        color={color || '#999'}
        loading={loading}
      />
    ),
    rotate: (
      <RotateLoader
        // css="margin: 40vh 47vw;"
        size={size || 80}
        color={color || '#999'}
        loading={loading}
      />
    ),
  };

  return (
    <div
      className="Loading"
      style={{
        height: forPageLoad ? '85vh' : '',
      }}
    >
      { loaders[loader] }
    </div>
  );
}

export default Loading;
