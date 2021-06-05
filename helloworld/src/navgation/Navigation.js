import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './Navigation.scss';

const foods_list_dom = {
  'ごぼう': '/Articles/Gobou',
  'ブルーベリー': '/Articles/Blueberry'
};


const Navigation = () => {
  const init_desc = '調べたい食べ物を入力してくやさい。';
  const keyword_history = useHistory();
  const [food_word, setFoodWord] = useState();
  console.log(`input word is ${food_word}`);

  const FoodlistDom = (food_name) => {
      return(
        Object.keys(foods_list_dom).map((key) =>
          <li className="List" key={key}>
            <Link to={foods_list_dom[key]}>{key}</Link>
          </li>
        )
      )
  }

  return (
    <div className="Navigation_wrap">
      <div className="Search_area">
        <textarea className='Search_form' placeholder={init_desc} onChange={(e) => setFoodWord(e.target.value)} />
      </div>
      <div className="Navigation_area">
        <nav className="Navin_menu">
          <ul className="Ul_list">
            <FoodlistDom />
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;