import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    Expense Dashboard
  </div>
);

const NotFoundPage = () => (
  <div>
    404
    <br />
    <Link to="/">Link to Home</Link> -> Doesn't refresh page
    <br />
    <a href="/">Anchor tag to Home</a> -> Refreshes entire page because it makes call to server
  </div>
);

const routes = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));