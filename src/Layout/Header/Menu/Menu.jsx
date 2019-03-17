import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import Overlay from './Overlay';
import Navigation from './Navigation';
import Item from './Item';
import MenuStyled from './MenuStyled';

const Menu = ({ isMenuOpen, setIsMenuOpen, history }) => {
  const changeRoute = (url) => {
    history.push(url);
    setIsMenuOpen(false);
  };

  return (
    <Overlay
      isMenuOpen={isMenuOpen}
      id="overlay"
    >
      <Navigation>
        <MenuStyled>
          {[
            {
              text: 'Poverty to empowerment in chicago',
              url: '/article/poverty-to-empowerment-in-chicago',
            },
            {
              text: 'Divided American Lives During War',
              url: '/article/divided-american-lives-during-war',
            },
            {
              text: 'The Future of Gasoline',
              url: '/article/the-future-of-gasoline',
            },
          ].map(menuOption => (
            <Item
              key={menuOption.text}
              aria-hidden
              onClick={() => changeRoute(menuOption.url)}
            >
              {menuOption.text}
            </Item>
          ))}
        </MenuStyled>
      </Navigation>
    </Overlay>
  );
};

Menu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(Menu);
