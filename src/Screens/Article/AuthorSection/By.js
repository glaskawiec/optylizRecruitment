import styled from 'styled-components';

const By = styled.div`
  color: darkgray;
  font-size: 1.3rem;
  line-height: 1;
  margin-right: 0.5rem;
  margin-left: 0.5rem;

  &::after {
    content: "by";
  }
`;

export default By;
