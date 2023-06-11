import { FC } from "react";
import {
  CardArticle,
  Description,
  Title,
  TitleDate,
  TitleName,
} from "../styled-components/article-card";
const ArticleCard: FC<ArticleCardProps> = ({
  title = "",
  abstract = "",
  name = "",
  pub_date = "",
}) => {
  return (
    <CardArticle>
      <Title>{title}</Title>
      <TitleName>{name}</TitleName>
      <br />
      <TitleDate className="text-mute">{pub_date}</TitleDate>
      <Description>{abstract}</Description>
    </CardArticle>
  );
};

export default ArticleCard;
