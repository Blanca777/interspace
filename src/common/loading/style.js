import styled, { keyframes } from 'styled-components'
const flyman = keyframes`
  0% {
    transform: rotate(-10deg)
  }
  100% {
    transform: rotate(10deg)
  }
  
`
const capsule = keyframes`
  0% {
    transform: rotate(-5deg)
  }
  100% {
    transform: rotate(5deg)
  }
  
`
export const LoadingWrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.95;
  
  
`;
export const LoadingBox = styled.div`
  position: relative;
  .flyman {
    position: absolute;
    top: 20px;
    left: -30px;
    width: 50px;
    height: 50px;
    margin-right: 50px;
    transform-origin: 100px 50px;
    animation: 1s ${flyman} linear infinite alternate;
    z-index: 10;

  }
  .capsule{
    width: 200px;
    height: 200px;
    animation: 1s ${capsule} linear infinite alternate;
  }
`;
export const LoadingText = styled.div`
  margin-top: 50px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;