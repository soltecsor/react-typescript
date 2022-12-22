import styled from "styled-components";

export const Wrapper = styled.div`
  grid-area: MH;
  background: ${props => props.theme.colors.secondary};
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:0 1em;
  border-bottom: 0.1em solid ${props => props.theme.colors.gray};
`;

export const Profile = styled.div`
  color: ${props => props.theme.colors.white};
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``;