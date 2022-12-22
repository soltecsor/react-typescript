import React, { useMemo } from 'react';
import emojis from '../../utils/emojis';
import { Toggle } from '../shared/Toggle';
import * as S from './styles';

function MainHeader() {

  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length);
    return emojis[index];
  },[]);

  return (
   <S.Wrapper>
      <Toggle/>
      <S.Profile>
        <S.Welcome>Olá, { emoji }</S.Welcome>
        <S.UserName>Joe Doe</S.UserName>
      </S.Profile>
    </S.Wrapper>
  );
};

export {  MainHeader  } 