import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import Container from './Container';

const Layout = ({ children }) => (
  <Container>
    <Header />
    {children}
  </Container>
);

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Layout;
