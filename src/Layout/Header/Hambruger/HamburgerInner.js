import styled from 'styled-components';

const HamburgerInner = styled.div`
    display: block;
    top: 50%;
    margin-top: -1px;

    &::before, &::after {
      content: "";
      display: block;
    }
    
    &::before {
        top: -6px;
    }

    &::after {
      bottom: -6px;
    }
    
    &, &::before, &::after {
    width: 25px;
    height: 2px;
    background-color: #000;
    border-radius: 4px;
    position: absolute;
    transition-property: -webkit-transform;
    transition-property: transform, -webkit-transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
    }
    
    ${props => (props.isActive ? `
    &::before {
      -webkit-transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1);
      transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1);
    }

     &::after {
      -webkit-transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1);
      transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1);
    }
    
    & {
      -webkit-transform: rotate(-180deg);
      transform: rotate(-180deg);
    }`
    : '')
}    
`;

export default HamburgerInner;
