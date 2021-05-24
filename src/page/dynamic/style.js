import styled from 'styled-components'
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
  float: right;
  margin-left: 40px;
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


export const SidebarBox = styled.div`

  max-width: 280px;
  padding: 40px 20px;

`;
export const SidebarTitle = styled.h2`
  margin-bottom: 20px;
  text-transform: Uppercase;
`;
export const SidebarItem = styled.div`
  padding: 5px 10px 5px 20px;
  margin: 10px 0 10px 10px;
  background: rgba(62,175,124,.1);
  border-right: 3px solid #3eaf7c;
  color: #d8d8d8;
  cursor: pointer;
  span {
    background: rgba(62,175,124,.01);
  }
  svg {
    width: 30px;
    height: 30px;
    vertical-align: middle;
    margin-left: 10px;
    cursor: pointer;
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  }
  a {
    background: rgba(62,175,124, 0);
    &:hover {
      color: #3eaf7c;
    }
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
    padding: 30px 75px 10px;
    border-radius: 2px;
  }
`;


export const Username = styled.h4`
  text-align: center;
  margin-bottom: 10px;
  color: ${curTheme.color1};
`;
export const Logout = styled.h4`
  text-align: center;
  margin-bottom: 20px;
  color: red;
  cursor: pointer;
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

export const AddDynamicBox = styled.aside`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 400px;
  height: 150px;
  padding: 20px;
  z-index: 10;
  background: rgba(0,0,0,.1);
  box-shadow: 0 0 10px #555;
`
export const AddDynamicInput = styled.input.attrs({
  placeholder: "标题"
})`
  box-sizing: border-box;
  padding: 10px;
  border-radius: 20px; 
  outline: none;
  border: none;
  text-align: center;
  background: #c9c9c9;
  width: 400px;
  transition: all .3s;
  font-size: 20px;
  color: #3eaf7c;
  &:focus {
    background: #fff;
    &::placeholder{ 
      color: #fff;
    }
  }
`;
export const AddDynamicFileBox = styled.div`
  position: absolute;
  top: 80px;
  left: 120px;  
  display: inline-block;
  background: #fff;
  width: 200px;
  height: 40px;
  border-radius: 5px;
  
  span {
    width: 100%;
    height: 100%;
    display: inline-block;
    text-align: center;
    line-height: 40px;
    background: #fff;
    color: #646464;
    
  }

`
export const AddDynamicFile = styled.input.attrs({
  type: "file",
  accept: ".md",
  name: 'file'
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 40px;
  opacity: 0;
  cursor: pointer;
`;

export const AddDynamicCancel = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 220px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #fff;
  color: #f00;
  cursor: pointer;
  opacity: .7;
  &:hover {
    opacity: 1;
    color: #fff;
    background: #f00;
    font-size: 18px;


  }
`;
export const AddDynamicSubmit = styled.input.attrs({
  type: "submit",
  value: "添加"
})`
  outline: none;
  border: none;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 220px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #fff;
  color: #3eaf7c;
  opacity: .7;
  cursor: pointer;
  &:hover {
    opacity: 1;
    color: #fff;
    background: #3eaf7c;
    font-size: 18px;

  }
`;