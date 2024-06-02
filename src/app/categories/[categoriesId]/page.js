import { getCategoryNews } from "@/utils/getCategoryNews";
import Image from "next/image";

const DynamicNews = async ({ searchParams }) => {
  const { data } = await getCategoryNews(searchParams.category);

  return (
    <div>
      <h1 className="text-2xl text-pretty text-gray-100 mb-4">
        {searchParams.category}
      </h1>
      <div className="grid mb-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((news) => (
          <div
            key={news._id}
            className="card bg-base-100 rounded-lg shadow-xl overflow-hidden"
          >
            <div className="relative h-40">
              <Image
                src={news.thumbnail_url}
                layout="fill"
                objectFit="cover"
                alt="News Thumbnail"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{news.title}</h2>
              <p className="text-gray-500 mb-2">Category: {news.category}</p>
              <p className="text-gray-700 mb-4">
                Rating: {news.rating.number} - {news.rating.badge}
              </p>
              <div className="flex justify-end">
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicNews;
