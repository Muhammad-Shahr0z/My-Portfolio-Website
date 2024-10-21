import Image from "next/image"
import Link from "next/link"

export interface ProjectCards{
h3:string,
src:string,
detail:string
link:string
}

const ProjectCardComponent = ({Project}:{Project:ProjectCards}) => {
  return (
    <div className="relative bg-gradient-to-b from-[#0a6335] to-gray-500 shadow-[0_4px_10px_rgba(0,0,0,0.5)] rounded-xl p-2 flex flex-col justify-center items-center w-full md:max-w-60 hover:animate-pulse mb-4 md:mr-4 h-72">
    <h3 className="text-center mt-2 text-white font-bold mb-2 absolute top-2 text-sm">{Project.h3}</h3>
    <div className='h-36 flex justify-center items-center'>
    <Image src={Project.src} alt="Images" width={160} height={160} className="rounded-lg"/>
      </div>
    <p className="text-[11px] text-white mt-2 text-center mb-2">
    {Project.detail}
    </p>
    <Link href={Project.link} className="text-sm text-[#0a6335] bg-zinc-300 py-1 px-12 rounded-lg hover:bg-[#0a6335] hover:text-white absolute bottom-2">Live</Link>
  </div>
  )
}

export default ProjectCardComponent