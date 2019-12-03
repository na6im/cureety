import styled, { keyframes } from 'styled-components';

export const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  width: 100vw;
  color: white;
  align-items: center;
  padding-top: 100px;
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  padding: 2em 5em;
`;

export const Header = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100%;
  height: 100px;
  background-color: rgb(96, 187, 160);
`;

const jump = keyframes`
  0% {
    transform: translateY(0em);
  }
  50%{
    transform: translateY(-2em)
    }
  100% {
      transform: translate(0,0);
          }
  `;

export const LogoIcon = styled.img`
  display: block;
  animation: ${jump} 3s linear infinite;
  margin-bottom: 1em;
`;
