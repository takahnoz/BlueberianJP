import { React } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom';

import './Article.scss';
import Welcome from "./welcome.js";
import FoodTemplate from "./articles/FoodTemplate.js";
import NotFound from "./notfound/NotFound";
import { hooks_functions } from './commons/HooksFunctions.js';

const Articles = (props) => {
  // get OK
  // const history = useHistory();
  const my_url_name = hooks_functions.getMyUrlName(useLocation);

  return (
    <Switch>
      < Route exact path="/" >
        <Welcome />
      </Route >
      < Route path="/Articles/*" >
        <FoodTemplate />
      </Route >
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

// export to Main.js
export default Articles;
