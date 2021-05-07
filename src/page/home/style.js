import styled from 'styled-components'
import homebg from '../../statics/homebg.jpg'
import blanca from '../../statics/blanca.jpg'
import store from '../../store'
let curTheme = store.getState().toJS().header.curTheme
export const HomeWrapper = styled.main`
  width: 100vw;
`;
export const PicWrapper = styled.div`
  width: 100vw;
  height: 550px;
  display: flex;
  justify-content: center;
`
export const Pic = styled.img.attrs({
  src: homebg

})`
  height: 550px;
  filter: brightness(0.50);
`;
export const PicText = styled.h1`
  position: absolute;
  background: transparent;
  margin-top: 200px;
  font-size: 40px;
  line-height: 55px;
  text-align: center;
  user-select: none;
  color: ${curTheme.color1};
`
export const Content = styled.section`
  display: flex;
  align-items: flex-start;
  margin: 20px auto 0;
  max-width: 1126px;
`
export const Article = styled.article`
  flex: auto;
`;
export const Pageto = styled.section`
  width: 100%;
  margin: 20px 0;
  padding: 10px 20px;
  text-align: center;
  user-select: none;
`
export const Pagebtn = styled.span`
  padding: 5px 8px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 5px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.6);
  &.active {
    background: #3eaf7c;
  }
`
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
export const Blogabstract = styled.div`
  width: 100%;
  border-left: 5px solid #67cc86;
  box-sizing: border-box;
  padding: 20px;
  margin: 20px 0;
`;
export const AbstractTitle = styled.h1`
  font-size: 18px;
  color: ${curTheme.titleColor1};
`
export const Abstractparagraph = styled.p`
  font-size: 16px;
  margin-top: 20px;
  color: ${curTheme.color2};
`
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
export const RankList = styled.aside`
  width: 250px;
  margin-left: 10px;
  box-shadow: 0 1px 8px 0 rgb(0 0 0 / 60%);
`;
export const RankTitle = styled.h1`
  width: 100%;
  padding: 20px 20px 10px;
  box-sizing: border-box;
  font-size: 20px;
  color: #67cc86;
`;

export const RankItem = styled.li`
  width: 100%;
  padding-left: 30px;
  margin: 20px 0;
  box-sizing: border-box;
`;
