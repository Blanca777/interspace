import styled from 'styled-components'
import blanca from '../../statics/blanca.jpg'
import store from '../../store'
let curTheme = store.getState().toJS().header.curTheme
export const DynamicWrapper = styled.section`
  width: 100vw;
  padding-top: 60px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;
export const DynamicBox = styled.article`
  max-width: 860px;
  flex: 1;
`;
export const DynamicTitle = styled.div`
  width: 100%;
  margin-top: 50px;
`;
export const TitleText = styled.h1`
  font-size: 34px;
  color: #c4c4c4;
`;
export const TitleMsg = styled.ul`
  width: 100%;
  padding: 15px 0;
  margin-top: 15px;
  border-top: 1px solid #323232;
`;
export const TitleItem = styled.li`
  float: left;
  margin-right: 40px;
  color: #a4a4a4;
  .iconfont {
    margin-right: 10px;
    color: #a4a4a4;
  }
`;
export const DynamicContent = styled.div`
  margin-top: 10px;
`;
export const DynamicList = styled.ul`
  padding: 40px;
`;
export const DynamicItem = styled.li`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding-left: 20px;
  padding-bottom: 30px;
  border-left: 2px solid #fff;
`;
export const DynamicPoint = styled.div`
  width: 12px;
  height: 12px;
  position: absolute;
  top: 0;
  left: -7px;
  background-color: #e4e7ed;
  border-radius: 50%;
`;
export const DynamicTime = styled.div`
  margin-bottom: 10px;
  color: #909399;
  font-size: 12px;
`;

export const DynamicText = styled.div`
  width: 100%;
  padding: 20px 10px;
  
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.6);
`;






export const SidebarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  
  box-sizing: border-box;
  width: 280px;
  height: 100vh;

`;
export const SidebarBox = styled.div`

  max-width: 280px;
  padding: 40px 20px;

`;
export const SidebarTitle = styled.h2`
  margin-bottom: 20px;
  text-transform: Uppercase;
`;
export const SidebarItem = styled.div`
  padding: 5px 20px;
  margin: 10px 0;
  background: rgba(62,175,124,.1);
  border-right: 3px solid #3eaf7c;
  color: #d8d8d8;
  &:hover {
    color: #3eaf7c;
  }
`;

export const Userbox = styled.article`

  padding: 20px;
  max-width: 250px;
  height: auto;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.6);
`;
export const UserInfo = styled.article`
  img {
    width: 100px;
    height: 100px;
    padding: 30px 75px 20px;
    border-radius: 2px;
  }
`;
export const Userimg = styled.img.attrs({
  src: blanca
})`
  width: 100px;
  height: 100px;
  padding: 30px 75px 20px;
  border-radius: 2px;
`;
export const Username = styled.h4`
  text-align: center;
  margin-bottom: 20px;
  color: ${curTheme.color1};
`;
export const Usernum = styled.div`
  display: flex;
  color: ${curTheme.color1};
`;
export const Numitem = styled.div`
  width: 125px;
  height: 50px;
  color: ${curTheme.color1};
  &.borderr{
    border-right: 1px solid #333;
  }
  
  h4 {
    width: 120px;
    text-align: center;
    height: 25px;
  }
  h6 {
    width: 120px;
    height: 25px;
    text-align: center;
  }
`;

export const Hastitle = styled.div`
  padding: 18px 0;
  color:  ${curTheme.color2};
  .iconfont {
    color: #aaa;
  }
`;
export const Categorybox = styled.ul`
  padding: 10px 0;
`;
export const Categoryitem = styled.li`
  padding: 6px 12px;
  margin: 6px 0;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.6);
  color:  ${curTheme.titleColor2};
  overflow: hidden;
  line-height: 25px;
  span {
    float: right;
    display: inline-block;
    width: 25px;
    height: 25px;
    border-radius: 2px;
    background: #f40;
    text-align: center;
    line-height: 25px;
    color: ${curTheme.color1};
  }
`;
export const Tagsbox = styled.div`
  margin: 20px 0;
`;
export const Tagsitem = styled.span`
  display: inline-block;
  background: #f40;
  padding: 6px;
  margin-right: 8px;
  border-radius: 4px;
  font-size: 14px;
`;
export const Flinkbox = styled.article`
  margin: 20px 0;
`;
export const Flinkitem = styled.article`
  display: inline-block;
  padding: 6px;
  margin: 4px 4px 10px;
  line-height: 20px;
  vertical-align: middle;
  font-size: 13px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  font-size: 14px;
  color: ${curTheme.color2};
  &::before {
    content: '';
    display: inline-block;
    background-color: rgb(225, 91, 100);
    width: 6px;
    height: 6px;
    margin: 2px;
  }
`;