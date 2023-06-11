import { getAsync } from "./api";

export const getArticleAsync = async (
  key: string,
): Promise<ArticleResponse[]> => await getAsync<ArticleResponse[]>(`?q=${key}`);
