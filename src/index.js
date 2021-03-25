import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './components/home/home';
import Page from './components/page/page';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
   <Header/>
   <Home/>
   <Page/>
   <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);


