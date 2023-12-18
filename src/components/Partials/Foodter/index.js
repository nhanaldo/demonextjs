import { STORULIST } from "@/lib/constant";
import Link from "next/link";

const Foodter = () => {
  return (
    <header>
      <hr></hr>
      <div className="md:flex block max-w-[1000px] mx-auto w-full mb-32 mt-4  ">
        <div>
          <div className="p-2">
            <h1 className="font-semibold text-2xl">
              <a>Hobannovel</a>
            </h1>
          </div>
          <div className="p-2">
            <a>Chính Sách Bảo Mật</a>
          </div>
          <div className="p-2">
            <p>Copyright © 2024 hobanovel</p>
          </div>
        </div>
        <div>
          <div className=" mt-2 md:ml-20 ">
            <p className="text-xl">Từ Khóa</p>
            <ul className="grid grid-cols-4 ">
              {STORULIST.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="hover:bg-gray-100 cursor-pointer text-center p-2 rounded-xl text-xs font-semibold bg-gray-400 m-2"
                  >
                    <Link href={item.getSlug}>{item.getName}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Foodter;
