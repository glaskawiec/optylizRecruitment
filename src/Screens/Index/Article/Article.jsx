import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Col, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Category from './Category';
import Title from './Title';
import Text from './Text';
import ArticleWrapper from './ArticleWrapper';
import Image from './Image';
import { isMobileContext } from '../../../App';
import mock from '../../../resources/text/mock.json';

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

  const ArticleImage = (
    <Col
      className="m-auto"
      md={4}
      xs={isFirst ? 0 : 4}
    >
      <Image
        isFirst={isFirst}
        src={imgSrc}
        alt="sampleImage"
      />
    </Col>
  );

  const ArticleInfo = (
    <Col
      md={5}
      xs={isFirst ? 12 : 8}
    >
      <Category isFirst={isFirst}>{category}</Category>
      <Title isFirst={isFirst}>{title}</Title>
      <Text>{text}</Text>
    </Col>
  );

  const onClick = () => {
    history.push({ pathname: `/article/${id}` });
  };
  let content;

  if (isFirst && isMobile) {
    content = (
      <>
        {ArticleImage}
        {ArticleInfo}
      </>
    );
  } else {
    content = (
      <>
        {ArticleInfo}
        {ArticleImage}
      </>
    );
  }

  return (
    <>
      <ArticleWrapper onClick={onClick}>
        <Row className="row">
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
