import styled from 'styled-components';

const ArticleImage = styled.div`
  padding: ${props => (props.isMobile ? '0px' : '15px')};
  position: relative;
  width: 100%;
  
  @media (min-width: 768px) {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
`;

export default ArticleImage;
