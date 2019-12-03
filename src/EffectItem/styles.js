import styled from 'styled-components';

export const Conatiner = styled.div`
  display: flex;
  flex: 1 1 100%;
  width: 55%;
  min-width: 500px;
  cursor: pointer;
  padding: 0.4em;
  margin: 0.5em;
  border-radius: 5px;
  font-size: 20px;
  align-items: center;
  background: linear-gradient(to right, #6fd4e2 0%, #8bc2c9 100%);
  transform: ${props => (props.hover ? 'scale(1.25)' : null)};
  transition: ease 0.5s;
`;

export const TextInput = styled.input`
  display: flex;
  height: 100%;
  width: 100%;
  border: none;
  font-size: 20px;
  background-color: transparent;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
  }
`;
export const InputContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Icon = styled.img`
  display: ${props => (props.hover || props.edit ? 'flex' : 'none')};
  padding: 5px;
  height: 1em;
  border-radius: 4px;
  &:hover {
    border: solid 1px white;
  }
`;
