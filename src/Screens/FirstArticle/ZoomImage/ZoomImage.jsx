import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { isMobileContext } from '../../../App';
import ZoomImageWrapper from './ZoomImageWrapper';
import Frame from './Frame';
import Image from './Image';


const ZoomImage = (props) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const isMobile = useContext(isMobileContext);
  const { imageWidth, imageHeight, ...innerProps } = props;

  const zoomOut = () => {
    window.removeEventListener('scroll', zoomOut);
    setIsZoomed(false);
  };

  const zoomIn = () => {
    window.addEventListener('scroll', zoomOut);
    setIsZoomed(true);
  };

  const toggleZoom = () => {
    isZoomed ? zoomOut() : zoomIn();
  };

  const pose = isZoomed ? 'zoom' : 'init';

  return (
    <ZoomImageWrapper
      width={imageWidth}
      height={imageHeight}
      onClick={toggleZoom}
    >
      <Frame
        pose={pose}
        className="frame"
      />
      <Image
        isMobile={isMobile}
        pose={pose}
        {...innerProps}
      />
    </ZoomImageWrapper>
  );
};

ZoomImage.propTypes = {
  imageWidth: PropTypes.string.isRequired,
  imageHeight: PropTypes.number.isRequired,
};

export default ZoomImage;
