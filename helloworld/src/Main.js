import { HashRouter, Route } from "react-router-dom";
import Welcome from "./welcome.js";
import Article from './Article.js';
import Navigation from './navgation/Navigation';
import './Main.scss';

const Main = () => {
  return (
    <div className="Main_wrap">
      <div className="Main_area">
        <HashRouter>
          <Navigation />
          <Route exact path="/" component={Welcome} />
          <Route path="/Articles/" component={Article} />
          {/* <Route path="/Articles/" component={Article} /> */}
        </HashRouter>
      </div>
    </div>
  );
}

// export to index.js
export default Main;
