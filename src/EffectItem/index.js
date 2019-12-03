import React, { useState } from 'react';
import { Conatiner, TextInput, InputContainer } from './styles';

export default function EffectItem({ item }) {
  const effect =
    item.label.length < 25 ? item.label : `${item.label.substr(0, 25)}...`;

  const [label, setLabel] = useState(item.label);
  const [hover, setHover] = useState(false);

  function mouseOver() {
    setHover(!hover);
  }
  return (
    <Conatiner
      onMouseEnter={mouseOver}
      onMouseLeave={mouseOver}
      title={item.label}
      hover={hover}
    >
      <InputContainer>
        <TextInput
          value={effect}
          onChange={text => {
            setLabel(text.target.value);
          }}
        />
      </InputContainer>
    </Conatiner>
  );
}
