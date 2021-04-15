import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="Article_wrap">
      <div className="Article_area">
        <section>
          <h1>なんとかについて</h1>
          <span>本文hogehogehogehogehogehogehogehogehoge</span>
        </section>
        <div>
          {/* <Link to="/">Home</Link> */}
        </div>
      </div>
    </div>
  );
}

export default App;
