import React from 'react';
import * as S from './styles';
import LogoImg from  '../../assets/logo.svg';
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp
} from 'react-icons/md';

function Aside() {
  return (
   <S.Wrapper>
      <S.Header>
        <S.Logo src={LogoImg} alt="My wallet logo"/>
        <S.Title>My Wallet</S.Title>
      </S.Header>
      <S.MenuContainer>
        <S.MenuItemLink>
         <MdDashboard/> Dashboard
        </S.MenuItemLink>
        <S.MenuItemLink>
          <MdArrowUpward/> Incomes
        </S.MenuItemLink>
        <S.MenuItemLink>
        <MdArrowDownward/> Outcomes
        </S.MenuItemLink>
        <S.MenuItemLink>
          <MdExitToApp/> Exit
        </S.MenuItemLink>
      </S.MenuContainer>
    </S.Wrapper>
  );
};

export {  Aside  } 