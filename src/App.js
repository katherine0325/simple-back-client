import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'antd/dist/antd.css';

import DefaultLayout from './layout/default';

import Home from './pages/home/Home';
import Example from './pages/example/Example';
import Login from './pages/login/Login';

const AppRouter = () => (
  <Router>
    <div>
      <Route path="/login" component={Login} />
      <DefaultLayout path="/" exact component={Home} />
      <DefaultLayout path="/example" component={Example} />
    </div>
  </Router>
);

export default AppRouter;