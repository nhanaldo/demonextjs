import Image from "next/image";
import Link from "next/link";

const HighRated = ({ evaluate }) => {
  return (
    <div>
      <div>
        <span className="text-[18px] font-bold uppercase">
          Truyện Đánh Giá Cao
        </span>
        <div className="mt-2 mb-14 grid md:grid-cols-2 ml-0  bg-gray-50 rounded-xl max-w-[700px] mx-auto w-full">
          {evaluate.map((item, index) => {
            return (
              <div key={index} className="flex my-4 ml-4">
                <Image
                  width={80}
                  height={112}
                  alt="ảnh"
                  src={item.thumbnailUrl}
                  className="w-20 h-24  object-cover"
                />
                <div>
                  <h3 className="px-2 font-semibold line-clamp-1">
                    <Link href={`/truyen/${item.slug}`}>{item.title}</Link>
                  </h3>
                  <div className="bg-red-600  px-2 w-10 h-7 ml-2 rounded-md text-white text-center">
                    {item?.mediumScore || "5.0"}
                  </div>
                  <div className="px-2 line-clamp-2">
                    {item.description &&
                      item?.description.replace(/<[^>]+>/g, "")}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HighRated;
