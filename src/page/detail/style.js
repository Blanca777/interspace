import styled from 'styled-components'
export const DetailWrapper = styled.section`
  width: 100vw;
  padding: 70px 250px 100px 320px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;
export const DetailBox = styled.article`
  max-width: 860px;
  flex: 1;
  
`;
export const DetailTitle = styled.div`
  width: 100%;
  margin-top: 50px;
`;
export const TitleText = styled.h1`
  font-size: 34px;
  color: #c4c4c4;
`;
export const TitleMsg = styled.ul`
  width: 100%;
  height: 40px;
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