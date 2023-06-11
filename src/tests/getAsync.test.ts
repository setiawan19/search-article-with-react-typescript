import axios from "axios";
import { AxiosError } from "axios";
import { getAsync } from "../services/api";

jest.mock("axios");

describe("getAsync", () => {
  const ApiBaseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  const ApiKey = "tu7CGTtbIc132Atpnk0iGasNmk24yxWH";

  it("should fetch data successfully", async () => {
    const mockResponse = {
      data: {
        response: {
          docs: [
            // Mock response data
            {
              _id: "1",
              abstract: "Article 1",
              byline: { original: "by Chris Mattew" },
              headline: {
                main: "Tension Overshadows the Tennis Between Sabalenka and Svitolina",
              },
              pub_date: "2023-06-06T19:22:47+0000",
            },
            {
              _id: "2",
              abstract: "Article 2",
              byline: { original: "by James Hill" },
              headline: {
                main: "The Exclusive, Elusive World of Real Tennis",
              },
              pub_date: "2023-06-03T09:01:41+0000",
            },
          ],
        },
      },
    };

    (axios.get as jest.Mock).mockResolvedValue(mockResponse);

    const result = await getAsync(ApiBaseUrl);

    expect(axios.get).toHaveBeenCalledWith(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json${ApiBaseUrl}&api-key=${ApiKey}`,
    );
    expect(result).toEqual(mockResponse.data.response.docs);
  });

  it("should throw an error when no response received", async () => {
    const mockError = {
      request: {},
    };

    (axios.get as jest.Mock).mockRejectedValue(mockError);

    await expect(getAsync(ApiBaseUrl)).rejects.toThrow(
      "No response received from the server.",
    );
  });

  it("should throw an unknown error", async () => {
    const mockError = new Error("Unknown error");

    (axios.get as jest.Mock).mockRejectedValue(mockError);

    await expect(getAsync(ApiBaseUrl)).rejects.toThrow(
      "An unknown error occurred.",
    );
  });
});
