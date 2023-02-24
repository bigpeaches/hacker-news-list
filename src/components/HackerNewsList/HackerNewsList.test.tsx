import { render, screen } from "@testing-library/react";

import HackerNewsList from ".";
import { newsList as mockNewsList } from "@/constants/mock.json";
import { act } from "react-dom/test-utils";

describe("Test hacker news list", () => {
  test("Display loader while fetching news list", () => {
    render(<HackerNewsList isLoading={true} newslist={[]} />);
    expect(screen.getByTestId("loader")).toBeVisible();
  });
  test("Display 12 news cards (pagination)", async () => {
    render(<HackerNewsList isLoading={false} newslist={mockNewsList} />);
    expect(screen.getAllByTestId("news-card").length).toEqual(12);
  });
  test("Display all news cards (click Load More button)", async () => {
    render(<HackerNewsList isLoading={false} newslist={mockNewsList} />);
    for (let i = 0; i < Math.floor(mockNewsList.length / 12); i++) {
      act(() => {
        screen.getByTestId("load-more").click();
      });
    }
    const newsList = await screen.findAllByTestId("news-card");
    expect(newsList.length).toEqual(mockNewsList.length);
  });
  test("Display no data with empty news list", () => {
    render(<HackerNewsList isLoading={false} newslist={[]} />);
    expect(screen.getByTestId("no-data")).toBeVisible();
  });
});
