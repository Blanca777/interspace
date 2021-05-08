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
  Userbox,
  UserInfo,
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

} from './style'
import { actionCreators } from './store'

class Article extends PureComponent {

  componentDidMount() {
    let { getArticleMsg, getArticleContent, getUserInfo } = this.props
    getArticleMsg(this.props.match.params.articleId)
    getArticleContent(this.props.match.params.articleId)
    getUserInfo(this.props.userInfo);
    window.scrollTo(0, 0)
  }
  render() {
    let { articleMsg, articleContent, userInfo } = this.props
    return (
      <>
        <ArticleWrapper>

          <Userbox>
            <UserInfo>
              <Link to={`/dynamic/${userInfo.get('userId')}/articleDynamic`}>
                <img src={userInfo.get('userImg')} alt="" />
                <Username>{userInfo.get('userName')}</Username>
              </Link>

              <Usernum>
                <Numitem className="borderr">
                  <h4>{userInfo.get('articleNum')}</h4>
                  <h6>文章</h6>
                </Numitem>
                <Numitem>
                  <h4>{userInfo.get('tagNum')}</h4>
                  <h6>标签</h6>
                </Numitem>
              </Usernum>
            </UserInfo>
            <Hastitle><i className="iconfont">&#xe624;</i> 分类</Hastitle>
            <Categorybox>
              {
                userInfo.get('category') && userInfo.get('category').map(item => {
                  return <Categoryitem key={item.get("categoryName")}>{item.get("categoryName")}<span>{item.get("articleNum")}</span></Categoryitem>
                })
              }

            </Categorybox>
            <Hastitle><i className="iconfont">&#xe9f7;</i> 标签</Hastitle>
            <Tagsbox>
              {
                userInfo.get('tag') && userInfo.get('tag').map(item => {
                  return <Tagsitem key={item}>{item}</Tagsitem>
                })
              }
            </Tagsbox>
            <Hastitle><i className="iconfont">&#xe625;</i> 友情链接</Hastitle>
            <Flinkbox>
              {
                userInfo.get('fLink') && userInfo.get('fLink').map(item => {
                  return <Flinkitem key={item}>{item}</Flinkitem>
                })
              }
            </Flinkbox>
          </Userbox>

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

      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articleContent: state.getIn(['article', 'articleContent']),
    articleMsg: state.getIn(['article', 'articleMsg']),
    userInfo: state.getIn(['article', 'userInfo'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getArticleMsg(articleId) {
      dispatch(actionCreators.getArticleMsg(articleId))
    },
    getArticleContent(articleId) {
      dispatch(actionCreators.getArticleContent(articleId))
    },
    getUserInfo(userInfo) {
      if (userInfo.size === 0) {
        dispatch(actionCreators.getUserInfo())
      }
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Article)