import React from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import Header from './Components/Header';
import Global from './Styles/Global';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Cart />
        <Global />
      </Provider>
    </div>
  );
}

export default App;
