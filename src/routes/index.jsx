import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProductCatalog from '../containers/ProductCatalog';
import Product from '../containers/Product';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ProductCatalog} />
      <Route exact path="/produto/:name" component={Product} />
    </Switch>
  );
};

export default Routes;
