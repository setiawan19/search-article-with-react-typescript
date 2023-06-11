import { FC, useState } from "react";
import SearchForm from "./components/search-form";
import { Container } from "./styled-components/app";
import { getArticleAsync } from "./services/article";
import ArticleList from "./components/article-list";

const App: FC = () => {
  const [data, setData] = useState<ArticleResponse[]>([]);

  const handleSearch = async (input: string) => {
    try {
      const response: ArticleResponse[] = await getArticleAsync(input);
      const data = response.map((item: ArticleResponse) => ({
        _id: item._id,
        abstract: item.abstract,
        byline: item?.byline,
        headline: item?.headline,
        pub_date: item?.pub_date,
      }));
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <SearchForm onSubmit={handleSearch} />
      {data.length > 0 ? (
        <ArticleList article={data} />
      ) : (
        <p className="text-center">Article not found</p>
      )}
    </Container>
  );
};

export default App;
