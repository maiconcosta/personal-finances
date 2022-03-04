import { Item } from '../../types/Item';
import TableItem from '../TableItem';
import * as S from './styles';

type Props = {
  list: Item[];
  onRemove: (item: Item) => void;
};

const TableArea = ({ list, onRemove }: Props) => {
  return (
    <S.Container>
      <S.Table>
        <thead>
          <S.TableHeadColumn width={150}>Data</S.TableHeadColumn>
          <S.TableHeadColumn width={150}>Categoria</S.TableHeadColumn>
          <S.TableHeadColumn>Título</S.TableHeadColumn>
          <S.TableHeadColumn width={150}>Valor</S.TableHeadColumn>
          <S.TableHeadColumn width={25}></S.TableHeadColumn>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <TableItem key={index} item={item} onRemove={onRemove} />
          ))}
        </tbody>
      </S.Table>
    </S.Container>
  );
};

export default TableArea;
