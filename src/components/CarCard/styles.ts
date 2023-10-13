import { Card } from 'antd';
import styled, { css } from 'styled-components';

export const Wrapper = styled(Card)`
  width: 30rem;
`;

export const Row = styled.div`
  display: flex;
`;

export const CarKey = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.medium};
  `}
`;

export const CarInfo = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.medium};
    font-weight: ${theme.fonts.weight.semiBold};
  `}
`;
