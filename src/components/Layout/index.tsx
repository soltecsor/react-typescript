import React from 'react';

import { MainHeader } from '../MainHeader';
import { Aside } from '../Aside';
import { Content } from '../Content';

import * as S from './styles';

function Layout() {
  return (
   <S.Wrapper>
     <MainHeader/>
     <Aside/>
     <Content/>
    </S.Wrapper>
  );
};

export {  Layout  } 