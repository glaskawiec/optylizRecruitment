import styled from 'styled-components';

const Title = styled.div`
 font-weight: bold;
 font-size: 2rem;
 margin-bottom: 0.3rem;
 
  @media (max-width: 576px) {
   font-size: ${props => (props.isFirst ? '1.5' : '0.9')}rem;
  }
`;

export default Title;
