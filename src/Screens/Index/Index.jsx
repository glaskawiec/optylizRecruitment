import React from 'react';
import {
  category as firstCategory,
  imgSrc as fistImgSrc,
  text as firstText,
  title as firstTitle,
  url as firstUrl,
} from '../../resources/text/firstArticle';
import {
  category as secondCategory,
  imgSrc as secondImgSrc,
  text as secondText,
  title as secondTitle,
  url as secondUrl,
} from '../../resources/text/secondArticle';
import {
  category as thirdCategory,
  imgSrc as thirdImgSrc,
  text as thirdText,
  title as thirdTitle,
  url as thirdUrl,
} from '../../resources/text/thirdArticle';
import Post from './Article/Article';
import Tag from './Tags/Tag';
import Tags from './Tags/Tags';

const tags = ['TechDesign', 'Healthcare Revolution', 'Future'];

const Index = () => (
  <>
    <Tags>
      {tags.map(tag => (
        <Tag key={tag}>{`#${tag}`}</Tag>
      ))}
    </Tags>
    <Post
      isFirst
      category={firstCategory}
      title={firstTitle}
      text={firstText}
      imgSrc={fistImgSrc}
      url={firstUrl}
    />
    <Post
      category={secondCategory}
      title={secondTitle}
      text={secondText}
      imgSrc={secondImgSrc}
      url={secondUrl}
    />
    <Post
      category={thirdCategory}
      title={thirdTitle}
      text={thirdText}
      imgSrc={thirdImgSrc}
      url={thirdUrl}
    />
  </>
);

export default Index;
