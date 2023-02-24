import { useMemo, useState } from "react";

import { HackerNewsItem } from "@/constants/types";
import HackerNewsCard from "@/components/HackerNewsCard";
import Spinner from "@/components/Spinner";

type HackerNewsListProps = {
  newslist: HackerNewsItem[];
  isLoading: boolean;
};

const HackerNewsList = ({ newslist, isLoading }: HackerNewsListProps) => {
  const pageSize = 12;
  const [page, setPage] = useState(1);
  const paginatedList = useMemo(() => {
    return newslist.slice(0, page * pageSize);
  }, [page, newslist]);

  const handleLoadMore = () => {
    if (page < newslist.length / pageSize) {
      setPage(page + 1);
    }
  };

  return (
    <div className="mt-5">
      {isLoading && <Spinner />}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4">
        {paginatedList?.map((item) => (
          <HackerNewsCard item={item} key={item.id} />
        ))}
      </div>
      {paginatedList.length === 0 && (
        <p className="text-xl font-bold text-center" data-testid="no-data">
          There is no news
        </p>
      )}
      {page < newslist.length / pageSize && (
        <div className="flex">
          <button
            type="button"
            className="px-4 py-3 bg-blue-600 text-white mx-auto mt-5 rounded-lg hover:opacity-80 active:opacity-100"
            onClick={() => handleLoadMore()}
            data-testid="load-more"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default HackerNewsList;
