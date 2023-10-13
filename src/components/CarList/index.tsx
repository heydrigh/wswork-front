import { Col, Row } from 'antd';
import CarCard from '@components/CarCard';
import { CarListProps } from './types';

/**
 * CarList Component displays a list of cars using Ant Design components.
 *
 * @param {Car[]} cars - An array of car objects to be displayed.
 *
 * @returns {JSX.Element} - The rendered CarList component.
 */
function CarList({ cars }: CarListProps) {
  return (
    <Row align='top' gutter={[16, 16]}>
      {cars.map((car) => (
        <Col key={car.id}>
          <CarCard car={car} />
        </Col>
      ))}
    </Row>
  );
}

export default CarList;
