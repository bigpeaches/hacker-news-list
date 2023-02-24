import { render, screen } from "@testing-library/react";

import HackerNewsCard from ".";
import { newsList as mockNewsList } from "@/constants/mock.json";
import { formatDate } from "@/utils/date";

describe("Test hacker news list", () => {
  test("Render news card with data", () => {
    const newsItem = mockNewsList[0];
    render(<HackerNewsCard item={newsItem} />);
    expect(screen.getByText(/score/i)).toHaveTextContent(
      `Score: ${newsItem.score}`
    );
    expect(screen.getByText(/posted at/i)).toHaveTextContent(
      `Posted At: ${formatDate(newsItem.time)}`
    );
    expect(screen.getByText(/descendants/i)).toHaveTextContent(
      `Descendants: ${newsItem.descendants}`
    );
    expect(screen.getByText(/author/i)).toHaveTextContent(
      `Author: ${newsItem.by}`
    );
  });
  test("Go external link ", async () => {
    const newsItem = mockNewsList[0];
    render(<HackerNewsCard item={newsItem} />);
    expect(screen.getByTestId("news-card")).toHaveAttribute(
      "href",
      newsItem.url
    );
  });
});
