import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './Navigation.scss';
import { FoodDataIndex } from '../assets/dataset.json';

const Navigation = () => {
  const init_desc = '調べたい食べ物を入力してくやさい。';
  const [food_word, setFoodWord] = useState();
  console.log(`input word is ${food_word}`);

  const ToHomeDom = () =>{
    return(
      <Link to="/">
        <li className="List Home_list" key="home">
          HOME
        </li>
      </Link>
    )
  }

  const FoodListDom = (food_name) => {
      return(
        Object.keys(FoodDataIndex).map((key) =>
          <Link to={FoodDataIndex[key]["Url"]} key={key}>
            <li className="List Food_list" >
              {FoodDataIndex[key]["JpName"]}
            </li>
          </Link>
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
            <ToHomeDom />
            <FoodListDom />
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;