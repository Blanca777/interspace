import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import Header from './common/header'
import Footer from './common/footer'
import Home from './page/home'
import Detail from './page/detail'
import Sidebar from './common/sidebar'
function App() {
  return (
    <Provider store={store}>
      <Header />
        <Home />
      <Footer />
    </Provider>
  );
}

export default App;
