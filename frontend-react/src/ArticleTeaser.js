import React from 'react';

const ArticleTeaser = ({ article }) => (
  <div>
    <h3>{article.title}</h3>
    <div dangerouslySetInnerHTML={{__html: article.body.value}} />
  </div>
);

export default ArticleTeaser;