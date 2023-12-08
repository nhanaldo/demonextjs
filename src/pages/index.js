import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Header from "@/components/Partials/Header";
import { useEffect, useState } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home({repo}) {

  console.log(repo)
  // const [list, getlist] = useState([]);
  // // async muon dung awai thi de trong async
  // const Handle = async () => {
  //   try {
  //     // await doi de load du lieu tu sevr ve
  //     // axios de lay du lieu ve
  //     const novelsRes = await axios.get(
  //       "https://hobanovel-be.azurewebsites.net/api/novels/get/outstanding"
  //     );
  //     getlist(novelsRes.data.novels);
  //   } catch {}
  // };

  // useEffect(() => {
  //   Handle();
  // }, []);
  const [body, getBody] = useState([]);
  // async muon dung awai thi de trong async
  const HandleBody = async () => {
    try {
      // await doi de load du lieu tu sevr ve
      // axios de lay du lieu ve
      const novelsResBody = await axios.get(
        "https://hobanovel-be.azurewebsites.net/api/novels/search-by-page/1"
      );
      getBody(novelsResBody.data.novels);
    } catch {}
  };

  useEffect(() => {
    HandleBody();
  }, []);
  return (
    <div>
      <Header></Header>
      <div className="  mt-40 mb-14 grid md:grid-cols-2   bg-gray-400 rounded-xl max-w-[1000px] mx-auto w-full">
        {repo && repo.map((item, index) => {
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
                <h3 className="px-8  ">{item.title}</h3>
                <b className="px-8 mb-2">{item.author}</b>
              </div>  
            </div>
          );
        })}
      </div>
 
      <div className=" my-16  max-w-[1000px] w-full mx-auto md:block hidden">
        <b className="text-3xl ">Truyện Mới Cập Nhật</b>
        <table className="border-4">
          {body.map((itemBody, indexBody) => {
            return (
              <tr key ={indexBody}>
                <td className="w-1/12">
                  <p className="line-clamp-1">Huyền Nguyễn</p>
                </td>
                <td className="w-1/5">
                  <b className="line-clamp-1">{itemBody.title}</b>
                </td>
                <td className="w-1/5">
                  <b className="line-clamp-1">{itemBody.title}</b>
                </td>
                <td className="w-1/12">
                  <p className="line-clamp-1">Văn Hiên Vũ</p>
                </td>
                <td className="w-1/12">
                  <p className="line-clamp-1">Nguyễn Hoàng Bảo</p>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export const getStaticProps = (async (context) => {
  const res = await fetch('https://hobanovel-be.azurewebsites.net/api/novels/get/outstanding')
  const repo = await res.json()
  return { props: { repo: repo.novels }, revalidate: 60 };
}) 
