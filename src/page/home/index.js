import React from 'react'
import {
  HomeWrapper,
  Pic,
  Content,
  Article,
  Userbox,
  BlogItem,
  Blogtitle,
  Blogabstract,
  Bloghr,
  Blogmsg,
  Msgitem,
  UserInfo,
  Userimg,
  Username,
  Usernum,
  Numitem,
  Hastitle,
  Categorybox,
  Categoryitem,
  Tagsbox,
  Tagsitem,
  Flinkbox,
  Flinkitem,
  Pageto,
  Pagebtn
} from './style'
const list = [1, 2, 3, 4,213,3, 345, 123, 645, 123]
const Home = () => {
  return (
    <HomeWrapper>
      <Pic></Pic>
      <Content>
        <Article>
          {
            list.map(_ => {
              return (
                <BlogItem>
                  <Blogtitle>Blogtitle</Blogtitle>
                  <Blogabstract></Blogabstract>
                  <Bloghr></Bloghr>
                  <Blogmsg>
                    <Msgitem><i className="iconfont">&#xe60e;</i> blanca</Msgitem>
                    <Msgitem><i className="iconfont">&#xe619;</i> 2021-4-29</Msgitem>
                    <Msgitem><i className="iconfont">&#xe63d;</i> 日常</Msgitem>
                  </Blogmsg>
                </BlogItem>
              )
            })
          }
          <Pageto>
            <Pagebtn className="pagebtn">上一页</Pagebtn>
            <Pagebtn>1</Pagebtn>
            <Pagebtn>2</Pagebtn>
            <Pagebtn>3</Pagebtn>
            <Pagebtn className="pagebtn">下一页</Pagebtn>
          </Pageto>
        </Article>
        <Userbox>
          <UserInfo>
            <Userimg></Userimg>
            <Username>blanca</Username>
            <Usernum>
              <Numitem className="borderr">
                <h4>7</h4>
                <h6>文章</h6>
              </Numitem>
              <Numitem>
                <h4>6</h4>
                <h6>标签</h6>
              </Numitem>
            </Usernum>
          </UserInfo>
          <Hastitle><i className="iconfont">&#xe624;</i> 分类</Hastitle>
          <Categorybox>
            <Categoryitem>教程<span>2</span></Categoryitem>
            <Categoryitem>开发工具<span>1</span></Categoryitem>
            <Categoryitem>日常<span>1</span></Categoryitem>
            <Categoryitem>java<span>2</span></Categoryitem>
            <Categoryitem>推荐<span>1</span></Categoryitem>
          </Categorybox>
          <Hastitle><i className="iconfont">&#xe9f7;</i> 标签</Hastitle>
          <Tagsbox>
            <Tagsitem>前端</Tagsitem>
            <Tagsitem>前端</Tagsitem>
          </Tagsbox>
          <Hastitle><i className="iconfont">&#xe625;</i> 友情链接</Hastitle>
          <Flinkbox>
            <Flinkitem>123</Flinkitem>
            <Flinkitem>123</Flinkitem>
          </Flinkbox>
        </Userbox>
      </Content>
      
    </HomeWrapper>

  )
}
export default Home