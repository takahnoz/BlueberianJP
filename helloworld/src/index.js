import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Header from './header/Header.js';
import Main from './Main';
import Footer from './footer/Footer.js';
import reportWebVitals from './reportWebVitals';

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


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
