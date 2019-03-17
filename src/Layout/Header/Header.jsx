import React, { useState } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';
import Logo from './Logo';
import HeaderWrapper from './HeaderWrapper';
import HamburgerAndLogoWrapper from './HamburgerAndLogoWrapper';
import BurgerButton from './Hambruger/Hamburger';
import Menu from './Menu/Menu';

const Header = ({ location }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <HeaderWrapper>
      <HamburgerAndLogoWrapper>
        <BurgerButton
          setIsMenuOpen={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
        />
        <Menu
          setIsMenuOpen={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
        />
        <Logo>The Fortnightly</Logo>
      </HamburgerAndLogoWrapper>
      <FontAwesomeIcon icon={location.pathname === '/' ? faSearch : faShareAlt} />
    </HeaderWrapper>
  );
};

Header.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
};

export default withRouter(Header);
