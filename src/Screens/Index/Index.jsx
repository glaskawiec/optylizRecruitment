import React from 'react';
import Post from './Article/Article';
import Tag from './Tags/Tag';
import Tags from './Tags/Tags';

const tags = [
  'TechDesign',
  'Healthcare Revolution',
  'Future',
];

const Index = () => (
  <>
    <Tags>
      {tags.map(tag => (
        <Tag key={tag}>{`#${tag}`}</Tag>
      ))}
    </Tags>
    <Post
      isFirst
      id="poverty-to-empowerment-in-chicago"
    />
    <Post
      id="divided-american-lives-during-war"
    />
    <Post
      id="the-future-of-gasoline"
    />
  </>
);

export default Index;
