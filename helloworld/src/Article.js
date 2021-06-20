import { React } from 'react'
import { Route, Switch, /* useLocation */ } from 'react-router-dom';

import './Article.scss';
import Welcome from "./welcome.js";
import FoodTemplate from "./articles/FoodTemplate";
import NotFound from "./notfound/NotFound";
// import { FoodDataIndex } from '../assets/dataset.json';


const Articles = (props) => {
  // get OK
  // const history = useHistory();
  // const location = useLocation();
  // const my_url_name = location.pathname.split("/").pop();

  return (
      <Switch>
        {/* ファイルパスがルート（完全一致）の場合 */}
        <Route exact path="/">
          <Welcome />
        </Route>
        {/* ファイルパスが/Articles/*（部分一致）の場合 */}
        <Route path="/Articles/*">
          <FoodTemplate />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
  );
}

// export to Main.js
export default Articles;
