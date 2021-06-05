import React from 'react';
import './Header.scss';

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
    </div>
  );
}

export default Header;
