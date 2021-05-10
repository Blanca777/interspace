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
export const LoadingWrapper = styled.footer`
  margin: 200px 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  .flyman {
    width: 50px;
    height: 50px;
    transform-origin: 150px 100px;
    animation: 1s ${flyman} linear infinite alternate;
    z-index: 10;

  }
  .capsule{
    animation: 1s ${capsule} linear infinite alternate;
  }
  
  
`;
