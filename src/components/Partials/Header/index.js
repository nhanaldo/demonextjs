import Link from "next/link";
import { DATA_CATEGORY_HEADER } from "@/lib/constant";
import { CHARTS } from "@/lib/constant";

const Header = () => {
  return (
    <header>
      <div className=" w-full bg-gray-100 p-2">
        <div className=" max-w-[1000px] w-full mx-auto flex space-x-7">
          <div>
            <p className="font-bold text-2xl cursor-pointer">hobannovel</p>
          </div>
          <div className="relative dropdown cursor-pointer">
            <p className="">Thể Loại</p>
            <div className="absolute hidden">
              <ul className="bg-white w-80 py-2 px-2 shadow-lg rounded-b-md grid grid-cols-2">
                {/* <li className="hover:bg-gray-100 px-3 py-2 cursor-pointer">Truyen 1</li>
                                <li  className="hover:bg-gray-100 px-3 py-2 cursor-pointer">Truyen 2</li>
                                <li  className="hover:bg-gray-100 px-3 py-2 cursor-pointer">Truyen 4</li>
                                <li  className="hover:bg-gray-100 px-3 py-2 cursor-pointer">Truyen 5</li>
                                <li  className="hover:bg-gray-100 px-3 py-2 cursor-pointer">Truyen 6</li>
                                <li  className="hover:bg-gray-100 px-3 py-2 cursor-pointer">Truyen 7</li>
                                <li  className="hover:bg-gray-100 px-3 py-2 cursor-pointer">Truyen 8</li> */}
                {DATA_CATEGORY_HEADER.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="hover:bg-gray-100 px-3 py-2 cursor-pointer"
                    >
                      <Link href={item.slug}>{item.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="relative dropdown">
            <p className="cursor-pointer">Bảng Xếp Hạng </p>
            <div className="absolute hidden">
              <ul className="bg-white w-80 py-2 px-2 shadow-lg rounded-b-md grid grid-cols-2">
                {CHARTS.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="hover:bg-gray-100 px-3 py-2 cursor-pointer"
                    >
                      <Link href={item.slugChar}>{item.nameChar}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
