import styled, { css, DefaultTheme } from 'styled-components';
import { IButtonProps } from './types';

const ButtonModifiers = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
  `,
  secondary: (theme: DefaultTheme) => css`
    border: 1px solid ${theme.colors.secondary};
    color: ${theme.colors.secondary};
    background-color: ${theme.colors.white};
  `,
};

export const Wrapper = styled.button<Pick<IButtonProps, 'variant'>>`
  ${({ theme, variant }) => css`
    height: 4.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.6rem 3rem;
    border-radius: ${theme.border.radius.default};
    font-size: ${theme.fonts.sizes.medium};
    cursor: pointer;
    ${!!variant && ButtonModifiers[variant](theme)}
  `}
`;
