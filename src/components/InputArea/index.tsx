import { FormEvent, useEffect, useState } from 'react';
import useForm from '../../hooks/useForm';

import InputItem from '../InputItem';
import SelectItem from '../SelectItem';

import { Item } from '../../types/Item';
import { SelectOption } from '../../types/SelectOption';

import { categories } from '../../data/categories';

import * as S from './styles';

type Props = {
  onAdd: (item: Item) => void;
  list: Item[];
};

const InputArea = ({ onAdd, list }: Props) => {
  const [categoriesOptions, setCategoriesOptions] = useState<SelectOption[]>(
    []
  );

  const date = useForm('date');
  const category = useForm('category');
  const title = useForm('title');
  const value = useForm('value');

  const cleanForm = () => {
    date.setValue('');
    category.setValue('');
    title.setValue('');
    value.setValue('');
  };

  const handleAddEvent = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const [yyyy, mm, dd] = date.value.split('-');

    const newItem: Item = {
      id: list[list.length - 1].id + 1,
      date: new Date(Number(yyyy), Number(mm) - 1, Number(dd)),
      category: category.value,
      title: title.value,
      value: Number(value.value),
    };

    if (
      date.validate() &&
      category.validate() &&
      title.validate() &&
      category.validate()
    ) {
      onAdd(newItem);
      cleanForm();
    }
  };

  useEffect(() => {
    const loadCategories = Object.keys(categories).map((el) => ({
      label: categories[el].title,
      value: el,
    }));

    setCategoriesOptions(loadCategories);
  }, []);

  return (
    <S.Container>
      <S.Form onSubmit={handleAddEvent}>
        <S.Inputs>
          <InputItem label="Data" name="date" type="date" {...date} />
          <SelectItem
            label="Categoria"
            name="category"
            items={categoriesOptions}
            {...category}
          />
          <InputItem label="Título" name="title" {...title} />
          <InputItem
            label="Valor"
            name="value"
            type="number"
            min="0.00"
            step="0.01"
            {...value}
          />
        </S.Inputs>

        <S.SubmitArea>
          <S.AddBtn>Adicionar</S.AddBtn>
        </S.SubmitArea>
      </S.Form>
    </S.Container>
  );
};

export default InputArea;
