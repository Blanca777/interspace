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
  }
  render() {
    return (
      <>
        <DetailWrapper>
          <DetailBox>
            <DetailTitle>
              <TitleText>三次握手</TitleText>
              <TitleMsg>
                <TitleItem><i className="iconfont">&#xe60e;</i>blanca</TitleItem>
                <TitleItem><i className="iconfont">&#xe619;</i>20201-5-1</TitleItem>
                <TitleItem><i className="iconfont">&#xe650;</i>777</TitleItem>
              </TitleMsg>
            </DetailTitle>
            <ReactMarkdown
              className='markdown'
              remarkPlugins={[gfm]} children={this.props.content}
            />
          </DetailBox>

        </DetailWrapper>
        <Sidebar></Sidebar>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    content: state.getIn(['detail','content']),
    articleList: state.getIn(['home','articleList'])

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getArticleContent(articleid) {
      dispatch(actionCreators.getArticleContent(articleid))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail)