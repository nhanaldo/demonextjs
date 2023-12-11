import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Header from "@/components/Partials/Header";
import { useEffect, useState } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ repo }) {
  // console.log(repo)

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

  const [Evaluate, getEvaluate] = useState([]);
  // async muon dung awai thi de trong async
  const HandleEvaluate = async () => {
    try {
      // await doi de load du lieu tu sevr ve
      // axios de lay du lieu ve
      const novelsEvaluate = await axios.get(
        "https://hobanovel-be.azurewebsites.net/api/novels/get/highlyrated?page=1"
      );

      getEvaluate(novelsEvaluate.data.novels);
    } catch {}
  };

  useEffect(() => {
    HandleEvaluate();
  }, []);
  
  const [review, getReview] = useState([]);

  const HandleReview = async()=>{
    try{
      const novelsReview = await axios.get("https://hobanovel-be.azurewebsites.net/api/reviews/get?page=1");

  
      getReview(novelsReview.data.reviews)
    }catch{}
    
  };

  useEffect(()=>{
    HandleReview()
  },[]);
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
      <div className="  mt-40 mb-2 grid md:grid-cols-2   bg-gray-100 rounded-xl max-w-[1000px] mx-auto w-full">
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
                  <h3 className="px-8  ">{item.title}</h3>
                  <b className="px-8 mb-2">{item.author}</b>
                </div>
              </div>
            );
          })}
      </div>

      <div className=" max-w-[1000px] w-full mx-auto md:block hidden">
        <span className="font-bold uppercase text-[18px]">
          Truyện Mới Cập Nhật
        </span>
        <table className="border-4 mt-2 mb-2">
          {body.map((itemBody, indexBody) => {
            return (
              <tr key={indexBody}>
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
      <div className="flex max-w-[1000px] mx-auto w-full">
        <div>
          <span className="text-[18px] font-bold uppercase">Truyện Đánh Giá Cao</span>
          <div className="mt-2 mb-14 grid md:grid-cols-2 ml-0  bg-gray-50 rounded-xl max-w-[700px] mx-auto w-full">
            {Evaluate.map((item, index) => {
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
                    <h3 className="px-2 font-semibold line-clamp-1">{item.title}</h3>
                    <div className="bg-red-600  px-2 w-10 h-7 ml-2 rounded-md text-white">{item.mediumScore}</div>
                    <div className="px-2 line-clamp-2">{item.description && item?.description.replace(/<[^>]+>/g, '')}</div>
                  </div>
     
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <span className="font-bold uppercase ml-3  text-[18px] ">
            Mới Đánh Giá
          </span>
          {
              review.map((itemReview, index )=>{
                return ( 
                  <ul key={index} className="p-4 rounded bg-gray-100 m-3">
                    <li className="font-semibold">{itemReview.name }</li>
                    <li className="bg-red-600 p-[1px] text-center w-14 rounded-md ">{itemReview.mediumScore}</li>
                    <li className="font-semibold">{itemReview.title}</li>
                    
                  </ul>

                );
              }) 
            }
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(
    "https://hobanovel-be.azurewebsites.net/api/novels/get/outstanding"
  );

  const repo = await res.json();
  return { props: { repo: repo.novels }, revalidate: 60 };
};

// export const getStaticProp = (async (context) =>{
//   const Evaluate = await fetch('https://hobanovel-be.azurewebsites.net/api/novels/get/highlyrated?page=1')

//   const getEvaluate = await Evaluate.json()
//   return { props: { getEvaluate: getEvaluate.novels }, revalidate: 60 };
// })
