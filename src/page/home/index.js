import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
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
  Pagebtn,
  AbstractTitle,
  Abstractparagraph
} from './style'
class Home extends Component {

  componentDidMount() {
    this.props.getArticleList();

  }
  getPageList = () => {
    let pagelist = []
    let { page, totalPage, handleChangePage } = this.props
    for (let i = 1; i <= totalPage; i++) {
      if (i === page) {
        pagelist.push(<Pagebtn className="active" key={i} onClick={() => handleChangePage(i)}>{i}</Pagebtn>)
      } else {
        pagelist.push(<Pagebtn key={i} onClick={() => handleChangePage(i)}>{i}</Pagebtn>)
      }

    }
    return pagelist
  }
  // getCurList = () => {
  //   let { page, articleList } = this.props
  //   let newlist = articleList.toJS()
  //   let curlist = []
  //   for (let i = (page - 1) * 7; i < page * 7; i++) {
  //     curlist.push(newlist[i])
  //   }
  // }
  render() {
    return (
      <HomeWrapper>
        <Pic></Pic>
        <Content>

          <Article>
            {

              this.props.curList.map((item) => {
                return (
                  <BlogItem key={item.get('keyid')}>
                    <Blogtitle>{item.get('title')}</Blogtitle>
                    {
                      item.getIn(["outline", "title"]) !== undefined && (
                        <Blogabstract>
                          <AbstractTitle>{item.getIn(["outline", "title"])}</AbstractTitle>
                          {
                            item.getIn(["outline", "paragraph"]).map((item, index) => {
                              return <Abstractparagraph key={index}>{item}</Abstractparagraph>
                            })
                          }
                        </Blogabstract>
                      )
                    }

                    <Bloghr></Bloghr>
                    <Blogmsg>
                      <Msgitem><i className="iconfont">&#xe60e;</i> {item.get('author')}</Msgitem>
                      <Msgitem><i className="iconfont">&#xe619;</i> {item.get('time')}</Msgitem>
                      <Msgitem><i className="iconfont">&#xe63d;</i> {item.get('tag')}</Msgitem>
                    </Blogmsg>
                  </BlogItem>
                )
              })
            }
            <Pageto>
              <Pagebtn className="pagebtn" onClick={this.props.handlePrevPage}>上一页</Pagebtn>
              {this.getPageList()}
              <Pagebtn className="pagebtn" onClick={this.props.handleNextPage}>下一页</Pagebtn>
            </Pageto>
          </Article>
          <Userbox>
            <UserInfo>
              <Userimg></Userimg>
              <Username>blanca</Username>
              <Usernum>
                <Numitem className="borderr">
                  <h4>{this.props.val}</h4>
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
}

const mapStateToProps = (state) => {
  return {
    curList: state.getIn(["home", "curList"]),
    page: state.getIn(["home", "page"]),
    totalPage: state.getIn(["home", "totalPage"]),
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getArticleList() {
      dispatch(actionCreators.getArticleList())
    },
    handleChangePage(page) {
      dispatch(actionCreators.ChangePageAction(page))
    },
    handlePrevPage(){
      
      dispatch(actionCreators.PrevPageAction())
    },
    handleNextPage(){
      dispatch(actionCreators.NextPageAction())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)