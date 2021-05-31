import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { APIUrl } from '../../config'
import {
  DynamicWrapper, DynamicBox, DynamicTitle,
  TitleText, TitleMsg, TitleItem,
  DynamicContent, DynamicList, DynamicItem, DynamicTime, DynamicPoint, DynamicText,
  SidebarBox, SidebarTitle, SidebarItem,
  Userbox, UserInfo, Username, Logout, Usernum,
  Numitem, Hastitle, Categorybox, Categoryitem,
  Tagsbox, Tagsitem, Flinkbox, Flinkitem,
  AddArticleBox, AddArticleInput, AddArticleCancel, AddArticleFile, AddArticleFileBox, AddArticleSubmit,
  AddArticleTagBox, AddPersonalBox, AddPersonalText, AddPersonalCancel, AddPersonalSubmit,

} from './style'
import Loading from '../../common/loading'
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../login/store'
class Dynamic extends PureComponent {
  constructor(props) {
    super(props)
    const AddPersonalText = React.forwardRef((props, ref) => (
      <AddPersonalText ref={ref} />
    ));
    this.UNLISTEN = null
    this.personalTextRef = React.createRef();
  }
  componentDidMount() {
    let { getAuthorInfo, match } = this.props
    this.UNLISTEN = this.props.history.listen(route => {
      if (route.pathname === `/dynamic/${this.props.loginUserInfo.get('authorId')}`) {
        getAuthorInfo(this.props.loginUserInfo.get('authorId'));
      } else if (route.pathname.indexOf('/dynamic/') === 0) {
        getAuthorInfo(route.pathname.slice(8));
      }
    });
    getAuthorInfo(match.params.authorId, match.params.dynamicList);
    window.scrollTo(0, 0)
  }
  componentWillUnmount() {
    this.UNLISTEN && this.UNLISTEN()
    this.props.changeLoadingBoxStatus(true)
  }
  addArticleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    if (formData.get("title") !== '' && formData.get("file").size !== 0) {
      let authorId = this.props.loginUserInfo.get('authorId')
      let authorName = this.props.loginUserInfo.get('authorName')
      e.preventDefault();
      let formData = new FormData(e.target);
      formData.append("authorId", authorId);
      formData.append("authorName", authorName);
      fetch(`${APIUrl}/dynamic/addArticleDynamic`, {
        method: 'POST',
        body: formData
      }).then(response => {
        return response.json()
      }).then(res => {
        this.props.addArticleDynamicAction(res)
      }).catch(error => console.error(error))
    } else {
      alert("请填写标题，选择正确的文件")
    }

  };
  render() {
    let { showLoadingBox, AddPersonalDynamic, match, dynamicList, changeDynamicList, fileName, showAddArticle, showAddPersonal, FileValueChange, sidebarList, authorInfo, loginUserInfo, logout, showAddDynamicBox } = this.props

    return (
      <DynamicWrapper>
        {showLoadingBox ? <Loading /> : <></>}
        {
          showAddArticle && (
            <AddArticleBox>
              <form onSubmit={this.addArticleSubmit}>
                <AddArticleInput autocomplete="off" />
                <AddArticleTagBox>
                  <span>标签：</span>
                  <select name="tag1">
                    <option>语言</option>
                    <option>C</option>
                    <option>C++</option>
                    <option>Java</option>
                    <option>Python</option>
                    <option>JavaScript</option>
                    <option>NodeJS</option>
                    <option>HTML</option>
                    <option>CSS</option>
                    <option>Go</option>
                    <option>Swift</option>
                    <option>PHP</option>
                    <option>R</option>
                    <option>JQuery</option>
                    <option>React</option>
                    <option>VUE</option>
                    <option>Angular</option>
                    <option>Express</option>
                    <option>Spring Boot</option>
                    <option>Laravel</option>
                    <option>CakePHP</option>
                    <option>Django</option>
                    <option>Ruby on Rails</option>
                    <option>Flask</option>
                    <option>Phoenix</option>
                    <option>Webpack</option>
                    <option>Gulp</option>
                    <option>Git</option>

                  </select>
                  <select name="tag2">
                    <option>类别</option>
                    <option>计算机网络</option>
                    <option>浏览器</option>
                    <option>行业发展</option>
                    <option>个人思考</option>
                    <option>有趣的事</option>
                  </select>
                </AddArticleTagBox>
                <AddArticleFileBox>
                  <span>{(fileName === '') ? "选择md文件" : fileName}</span>
                  <AddArticleFile onChange={FileValueChange}></AddArticleFile>
                </AddArticleFileBox>
                <AddArticleCancel onClick={() => showAddDynamicBox('articleDynamic')}>关闭</AddArticleCancel>
                <AddArticleSubmit></AddArticleSubmit>
              </form>
            </AddArticleBox>
          )
        }
        {
          showAddPersonal && (
            <AddPersonalBox>
              <AddPersonalText ref={this.personalTextRef} />
              <AddPersonalCancel
                onClick={() => showAddDynamicBox('personalDynamic')}
              >关闭</AddPersonalCancel>
              <AddPersonalSubmit
                onClick={() => AddPersonalDynamic(this.personalTextRef.current.value, loginUserInfo.get('authorId'))}
              >添加</AddPersonalSubmit>

            </AddPersonalBox>
          )
        }

        <SidebarBox>
          <SidebarTitle>太空飞船</SidebarTitle>
          {
            sidebarList.map(item => {
              return (
                <SidebarItem key={item.get('dynamicId')}>
                  <span
                    onClick={() => {
                      changeDynamicList(item.get('dynamicId'))
                    }}
                  >
                    {item.get('dynamicTitle')}
                  </span>
                  {
                    authorInfo.get('authorId') === loginUserInfo.get('authorId') && (
                      <svg onClick={() => showAddDynamicBox(item.get('dynamicId'))} t="1620480447704" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2691" data-spm-anchor-id="a313x.7781069.0.i6" width="200" height="200"><path d="M525.963636 525.963636m-242.036363 0a242.036364 242.036364 0 1 0 484.072727 0 242.036364 242.036364 0 1 0-484.072727 0Z" fill="#FFB200" p-id="2692"></path><path d="M512 805.236364C351.418182 805.236364 218.763636 674.909091 218.763636 512S351.418182 218.763636 512 218.763636 805.236364 351.418182 805.236364 512 672.581818 805.236364 512 805.236364z m0-551.563637c-141.963636 0-258.327273 116.363636-258.327273 258.327273s116.363636 258.327273 258.327273 258.327273 258.327273-116.363636 258.327273-258.327273-116.363636-258.327273-258.327273-258.327273z" fill="#cdcdcd" p-id="2693" data-spm-anchor-id="a313x.7781069.0.i5" ></path><path d="M649.309091 530.618182H374.690909c-9.309091 0-18.618182-6.981818-18.618182-18.618182s6.981818-18.618182 18.618182-18.618182h274.618182c9.309091 0 18.618182 6.981818 18.618182 18.618182s-9.309091 18.618182-18.618182 18.618182z" fill="" p-id="2694"></path><path d="M512 667.927273c-9.309091 0-18.618182-6.981818-18.618182-18.618182V374.690909c0-9.309091 6.981818-18.618182 18.618182-18.618182s18.618182 6.981818 18.618182 18.618182v274.618182c0 9.309091-9.309091 18.618182-18.618182 18.618182z" fill="" p-id="2695"></path></svg>
                    )
                  }
                </SidebarItem>

              )
            })
          }

        </SidebarBox>

        <DynamicBox>
          <DynamicTitle>
            <TitleText>{authorInfo.get('authorName')}</TitleText>
            <TitleMsg>
              <TitleItem><i className="iconfont">&#xe650;</i>{authorInfo.get('visiteNum')}</TitleItem>
            </TitleMsg>
          </DynamicTitle>
          <DynamicContent>
            <DynamicList>
              {
                dynamicList.map((item) => {
                  return (
                    <DynamicItem key={item.get("articleId") || item.get("personalId")}>
                      <DynamicPoint />
                      <DynamicTime>{item.get("dynamicTime")}</DynamicTime>
                      {
                        item.get("articleId") && <Link to={`/article/${match.params.authorId}/${item.get("articleId")}`}><DynamicText>{item.get("dynamicText")}</DynamicText></Link>
                      }
                      {
                        item.get("personalId") && <DynamicText>{item.get("dynamicText")}</DynamicText>
                      }
                    </DynamicItem>
                  )
                })
              }

            </DynamicList>

          </DynamicContent>
        </DynamicBox>

        <Userbox>
          <UserInfo>
            <img src={authorInfo.get('authorImg')} alt="" />
            <Username>{authorInfo.get('authorName')}</Username>
            {
              authorInfo.get('authorId') === loginUserInfo.get('authorId') && (
                <Logout onClick={logout}>退出登录</Logout>
              )
            }

            <Usernum>
              <Numitem className="borderr" 
              onClick={() => {
                changeDynamicList("articleDynamic")
              }}>
                <h4>{authorInfo.get('articleNum')}</h4>
                <h6>文章</h6>
              </Numitem>
              <Numitem 
              onClick={() => {
                changeDynamicList("personalDynamic")
              }}>
                <h4>{authorInfo.get('personalNum')}</h4>
                <h6>动态</h6>
              </Numitem>
            </Usernum>
          </UserInfo>
          <Hastitle><i className="iconfont">&#xe624;</i> 分类</Hastitle>
          <Categorybox>
            {
              authorInfo.get('category') && authorInfo.get('category').map(item => {
                return <Categoryitem key={item.get("categoryName")}>{item.get("categoryName")}<span>{item.get("articleNum")}</span></Categoryitem>
              })
            }

          </Categorybox>
          <Hastitle><i className="iconfont">&#xe9f7;</i> 标签</Hastitle>
          <Tagsbox>
            {
              authorInfo.get('tag') && authorInfo.get('tag').map(item => {
                return <Tagsitem key={item}>{item}</Tagsitem>
              })
            }
          </Tagsbox>
          <Hastitle><i className="iconfont">&#xe625;</i> 友情链接</Hastitle>
          <Flinkbox>
            {
              authorInfo.get('fLink') && authorInfo.get('fLink').map(item => {
                return <Flinkitem key={item}>{item}</Flinkitem>
              })
            }
          </Flinkbox>
        </Userbox>

      </DynamicWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    showLoadingBox: state.getIn(["dynamic", "showLoadingBox"]),
    sidebarList: state.getIn(["dynamic", "sidebarList"]),
    dynamicList: state.getIn(['dynamic', 'dynamicList']),
    authorInfo: state.getIn(['dynamic', 'authorInfo']),
    showAddArticle: state.getIn(['dynamic', 'showAddArticle']),
    showAddPersonal: state.getIn(['dynamic', 'showAddPersonal']),
    fileName: state.getIn(['dynamic', 'fileName']),
    loginUserInfo: state.getIn(['login', 'userInfo'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getAuthorInfo(authorId, dynamicList) {
      dispatch(actionCreators.getAuthorInfo(authorId, dynamicList))
    },
    changeDynamicList(dynamicId) {
      dispatch(actionCreators.changeDynamicList(dynamicId))
    },

    logout() {
      dispatch(actionCreators.showLoadingBoxAction(true))
      dispatch(loginActionCreators.handleLogout())
      setTimeout(() => {
        dispatch(actionCreators.showLoadingBoxAction(false))
      }, 500)
    },
    showAddDynamicBox(dynamicId) {
      dispatch(actionCreators.showAddDynamicBox(dynamicId))
    },
    AddPersonalDynamic(text, authorId) {
      dispatch(actionCreators.AddPersonalDynamic(text, authorId))
    },
    FileValueChange(e) {
      dispatch(actionCreators.changeFileName(e.target.files[0]))
    },
    addArticleDynamicAction(userInfo) {
      dispatch(actionCreators.addArticleDynamicAction(userInfo))
    },
    changeLoadingBoxStatus(status) {
      dispatch(actionCreators.showLoadingBoxAction(status))
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dynamic))