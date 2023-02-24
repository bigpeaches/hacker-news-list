import { HackerNewsItem } from "@/constants/types";
import { formatDate } from "@/utils/date";

type HackerNewsItemProps = {
  item: HackerNewsItem;
};

const HackerNewsCard = ({ item }: HackerNewsItemProps) => {
  return (
    <a target="_blank" href={item.url} data-testid="news-card">
      <div className="max-w-sm rounded overflow-hidden shadow-lg border-2 h-full flex flex-col justify-between hover:scale-105">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{item.title}</div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Score: {item.score}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Posted At: {formatDate(item.time)}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Descendants: {item.descendants}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Author: {item.by}
          </span>
        </div>
      </div>
    </a>
  );
};

export default HackerNewsCard;
