import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import {
  TagWrapper,
  TagBox,
  TagList,
  TagItem,
  ArticleList,
  BlogItem,
  Blogtitle,
  Bloghr,
  Blogmsg,
  Msgitem

} from './style'
import { actionCreators } from './store'

class Detail extends PureComponent {
  componentDidMount() {
    let { getArticleList } = this.props
    getArticleList()
  }

  render() {
    let { tagList, curList, changeCurList } = this.props
    return (
      <TagWrapper>
        <TagBox>
          <TagList>
            {
              tagList.map(item => {
                return <TagItem key={item} onClick={()=>changeCurList(item)}>{item}</TagItem>
              })
            }
          </TagList>
          <ArticleList>
            {
              curList.map((item) => {
                return (
                  <BlogItem key={item.get('articleId')}>
                    <Link to={`/article/${item.get('authorId')}/${item.get('articleId')}`} >
                      <Blogtitle>{item.get('articleTitle')}</Blogtitle>
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
          </ArticleList>
        </TagBox>
      </TagWrapper>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    tagList: state.getIn(["tag", "tagList"]),
    articleList: state.getIn(["tag", "articleList"]),
    curList: state.getIn(["tag", "curList"])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getArticleList() {
      dispatch(actionCreators.getArticleList())
    },
    changeCurList(tag) {
      dispatch(actionCreators.changeCurListAction(tag))
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))