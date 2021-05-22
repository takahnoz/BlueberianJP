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
        {/* <Route exact path="/" component={Welcome} />
        <Route exact path="/Gobou" component={Gobou} />
        <Route exact path="/Blueberry" component={Blueberry} /> */}
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/Gobou">
          <Gobou />
        </Route>
        <Route path="/Blueberry">
          <Blueberry />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Articles;
