import useGetAllCars from '@services/queries/useGetAllCars';
import CarList from '@components/CarList';
import CardSkeleton from '@components/CardSkeleton';
import { groupBy } from 'lodash';
import { useMemo } from 'react';
import { Divider } from 'antd';
import * as S from './styles';

function Home() {
  const { data: cars, isLoading } = useGetAllCars();

  const groupedCars = useMemo(() => groupBy(cars, 'brand'), [cars]);
  return (
    <S.Container>
      {isLoading && <CardSkeleton />}
      {Object.entries(groupedCars).map(([brand, carsByBrand]) => (
        <S.BrandsWrapper key={brand}>
          <S.Brand>{brand}</S.Brand>
          <CarList cars={carsByBrand} />
          <Divider />
        </S.BrandsWrapper>
      ))}
    </S.Container>
  );
}

export default Home;
