import { BrowserRouter as Router } from 'react-router-dom';
import Article from './Article.jsx';
import Navigation from './navgation/Navigation';
import './Main.scss';

const Main = () => {
  return (
    <div className="Main_wrap">
      <div className="Main_area">
        <Router>
          <Navigation />
          <Article />
        </Router>
      </div>
    </div>
  );
}

export default Main;
