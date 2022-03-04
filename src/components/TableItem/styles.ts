import styled from 'styled-components';

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
  padding: 10px 0;
`;

export const Category = styled.div<{ color: string }>`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 5px;
  color: #fff;
  background: ${(props) => props.color};
`;

export const Value = styled.div<{ color: string }>`
  color: ${(props) => props.color};
`;

export const Cross = styled.div`
  cursor: pointer;
  font-size: 25px;
`;
