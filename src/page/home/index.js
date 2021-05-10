import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Link, withRouter } from 'react-router-dom'

import {
  HomeWrapper,
  PicWrapper,
  Pic,
  PicText,
  Content,
  Article,
  BlogItem,
  Blogtitle,
  Blogabstract,
  Bloghr,
  Blogmsg,
  Msgitem,
  Pageto,
  Pagebtn,
  AbstractTitle,
  Abstractparagraph,
  RankList,
  RankTitle,
  RankItem
} from './style'
class Home extends PureComponent {

  componentDidMount() {
    this.props.getArticleList(this.props.articleList);
    this.props.getRankList(this.props.rankList);
    window.scrollTo(0, 0)
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
          <RankList>
            <RankTitle>排行榜</RankTitle>
            {
              this.props.rankList.map(item => {
                return (
                  <Link key={item.get('articleId')} to={"/article/" + item.get('articleId')} >
                    <RankItem>{item.get('articleTitle')}</RankItem>
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
    curTheme: state.getIn(["header", "curTheme"]),
    rankList: state.getIn(["home", "rankList"])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getArticleList(articleList) {
      if (articleList.size === 0) {
        dispatch(actionCreators.getArticleList())
      }

    },
    getRankList(rankList) {
      if (rankList.size === 0) {
        dispatch(actionCreators.getRankList())
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
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home))