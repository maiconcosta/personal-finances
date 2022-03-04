import { ChangeEvent, useState } from 'react';

const types: any = {
  value: {
    regex: /[1-9]+\.?\d*/,
    message: 'Valor inválido',
  },
};

const useForm = (type?: string) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  function validate(valueProp: string) {
    if (!type) return true;

    if (valueProp.length === 0) {
      setError('Campo obrigatório');
      return false;
    } else if (types[type] && !types[type].regex.test(valueProp)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    if (error) {
      validate(target.value);
    }
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm;
