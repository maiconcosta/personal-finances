import styled from 'styled-components';
import { Card } from '../../styles/components/Card';
import { darken } from 'polished';

export const Container = styled(Card)`
  margin-top: 20px;
`;

export const Form = styled.form``;

export const Inputs = styled.div`
  flex: 5;
  display: flex;
`;

export const SubmitArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const AddBtn = styled.button`
  padding: 7px 15px;

  background: ${(props) => props.theme.colors.primary};
  color: #fff;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s;
  margin-right: 4px;

  &:hover {
    background: ${(props) => darken(0.03, props.theme.colors.primary)};
  }
`;
