import { renderWithTheme } from '@utils/tests/helpers';
import { Car } from 'types/car';
import CarCard from '.';

const carMock = {
  id: 1,
  nome_modelo: 'Sample Model',
  ano: 2022,
  combustivel: 'Gasoline',
  num_portas: 4,
  cor: 'Red',
  valor: 25000,
  brand: 'toyota',
  modelo_id: 2,
  timestamp_cadastro: 12312312,
} satisfies Car;

it('should render CarCard correctly with props', () => {
  const { getByText } = renderWithTheme(<CarCard car={carMock} />);

  expect(getByText('Sample Model')).toBeInTheDocument();
  expect(getByText('Ano:')).toBeInTheDocument();
  expect(getByText('2022')).toBeInTheDocument();
  expect(getByText('Combustível:')).toBeInTheDocument();
  expect(getByText('Gasoline')).toBeInTheDocument();
  expect(getByText('Portas:')).toBeInTheDocument();
  expect(getByText('4')).toBeInTheDocument();
  expect(getByText('Cor:')).toBeInTheDocument();
  expect(getByText('Red')).toBeInTheDocument();
  expect(getByText('Valor:')).toBeInTheDocument();
  expect(getByText('R$ 25.000,00')).toBeInTheDocument();
});
