interface Article {
  _id: string;
  abstract: string;
  title?: string;
  byline?: byline;
  headline?: headline;
  pub_date?: Date;
}

interface ArticleListProps {
  article: ArticleResponse[];
}

interface ArticleCardProps {
  _id: string;
  abstract: string;
  title?: string;
  name?: string;
  pub_date?: string;
}

interface ArticleResponse {
  _id: string;
  abstract: string;
  title?: string;
  byline?: byline;
  headline?: headline;
  pub_date?: Date;
}

interface headline {
  main?: string;
}

interface byline {
  original?: string;
}
