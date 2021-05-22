import Article from './Article.jsx';
import Navigation from './navgation/Navigation';
import './Main.scss';

const Main = () => {
  // console.log(useLocation());
  return (
    <div className="Main_wrap">
        <div className="Main_area">
            <Navigation />
            <Article />
        </div>
    </div>
  );
}

export default Main;
