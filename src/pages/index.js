import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Header from '@/components/Partials/Header'
import { useEffect, useState } from 'react'
import axios from 'axios'


const inter = Inter({ subsets: ['latin'] })




export default function Home() {

  const [list, getlist] = useState([]);
    // async muon dung awai thi de trong async
const Handle = async() => {
  try{
    // await doi de load du lieu tu sevr ve
    // axios de lay du lieu ve
    const novelsRes =  await axios.get("https://hobanovel-be.azurewebsites.net/api/novels/get/outstanding")
    console.log(novelsRes.data.novels)
    getlist(novelsRes.data.novels);
  }catch{

  }
}

  useEffect(()=>{
    Handle()
  },[])
  return (
    <div>
      <Header></Header>
     <div className='flex mt-40 mb-40 grid grid-cols-2 mx-48  bg-gray-400 rounded-xl'>
        {
          list.map((item, index) => {
            return (
              <div key={index} className='flex my-4 ml-4'>
                <Image
                  width={80}
                  height={112}
                  alt='ảnh'
                  src={item.thumbnailUrl}
                  className='w-20 h-24  object-cover'
                />
                <div>
                  <h3 className='px-8  '>{item.title}</h3>
                  <b className='px-8 mb-2'>{item.author}</b>
                </div>
              </div>
            )
          })
        }
     </div>
    </div>
    
  )
}
