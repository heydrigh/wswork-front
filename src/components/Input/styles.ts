import { NumericFormat } from 'react-number-format';
import styled, { css } from 'styled-components';

interface InputProps {
  $hasError: boolean;
}

export const Wrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input<InputProps>`
  ${({ theme, $hasError }) => css`
    border-radius: ${theme.border.radius.default};
    padding: 0.5rem;
    border: 1px solid ${$hasError ? theme.colors.error : theme.colors.gray};
  `}
`;

export const NumericInput = styled(NumericFormat)<InputProps>`
  ${({ theme, $hasError }) => css`
    border-radius: ${theme.border.radius.default};
    padding: 0.5rem;
    border: 1px solid ${$hasError ? theme.colors.error : theme.colors.gray};
  `}
`;

export const Label = styled.label`
  margin: 0 0 0.4rem 0.4rem;
`;

export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.error};
  `}
`;
