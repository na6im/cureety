import React, { useState, useRef } from 'react';
import {
  Conatiner,
  TextInput,
  Icon,
  InputContainer,
  ErrorText,
} from './styles';
import edit from './edit.svg';
import checkmark from './checkmark.svg';
import cross from './cross.svg';

export default function EffectItem({ item, index, list, onUpdateFunction }) {
  const effect =
    item.label.length < 25 ? item.label : `${item.label.substr(0, 25)}...`;

  const [hover, setHover] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [label, setLabel] = useState(item.label);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);
  function mouseOver() {
    setHover(!hover);
  }

  function validateField(text) {
    if (text !== item.label && text.length < 5) {
      setError('Min 5 caracters');
    } else if (text !== item.label && list.indexOf(text.toLowerCase()) !== -1) {
      setError('item already exists');
    } else {
      onUpdateFunction(text, index);
      setEditMode(!editMode);
      setError(null);
    }
  }

  async function setToEditMode() {
    await setEditMode(!editMode);
    inputRef.current.focus();
  }

  return (
    <Conatiner
      onMouseEnter={mouseOver}
      onMouseLeave={mouseOver}
      title={item.label}
      hover={hover}
      edit={editMode}
    >
      <InputContainer>
        <TextInput
          value={editMode ? label : effect}
          disabled={!editMode}
          ref={inputRef}
          onMouseEnter={() => {
            inputRef.current.focus();
          }}
          onChange={text => {
            setLabel(text.target.value);
            setError(null);
          }}
        />
        <ErrorText>{error}</ErrorText>
      </InputContainer>
      {editMode && (
        <Icon
          src={cross}
          alt="cross"
          hover={hover}
          edit={editMode}
          onClick={() => {
            setLabel(item.label);
            setEditMode(!editMode);
            setError(null);
          }}
        />
      )}
      <Icon
        src={editMode ? checkmark : edit}
        alt="edit"
        hover={hover}
        edit={editMode}
        onClick={() => {
          if (editMode) {
            validateField(label);
          } else {
            setToEditMode();
          }
        }}
      />
    </Conatiner>
  );
}
