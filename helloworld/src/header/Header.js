import React from 'react';
import './Header.scss';
import icon_path from '../assets/images/icon_strawberry.png';

const sub_title = 'なんとなく食べ物を理解する';
const main_title = 'ぶるベリアン(仮)';

const Header = (props) => {
  
  return (
    <div className="Header_wrap">
      <div className="Header">
        <section className="Header_title">
          <p className="Sub_title">{sub_title}</p>
          <h1 className="Main_title">{main_title}</h1>
        </section>
      </div>
      <div className="Icon_area">
        {/* public配下への参照方法 */}
        <img src={icon_path} alt="header icon"></img>
      </div>
    </div>
  );
}

export default Header;
