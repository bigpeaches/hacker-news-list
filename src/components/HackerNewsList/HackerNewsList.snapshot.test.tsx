import { act, render } from "@testing-library/react";

import HackerNewsList from ".";
import { newsList as mockNewsList } from "@/constants/mock.json";

describe("Test hacker news list", () => {
  test("Display loader while fetching news list", () => {
    const { container } = render(
      <HackerNewsList isLoading={true} newslist={[]} />
    );
    expect(container).toMatchSnapshot();
  });
  test("Display 12 news cards (pagination)", async () => {
    const { container } = render(
      <HackerNewsList isLoading={false} newslist={mockNewsList} />
    );
    expect(container).toMatchSnapshot();
  });
  test("Display all news cards (click Load More button)", () => {
    const component = render(
      <HackerNewsList isLoading={false} newslist={mockNewsList} />
    );
    for (let i = 0; i < Math.floor(mockNewsList.length / 12); i++) {
      act(() => {
        component.getByTestId("load-more").click();
      });
    }
    expect(component.container).toMatchSnapshot();
  });
  test("Display no data with empty news list", () => {
    const { container } = render(
      <HackerNewsList isLoading={false} newslist={[]} />
    );
    expect(container).toMatchSnapshot();
  });
});
