import founderinfoimg from "../assets/founderimg.svg";

interface Service {
    title: string;
    para1: string;
    para2: string;
}

const services: Service[] = [{
        title: "A design department, on subscription",
        para1: "Unlimited design, completed one at a time",
        para2: "Iterate, edit, and revise until you're ready to ship"
    },
    {
        title: "A design department, on subscription",
        para1: "Unlimited design, completed one at a time",
        para2: "Iterate, edit, and revise until you're ready to ship"
    },
    {
        title: "A design department, on subscription",
        para1: "Unlimited design, completed one at a time",
        para2: "Iterate, edit, and revise until you're ready to ship"
    }
];

function Founder() {
    return (

     
        <div className="padding-x py-10   flex   justify-center  gap-10 ">

            <div className="">
                <img src={founderinfoimg} className="w-[378] h-[408px]" alt="" />
            </div>
            <div className="flex flex-col md:w-[505px] gap-5">
                <h1 className="text-[30px] text-[#000]  sm:text-[60px] font-medium ">For founders and startup leaders</h1>

                {services.map((item, ind) => (
                    <div key={ind} className="">
                        <h2 className="text-lg font-medium text-[#000000]">
                            {item.title}
                        </h2>
                        <p className="text-[#000000] font-normal text-lg">{item.para1}</p>
                        <p className="text-[#000000] font-normal text-lg">{item.para2}</p>
                    </div>
                ))}

<button className='bg-[#000000] text-[14px] flex justify-center hover:text-[#000000] hover:bg-[#FB651E] hover:border-[#FB651E] items-center font-semibold border-[1px] border-[#000000] rounded-[50px] w-[168px] text-[#FFF] h-[50px]'>
          Hire Designer
        </button>
            </div>
        </div>
    );
}

export default Founder;
