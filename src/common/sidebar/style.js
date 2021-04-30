import styled from 'styled-components'
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