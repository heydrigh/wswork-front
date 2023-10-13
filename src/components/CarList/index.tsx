import { Col, Row } from 'antd';
import CarCard from '@components/CarCard';
import { CarListProps } from './types';

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
