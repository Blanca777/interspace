import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Link, withRouter } from 'react-router-dom'

import {
  HomeWrapper,
  PicWrapper, Pic, PicText,
  Content, Article,
  BlogItem, Blogtitle, Blogabstract, Bloghr, Blogmsg,
  Msgitem, Pageto, Pagebtn, AbstractTitle, Abstractparagraph,
  RankList, RankTitle, RankItem
} from './style'
import Loading from '../../common/loading'
class Home extends PureComponent {
  componentDidMount() {
    let { getArticleList, getRankList, articleList, rankList } = this.props
    getArticleList(articleList);
    getRankList(rankList);
    window.scrollTo(0, 0)
  }
  componentWillUnmount() {
    this.props.changeLoadingBoxStatus(true)
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
  render() {
    let { showLoadingBox,curList,curTheme,handlePrevPage,handleNextPage,rankList } = this.props
    return (
      <HomeWrapper curTheme={curTheme}>
        {showLoadingBox ? <Loading /> : <></>}
        <PicWrapper>
          <Pic></Pic>
          <PicText>在失去一切之后<br />我们的冒险才真正开始</PicText>
        </PicWrapper>

        <Content>
          <Article>
            {
              curList.map((item) => {
                return (
                  <BlogItem key={item.get('articleId')}>
                    <Link to={`/article/${item.get('authorId')}/${item.get('articleId')}`} >
                      <Blogtitle>{item.get('articleTitle')}</Blogtitle>
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
                        <Msgitem><i className="iconfont">&#xe60e;</i> {item.get('authorName')}</Msgitem>
                        <Msgitem><i className="iconfont">&#xe619;</i> {new Date(item.get('publishTime')).toLocaleString()}</Msgitem>
                        <Msgitem><i className="iconfont">&#xe63d;</i> {item.get('tag')}</Msgitem>
                      </Blogmsg>
                    </Link>
                  </BlogItem>

                )
              })
            }
            <Pageto>
              <Pagebtn className="pagebtn" onClick={handlePrevPage}>上一页</Pagebtn>
              {this.getPageList()}
              <Pagebtn className="pagebtn" onClick={handleNextPage}>下一页</Pagebtn>
            </Pageto>
          </Article>
          <RankList>
            <RankTitle>排行榜</RankTitle>
            {
              rankList.map(item => {
                return (
                  <Link key={item.get('articleId')} to={`/article/${item.get('authorId')}/${item.get('articleId')}`} >
                    <RankItem>{item.get('articleTitle')}<span>{item.get('viewNum')} <i className="iconfont">&#xe650;</i></span></RankItem>
                  </Link>
                )
              })
            }
          </RankList>

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
    showLoadingBox: state.getIn(["home", "showLoadingBox"]),
    curTheme: state.getIn(["header", "curTheme"]),
    rankList: state.getIn(["home", "rankList"])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getArticleList(articleList) {
      dispatch(actionCreators.getArticleList())
    },
    getRankList(rankList) {
      dispatch(actionCreators.getRankList())
    },
    handleChangePage(page) {
      dispatch(actionCreators.ChangePageAction(page))
    },
    handlePrevPage() {

      dispatch(actionCreators.PrevPageAction())
    },
    handleNextPage() {
      dispatch(actionCreators.NextPageAction())
    },
    changeLoadingBoxStatus(status) {
      dispatch(actionCreators.showLoadingBoxAction(status))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home))