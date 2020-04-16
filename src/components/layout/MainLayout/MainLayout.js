import React from 'react';
import PageNav from '../PageNav/PageNav';
import PropTypes from 'prop-types';
import {AppBar, Toolbar, Container} from '@material-ui/core';

const MainLayout = ({children}) => {
  return(
    <div className='MainLayout'>
      <AppBar>
        <Container maxWidth='lg'>
          <Toolbar disableGutters>
            <PageNav/>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth='lg'>
        <Toolbar />
        {children}
      </Container>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;