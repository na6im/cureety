import React, { useState } from 'react';
import { Conatiner, TextInput, InputContainer, Icon } from './styles';
import edit from './edit.svg';
import checkmark from './checkmark.svg';

export default function EffectItem({ item }) {
  const effect =
    item.label.length < 25 ? item.label : `${item.label.substr(0, 25)}...`;

  const [label, setLabel] = useState(item.label);
  const [hover, setHover] = useState(false);
  const [editMode, setEditMode] = useState(false);

  function mouseOver() {
    setHover(!hover);
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
          onChange={text => {
            setLabel(text.target.value);
          }}
        />
      </InputContainer>
      <Icon
        src={editMode ? checkmark : edit}
        alt="edit"
        hover={hover}
        edit={editMode}
        onClick={() => {
          if (!editMode) {
            setEditMode(!editMode);
          }
        }}
      />
    </Conatiner>
  );
}
