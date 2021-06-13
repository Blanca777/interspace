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
    e.target.parentNode.nextElementSibling.style.display = "block"
  }
  closeComment(e) {
    e.target.parentNode.style.display = "none"
  }
  render() {
    let { speechList } = this.props
    console.log(speechList)
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
                  <SpeechOperate><span className="iconfont" onClick={this.openComment}>&#xe9fa;</span> {item.get("likeNum")}<span className="iconfont">&#xe9ff;</span></SpeechOperate>
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
                    <CommentClose onClick={this.closeComment}>关闭评论区</CommentClose>
                  </SpeechComment>
                </SpeechItem>
              )

            })
          }
          {/* <SpeechItem>
            <SpeechAuthorImg src="http://blanca777.cn:1777/author/blanca/blanca.jpg"></SpeechAuthorImg>
            <SpeechAuthorName>blanca</SpeechAuthorName>
            <SpeechContent>发送发送发发送送发送发发送送发送发送发送发发送送发送发送发送送发送发发送送发送发送发送发发送送发送发送发送发发送送发送发送送发送发发送送发送发送发送发发送送发送发送发送发发送送发送发送发送发发送送发送发送发送发发送送发送发发送发送发送发发送送发送发送发送发发送送发送发发送发发送送发送发送发送发发送送发送发发送送发送发发送</SpeechContent>
            <SpeechOperate><span className="iconfont" onClick={this.openComment}>&#xe9fa;</span> 123<span className="iconfont">&#xe9ff;</span></SpeechOperate>
            <SpeechComment>
              <CommentInput></CommentInput>
              <CommentBtn>发送</CommentBtn>
              <CommentItem>
                <CommentAuthorName>blanca:</CommentAuthorName>
                <CommentText>123</CommentText>
              </CommentItem>
              <CommentItem>
                <CommentAuthorName>blanca:</CommentAuthorName>
                <CommentText>123</CommentText>
              </CommentItem>
              <CommentClose onClick={this.closeComment}>关闭评论区</CommentClose>
            </SpeechComment>
          </SpeechItem> */}

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