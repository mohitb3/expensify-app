import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';

const Component1 = () => (
  <div>
    This is from Component1
  </div>
);

const Component2 = () => (
  <div>
    This is from Component2
  </div>
);

const Component3 = () => (
  <div>
    This is from Component3
  </div>
);

const Component4 = () => (
  <div>
    This is from Component4
  </div>
);

const NotFoundPage = () => (
  <div>
    404
  </div>
);

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Component1} exact={true} />
      <Route path="/2" component={Component2} />
      <Route path="/3" component={Component3} />
      <Route path="/4" component={Component4} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));