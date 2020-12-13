import React from 'react';
import './Button.scss';

import { Link } from 'react-router-dom';

import MoonLoader from 'react-spinners/MoonLoader';

export type ButtonProps = {
  children: React.ReactNode,
  async?: boolean,
  href?: string,
  width?: string,
  height?: string,
  padX?: string,
  padY?: string,
  font?: string,
  fSize: string,
  fWeight: number,
  lineHeight?: string,
  color?: string,
  bgColor?: string,
  borderColor?: string,
  borderWidth?: string,
  loaderSize?: number,
  centerLoader?: boolean,
  rad: string,
  disabled?: boolean,
  disabledBgColor?: string,
  disabledBorder?: string,
  disabledFontColor?: string,
  onClick?: (ev: React.SyntheticEvent) => void,
};

// TODO: update Link route
const Button: React.FC<ButtonProps> = (props) => {
  const {
    async = false,
    children,
    href,
    width,
    height,
    padX,
    padY,
    font,
    fSize,
    fWeight,
    lineHeight,
    color,
    bgColor,
    borderColor,
    borderWidth,
    rad,
    loaderSize,
    centerLoader,
    disabled,
    onClick,
  } = props;

  const buttonStyles = (
    fontSize: string, fontWeight: number, radius: string, lineH?: string, paddingX?: string,
    paddingY?: string, fontFamily?: string, backgroundColor?: string, disabld?: boolean,
    wdth?: string, hght?: string, bdColor?: string, bdWidth?: string, fontColor?: string,
  ) => (
    {
      paddingLeft: paddingX || '',
      paddingRight: paddingX || '',
      paddingTop: paddingY || '',
      paddingBottom: paddingY || '',
      width: wdth || '',
      height: hght || '',
      borderRadius: radius || '',
      borderWidth: bdWidth || '',
      borderStyle: bdWidth ? 'solid' : '',
      borderColor: bdColor || '',
      color: fontColor || '#fff',
      fontFamily: fontFamily || '',
      fontSize,
      fontWeight,
      lineHeight: lineH || fontSize,
      backgroundColor: disabld ? '#999' : backgroundColor || '',
    }
  );

  const handleClick = (event: React.SyntheticEvent) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    if (!href) event.preventDefault();
    if (onClick) onClick(event);
  };

  return (
    <>
      <Link
        to={href || ''}
        style={buttonStyles(
          fSize, fWeight, rad, lineHeight, padX, padY,
          font, bgColor, disabled, width, height,
          borderColor, borderWidth, color,
        )}
        className="Button cta-button"
        onClick={handleClick}
      >
        {
        async
          ? (
            <MoonLoader
              css={centerLoader ? 'margin: 0 auto;' : 'margin: 0 10px 0 0;'}
              size={loaderSize || 20}
              color={color || '#fff'}
              loading={async}
            />
          ) : children
        }
      </Link>
    </>
  );
};

export default Button;
