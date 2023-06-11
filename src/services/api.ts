import axios, { AxiosError } from "axios";

const ApiBaseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const ApiKey = "tu7CGTtbIc132Atpnk0iGasNmk24yxWH";

//global get async
export const getAsync = async <ResponseType>(
  endpoint: string,
): Promise<ResponseType> => {
  try {
    const response = await axios.get(
      `${ApiBaseUrl}${endpoint}&api-key=${ApiKey}`,
    );
    return response.data.response.docs;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.request) {
        throw new Error("No response received from the server.");
      } else {
        throw new Error("An unknown error occurred.");
      }
    } else {
      throw new Error("An unknown error occurred.");
    }
  }
};
