import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import {
  ChannelWrapper,
  SpeechBox, SpeechItem, SpeechContent, SpeechOperate,
  SpeechComment, SpeechAuthorImg, SpeechAuthorName,
  CommentItem, CommentAuthorName, CommentText,
  CommentInput, CommentBtn, CommentClose, CommentAuthorImg
} from './style'
import { actionCreators } from './store'
import { APIUrl } from '../../config'
class Channel extends PureComponent {

  componentDidMount() {
    let { getSpeechList } = this.props
    getSpeechList()
    window.scrollTo(0, 0)
  }
  openComment(e) {
    // console.log(e.currentTarget)
    if (e.currentTarget.parentNode.nextElementSibling.style.display === 'block') {
      e.currentTarget.parentNode.nextElementSibling.style.display = "none"
    } else {
      e.currentTarget.parentNode.nextElementSibling.style.display = "block"
    }

  }
  closeComment(e) {

    e.target.parentNode.style.display = "none"
  }
  render() {
    let { speechList } = this.props
    return (
      <ChannelWrapper>
        <SpeechBox>
          {
            speechList.map(item => {
              return (
                <SpeechItem key={item.get('speechId')}>
                  <Link to={`/dynamic/${item.get("authorId")}/articleDynamic`}>
                    <SpeechAuthorImg src={`${APIUrl}/author/${item.get("authorId")}/${item.get("authorId")}.png`}></SpeechAuthorImg>
                    <SpeechAuthorName>{item.get("authorName")}</SpeechAuthorName>
                  </Link>
                  <SpeechContent>{item.get("speechContent")}</SpeechContent>
                  <SpeechOperate>
                    <svg className="icon" aria-hidden="true" onClick={(e) => this.openComment(e)} >
                      <use xlinkHref="#icon-xiaoxi"></use>
                    </svg>
                    <svg className="icon" aria-hidden="true" onClick={(e) => this.openComment(e)} >
                      <use xlinkHref="#icon-xihuan"></use>
                    </svg> {item.get("likeNum")}
                  </SpeechOperate>
                  <SpeechComment>
                    <CommentInput></CommentInput>
                    <CommentBtn>发送</CommentBtn>
                    {item.get("commentList").map((comment, index) => {
                      return (
                        <CommentItem key={item.get('speechId') + index}>
                          <CommentAuthorImg src={`${APIUrl}/author/${comment.get("authorId")}/${comment.get("authorId")}.png`}></CommentAuthorImg>
                          <CommentAuthorName><Link to={`/dynamic/${comment.get("authorId")}/articleDynamic`}>{comment.get('authorName')}</Link>:</CommentAuthorName>
                          <CommentText>{comment.get('commentText')}</CommentText>
                        </CommentItem>
                      )
                    })}
                    <CommentClose onClick={this.closeComment}>
                      关闭评论区
                    </CommentClose>
                  </SpeechComment>
                </SpeechItem>
              )

            })
          }

        </SpeechBox>

      </ChannelWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    speechList: state.getIn(['channel', 'speechList'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getSpeechList() {
      dispatch(actionCreators.getSpeechList())
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Channel))