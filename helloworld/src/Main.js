
import Article from './Article';
import Navigation from './navgation/Navigation';
import './Main.scss';

const Main = () => {
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
