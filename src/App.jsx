import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from './Screens/Index/Index';
import FirstArticle from './Screens/FirstArticle/FirstArticle';
import Layout from './Layout/Layout';

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
        <Layout>
          <Route
            path="/"
            exact
            component={Index}
          />
          <Route
            path="/firstArticle"
            component={FirstArticle}
          />
        </Layout>
      </isMobileContext.Provider>
    </BrowserRouter>
  );
};

export default App;
