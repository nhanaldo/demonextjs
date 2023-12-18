import MainLayout from "@/components/Layouts/MainLayout";
import Image from "next/image";

const Handel = ({ novel }) => {
  console.log(novel);

  return (
    <div className="max-w-[1000px] mx-auto w-full">
      <div className="border-l-4 border-blue-600 mt-3 mb-3 text-blue-500 cursor-pointer">
        <a className="p-3">
          <span>hobannovel</span>
        </a>
        <a className="pr-3">
          <span>Truyen</span>
        </a>
        <a>
          <span>{novel?.novel.title}</span>
        </a>
      </div>
      <div className="md:flex block">
        <div className="w-[208px] m-auto mb-3 ">
          <Image
            width={80}
            height={112}
            alt="ảnh"
            src={novel?.novel.thumbnailUrl}
            className="w-[208px] h-[280]  object-cover"
          />
        </div>
        <div className="ml-8 sm:w-9/12 max-sm:mx-auto px-4">
          <div className="font-semibold sm:text-xl uppercase mb-3 max-sm:text-center">
            <h1>{novel?.novel.title}</h1>
          </div>
          <div>
            <ul className="flex  items-center flex-wrap gap-2 sm:text-sm text-xs mb-4 max-sm:justify-center">
              <li className="border-[#bf2c24] text-[#bf2c24] px-3 py-1 border rounded-full ">Chưa Ra Chương Mới</li>
              <li className="border-[#b78a28] text-[#b78a28] px-3 py-1 border rounded-full ">Huyền Nguyễn</li>
              <li className="border-[#088860] text-[#088860] px-3 py-1 border rounded-full ">Vô Địch</li>
              <li className="border-[#088860] text-[#088860] px-3 py-1 border rounded-full  ">Góc Nhìn Nam</li>
            </ul>
          </div>
          <div>
            <ul className=" max-sm:justify-center flex gap-9 mb-4">
              <li className="text-center">
                <span className="font-semibold">{novel?.novel.chapterCount}</span>
                <div className="sm:text-base text-xs">Chương</div>
              </li>
              <li className="text-center">
                <span className="font-semibold">{novel?.novel.newChapterCount}</span>
                <div className="sm:text-base text-xs">Chương/Tuần</div>
              </li>
              <li className="text-center">
                <span className="font-semibold">{novel?.novel.views}</span>
                <div className="sm:text-base text-xs">Lượt Đọc</div>
              </li>
              <li className="text-center">
                <span className="font-semibold">{novel?.novel.viewFrame}</span>
                <div className="sm:text-base text-xs">Cất Giữ</div>
              </li>
            </ul>
          </div>
          <div className="md:flex text-center">
            {/* <span>{novel?.novel.mediumScore}</span> */}
            <p>(10 đánh giá)</p>
          </div>
          <div>
            <button className="btn text-white mb-4 mt-2 bg-[#5cb85c] border-[#449d44] hover:bg-[#449d44] px-3 py-1  rounded-md">Theo Dõi</button>
          </div>
          <div>
            <ul className=" lg:text-base text-sm flex flex-wrap gap-2">
              <li>
                <a className="btn bg-yellow-500 border-yellow-500 hover:bg-yellow-600 text-white py-2   px-3 rounded-md">Đọc Từ Đầu</a>
              </li>
              <li>
                <a className="btn bg-yellow-500 border-yellow-500 hover:bg-yellow-600 text-white py-2   px-3 rounded-md">Đọc Tiếp</a>
              </li>
              <li>
                <a className="btn bg-yellow-500 border-yellow-500 hover:bg-yellow-600 text-white  py-2  px-3 rounded-md">Đọc Mới Nhất</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex mt-6 mb-1" >
        <button className="outline-none mx-2 my-2 border-b-4 border-transparent hover:text-yellow-600 py-3 sm:mr-8 border-yellow-600">Giới thiệu</button>
        <button className="outline-none mx-2 my-2  border-transparent hover:text-yellow-600 py-3 sm:mr-8 border-yellow-600">Đánh giá</button>
        <button className="outline-none mx-2 my-2  border-transparent hover:text-yellow-600 py-3 sm:mr-8 border-yellow-600">D.s chương</button>
        <button className="outline-none mx-2 my-2  border-transparent hover:text-yellow-600 py-3 sm:mr-8 border-yellow-600">Bình Luận</button>
        <button className=" md:block hidden outline-none  border-transparent hover:text-yellow-600 py-3 sm:mr-8 border-yellow-600">Hâm mộ</button>
      </div>
      <div className="opacity-100 max-w-[520px] mb-6" >
        <p className=" break-words px-2 py-2">
          {novel?.novel.description.replace(/<[^>]+>/g, "")}
        </p>
      </div>
    </div>
  );
};
export default Handel;

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://hobanovel-be.azurewebsites.net/api/novels/search-by-slug/${context.params.Novels}`
  );

  const novel = await res.json();
  return { props: { novel: novel }, revalidate: 60 };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

Handel.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
