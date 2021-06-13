import styled from 'styled-components'
export const ChannelWrapper = styled.section`
  width: 100vw;
  padding-top: 60px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;
export const SpeechBox = styled.div`
  min-width: 700px;
`;
export const SpeechItem = styled.div`
  position: relative;
  min-width: 700px;
  min-height: 150px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.6);
  margin: 30px 0;
`;
export const SpeechAuthorImg = styled.img`
  position: absolute;
  top: 0;
  left: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;
export const SpeechAuthorName = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  display: inline-block;
  width: 100px;
  line-height: 20px;
  text-align: center;
  word-wrap:break-word;
`;
export const SpeechContent = styled.div`
  position: relative;
  top: 0;
  left: 150px;
  width: 400px;
  min-height: 80px;
  padding: 10px 0;
  letter-spacing: 2px;
  line-height: 20px;
  text-align: center;
  
`;
export const SpeechOperate = styled.div`
  position: absolute;
  top: 70px;
  right: 10px;
  span {
    cursor: pointer;
  }
`;
export const SpeechComment = styled.div`
  position: relative;
  min-width: 700px;
  display: none;
`;
export const CommentInput = styled.input.attrs({
  placeholder: "点击，写下你的足迹"
})`
  position: relative;
  left: 50%;
  top: 10px;
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
export const CommentBtn = styled.span`
  position: absolute;
  left: 50%;
  margin-left: 150px;
  top: 15px;
  cursor: pointer;
  overflow: hidden;
  opacity: 0;
  transition: all .5s;
`;
export const CommentItem = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  margin: 20px 0;
  background: transparent;
  box-sizing: border-box;
  padding: 0 50px;
`;
export const CommentAuthorName = styled.span`
  color: #c9c9c9;
  margin-right: 5px;
`;
export const CommentText = styled.span`
  text-align: center;
`;
export const CommentClose = styled.div`
  width: 100%;
  font-size: 14px;
  color: #c9c9c9;
  text-align: center;
  padding: 10px 0;
  cursor: pointer;
`;
export const CommentAuthorImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 5px;
`;