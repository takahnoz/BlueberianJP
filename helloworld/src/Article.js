import { React } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './Article.scss';
import Welcome from "./welcome";
import Gobou from "./articles/Gobou";
import Blueberry from "./articles/Blueberry";


function Articles() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/Gobou" component={Gobou} />
        <Route exact path="/Blueberry" component={Blueberry} />
      </Switch>
    </BrowserRouter>
  );
}

export default Articles;
