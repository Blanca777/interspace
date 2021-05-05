import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import {
  ArticleWrapper,
  ArticleBox,
  ArticleTitle,
  TitleText,
  TitleMsg,
  TitleItem,
  SidebarWrapper,
  SidebarBox,
  SidebarTitle,
  SidebarItem

} from './style'
import { actionCreators } from './store'

class Article extends PureComponent {

  componentDidMount() {
    let { getArticleMsg, getArticleContent, getSidebarContent } = this.props
    getArticleMsg(this.props.match.params.articleid)
    getArticleContent(this.props.match.params.articleid)
    getSidebarContent(this.props.match.params.articleid)
    window.scrollTo(0, 0)
  }
  render() {
    let { articleMsg, articleContent, sidebarTitle, sidebarList, getArticleContent, getArticleMsg } = this.props
    return (
      <>
        <ArticleWrapper>
          <ArticleBox>
            <ArticleTitle>
              <TitleText>{articleMsg.get('articleTitle')}</TitleText>
              <TitleMsg>
                <TitleItem><i className="iconfont">&#xe60e;</i>{articleMsg.get('author')}</TitleItem>
                <TitleItem><i className="iconfont">&#xe619;</i>{articleMsg.get('time')}</TitleItem>
                <TitleItem><i className="iconfont">&#xe650;</i>{articleMsg.get('viewNum')}</TitleItem>
              </TitleMsg>
            </ArticleTitle>
            <ReactMarkdown
              className='markdown'
              remarkPlugins={[gfm]} children={articleContent}
            />
          </ArticleBox>

        </ArticleWrapper>
        <SidebarWrapper>
          <SidebarBox>
            <SidebarTitle>{sidebarTitle}</SidebarTitle>
            {
              sidebarList.map(item => {
                return (
                  <Link
                    to={`/article/${item.get('articleId')}`}
                    onClick={() => {
                      getArticleContent(item.get('articleId'))
                      getArticleMsg(item.get('articleId'))
                    }}
                    key={item.get('articleId')}
                  >
                    <SidebarItem>
                      {item.get('articleTitle')}
                    </SidebarItem>
                  </Link>
                )
              })
            }

          </SidebarBox>
        </SidebarWrapper>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articleContent: state.getIn(['article', 'articleContent']),
    articleMsg: state.getIn(['article', 'articleMsg']),
    sidebarTitle: state.getIn(["article", "sidebarTitle"]),
    sidebarList: state.getIn(["article", "sidebarList"])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getArticleMsg(articleid) {
      dispatch(actionCreators.getArticleMsg(articleid))
    },
    getArticleContent(articleid) {
      dispatch(actionCreators.getArticleContent(articleid))
    },
    getSidebarContent(articleid) {
      dispatch(actionCreators.getSidebarContent(articleid))
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Article)