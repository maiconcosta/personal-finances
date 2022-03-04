import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 4px;

  select {
    width: 100%;
    padding: 6px 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-top: 5px;

    &:focus {
      outline: 1px solid ${(props) => props.theme.colors.primary};
      border: 1px solid #ddd;
    }
  }
`;
