import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Categories from './Components/Categories/Categories';
import Products from './Components/Products/Products';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Categories />
      <Products />
      <Footer />
    </Provider>
  );
}

export default App;