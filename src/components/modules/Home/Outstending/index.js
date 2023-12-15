import Image from "next/image";
import Link from "next/link";

const Outstanding = ({ repo }) => {
  console.log(repo);
  return (
    <div>
      <span className="font-bold uppercase text-[18px] ml-3">
        Truyện Nỗi Bật
      </span>
      <div className=" mb-2 mt-3 grid md:grid-cols-2 bg-gray-100 rounded-xl max-w-[600px] mx-auto w-full">
        {repo &&
          repo.map((item, index) => {
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
                  <div className="px-2 line-clamp-2 text-sm">
                    {item.description &&
                      item?.description.replace(/<[^>]+>/g, "")}
                  </div>

                  <div className="flex">
                    <p className="px-2 mt-2 mb-2 text-sm line-clamp-1 w-1/2">{item.author}</p>
                    <ul>
                      <li className="text-xs text-red-600 px-2 mt-2 border border-red-600">Huyền Huyền</li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Outstanding;
