import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Link } from 'react-router-dom'

import {
  HomeWrapper,
  PicWrapper,
  Pic,
  PicText,
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
class Home extends PureComponent {

  componentDidMount() {
    this.props.getArticleList(this.props.articleList);
    this.props.getUserInfo(this.props.userInfo);
    window.scrollTo(0,0)
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
      <HomeWrapper curTheme={this.props.curTheme}>
        <PicWrapper>
          <Pic></Pic>
          <PicText>在失去一切之后<br />我们的冒险才真正开始</PicText>
        </PicWrapper>

        <Content>
          <Article>
            {

              this.props.curList.map((item) => {
                return (

                  <BlogItem key={item.get('articleid')}>
                    <Link to={`/article/${item.get('articleid')}`} >
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
                    </Link>
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
              <Username>{this.props.userInfo.get('name')}</Username>
              <Usernum>
                <Numitem className="borderr">
                  <h4>{this.props.userInfo.get('articleNum')}</h4>
                  <h6>文章</h6>
                </Numitem>
                <Numitem>
                  <h4>{this.props.userInfo.get('tagNum')}</h4>
                  <h6>标签</h6>
                </Numitem>
              </Usernum>
            </UserInfo>
            <Hastitle><i className="iconfont">&#xe624;</i> 分类</Hastitle>
            <Categorybox>
              {
                this.props.userInfo.get('category')&&this.props.userInfo.get('category').map(item => {
                  return <Categoryitem key={item.get("categoryName")}>{item.get("categoryName")}<span>{item.get("articleNum")}</span></Categoryitem>
                })
              }

            </Categorybox>
            <Hastitle><i className="iconfont">&#xe9f7;</i> 标签</Hastitle>
            <Tagsbox>
              {
                this.props.userInfo.get('tag')&&this.props.userInfo.get('tag').map(item => {
                  return <Tagsitem key={item}>{item}</Tagsitem>
                })
              }
            </Tagsbox>
            <Hastitle><i className="iconfont">&#xe625;</i> 友情链接</Hastitle>
            <Flinkbox>
              {
                this.props.userInfo.get('fLink')&&this.props.userInfo.get('fLink').map(item => {
                  return <Flinkitem key={item}>{item}</Flinkitem>
                })
              }
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
    articleList: state.getIn(["home", "articleList"]),
    page: state.getIn(["home", "page"]),
    totalPage: state.getIn(["home", "totalPage"]),
    curTheme: state.getIn(["header", "curTheme"]),
    userInfo: state.getIn(['home', 'userInfo'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getArticleList(articleList) {
      if (articleList.size === 0) {
        dispatch(actionCreators.getArticleList())
      }

    },
    getUserInfo(userInfo) {
      if (userInfo.size === 0) {
        dispatch(actionCreators.getUserInfo())
      }
    },
    handleChangePage(page) {
      dispatch(actionCreators.ChangePageAction(page))
    },
    handlePrevPage() {

      dispatch(actionCreators.PrevPageAction())
    },
    handleNextPage() {
      dispatch(actionCreators.NextPageAction())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)