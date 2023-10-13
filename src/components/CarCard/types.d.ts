import { CardProps } from 'antd';
import { Car } from 'types/car';

export interface CarCardProps extends CardProps {
  car: Car;
}
