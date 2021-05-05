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