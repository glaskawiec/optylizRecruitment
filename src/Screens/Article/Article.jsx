import React, { useContext } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Col, Row } from 'react-bootstrap';
import Category from '../Index/Article/Category';
import Title from './Title';
import Text from './Text';
import Avatar from './AuthorSection/Avatar';
import AuthorName from './AuthorSection/AuthorName';
import By from './AuthorSection/By';
import ZoomImg from './ZoomImage/ZoomImage';
import AuthorSection from './AuthorSection/AuthorSection';
import { isMobileContext } from '../../App';
import mock from '../../resources/text/mock.json';


const Article = (location) => {
  const getArticleData = () => mock.articles[location.match.params.name];

  const {
    category, title, text, author, imgSrc, avatarSrc,
  } = getArticleData();


  const isMobile = useContext(isMobileContext);
  return (
    <Row className="row">
      <Col
        style={{ padding: isMobile ? 0 : 15 }}
        md={4}
        sm={4}
      >
        <ZoomImg
          imageWidth="100%"
          imageHeight={isMobile ? '100vw' : '100%'}
          src={imgSrc}
        />
      </Col>
      <Col
        style={{ zIndex: -1 }}
        md={8}
        sm={8}
      >
        <Category>{category}</Category>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <AuthorSection>
          <Avatar
            src={avatarSrc}
            alt="avatar"
          />
          <By />
          <AuthorName>
            {' '}
            {author}
          </AuthorName>
        </AuthorSection>
      </Col>
    </Row>
  );
};

Article.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
};

export default Article;
