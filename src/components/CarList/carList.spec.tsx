import { CarCardProps } from '@components/CarCard/types';
import { renderWithTheme } from '@utils/tests/helpers';
import CarList from '.';
import { mockCars } from './mocks';

jest.mock(
  'components/CarCard',
  () =>
    function MockCarCard({ car }: CarCardProps) {
      return (
        <div data-testid='mock-car-card'>
          <span data-testid='car-name'>{car.nome_modelo}</span>
          <span data-testid='car-model'>{car.brand}</span>
        </div>
      );
    },
);

describe('CarList Component', () => {
  it('should render the list of cars', () => {
    const { getAllByTestId } = renderWithTheme(<CarList cars={mockCars} />);

    const carCardComponents = getAllByTestId('mock-car-card');
    expect(carCardComponents).toHaveLength(mockCars.length);

    const carNames = getAllByTestId('car-name');
    const carModels = getAllByTestId('car-model');

    mockCars.forEach((car, index) => {
      expect(carNames[index]).toHaveTextContent(car.nome_modelo);
      expect(carModels[index]).toHaveTextContent(car.brand);
    });
  });
});
