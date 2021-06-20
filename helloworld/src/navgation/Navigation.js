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
    // console.log(food_word);
    Object.keys(FoodDataIndex).forEach((key, index) => {
      // 入力フォームが記入なしなら全てのFoodIndexを表示する
      if (inputWord == ''){
        setFoodDataIndex(FoodDataIndex);
      }
      // 検索ワードと合致するFoodIndexがあればそれだけにフィルターする
      else if ((FoodDataIndex[key].JpName.indexOf(inputWord) > -1) || (key.toLowerCase().indexOf(inputWord) > -1)){
        collect_foods.push({ [key]: FoodDataIndex[key] });
        setFoodDataIndex(collect_foods[0]);
      }
    });
  }

  return (
    <div className="Navigation_wrap">
      <div className="Search_area">
        <label class="ef">
          <input className='Search_form' type="text" placeholder={init_desc} onChange={
            (e) => filterFoodDataIndex(e.target.value, FoodDataIndex)
          } />
        </label>
      </div>
      <div className="Navigation_area">
        <nav className="Navin_menu">
          <ul className="Ul_list">
            <Link to="/">
              <li className="List Home_list" key="home">
                HOME
              </li>
            </Link>
            <div className="Border_line_grey"></div>
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