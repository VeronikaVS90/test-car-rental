import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { colors, transition } from 'styles/common/vars';

export const PageHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100px;
  background-color: ${colors.secondaryFontColor};
`;

export const NavList = styled.ul`
  display: flex;
  min-width: 460px;
`;

export const NavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 39px 24px;
  height: 100%;

  font-size: 18px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  transition: color ${transition.duration}, border-color ${transition.duration},
    background-color ${transition.duration};
  border-bottom: 4px solid transparent;

  &:hover,
  &:focus {
    color: ${colors.accentHoverColor};
  }

  &.active {
    color: ${colors.accentColor};
    border-bottom: 4px solid ${colors.primaryWhite};
  }
`;
