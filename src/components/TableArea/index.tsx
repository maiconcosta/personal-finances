import { Item } from '../../types/Item';
import TableItem from '../TableItem';
import * as S from './styles';

type Props = {
  list: Item[];
};

const TableArea = ({ list }: Props) => {
  return (
    <S.Table>
      <thead>
        <S.TableHeadColumn width={100}>Data</S.TableHeadColumn>
        <S.TableHeadColumn width={130}>Categoria</S.TableHeadColumn>
        <S.TableHeadColumn>Título</S.TableHeadColumn>
        <S.TableHeadColumn width={150}>Valor</S.TableHeadColumn>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem key={index} item={item} />
        ))}
      </tbody>
    </S.Table>
  );
};

export default TableArea;
