import React from 'react';
import BackToTop from './BackToTop';
import Footer from './Footer';
import Header from './Header';
import Preload from './Preload';
import Topbar from './Topbar';

const Layout: React.FC<any> = ({ children }) => {
  return (
    <main>
      <Topbar />
      <Header />
      {children}
      <BackToTop />
      <Footer />
      <Preload />
    </main>
  );
};

export default Layout;
