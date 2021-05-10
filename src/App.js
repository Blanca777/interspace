import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'
import Header from './common/header'
import Footer from './common/footer'
import Home from './page/home/loadable'
import Article from './page/article/loadable'
import Dynamic from './page/dynamic/loadable'
import Tools from './page/tools/loadable'
import Tag from './page/tag/loadable'
import Login from './page/login/loadable'
import About from './page/about/loadable'


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Home}></Route>
        <Route path="/article/:articleId" exact component={Article}></Route>
        <Route path="/dynamic/:userId/:dynamicId" exact component={Dynamic}></Route>
        <Route path="/tools/:toolsId" exact component={Tools}></Route>
        <Route path="/tag/:tagId" exact component={Tag}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/" exact component={Footer}></Route>
        
      </BrowserRouter>
    </Provider>
  );
}

export default App;
