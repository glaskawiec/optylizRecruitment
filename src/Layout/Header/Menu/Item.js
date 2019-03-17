import styled from 'styled-components';

const Item = styled.li`
  color: #282828;
  animation-delay: .35s;
  display: block;
  margin-bottom: 1em;
  min-height: 50px;
  position: relative;
  cursor: pointer;
  max-width: 80vw;
    
  &:hover{
    color: black;
  }
`;

export default Item;
