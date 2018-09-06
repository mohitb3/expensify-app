import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
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

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={Component1} exact={true} />
      <Route path="/2" component={Component2} />
      <Route path="/3" component={Component3} />
      <Route path="/4" component={Component4} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));