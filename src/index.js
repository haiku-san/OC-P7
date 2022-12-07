import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import data from './utils/logements.json'
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import './assets/sass/index.scss';
import Home from './pages/Home';
import Provider from './utils/Provider'
import Post from './pages/Post'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <Header />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Post />} path="/post/:id" />
          </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
