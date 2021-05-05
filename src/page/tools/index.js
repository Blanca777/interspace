import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import {
  DetailWrapper,
  DetailBox,
  DetailTitle,
  TitleText,
  TitleMsg,
  TitleItem

} from './style'
import Sidebar from '../../common/sidebar'
import { actionCreators } from './store'

class Detail extends PureComponent {
  componentDidMount() {
    this.props.getArticleContent(this.props.match.params.articleid)
    this.props.getTitleAndSidebarList(this.props.match.params.articleid)
  }
  render() {
    let { title, author, time, num } = this.props.articleMsg.toJS()
    return (
      <>
        <DetailWrapper>
          <DetailBox>
            <DetailTitle>
              <TitleText>{title}</TitleText>
              <TitleMsg>
                <TitleItem><i className="iconfont">&#xe60e;</i>{author}</TitleItem>
                <TitleItem><i className="iconfont">&#xe619;</i>{time}</TitleItem>
                <TitleItem><i className="iconfont">&#xe650;</i>{num}</TitleItem>
              </TitleMsg>
            </DetailTitle>
            <ReactMarkdown
              className='markdown'
              remarkPlugins={[gfm]} children={this.props.content}
            />
          </DetailBox>

        </DetailWrapper>
        <Sidebar getArticleContent={this.props.getArticleContent}></Sidebar>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    content: state.getIn(['detail','content']),
    articleMsg: state.getIn(['detail','articleMsg'])

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getArticleContent(articleid) {
      dispatch(actionCreators.getArticleContent(articleid))
    },
    getTitleAndSidebarList(articleid) {
      dispatch(actionCreators.getTitleAndSidebarList(articleid))
    }
    
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail)