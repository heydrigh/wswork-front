import * as S from './styles';
import { IButtonProps } from './types';

function Button({
  children,
  loading,
  variant = 'primary',
  ...rest
}: IButtonProps) {
  return (
    <S.Wrapper variant={variant} {...rest}>
      {loading ? 'loading...' : children}
    </S.Wrapper>
  );
}

export default Button;
