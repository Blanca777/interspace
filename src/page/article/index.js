import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import {
  ArticleWrapper, ArticleBox, ArticleTitle,
  TitleText, TitleMsg, TitleItem,
  Userbox, UserInfo, Username,
  Usernum, Numitem, Hastitle,
  Categorybox, Categoryitem, Tagsbox,
  Tagsitem, Flinkbox, Flinkitem,
  CommentBox, CommentTextArea, CommentSubmit,
  CommentList, CommentItem, CommentAuthorName,
  CommentText, CommentReplyBtn, CommentReplyList,
  ReplyItem, ReplyAuthorName, ReplyText, CommentReplyInput

} from './style'
import Loading from '../../common/loading'
import { actionCreators } from './store'
import devman from '../../statics/iconpng/devman.png'
class Article extends PureComponent {

  componentDidMount() {
    let { getArticleMsg, getArticleContent, getUserInfo, match } = this.props
    getArticleMsg(match.params.articleId)
    getArticleContent(match.params.articleId)
    getUserInfo(match.params.authorId);
    window.scrollTo(0, 0)
  }
  componentWillUnmount() {
    this.props.changeLoadingBoxStatus(true)
  }
  render() {
    let { articleMsg, articleContent, userInfo, commentList,
      commentTextChange, commentTextValue, commentSend,
      loginStatus, loginUserInfo, replySend, showLoadingBox } = this.props
    return (

      <ArticleWrapper>
        {showLoadingBox ? <Loading /> : <></>}
        <Userbox>
          <UserInfo>
            <Link to={`/dynamic/${userInfo.get('authorId')}/articleDynamic`}>
              <img src={userInfo.get('authorImg')} alt="" />
              <Username>{userInfo.get('authorName')}</Username>
            </Link>

            <Usernum>
              <Numitem className="borderr">
                <Link to={`/dynamic/${userInfo.get('authorId')}/articleDynamic`}>
                  <h4>{userInfo.get('articleNum')}</h4>
                  <h6>文章</h6>
                </Link>
              </Numitem>
              <Numitem>
                <Link to={`/dynamic/${userInfo.get('authorId')}/personalDynamic`}>
                  <h4>{userInfo.get('personalNum')}</h4>
                  <h6>动态</h6>
                </Link>
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
              <TitleItem><i className="iconfont">&#xe60e;</i>{articleMsg.get('authorName')}</TitleItem>
              <TitleItem><i className="iconfont">&#xe619;</i>{articleMsg.get('publishTime')}</TitleItem>
              <TitleItem><i className="iconfont">&#xe650;</i>{articleMsg.get('viewNum')}</TitleItem>
            </TitleMsg>
          </ArticleTitle>
          <ReactMarkdown
            className='markdown'
            remarkPlugins={[gfm]} children={articleContent}
          />
        </ArticleBox>

        <CommentBox>
          <CommentTextArea onChange={commentTextChange} value={commentTextValue} ></CommentTextArea>
          <CommentSubmit onClick={() => commentSend(commentTextValue, loginStatus, loginUserInfo, articleMsg)}>发表</CommentSubmit>
          <CommentList>
            {
              commentList.map(item => {
                return (
                  <CommentItem key={item.get('commentId')}>
                    <img src={devman} alt="devman" />
                    <CommentAuthorName>{item.get('commentAuthorName')}</CommentAuthorName> :
                    <CommentText>{item.get('commentText')}</CommentText>

                    <CommentReplyList>
                      {
                        item.get('replyList').map(item => {
                          return (
                            <ReplyItem key={item.get('replyId')}>
                              <img src={devman} alt="devman" />
                              <ReplyAuthorName>{item.get('replyAuthorName')}</ReplyAuthorName> :
                              <ReplyText>{item.get('replyText')}</ReplyText>
                            </ReplyItem>
                          )
                        })
                      }
                    </CommentReplyList>
                    <CommentReplyInput></CommentReplyInput>
                    <CommentReplyBtn onClick={(e) => replySend(e, loginStatus, loginUserInfo, articleMsg, item.get('commentId'))}>发送</CommentReplyBtn>


                  </CommentItem>
                )
              })
            }

          </CommentList>
        </CommentBox>

      </ArticleWrapper>


    )
  }
}

const mapStateToProps = (state) => {
  return {
    showLoadingBox: state.getIn(['article', 'showLoadingBox']),
    articleContent: state.getIn(['article', 'articleContent']),
    articleMsg: state.getIn(['article', 'articleMsg']),
    commentList: state.getIn(['article', 'commentList']),
    userInfo: state.getIn(['article', 'userInfo']),
    loginStatus: state.getIn(['login', 'loginStatus']),
    loginUserInfo: state.getIn(['login', 'userInfo']),
    commentTextValue: state.getIn(['article', 'commentTextValue'])
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
    getUserInfo(authorId) {
      dispatch(actionCreators.getUserInfo(authorId))
    },
    commentTextChange(e) {
      dispatch(actionCreators.commentTextChange(e.target.value))
    },
    commentSend(commentTextValue, loginStatus, loginUserInfo, articleMsg) {
      if (loginStatus) {
        let authorId = loginUserInfo.get('authorId')
        let authorName = loginUserInfo.get('authorName')
        let articleId = articleMsg.get('articleId')
        dispatch(actionCreators.commentSend(commentTextValue, authorId, authorName, articleId))
      } else {
        alert('请先登机')
      }
    },
    replySend(e, loginStatus, loginUserInfo, articleMsg, commentId) {
      let replyText = e.target.previousSibling
      if (loginStatus) {
        if (replyText.value.length !== 0) {
          let authorId = loginUserInfo.get('authorId')
          let authorName = loginUserInfo.get('authorName')
          let articleId = articleMsg.get('articleId')
          dispatch(actionCreators.replySend(replyText, authorId, authorName, articleId, commentId))
        } else {
          alert('回复内容不能为空')
        }

      } else {
        alert('请先登机')
      }
    },
    changeLoadingBoxStatus(status) {
      dispatch(actionCreators.showLoadingBoxAction(status))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Article))