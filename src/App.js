import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { NotFound } from './components/views/NotFound/NotFound';
import { Products } from '../src/components/features/Products/Products';
import { ProductPage } from '../src/components/views/ProductPage/ProductPage';
import { Cart } from '../src/components/views/Cart/Cart';

import { store } from './redux/store';

import {
  createTheme,
  StylesProvider,
  ThemeProvider,
} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import './styles/bootstrap.scss';

const theme = createTheme({
  palette: {
    primary: { main: '#2B4C6F' },
  },
});

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Switch>
              <Route className="Homepage" exact path="/" component={Homepage} />
              <Route
                className="Products"
                exact
                path="/products"
                component={Products}
              />
              <Route
                className="ProductPage"
                exact
                path="/product/:id"
                component={ProductPage}
              />
              <Route className="Cart" exact path="/cart" component={Cart} />
              <Route className="NotFound" path="*" component={NotFound} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };
