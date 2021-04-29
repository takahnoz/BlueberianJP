
import App from './App';
import Navigation from './navgation/Navigation';
import './Main.scss';

function Main() {
  return (
    <div className="Main_wrap">
        <div className="Main_area">
            <Navigation />
            <App />
        </div>
    </div>
  );
}

export default Main;
