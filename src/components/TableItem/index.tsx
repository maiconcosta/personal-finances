import { categories } from '../../data/categories';
import { currencyFormat } from '../../helpers/currencyFormat';
import { formatDate } from '../../helpers/dateFilter';
import { Item } from '../../types/Item';
import * as S from './styles';

type Props = {
  item: Item;
  onRemove: (item: Item) => void;
};

const TableItem = ({ item, onRemove }: Props) => {
  const { category, date, title, value } = item;

  return (
    <S.TableLine>
      <S.TableColumn>{formatDate(date)}</S.TableColumn>
      <S.TableColumn>
        <S.Category color={categories[category].color}>
          {categories[category].title}
        </S.Category>
      </S.TableColumn>
      <S.TableColumn>{title}</S.TableColumn>
      <S.TableColumn>
        <S.Value color={categories[category].expense ? 'red' : 'green'}>
          {currencyFormat(value)}
        </S.Value>
      </S.TableColumn>
      <S.TableColumn>
        <S.Cross onClick={() => onRemove(item)}>🗑</S.Cross>
      </S.TableColumn>
    </S.TableLine>
  );
};

export default TableItem;
