import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
  const init_desc = '調べたい食べ物を入力してくやさい。';
  const keyword_history = useHistory();
  const [word, setWord] = useState(
    {
      input_word: 'hoge'
    }
  );

  const handleHistory = (word) => {
    keyword_history.push(word);
  };

  return (
    <div className="Navigation_wrap">
      <div className="Search_area">
        <textarea className='Search_form' placeholder={init_desc} onChange={(e) => setWord(e.target.value)} />
      </div>
      <div className="Navigation_area">
        <nav className="Navin_menu">
          <ul className="Ul_list">
            <li className="List">
              <Link to="/">HOME</Link>
            </li>
            <li className="List">
              <Link to="/Articles/Gobou">ごぼう</Link>
            </li>
            <li className="List">
              <Link to="/Articles/Blueberry">ブルーベリー</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;