import styled from 'styled-components'
import store from '../../store'
let curTheme = store.getState().toJS().header.curTheme
export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  z-index: 20;
  width: 100vw;
  padding: 5px 20px;
  overflow: hidden;
  box-shadow: 0 1px 8px 0 rgb(0 0 0 / 60%);
`;
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
    font-size: 22px;
    font-weight: bold;
    font-family: monospace;
    color: ${curTheme.color1};
  }
`;
export const HeaderRight = styled.div`
  position: relative;
  float: right;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 650px;
  height: 50px;
  margin-right: 30px;
  .iconfont {
    color: ${curTheme.titleColor2};
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
`;

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
    border: 1px solid ${curTheme.titleColor2};
  }
`;
export const NavWarpper = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 400px;
`;
export const NavItem = styled.li`
  font-size: 15px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  color: ${curTheme.titleColor2};
  &:hover{
    span {
      color: #FFFACD;
    }
    
  }

  img {
    display: inline-block;
    width: 30px;
    height: 30px;
    vertical-align:middle
  }
`;