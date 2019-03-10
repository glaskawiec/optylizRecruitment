import styled from 'styled-components';

const Tag = styled.li`
  float: left;
  margin-right: 1rem;
  padding-right: 1rem;
  border-right: 1px dotted lightgray;

  &:last-child {
    border: 0;
  }
`;

export default Tag;
