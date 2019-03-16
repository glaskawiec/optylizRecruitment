import posed from 'react-pose';
import styled from 'styled-components';

const Frame = posed.div({
  init: {
    applyAtEnd: { display: 'none' },
    opacity: 0,
  },
  zoom: {
    applyAtStart: { display: 'block' },
    opacity: 0.5,
  },
});

const FrameStyled = styled(Frame)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  background: white;
  transform: translateZ(0);
`;

export default FrameStyled;
