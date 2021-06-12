import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './Navigation.scss';
import { FoodDataIndex } from '../assets/dataset.json';

const Navigation = () => {
  const init_desc = '調べたい食べ物を入力してくやさい。';
  const [food_word, setFoodWord] = useState();
  
  const filterFoodDataIndex = (inputWord) =>{
    // ↓setFoodWord()によってfood_wordが更新
    setFoodWord(inputWord)
    console.log(`input word is ${food_word}`);
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

  // Dom for Food List
  const FoodListDom = (props) => {
    const myFoodDataIndex = props.food_datasets;
      return(
        Object.keys(myFoodDataIndex).map((key) =>
          <Link to={myFoodDataIndex[key]["Url"]} key={key}>
            <li className="List Food_list" >
              {myFoodDataIndex[key]["JpName"]}
            </li>
          </Link>
        )
      )
  }

  return (
    <div className="Navigation_wrap">
      <div className="Search_area">
        {/* <textarea className='Search_form' placeholder={init_desc} onChange={(e) => setFoodWord(e.target.value)} /> */}
        <textarea className='Search_form' placeholder={init_desc} onChange={(e) => filterFoodDataIndex(e.target.value)} />
      </div>
      <div className="Navigation_area">
        <nav className="Navin_menu">
          <ul className="Ul_list">
            <ToHomeDom />
            <FoodListDom food_datasets={FoodDataIndex} />
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;