import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'
import Header from './common/header'
import Footer from './common/footer'
import Home from './page/home'
import Detail from './page/detail'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Home}></Route>
        <Route path="/detail/:articleid" exact component={Detail}></Route>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
