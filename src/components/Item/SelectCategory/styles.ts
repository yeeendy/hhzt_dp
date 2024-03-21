import styled from 'styled-components';

export const Box1 = styled.div`
  /* min-height: 60px; */
  width: 284px;
  height: 302px;
  overflow-y: auto;
  background: white;
  margin: 4px 0 20px 0;
  padding: 12px;
  border: 1px solid gray;
  border-radius: 2px;

  ul {
    all: unset;
  }
`;

export const OptionList = styled.li`
  list-style-type: none;
  cursor: pointer;
  padding: 8px;
  font-weight: 500;
  &:hover {
    background-color: #f6f6f6;
    border-radius: 8px;
  }
`;
