

interface OfferCardProps {
  title: string;
  img: string;
  desc: string;
  hovercolor:string;
  bg:string;
  bordercolor:string;
  shadowcolor:string;
}


const OfferCard: React.FC<OfferCardProps> = ({ title, img,bg,shadowcolor,bordercolor, desc ,hovercolor}) => {
  return (
<div className={`p-10 mx-auto sm:mx-2   rounded-xl hover:shadow-md    ${bg} ${shadowcolor}    flex justify-center items-center gap-5 flex-col`}>
        <div className={`border-dashed border-2 ${bordercolor} rounded-full p-4 `}>
        <img src={img} alt="" className="w-[120px]  h-[120px]" />


        </div>


        <h1 className="text-[#000000] text-[30px] font-semibold">{title}</h1>
        <p className="text-lg text-[#000000] text-center font-normal">{desc}</p>


        <button className={`rounded-[50px] transform hover:-translate-y-1 transition duration-400 ${hovercolor} ${bordercolor} hover:text-[#FFFFFF] w-[160px] text-lg text-[#000000] font-semibold h-[50px] flex items-center justify-center p-4 border-[1px] `}>View Details</button>


      


    </div>
  );
}

export default OfferCard;
