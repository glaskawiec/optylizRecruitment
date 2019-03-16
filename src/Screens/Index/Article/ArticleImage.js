import styled from 'styled-components';

const ArticleImage = styled.div`
  flex: ${props => (!props.isFirst ? '0 0 33.333333%' : '0 0 100%')};
  max-width: ${props => (!props.isFirst ? '33.333333%' : '100%')};
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin: auto !important;

  @media (min-width: 768px) {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
`;

export default ArticleImage;
