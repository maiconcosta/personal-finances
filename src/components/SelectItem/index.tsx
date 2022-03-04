import { SelectHTMLAttributes } from 'react';
import { SelectOption } from '../../types/SelectOption';
import { Error } from '../../styles/components/Error';
import * as S from './styles';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  items: SelectOption[];
  error: string | null;
}

const SelectItem = ({
  label,
  name,
  items,
  value,
  error,
  onChange,
  onBlur,
}: Props) => {
  return (
    <S.Container>
      <label htmlFor={name}>{label}</label>
      <br />
      <select name={name} value={value} onChange={onChange} onBlur={onBlur}>
        <option value=""></option>
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {error && <Error>{error}</Error>}
    </S.Container>
  );
};

export default SelectItem;
