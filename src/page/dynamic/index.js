import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import {
  DynamicWrapper,
  DynamicBox,
  DynamicTitle,
  TitleText,
  TitleMsg,
  TitleItem,
  DynamicContent,
  DynamicList,
  DynamicItem,
  DynamicTime,
  DynamicPoint,
  DynamicText,
  SidebarBox,
  SidebarTitle,
  SidebarItem,
  Userbox,
  UserInfo,
  Username,
  Logout,
  Usernum,
  Numitem,
  Hastitle,
  Categorybox,
  Categoryitem,
  Tagsbox,
  Tagsitem,
  Flinkbox,
  Flinkitem,
  AddDynamicBox,
  AddDynamicInput,
  AddDynamicCancel,
  AddDynamicFile,
  AddDynamicFileBox,
  AddDynamicSubmit

} from './style'
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../login/store'
class Dynamic extends PureComponent {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    let { getDynamicMsg, getSidebarContent, getUserInfo, match } = this.props
    let { userId, dynamicId } = match.params
    getDynamicMsg(userId, dynamicId)
    getSidebarContent(userId, dynamicId)
    getUserInfo(userId);
    window.scrollTo(0, 0)
  }
  submit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    fetch('http://127.0.0.1:3001/file/upload', {
      method: 'POST',
      body: formData 
    }).then(response => console.log(response))
  };
  render() {
    let { changeDynamicTitle, fileName, dynamicTitle, showAddDynamic, FileValueChange, dynamicMsg, sidebarList, getDynamicMsg, userInfo, loginUserInfo, logout, showAddDynamicBox } = this.props
    return (
      <DynamicWrapper>
        {
          showAddDynamic && (
            <AddDynamicBox>
              <AddDynamicInput value={dynamicTitle} onChange={changeDynamicTitle}></AddDynamicInput>
              <form onSubmit={this.submit}>
              <AddDynamicFileBox>
                <span>{(fileName === '') ? "选择md文件" : fileName}</span>
                
                <AddDynamicFile onChange={FileValueChange}></AddDynamicFile>
              </AddDynamicFileBox>
              <AddDynamicCancel onClick={() => showAddDynamicBox()}>关闭</AddDynamicCancel>
              <AddDynamicSubmit></AddDynamicSubmit>
              </form>
            </AddDynamicBox>
          )
        }


        <SidebarBox>
          <SidebarTitle>太空飞船</SidebarTitle>
          {
            sidebarList.map(item => {
              return (
                <SidebarItem key={item.get('dynamicId')}>
                  <Link
                    to={`/dynamic/${userInfo.get('authorId')}/${item.get('dynamicId')}`}
                    onClick={() => {
                      getDynamicMsg(userInfo.get('authorId'), item.get('dynamicId'))
                    }}
                  >
                    {item.get('dynamicTitle')}
                  </Link>
                  {
                    userInfo.get('authorId') === loginUserInfo.get('authorId') && (
                      <svg onClick={() => showAddDynamicBox()} t="1620480447704" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2691" data-spm-anchor-id="a313x.7781069.0.i6" width="200" height="200"><path d="M525.963636 525.963636m-242.036363 0a242.036364 242.036364 0 1 0 484.072727 0 242.036364 242.036364 0 1 0-484.072727 0Z" fill="#FFB200" p-id="2692"></path><path d="M512 805.236364C351.418182 805.236364 218.763636 674.909091 218.763636 512S351.418182 218.763636 512 218.763636 805.236364 351.418182 805.236364 512 672.581818 805.236364 512 805.236364z m0-551.563637c-141.963636 0-258.327273 116.363636-258.327273 258.327273s116.363636 258.327273 258.327273 258.327273 258.327273-116.363636 258.327273-258.327273-116.363636-258.327273-258.327273-258.327273z" fill="#cdcdcd" p-id="2693" data-spm-anchor-id="a313x.7781069.0.i5" ></path><path d="M649.309091 530.618182H374.690909c-9.309091 0-18.618182-6.981818-18.618182-18.618182s6.981818-18.618182 18.618182-18.618182h274.618182c9.309091 0 18.618182 6.981818 18.618182 18.618182s-9.309091 18.618182-18.618182 18.618182z" fill="" p-id="2694"></path><path d="M512 667.927273c-9.309091 0-18.618182-6.981818-18.618182-18.618182V374.690909c0-9.309091 6.981818-18.618182 18.618182-18.618182s18.618182 6.981818 18.618182 18.618182v274.618182c0 9.309091-9.309091 18.618182-18.618182 18.618182z" fill="" p-id="2695"></path></svg>
                    )
                  }
                </SidebarItem>

              )
            })
          }

        </SidebarBox>

        <DynamicBox>
          <DynamicTitle>
            <TitleText>{dynamicMsg.get('dynamicTitle')}</TitleText>
            <TitleMsg>
              <TitleItem><i className="iconfont">&#xe60e;</i>{dynamicMsg.get('author')}</TitleItem>
              <TitleItem><i className="iconfont">&#xe619;</i>{dynamicMsg.get('time')}</TitleItem>
              <TitleItem><i className="iconfont">&#xe650;</i>{dynamicMsg.get('viewNum')}</TitleItem>
            </TitleMsg>
          </DynamicTitle>
          <DynamicContent>
            <DynamicList>
              {
                dynamicMsg.get('dynamicList') && dynamicMsg.get('dynamicList').map((item) => {
                  return (
                    <DynamicItem key={item.get("dynamicListId") || item.get("articleListId")}>
                      <DynamicPoint />
                      <DynamicTime>{item.get("dynamicTime")}</DynamicTime>
                      {
                        item.get("articleListId") && <Link to={item.get("articleListId")}><DynamicText>{item.get("dynamicText")}</DynamicText></Link>
                      }
                      {
                        item.get("dynamicListId") && <DynamicText>{item.get("dynamicText")}</DynamicText>
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
            <img src={userInfo.get('authorImg')} alt="" />
            <Username>{userInfo.get('authorName')}</Username>
            {
              userInfo.get('authorId') === loginUserInfo.get('authorId') && (
                <Logout onClick={logout}>退出登录</Logout>
              )
            }

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

      </DynamicWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dynamicMsg: state.getIn(['dynamic', 'dynamicMsg']),
    sidebarList: state.getIn(["dynamic", "sidebarList"]),
    userInfo: state.getIn(['dynamic', 'userInfo']),
    showAddDynamic: state.getIn(['dynamic', 'showAddDynamic']),
    dynamicTitle: state.getIn(['dynamic', 'dynamicTitle']),
    fileName: state.getIn(['dynamic', 'fileName']),
    loginUserInfo: state.getIn(['login', 'userInfo'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getDynamicMsg(userId, dynamicId) {
      dispatch(actionCreators.getDynamicMsg(userId, dynamicId))
    },
    getSidebarContent(userId) {
      dispatch(actionCreators.getSidebarContent(userId))
    },
    getUserInfo(userId) {
      dispatch(actionCreators.getUserInfo(userId))
    },
    logout() {
      dispatch(loginActionCreators.handleLogout())
    },
    showAddDynamicBox() {
      dispatch(actionCreators.showAddDynamicBox())
    },
    FileValueChange(e) {
      console.log(e.target.files[0])
      dispatch(actionCreators.changeFileName(e.target.files[0]))

    },
    changeDynamicTitle(e) {
      dispatch(actionCreators.changeDynamicTitle(e.target.value))
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dynamic))