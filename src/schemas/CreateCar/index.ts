import * as Yup from 'yup';

const requiredMessage = 'Este campo é obrigatório';

export const createCarValidationSchema = Yup.object().shape({
  year: Yup.date()
    .max(new Date(), 'Escolha um ano válido')
    .required(requiredMessage),
  fuel: Yup.string().required(requiredMessage),
  doorsQuantity: Yup.number()
    .integer('Escolha um número válido')
    .positive('Escolha um número válido')
    .test(
      'is-numeric',
      'Escolha um número válido',
      (value: number | undefined) => !!value && !Number.isNaN(value),
    ),
  color: Yup.string().required(requiredMessage),
  modelName: Yup.string().required(requiredMessage),
  brand: Yup.string().required(requiredMessage),
  price: Yup.number()
    .required(requiredMessage)
    .positive('escolha um preço válido'),
});
