import { render } from "@testing-library/react";

import HackerNewsCard from ".";
import { newsList as mockNewsList } from "@/constants/mock.json";

describe("Test hacker news list", () => {
  test("Render news card with data", () => {
    const newsItem = mockNewsList[0];
    const { container } = render(<HackerNewsCard item={newsItem} />);
    expect(container).toMatchSnapshot();
  });
  test("Go external link ", async () => {
    const newsItem = mockNewsList[0];
    const component = render(<HackerNewsCard item={newsItem} />);
    expect(
      component.getByTestId("news-card").getAttribute("href")
    ).toMatchInlineSnapshot(`"${newsItem.url}"`);
  });
});
