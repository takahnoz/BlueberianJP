import { React } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './Article.scss';
import Welcome from "./welcome.jsx";
import Gobou from "./articles/Gobou";
import Blueberry from "./articles/Blueberry";

const Articles = () => {
  return (
  <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/article/*">
          <Gobou />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Articles;
