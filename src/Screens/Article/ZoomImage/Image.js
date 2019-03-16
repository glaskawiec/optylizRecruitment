import posed from 'react-pose';
import styled from 'styled-components';

const Image = posed.img({
  init: {
    position: 'static',
    width: props => (props.isMobile ? '100vw' : 'auto'),
    height: 'auto',
    scaleX: props => (props.isMobile ? 1.6 : 1),
    originX: 50,
    transition: {
      duration: 400,
    },
    flip: true,
  },
  zoom: {
    position: 'fixed',
    originX: 50,
    scaleX: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transition: {
      duration: 400,
    },
    flip: true,
  },
});

const ImageStyled = styled(Image)`
  cursor: pointer;
  display: block;
  max-width: 100%;
  margin: auto;
`;

export default ImageStyled;
