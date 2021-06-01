import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './Header.scss';

const sub_title = 'なんとなく食べ物を理解する';
const main_title = 'ぶるベリアン(仮)';


const Header = (props) => {
  
  const init_desc = '調べたい食べ物を入力してくやさい。';
  const [desc, setDesc] = useState(init_desc);
  const keyword_history = useHistory();

  const handleHistory = (word) => {
    keyword_history.push(word);
  }

  return (
    <div className="Header_wrap">
      <div className="Header">
        <section className="Header_title">
          <p className="Sub_title">{sub_title}</p>
          <h1 className="Main_title">{main_title}</h1>
        </section>
      </div>
      <div className="Search_area">
        <form>
          <textarea className='Search_form' placeholder={init_desc} onChange={(e)=>setDesc(e.target.value)} />
          <button className='Search_submit'>
            検索
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
