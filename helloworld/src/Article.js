import { React } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './Article.scss';
import Gobou from "./Gobou";


function Article() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Gobou" component={Gobou} />
      </Switch>
    </BrowserRouter>
  );
}

export default Article;
