import { useField } from 'formik';
import * as S from './styles';
import InputProps from './types';

function Input({ label, error, ...rest }: InputProps) {
  const [field, meta] = useField(rest);

  const formikError = meta.touched && meta.error;

  const hasError = formikError || error;

  return (
    <S.Wrapper>
      {label && <S.Label htmlFor={rest.id}>{label}</S.Label>}
      <S.Input $hasError={!!hasError} {...field} {...rest} />
      {hasError && <S.ErrorMessage>{meta.error || error}</S.ErrorMessage>}
    </S.Wrapper>
  );
}

export default Input;
