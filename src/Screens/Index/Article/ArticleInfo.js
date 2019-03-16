import styled from 'styled-components';

const ArticleInfo = styled.div`
  flex: ${props => (!props.isFirst ? ' 0 0 66.666667%' : '0 0 100%')};
  max-width: ${props => (!props.isFirst ? '66.666667%' : '100%')};
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
    
  @media (min-width: 768px) {
    -webkit-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
`;

export default ArticleInfo;
