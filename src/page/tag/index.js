import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
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
    let { getTagList, getArticleList } = this.props
    getTagList()
    getArticleList()
  }
  render() {
    let { tagList, articleList } = this.props
    return (
      <>
        <TagWrapper>
          <TagBox>
            <TagList>
              {
                tagList.map(item=>{
                  return <TagItem key={item}>{item}</TagItem>
                })
              }
            </TagList>
            <ArticleList>
              {
                articleList.map((item) => {
                  return (
                    <BlogItem key={item.get('articleid')}>
                      <Link to={`/article/${item.get('articleid')}`} >
                        <Blogtitle>{item.get('title')}</Blogtitle>
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
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tagList: state.getIn(["tag", "tagList"]),
    articleList: state.getIn(["tag", "articleList"])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getTagList() {
      dispatch(actionCreators.getTagList())
    },
    getArticleList(){
      dispatch(actionCreators.getArticleList())
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail)