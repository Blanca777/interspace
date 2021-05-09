import styled from 'styled-components'
export const AboutWrapper = styled.section`
  margin: 200px 0;
  width: 100vw;
  display: flex;
  justify-content: center;
`;
export const AboutBox = styled.div`
  width: 400px;
  height: 400px;
  text-align: center;
  
  &>img {
    margin: 0 100px;
    opacity: .7;
    transition: all .5s;
  }
  &>img:hover {
    opacity: 1;
    &+span {
      opacity: 1;
    }
  }
`;
export const Devman = styled.span`
  opacity: 0;
  img {
    width: 50px;
    height: 50px;
    vertical-align: middle;
    margin-right: 20px;
  }
  transition: all 1s;
`;
export const DevmanName = styled.span`
  margin-right: 20px;
`;
export const DevmanAddress = styled.a.attrs(props => ({
  href: props.address,
  target: "_blank"
}))`

`;