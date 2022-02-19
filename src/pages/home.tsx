import { useEffect, useState } from 'react';
import { Item } from '../types/Item';
import { items } from '../data/items';
import { filterListByMonth, getCurrentMonth } from '../helpers/dateFilter';

import * as S from '../styles/pages/home';
import TableArea from '../components/TableArea';

const Home = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <S.Container>
      <S.Header>
        <S.HeaderText>Finanças Pessoais</S.HeaderText>
      </S.Header>
      <S.Body>
        <TableArea list={filteredList} />
      </S.Body>
    </S.Container>
  );
};

export default Home;
