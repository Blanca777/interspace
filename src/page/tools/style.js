import styled from 'styled-components'
export const ToolsWrapper = styled.section`
  width: 100vw;
  padding: 70px 250px 100px 320px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;
export const ToolsBox = styled.article`
  max-width: 860px;
  flex: 1;
  
`;
export const ToolsTitle = styled.div`
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
export const ToolsContent = styled.article`

  margin-top: 30px;


`
export const ToolsAdvantages = styled.article`
  margin-bottom: 50px;
  h1 {
    font-size: 22px;
    font-weight: bold;
    color: #c9c9c9;
    margin: 20px 0;
    padding-bottom: 10px;
    border-bottom: 1px solid #000;
  }


`

export const ToolsApplication = styled.article`

  margin-bottom: 50px;
  h1 {
    font-size: 22px;
    font-weight: bold;
    color: #c9c9c9;
    margin: 20px 0;
    padding-bottom: 10px;
    border-bottom: 1px solid #000;
  }

`




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