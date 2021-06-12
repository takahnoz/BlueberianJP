import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './Navigation.scss';
import { FoodDataIndex } from '../assets/dataset.json';

const Navigation = () => {
  const init_desc = '調べたい食べ物を入力してくやさい。';
  const collect_foods = [];
  const [food_word, setFoodWord] = useState('');
  const [foodDataIndex, setFoodDataIndex] = useState(FoodDataIndex);
  
  const filterFoodDataIndex = (inputWord, FoodDataIndex) =>{
    // ↓setFoodWord()によってfood_wordが更新
    setFoodWord(inputWord);
    console.log(food_word);
    Object.keys(FoodDataIndex).forEach((key, index) => {
      if (FoodDataIndex[key].JpName == inputWord){
        console.log('collected...');
        console.log({[key]: FoodDataIndex[key]});
        collect_foods.push({ [key]: FoodDataIndex[key] });
        setFoodDataIndex(collect_foods[0]);
      }
      else if (inputWord == ''){
        setFoodDataIndex(FoodDataIndex);
      }
    });
  }

  // Dom for To Home
  const ToHomeDom = () =>{
    return(
      <Link to="/">
        <li className="List Home_list" key="home">
          HOME
        </li>
      </Link>
    )
  }

  return (
    <div className="Navigation_wrap">
      <div className="Search_area">
        {/* <textarea className='Search_form' placeholder={init_desc} onChange={(e) => setFoodWord(e.target.value)} /> */}
        <textarea className='Search_form' placeholder={init_desc} onChange={
          (e) => filterFoodDataIndex(e.target.value, FoodDataIndex)
        } />
      </div>
      <div className="Navigation_area">
        <nav className="Navin_menu">
          <ul className="Ul_list">
            <ToHomeDom />
            {
              Object.keys(foodDataIndex).map((key) =>
                <Link to={foodDataIndex[key]["Url"]} key={key}>
                  <li className="List Food_list" >
                    {foodDataIndex[key]["JpName"]}
                  </li>
                </Link>
                )
            }
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;