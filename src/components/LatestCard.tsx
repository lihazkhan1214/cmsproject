// import { ChevronRight } from 'lucide-react';.
import { Link } from 'react-router-dom';

export interface LArticleCardProps {
  title: string;
  slug: string;

  desc: string;

  img: string;
}





function LatestCard({
  title,
  slug,
  desc,
  img
}: LArticleCardProps) {


  return (
    <>
      <div className="flex flex-col items-center rounded-[20px] border-[#777] border-[1px] justify-between bg-[#FFF] shadow-md shadow-[#bebec0]">
        <div className="relative w-full mx-auto h-[217px]">
          <img src={img} className='rounded-t-[20px] h-[250px] w-full' alt="not found" />
        </div>

        <h1 className="text-[#000000] mt-10 text-[24px] font-normal text-center">
        


          {title}
         
        </h1>

        <p className="text-[16px] px-4  text-[#000000] font-normal text-center mt-5 leading-7">
         {desc}
        </p>

        <div className="mb-5">
          <Link to={`/articles/${slug}`}>
            <button className="mt-5 transform hover:-translate-y-1 transition duration-400 bg-[#FF9B24] rounded-sm w-[120px] text-[#FFFFFF] font-normal text-[14px] py-2">
              View
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LatestCard;