import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';
import Logo from './Logo';
import HeaderWrapper from './HeaderWrapper';
import HamburgerAndLogoWrapper from './HamburgerAndLogoWrapper';
import BurgerButton from './Hambruger/Hamburger';

const Header = ({ location }) => (
  <HeaderWrapper>
    <HamburgerAndLogoWrapper>
      <BurgerButton />
      <Logo>The Fortnightly</Logo>
    </HamburgerAndLogoWrapper>
    <FontAwesomeIcon icon={location.pathname === '/' ? faSearch : faShareAlt} />
  </HeaderWrapper>
);

Header.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
};

export default withRouter(Header);
