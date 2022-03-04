import { currencyFormat } from '../../helpers/currencyFormat';
import * as S from './styles';

type Props = {
  title: string;
  value: number;
  color?: string;
};

const ResumeItem = ({ title, value, color }: Props) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Info color={color}>{currencyFormat(value)}</S.Info>
    </S.Container>
  );
};

export default ResumeItem;
