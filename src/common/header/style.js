import styled from 'styled-components'
export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  z-index: 20;
  width: 100vw;
  padding: 10px 20px;
  overflow: hidden;
`
export const HeaderLeft = styled.div`
  width: 200px;
  height: 50px;
  overflow: hidden;
  display: flex;
  align-items: center;
  float: left;
  img{
    width: 50px;
    height: 50px;
  }
  span{
    white-space: nowarp;
    margin-left: 20px;
    font-size: 18px;
    color:
  }
`
export const HeaderRight = styled.div`
  position: relative;
  float: right;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 850px;
  height: 50px;
  margin-right: 30px;
  .iconfont {
    color: #3eaf7c;
    background: none;
    cursor: pointer;
  }
  .themeicon {
    font-size: 22px;
    margin-right: 15px;
  }
  .searchicon {
    position: absolute;
    top: 14px;
    left: 45px;
    font-size: 26px;
  }
`
export const HeaderSearch = styled.input`
  box-sizing: border-box;
  width: 200px;
  height: 35px;
  padding: 10px 10px 10px 30px;
  background: #535353;
  outline: none;
  border: none;
  border-radius: 3px;
  color: #6e8eae;
  background: none;
  &:focus{
    border: 1px solid #3eaf7c;
  }
`
export const NavWarpper = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 600px;
`
export const NavItem = styled.li`
  font-size: 15px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  &.active{
    color: #3eaf7c;
    border-bottom: 2px solid #3eaf7c;
    .iconfont {
      color: #3eaf7c;
    }
  }
  .iconfont {
    margin-right: 5px;
    color: #bfbfbf;
  }
  &:hover{
    color: #3eaf7c;
    border-bottom: 2px solid #3eaf7c;
    .iconfont {
      color: #3eaf7c;
    }
  }
`