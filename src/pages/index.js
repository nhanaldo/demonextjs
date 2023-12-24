import Image from "next/image";

import Outstending from "@/components/modules/Home/Outstending";
import LatestUpdate from "@/components/modules/Home/LatestUpdate";
import HighRated from "@/components/modules/Home/HightRated";
import LatestRated from "@/components/modules/Home/LatestRated";
import SliderUpdate from "@/components/modules/Home/slider";
import MainLayout from "@/components/Layouts/MainLayout";
import axios from "axios";
import Completed from "@/components/modules/Home/Completed";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomePage({
  repo,
  evaluate,
  review,
  novels,
  justs,
  posteds,
}) {
  const [goToStop, getGoToStop] = useState(false)

  useEffect(()=>{

    const handelScroll = () =>{
      if(window.scrollY >= 200){
        getGoToStop(true)
      }else{
        getGoToStop(false)
      }
    }
    window.addEventListener('scroll', handelScroll)
  },[])
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

  // const [Evaluate, getEvaluate] = useState([]);
  // // async muon dung awai thi de trong async
  // const HandleEvaluate = async () => {
  //   try {
  //     // await doi de load du lieu tu sevr ve
  //     // axios de lay du lieu ve
  //     const novelsEvaluate = await axios.get(
  //       "https://hobanovel-be.azurewebsites.net/api/novels/get/highlyrated?page=1"
  //     );

  //     getEvaluate(novelsEvaluate.data.novels);
  //   } catch {}
  // };

  // useEffect(() => {
  //   HandleEvaluate();
  // }, []);

  // const [review, getReview] = useState([]);

  // const HandleReview = async () => {
  //   try {
  //     const novelsReview = await axios.get(
  //       "https://hobanovel-be.azurewebsites.net/api/reviews/get?page=1"
  //     );

  //     getReview(novelsReview.data.reviews);
  //   } catch {}
  // };

  // useEffect(() => {
  //   HandleReview();
  // }, []);

  // const [novels, getBody] = useState([]);
  // // async muon dung awai thi de trong async
  // const HandleBody = async () => {
  //   try {
  //     // await doi de load du lieu tu sevr ve
  //     // axios de lay du lieu ve
  //     const novelsResBody = await axios.get(
  //       "https://hobanovel-be.azurewebsites.net/api/novels/search-by-page/1"
  //     );
  //     getBody(novelsResBody.data.novels);
  //   } catch {}
  // };

  // useEffect(() => {
  //   HandleBody();
  // }, []);
  return (
    <div>
      {/* <Header></Header> */}
      <div>
        <Image
          width={1200}
          height={240}
          alt="anh nen"
          src={`https://res.cloudinary.com/djrbd6ftt/image/upload/v1695023561/hobanovel/admin/banners/1695023559557.webp`}
          className="w-full"
        />
      </div>
      <div className=" md:-translate-y-16 max-w-[1000px] mx-auto w-full">
        <div className="flex bg-gray-50  rounded-xl">
          <Outstending repo={repo} />
          <div className="mb-8 mt-2 ml-5 lg:block hidden">
            <h2 className="uppercase font-bold">
              <span>Truyện Đang Đọc</span>
            </h2>
            <div>
              <span>Bạn Chưa Đăng Nhập! </span>
              <a className="text-blue-800">Đăng Nhập Ngay</a>
            </div>
          </div>
        </div>
        <div>
          <LatestUpdate novels={novels} />
        </div>
        <div className="flex ">
          <div>
            <HighRated evaluate={evaluate} />
          </div>
          <div className="md:block hidden">
            <LatestRated review={review} />
          </div>
        </div>
        <div className="grid grid-cols-12 ">
          <div className="md:block hidden col-span-3 bg-gray-100 px-3  rounded-xl ">
            <SliderUpdate posteds={posteds} />
          </div>
          <div className="md:ml-10 col-span-9 ">
            <Completed justs={justs} />
          </div>
        </div>
      </div>

      {goToStop && (
        <Link className="md:block hidden fixed right-5 bottom-48" href={"/"}>
          Home
        </Link>
      )}
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    "https://hobanovel-be.azurewebsites.net/api/novels/get/outstanding"
  );
  const value = await fetch(
    "https://hobanovel-be.azurewebsites.net/api/novels/get/highlyrated?page=1"
  );
  const react = await fetch(
    "https://hobanovel-be.azurewebsites.net/api/reviews/get?page=1"
  );

  const novel = await fetch(
    "https://hobanovel-be.azurewebsites.net/api/novels/search-by-page/1"
  );
  const just = await fetch(
    "https://hobanovel-be.azurewebsites.net/api/novels/search-by-page/1"
  );
  const posted = await fetch(
    "https://hobanovel-be.azurewebsites.net/api/novels/get/outstanding"
  );
  const repo = await res.json();
  const evaluate = await value.json();
  const review = await react.json();
  const novels = await novel.json();
  const justs = await just.json();
  const posteds = await posted.json();
  return {
    props: {
      repo: repo?.novels || null,
      evaluate: evaluate?.novels || null,
      review: review?.reviews || null,
      novels: novels?.novels || null,
      justs: justs?.novels || null,
      posteds: posteds?.novels || null,
    },
    revalidate: 60,
  };
};
