import React, { useContext } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
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
import Row from '../../Layout/Row';
import ArticleImage from './ArticleImage';
import ArticleInfo from './ArticleInfo';

const Article = (location) => {
  const getArticleData = () => mock.articles[location.match.params.name];

  const {
    category, title, text, author, imgSrc, avatarSrc,
  } = getArticleData();

  const isMobile = useContext(isMobileContext);
  return (
    <Row>
      <ArticleImage
        isMobile={isMobile}
      >
        <ZoomImg
          imageWidth="100%"
          imageHeight={isMobile ? '100vw' : '100%'}
          src={imgSrc}
        />
      </ArticleImage>
      <ArticleInfo>
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
      </ArticleInfo>
    </Row>
  );
};

Article.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
};

export default Article;
