import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header';
import Home from './components/home/home';
import './index.css';



ReactDOM.render(
  <React.StrictMode>
   <Header/>
   <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);


