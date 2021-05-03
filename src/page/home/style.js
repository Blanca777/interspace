import styled from 'styled-components'
import homebg from '../../statics/homebg.jpg'
import blanca from '../../statics/blanca.jpg'
import store from '../../store'
let curTheme = store.getState().toJS().global.curTheme
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
  width: 0;
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
export const Userbox = styled.article`
  position: sticky;
  top: 70px;
  transition: all .3s;
  margin-left: 15px;
  flex: 0 0 300px;
  height: auto;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.6);
  border-radius: 2px;
  box-sizing: border-box;
  padding: 0 15px;
`;
export const UserInfo = styled.article`
`;
export const Userimg = styled.img.attrs({
  src: blanca
})`
  width: 100px;
  height: 100px;
  padding: 30px 100px 20px;
  border-radius: 2px;
`;
export const Username = styled.h4`
  text-align: center;
  margin-bottom: 20px;
  color: ${curTheme.color1};
`;
export const Usernum = styled.div`
  padding: 0 30px 10px;
  display: flex;
  color: ${curTheme.color1};
`;
export const Numitem = styled.div`
  width: 120px;
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
