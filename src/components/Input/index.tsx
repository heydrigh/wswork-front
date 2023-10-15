import { useField } from 'formik';
import { OnValueChange } from 'react-number-format';
import * as S from './styles';
import InputProps from './types';

function Input({ label, error, mask, ...rest }: InputProps) {
  const [field, meta] = useField(rest);

  const formikError = meta.touched && meta.error;

  const hasError = formikError || error;

  const handleValueChange: OnValueChange = (values) => {
    const floatValue = values.floatValue || 0;
    field.onChange({ target: { name: field.name, value: floatValue } });
  };

  return (
    <S.Wrapper>
      {label && <S.Label htmlFor={rest.id}>{label}</S.Label>}
      {mask ? (
        <S.NumericInput
          $hasError={!!hasError}
          value={field.value}
          displayType='input'
          thousandSeparator='.'
          decimalSeparator=','
          id={rest.id}
          prefix='R$ '
          onValueChange={handleValueChange}
        />
      ) : (
        <S.Input $hasError={!!hasError} {...field} {...rest} />
      )}
      {hasError && <S.ErrorMessage>{meta.error || error}</S.ErrorMessage>}
    </S.Wrapper>
  );
}

export default Input;
