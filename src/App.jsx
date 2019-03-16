import React, { useEffect, useState } from 'react';
import { Reset } from 'styled-reset';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from './Screens/Index/Index';
import Article from './Screens/Article/Article';
import Layout from './Layout/Layout';
import GlobalStyle from './GlobalStyle';

const initialIsMobile = window.innerWidth <= 576;
export const isMobileContext = React.createContext(initialIsMobile);

const App = () => {
  const [isMobile, setIsMobile] = useState(initialIsMobile);
  useEffect(() => {
    window.addEventListener('resize', (event) => {
      const windowWidth = event.currentTarget.innerWidth;
      const isCurrentlyMobile = windowWidth <= 576;
      setIsMobile(isCurrentlyMobile);
    });
  });

  return (
    <BrowserRouter>
      <isMobileContext.Provider value={isMobile}>
        <Reset />
        <GlobalStyle />
        <Layout>
          <Route
            path="/"
            exact
            component={Index}
          />
          <Route
            path="/article/:name"
            component={Article}
          />
        </Layout>
      </isMobileContext.Provider>
    </BrowserRouter>
  );
};

export default App;
