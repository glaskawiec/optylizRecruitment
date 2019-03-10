import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  category as firstCategory,
  text as firstText,
  title as firstTitle,
} from '../../resources/text/firstArticle';
import Category from '../Index/Article/Category';
import Title from './Title';
import Text from './Text';
import avatarSrc from '../../resources/images/avatar.jpg';
import Avatar from './AuthorSection/Avatar';
import AuthorName from './AuthorSection/AuthorName';
import By from './AuthorSection/By';
import ZoomImg from './ZoomImage/ZoomImage';
import AuthorSection from './AuthorSection/AuthorSection';
import { isMobileContext } from '../../App';

const FirstArticle = () => {
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
          src="https://picsum.photos/525?image=110"
        />
      </Col>
      <Col
        style={{ zIndex: -1 }}
        md={8}
        sm={8}
      >
        <Category>{firstCategory}</Category>
        <Title>{firstTitle}</Title>
        <Text>{firstText}</Text>
        <AuthorSection>
          <Avatar
            src={avatarSrc}
            alt="avatar"
          />
          <By />
          <AuthorName> Betty Eghan</AuthorName>
        </AuthorSection>
      </Col>
    </Row>
  );
};

export default FirstArticle;
