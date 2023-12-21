import Link from "next/link";
import { DATA_CATEGORY_HEADER } from "@/lib/constant";
import { CHARTS } from "@/lib/constant";
import { useState } from "react";

const Header = () => {
  const [showTyle, getShowTyle] = useState(false);
  const [showHan, getShowHan] = useState(false);
  return (
    <header>
      <div className=" w-full bg-gray-100 p-2">
        <div className=" max-w-[1000px] w-full mx-auto flex space-x-7">
          <div>
            <Link href={"/"}>
              <p className="font-bold text-2xl cursor-pointer">hobannovel</p>
            </Link>
          </div>
          <div className="relative cursor-pointer">
            <button onClick={() => getShowTyle(!showTyle)}>The Loai</button>
            {showTyle && (
              <div className="absolute ">
                <ul className="bg-white md:w-80 md:text-lg text-[10px] md:py-2 md:px-2 w-[120px] shadow-lg rounded-b-md grid grid-cols-2">
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
                        className="hover:bg-gray-100 line-clamp-1 md:px-3 px-2 md:py-2  cursor-pointer"
                      >
                        <Link href={item.slug}>{item.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

          <div className="relative ">
            <button
              className="cursor-pointer"
              onClick={() => getShowHan(!showHan)}
            >
              Bảng Xếp Hạng
            </button>
            {showHan && (
              <div className="absolute ">
                <ul className="bg-white md:w-80 md:text-lg text-[10px] md:py-2 md:px-2 w-[130px] shadow-lg rounded-b-md grid grid-cols-2">
                  {CHARTS.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="hover:bg-gray-100 line-clamp-1 md:px-3 px-2 md:py-2  cursor-pointer"
                      >
                        <Link href={item.slugChar}>{item.nameChar}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
