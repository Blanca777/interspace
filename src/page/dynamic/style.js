import styled from 'styled-components'
export const DynamicWrapper = styled.section`
  width: 100vw;
  padding: 70px 250px 100px 320px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;
export const DynamicBox = styled.article`
  max-width: 860px;
  flex: 1;
  .markdown {
    letter-spacing: 2px;
    h2 {
      font-size: 25px;
      font-weight: bold;
      margin-top: 60px;
    }
    h3 {
      font-size: 20px;
      font-weight: bold;
      margin-top: 40px;
      color: #ddd;
    }
    p {
      line-height: 22px;
      margin: 20px 0;
      color: #c8c8c8;
    }
    code {
      line-height: 20px;
      background: #000;
    }
    ul,ol {
      list-style-type: circle;
    
    }
    li {
      color: #aaa;
      margin: 10px 0;
      padding-left: 20px;
      box-sizing: border-box;
      &::before{
        content: '';
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #aaa;
        margin-right: 5px;
      }
    }
  }
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
  padding-top: 70px;
  box-sizing: border-box;
  width: 280px;
  height: 100vh;
  background: red;

`;
export const SidebarBox = styled.div`
  width: 100%;
  height: 100%;
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