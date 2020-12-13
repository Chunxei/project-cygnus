import React, { useState } from 'react';
import './App.scss';

import ScrollToTop from './layout/ScrollToTop';
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';
import ErrorBoundary from './layout/ErrorBoundary';

function App(): JSX.Element {
  //
  const [bannerTitle, setBannerTitle] = useState<string>('Home');

  return (
    <div className="App">
      <ScrollToTop setBannerTitle={setBannerTitle} />
      <Header bannerTitle={bannerTitle} />
      <ErrorBoundary>
        <Main />
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default App;
