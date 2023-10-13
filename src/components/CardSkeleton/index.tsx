import { Card, Skeleton } from 'antd';
import * as S from './styles';

const { Meta } = Card;
function CardSkeleton() {
  return (
    <S.Wrapper>
      <Skeleton loading active>
        <Meta title='Card title' description='This is the description' />
      </Skeleton>
    </S.Wrapper>
  );
}

export default CardSkeleton;
