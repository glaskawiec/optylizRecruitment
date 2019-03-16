import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import Category from './Category';
import Title from './Title';
import Text from './Text';
import ArticleWrapper from './ArticleWrapper';
import Image from './Image';
import { isMobileContext } from '../../../App';
import mock from '../../../resources/text/mock.json';
import Row from '../../../Layout/Row';
import ArticleImage from './ArticleImage';
import ArticleInfo from './ArticleInfo';

const Article = ({
  id,
  isFirst,
  history,
}) => {
  const isMobile = useContext(isMobileContext);
  const getArticleData = () => mock.articles[id];
  const {
    category, title, text, imgSrc,
  } = getArticleData();

  const ArticleImageComp = (
    <ArticleImage
      isFirst={isFirst}
    >
      <Image
        isFirst={isFirst}
        src={imgSrc}
        alt="sampleImage"
      />
    </ArticleImage>
  );

  const ArticleInfoComp = (
    <ArticleInfo>
      <Category isFirst={isFirst}>{category}</Category>
      <Title isFirst={isFirst}>{title}</Title>
      <Text>{text}</Text>
    </ArticleInfo>
  );

  const onClick = () => {
    history.push({ pathname: `/article/${id}` });
  };
  let content;

  if (isFirst && isMobile) {
    content = (
      <>
        {ArticleImageComp}
        {ArticleInfoComp}
      </>
    );
  } else {
    content = (
      <>
        {ArticleInfoComp}
        {ArticleImageComp}
      </>
    );
  }

  return (
    <>
      <ArticleWrapper onClick={onClick}>
        <Row>
          {content}
        </Row>
      </ArticleWrapper>
    </>
  );
};

Article.propTypes = {
  id: PropTypes.string.isRequired,
  isFirst: PropTypes.bool,
  history: ReactRouterPropTypes.history.isRequired,
};

Article.defaultProps = {
  isFirst: false,
};

export default withRouter(Article);
