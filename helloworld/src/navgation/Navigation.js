import { Link } from 'react-router-dom'
import './Navigation.scss';

function Navigation() {
  return (
    <div className="Navigation_wrap">
      <div className="Navigation_area">
        <nav>
          <ul>
            <li>
                <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/Articles/Gobou">ごぼう</Link>
            </li>
            <li>
              <Link to="/Articles/Blueberry">ブルーベリー</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;