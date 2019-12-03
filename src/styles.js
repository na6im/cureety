import styled from 'styled-components';

export const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
  justify-content: center;
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
