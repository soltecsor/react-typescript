
import React, { useState } from 'react';
import * as S from './styles';
function Toggle() {
  const [isOn, setIsOn] = useState<boolean>(true);
  return (
    <S.Wrapper>
      <S.ToggleLabel>Light</S.ToggleLabel>
      <S.Toggle
        checked={isOn}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={() => setIsOn(!isOn)}

      />
      <S.ToggleLabel>Dark</S.ToggleLabel>
    </S.Wrapper>
  )
}

export { Toggle };