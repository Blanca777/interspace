import styled from 'styled-components'
import store from '../../store'
let curTheme = store.getState().toJS().header.curTheme
export const ArticleWrapper = styled.section`
  width: 100vw;
  padding-top: 60px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const ArticleBox = styled.article`
  max-width: 860px;
  min-width: 425px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.6);
  padding-left: 20px;
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
export const ArticleTitle = styled.div`
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

export const Userbox = styled.article`
  margin-right: 10px;
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
export const Userimg = styled.img`
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

export const CommentBox = styled.div`
  width: 70vw;
  min-width: 500px;
  padding: 20px 32vw;

`;
export const CommentTextArea = styled.textarea.attrs({
  placeholder: "你的想法"
})`
  width: 100%;
  height: 80px;

  outline: none;
  border: 1px solid #c9c9c9;
  resize: none;

  font-size: 20px;
  background: #181818;
  color: #fff;
  text-align: center;
  padding: 10px;
  border-radius: 3px;
  box-sizing: border-box;
  &:focus {
    &+div {
      opacity: 1;
    }
  }
`;
export const CommentSubmit = styled.div`
  opacity: 0;
  transition: all .3s;
  margin-top: 5px;
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background: #fff;
  color: #53e3a6;
  cursor: pointer;
  font-weight: bold;
  border-radius: 15px;
  float: right;
  &:hover {
    color: #fff;
    background: #53e3a6;
  }
`;
export const CommentList = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px 10px;
  margin-top: 10px;
`;
export const CommentItem = styled.div`
  padding: 10px 0 60px;
  position: relative;
  overflow: hidden;
  width: 100%;
  margin: 20px 0;
  background: transparent;
  border: 1px solid #c9c9c9;
  img {
    width: 40px;
    height: 40px;
    vertical-align: middle;
  }
`;
export const CommentAuthorName = styled.span`
  
`;
export const CommentText = styled.span`
  display: inline-block;
  width: 60%;
  padding-left: 20px;
  vertical-align: top;
  line-height: 20px;
  letter-spacing: 2px;
`;
export const CommentReplyList = styled.div`
  padding: 0 50px;
  margin-top: 10px;
`;
export const ReplyItem = styled.div`
  color: #c9c9c9;
`;
export const ReplyAuthorName = styled.span`
  color: #c9c9c9;
`;
export const ReplyText = styled.span`
  display: inline-block;
  width: 60%;
  padding-left: 20px;
  line-height: 20px;
  vertical-align: top;
  letter-spacing: 2px;
`;
export const CommentReplyInput = styled.input.attrs({
  placeholder: "点击，写下你的足迹"
})`
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translate(-50%);

  width: 280px;
  padding: 5px;
  background: transparent;
  text-align: center;

  outline: none;
  border: none;
  border-radius: 20px;

  transition: all .5s;
  
  &::placeholder {
    color: #c8c8c8;
  }
  &:focus {
    background: #fff;
    &::placeholder {
      color: #fff;
    }
    &+span {
      opacity: 1;
    }
  }
`;
export const CommentReplyBtn = styled.span`
  position: absolute;
  left: 50%;
  margin-left: 150px;
  bottom: 15px;
  cursor: pointer;
  overflow: hidden;
  opacity: 0;
  transition: all .5s;
`;