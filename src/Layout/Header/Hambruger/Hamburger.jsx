import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import HamburgerInner from './HamburgerInner';
import HamburgerBox from './HamburgerBox';
import HamburgerWrapper from './HamburgerWrapper';


const Hamburger = ({
  location, history, setIsMenuOpen, isMenuOpen,
}) => {
  const [showArrow, setShowArrow] = useState(false);
  const [showCross, setShowCross] = useState(false);
  const isHome = location.pathname === '/';

  useEffect(() => {
    isHome ? setShowArrow(false) : setShowArrow(true);
    isMenuOpen ? setShowCross(true) : setShowCross(false);
  });

  const onClick = () => {
    if (isHome) {
      setIsMenuOpen(!isMenuOpen);
    } else {
      history.push({ pathname: '/' });
    }
  };

  return (
    <HamburgerWrapper
      onClick={onClick}
      id="hamburger"
    >
      <HamburgerBox>
        <HamburgerInner
          showCross={showCross}
          showArrow={showArrow}
        />
      </HamburgerBox>
    </HamburgerWrapper>
  );
};

Hamburger.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

export default withRouter(Hamburger);
