import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'
import Header from './common/header'
import Footer from './common/footer'
import Home from './page/home'
import Article from './page/article'
import Dynamic from './page/dynamic'
import Channel from './page/channel'
import Tag from './page/tag'
import Login from './page/login'
import About from './page/about'


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Home}></Route>
        <Route path="/article/:authorId/:articleId" exact component={Article}></Route>
        <Route path="/dynamic/:authorId/:dynamicList" exact component={Dynamic}></Route>
        <Route path="/channel" exact component={Channel}></Route>
        <Route path="/tag/:tagId" exact component={Tag}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/" exact component={Footer}></Route>
        
      </BrowserRouter>
    </Provider>
  );
}

export default App;
