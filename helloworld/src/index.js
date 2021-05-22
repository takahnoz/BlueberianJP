import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Header from './header/Header.js';
import Main from './Main';
import Footer from './footer/Footer.js';

const element = (
  <React.StrictMode>
    <div className="All_area_wrap">
      <Header />
      <Main />
      <Footer />
    </div>
  </React.StrictMode>
)

ReactDOM.render(
  element,
  document.getElementById('root01')
);
