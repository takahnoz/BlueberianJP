import { React } from 'react'
import {
  BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';

import './Article.scss';
import Welcome from "./welcome.jsx";
import FoodTemplate from "./articles/FoodTemplate";
import NotFound from "./notfound/NotFound";

const Articles = (props) => {
  const history = useHistory();
  return (
      <Switch>
        {/* ファイルパスがルート（完全一致）の場合 */}
        <Route exact path="/">
          <Welcome />
        </Route>
        {/* ファイルパスが/Articles/*（部分一致）の場合 */}
        <Route path="/Articles/">
          <FoodTemplate />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
  );
}

export default Articles;
