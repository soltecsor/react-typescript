import styled from "styled-components";
import Switch, { ReactSwitchProps } from 'react-switch';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleLabel = styled.div`
  color: ${props => props.theme.colors.white};
`;

export const Toggle = styled(Switch).attrs<ReactSwitchProps>(
  ({theme}) => ({  
    onColor: theme.colors.info,
    offColor: theme.colors.warning
  }))<ReactSwitchProps>`
    margin:0 0.7em;
`;