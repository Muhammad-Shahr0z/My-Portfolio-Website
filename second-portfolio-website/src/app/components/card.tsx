"use client"
import Image from 'next/image';

interface Cards{
    src:string,
    h3:string,
    percentage:string,
    detail:string
  }

const Card = ({Card}:{Card:Cards})  => {

  return (
    <div className="bg-white bg-gradient-to-b from-[#0a6335] to-gray-500 shadow-[0_4px_10px_rgba(0,0,0,0.5)] rounded-xl p-2 flex flex-col items-center w-full md:max-w-60 hover:animate-pulse  mb-4 md:mr-4 h-72 transformScale">

      <div className='h-36 flex justify-center items-center'>
      <Image src={Card.src} alt="HTML" width={80} height={80} className='animate-bounce rounded-md'/>
      </div>

      <h3 className="text-lg font-semibold mt-2 text-white">{Card.h3}</h3>
      <div className="w-full bg-gray-200 rounded-full mt-2">
      <div className={`bg-[#0a6335] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full elements`} style={{ width:`${Card.percentage}`}}>
        {Card.percentage}
        </div>

      </div>
      <p className="text-[11px] text-white mt-2 text-center">
       {Card.detail}
      </p>
    </div>
  )
}

export default Card