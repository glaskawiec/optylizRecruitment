import styled from 'styled-components';

const ArticleInfo = styled.div`
  z-index: -1;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  
  @media (min-width: 768px) {
    -webkit-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
`;

export default ArticleInfo;
