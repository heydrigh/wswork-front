import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 6rem 2rem 0;
`;

export const BrandsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Brand = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.large};
    color: ${theme.colors.white};
    margin-bottom: 2rem;
  `}
`;

export const ContentWrapper = styled.div`
  margin-top: 2rem;
`;

export const DatePickerWrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin: 0 0 0.4rem 0.4rem;
`;

export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.error};
  `}
`;
