import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchFilms } from '../redux/actions/films';

import Header from './Header/Header';
import Home from './Home/Home';
import Cart from './Cart/Cart';

import './app.scss';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilms())
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
