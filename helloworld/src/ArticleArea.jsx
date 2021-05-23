import { React } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom';

import './Article.scss';
import Welcome from "./welcome.jsx";
import FoodTemplate from "./articles/FoodTemplate";
import NotFound from "./notfound/NotFound";
import { hooks_functions } from './commons/HooksFunctions.js';

const Articles = (props) => {
  // get OK
  // const history = useHistory();
  const my_url_name = hooks_functions.getMyUrlName(useLocation);

  // const SwitchRenderArticles = () =>{
  //   if(functions.hasMyUrlNameInDatasets(my_url_name)){
  //     return(
  //       <Switch>
  //         < Route exact path="/" >
  //           <Welcome />
  //         </Route >
  //         < Route path="/Articles/*" >
  //           <FoodTemplate />
  //         </Route >
  //       </Switch>
  //     );
  //   }
  //   else{
  //     return (
  //       <Switch>
  //         <Route>
  //           <NotFound />
  //         </Route>
  //       </Switch>
  //     );
  //   }
  // }

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
