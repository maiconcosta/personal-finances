import { useEffect, useState } from 'react';
import { Item } from '../types/Item';
import { items } from '../data/items';
import { filterListByMonth, getCurrentMonth } from '../helpers/dateFilter';

import * as S from '../styles/pages/home';
import InfoArea from '../components/InfoArea';
import InputArea from '../components/InputArea';
import TableArea from '../components/TableArea';
import { categories } from '../data/categories';

const Home = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let newIncome = 0;
    let newExpense = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        newExpense += filteredList[i].value;
      } else {
        newIncome += filteredList[i].value;
      }
    }

    setIncome(newIncome);
    setExpense(newExpense);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = (item: Item) => {
    const newList = [...list, item];

    setList(newList);
  };

  return (
    <S.Container>
      <S.Header>
        <S.HeaderText>Finanças Pessoais</S.HeaderText>
      </S.Header>
      <S.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        <InputArea onAdd={handleAddItem} />
        <TableArea list={filteredList} />
      </S.Body>
    </S.Container>
  );
};

export default Home;
