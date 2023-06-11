import { FC } from "react";
import { format } from "date-fns";
import ArticleCard from "./article-card";
import { List, ListItem } from "../styled-components/article-list";
const ArticleList: FC<ArticleListProps> = ({ article }) => {
  return (
    <List>
      {article.length > 0 &&
        article.map((item) => (
          <ListItem key={item._id}>
            <ArticleCard
              _id={item._id}
              title={item.headline?.main}
              abstract={item.abstract}
              name={item.byline?.original}
              pub_date={
                item.pub_date
                  ? format(new Date(item.pub_date), "MMM dd, yyyy")
                  : ""
              }
            />
          </ListItem>
        ))}
    </List>
  );
};

export default ArticleList;
