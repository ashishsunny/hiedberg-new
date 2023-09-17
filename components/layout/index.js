/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import Sticky from 'react-stickynode';
import Header from '../header/header';
import Footer from '../../components/footer'
import { StickyProvider } from '../../contexts/app/app.provider';
import theme from '../../theme';
import { ThemeUIProvider } from 'theme-ui';

export default function Layout({ children }) {
  const [isSticky, setIsSticky] = useState(false);
  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };
  return (
    <ThemeUIProvider theme={theme}>
    <React.Fragment>
      <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
        <Header className={`${isSticky ? 'sticky' : 'unSticky'}`} />
      </Sticky>
      <main
        sx={{
          variant: 'layout.main',
        }}
      >
        {children}
      </main>
      <Footer/>
    </React.Fragment>
    </ThemeUIProvider>
  );
}
