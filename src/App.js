import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/WaiterContainer';
import Kitchen from './components/views/Kitchen/Kitchen';
import BookingNew from './components/views/BookingNew/BookingNew';
import BookingEdit from './components/views/BookingEdit/BookingEdit';
import EventsNew from './components/views/EventsNew/EventsNew';
import EventsEdit from './components/views/EventsEdit/EventsEdit';
import OrderNew from './components/views/OrderNew/OrderNew';
import OrderEdit from './components/views/OrderEdit/OrderEdit';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import store from './redux/store.js';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2c3e50' },
    secondary: { main: '#d35400' },
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
                <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
                <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
                <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />

                <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={BookingNew} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={BookingEdit} />

                <Route exact path={`${process.env.PUBLIC_URL}/tables/events/new`} component={EventsNew} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables/events/:id`} component={EventsEdit} />
                
                <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={OrderNew} />
                <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={OrderEdit} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
