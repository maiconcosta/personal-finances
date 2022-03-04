import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 4px;

  input {
    width: 100%;
    padding: 7px 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-top: 5px;
    transition: all 0.2s;

    &:focus {
      outline: 1px solid ${(props) => props.theme.colors.primary};
      border: 1px solid #ddd;
    }

    &[type='date'] {
      padding: 4.5px 5px;
    }
  }
`;
