import React, { useEffect, useState } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import HamburgerInner from './HamburgerInner';
import HamburgerBox from './HamburgerBox';
import HamburgerWrapper from './HamburgerWrapper';

const Hamburger = ({ location, history }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const isHome = location.pathname === '/';
    isHome ? setIsActive(false) : setIsActive(true);
  });

  const onClick = () => {
    history.push({ pathname: '/' });
  };

  return (
    <HamburgerWrapper
      onClick={onClick}
      id="hamburger"
    >
      <HamburgerBox>
        <HamburgerInner isActive={isActive} />
      </HamburgerBox>
    </HamburgerWrapper>
  );
};

Hamburger.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
};

export default withRouter(Hamburger);
