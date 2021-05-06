import styled from 'styled-components'
import store from '../../store'
let curTheme = store.getState().toJS().header.curTheme
export const TagWrapper = styled.section`
  width: 100vw;
  padding: 70px 50px 100px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;
export const TagBox = styled.article`
  max-width: 860px;
  flex: 1;
`;
export const TagList = styled.div`
  width: 100%;
  margin-top: 50px;
`;
export const TagItem = styled.span`
  display: inline-block;
  padding: 2px 6px;
  background: #f40;
  margin: 10px;
  border-radius: 4px;
`;
export const ArticleList = styled.div`
  width: 100%;
  margin-top: 20px;
`;
export const BlogItem = styled.article`
  position: relative;
  margin: 0 auto 20px;
  padding: 16px 20px;
  width: 100%;
  overflow: hidden;
  border-radius: 2px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.6);
  box-sizing: border-box;
  transition: all .3s;
  cursor: pointer;
`;
export const Blogtitle = styled.div`
  height: 30px;
  line-height: 30px;
  color: ${curTheme.titleColor2};
  font-weight: 500;
  font-size: 24px;
`;

export const Bloghr = styled.hr`
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
`;
export const Blogmsg = styled.div`

`;
export const Msgitem = styled.div`
  display: inline-block;
  margin-right: 20px;
  color: ${curTheme.color3};
  .iconfont {
    color: ${curTheme.color3};
  }
`;