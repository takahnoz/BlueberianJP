import { React } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './Article.scss';
import Welcome from "./welcome.jsx";
import FoodTemplate from "./articles/FoodTemplate";

const Articles = () => {
  return (
  <BrowserRouter>
      <Switch>
        {/* ファイルパスがルート（完全一致）の場合 */}
        <Route exact path="/">
          <Welcome />
        </Route>
        {/* ファイルパスが/Articles/*（部分一致）の場合 */}
        <Route path="/Articles/*">
          <FoodTemplate />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Articles;
