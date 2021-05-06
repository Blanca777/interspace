import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'
import Header from './common/header'
import Footer from './common/footer'
import Home from './page/home'
import Article from './page/article'
import Dynamic from './page/dynamic'
import Tools from './page/tools'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Home}></Route>
        <Route path="/article/:articleId" exact component={Article}></Route>
        <Route path="/dynamic/:dynamicId" exact component={Dynamic}></Route>
        <Route path="/tools/:toolsId" exact component={Tools}></Route>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
