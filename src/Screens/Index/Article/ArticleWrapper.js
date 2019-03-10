import styled from 'styled-components';

const ArticleWrapper = styled.article`
  padding-right: 1rem;
  border-bottom: 1px dotted lightgray;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  cursor: pointer;
 
 &:hover{
   background-color: #fafafa;
 }
 
  &:last-child {
    border: 0;
  }
`;

export default ArticleWrapper;
