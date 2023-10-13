import { motion } from 'framer-motion';
import { CarCardProps } from './types';
import * as S from './styles';
import { formatToBRL } from './utils';

function CarCard({ car }: CarCardProps) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
    >
      <S.Wrapper title={car.nome_modelo}>
        <S.Row>
          <S.CarKey>Ano:</S.CarKey>
          <S.CarInfo>{car.ano}</S.CarInfo>
        </S.Row>
        <S.Row>
          <S.CarKey>Combustível:</S.CarKey>
          <S.CarInfo>{car.combustivel}</S.CarInfo>
        </S.Row>
        <S.Row>
          <S.CarKey>Portas:</S.CarKey>
          <S.CarInfo>{car.num_portas}</S.CarInfo>
        </S.Row>
        <S.Row>
          <S.CarKey>Cor:</S.CarKey>
          <S.CarInfo>{car.cor}</S.CarInfo>
        </S.Row>
        <S.Row>
          <S.CarKey>Valor:</S.CarKey>
          <S.CarInfo>{formatToBRL(car.valor)}</S.CarInfo>
        </S.Row>
      </S.Wrapper>
    </motion.div>
  );
}

export default CarCard;
