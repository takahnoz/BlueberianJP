import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './Navigation.scss';
import { FoodDataIndex } from '../assets/dataset.json';

const Navigation = () => {
  const init_desc = '調べたい食べ物を入力してくやさい。';
  const [food_word, setFoodWord] = useState();
  console.log(`input word is ${food_word}`);

  const FoodlistDom = (food_name) => {
      return(
        Object.keys(FoodDataIndex).map((key) =>
          <li className="List" key={key}>
            <Link to={FoodDataIndex[key]["Url"]}>{FoodDataIndex[key]["JpName"]}</Link>
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