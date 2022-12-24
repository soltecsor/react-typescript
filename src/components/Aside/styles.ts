import styled from "styled-components";

export const Wrapper = styled.div`
  grid-area: AS;
  background: ${props => props.theme.colors.secondary};
  padding-left: 2em;
  border-right:1px solid ${props => props.theme.colors.gray};
`;

export const Header = styled.header`
  display:flex;
  align-items: center;
  height: 70px;
`;
export const Title = styled.h3`
 color: ${props => props.theme.colors.white};
 margin-left: 1em;
`
export const Logo = styled.img`
  height:2em;
  width:2em;
`

export const MenuContainer = styled.nav`
  margin-top:50px;
  display: flex;
  flex-direction: column;
`

export const MenuItemLink = styled.a`
  color: ${props => props.theme.colors.info};
  cursor: pointer;
  margin:0.7em 0;
  transition: opacity .3s;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  &:hover {
    opacity: .7;
  }

  > svg {
    font-size: 1.5em;
    margin-right: 0.3em;
  }
`

