import styled from 'styled-components';

const Category = styled.div`
  font-weight: bold;
  text-transform: uppercase;
   margin-bottom: 0.3em;
  
  @media (max-width: 576px) {
    margin-top: 0.5rem;
    font-size: ${props => (props.isFirst ? '1' : '0.7')}rem;
  }
`;

export default Category;
