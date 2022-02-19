import styled from 'styled-components';
import { Card } from '../../styles/components/Card';

export const Container = styled(Card)`
  margin-top: 20px;
`;

export const Table = styled.table`
  width: 100%;
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
  width: ${(props) => (props.width ? `${props.width}px` : 'auto')};
  padding: 10px 0;
  text-align: left;
`;
