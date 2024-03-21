import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 194px;
  height: 274px;
  border: 1px solid lightgray;
  cursor: pointer;
  img {
    width: 194px;
    height: 194px;
  }
  h2 {
    font-size: 14px;
    margin: 0;
    padding: 4px 12px 12px 12px;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const Price = styled.span`
  font-size: 16px;
  padding: 4px 12px 0 12px;
  font-weight: 700;
`;
export const Date = styled(Price)`
  color: gray;
  font-size: 12px;
  font-weight: 500;
`;
