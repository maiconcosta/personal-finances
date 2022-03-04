import { InputHTMLAttributes } from 'react';
import * as S from './styles';
import { Error } from '../../styles/components/Error';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error: string | null;
}

const InputItem = ({
  label,
  name,
  onChange,
  value,
  type,
  onBlur,
  placeholder,
  error,
}: Props) => {
  return (
    <S.Container>
      <label htmlFor={name}>{label}</label>
      <br />
      <input
        id={name}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        type={type}
        value={value}
      />
      {error && <Error>{error}</Error>}
    </S.Container>
  );
};

export default InputItem;
