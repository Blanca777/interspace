import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'
import Header from './common/header'
import Footer from './common/footer'
import Home from './page/home'
import Article from './page/article'
import Dynamic from './page/dynamic'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Home}></Route>
        <Route path="/article/:articleid" exact component={Article}></Route>
        <Route path="/dynamic/:dynamicid" exact component={Dynamic}></Route>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
