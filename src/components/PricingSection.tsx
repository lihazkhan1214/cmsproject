// import { Link } from "react-router-dom";
import { CircleCheck } from 'lucide-react';


interface CardItem {
    Status: string;
    title: string;
    desc: string;
    price: string;
    duration: string;
    bg: string;
    btnbg: string;
    para: string;
    text: string;
    btncolor: string;
    instructions: Instruction[];
}

interface Instruction {
    para: string;
    text: string;
    icon: string;
}


const Carditems:CardItem[]=[{
    Status:"Standard",
    title:"Design Only",
    desc:"Best if you have your own developer and regularly need help with design.",
    price:"$220",
    duration:"Month",
    bg:"bg-[#FFFFFF]",
    btnbg:"bg-[#FF9B24]",
    para:"text-[#000000]",
    text:"text-[#FF9B24]",
    btncolor:"text-[#FFFFFF]",
    
    instructions:[{
        para:"One task at a time",
        text:"text-[#000000]",
        icon:"text-[#FF9B24]"
    },
    {
        para:"Dedicated project manager",
        text:"text-[#000000]",
        icon:"text-[#FF9B24]"
    },{
        para:"Unlimited tasks",
        text:"text-[#000000]",
        icon:"text-[#FF9B24]"
    },{
        para:"Unlimited UI & UX design",
        text:"text-[#000000]",
        icon:"text-[#FF9B24]"
    },{
        para:"Unlimited revisions",
        text:"text-[#000000]",
        icon:"text-[#FF9B24]"
    },{
        para:"1 meeting every 2 weeks",
        text:"text-[#000000]",
        icon:"text-[#FF9B24]"
    },{
        para:"Average 48 hour delivery",
        text:"text-[#000000]",
        icon:"text-[#FF9B24]"
    },
]
},
{
    Status:"Pro",
    title:"Design Only",
    desc:"Best if you have your own developer and regularly need help with design.",
    price:"$220",
    duration:"Month",
    bg:"bg-[#FF9B24]",
    btnbg:"bg-[#FFFFFF]",
    para:"text-[#FFF]",
    text:"text-[#FFFFFF]",
    btncolor:"text-[#000000]",
    
    instructions:[{
        para:"One task at a time",
        text:"text-[#FFFFFF]",
        icon:"text-[#FFFFFF]"

    },
    {
        para:"Dedicated project manager",
        text:"text-[#FFFFFF]",
        icon:"text-[#FFFFFF]"
    },{
        para:"Unlimited tasks",
        text:"text-[#FFFFFF]",
        icon:"text-[#FFFFFF]"
    },{
        para:"Unlimited UI & UX design",
        text:"text-[#FFFFFF]",
        icon:"text-[#FFFFFF]"
    },{
        para:"Unlimited revisions",
        text:"text-[#FFFFFF]",
        icon:"text-[#FFFFFF]"
    },{
        para:"1 meeting every 2 weeks",
        text:"text-[#FFFFFF]",
        icon:"text-[#FFFFFF]"
    },{
        para:"Average 48 hour delivery",
        text:"text-[#FFFFFF]",
        icon:"text-[#FFFFFF]"
    },
    
]
},




{
    Status:"EntirePrice",
    title:"Design Only",
    desc:"Best if you have your own developer and regularly need help with design.",
    price:"$220",
    duration:"Month",
    bg:"bg-[#FFFFFF]",
    btnbg:"bg-[#FF9B24]",
  
    para:"text-[#000000]",
    text:"text-[#FF9B24]",
    btncolor:"text-[#FFFFFF]",
    
    instructions:[{
        para:"One task at a time",
        text:"text-[#000000]",
        icon:"text-[#FF9B24]"
    },
    {
        para:"Dedicated project manager",
        text:"text-[#000000]",
        icon:"text-[#FF9B24]"
    },{
        para:"Unlimited tasks",
        text:"text-[#000000]",
        icon:"text-[#FF9B24]"
    },{
        para:"Unlimited UI & UX design",
        text:"text-[#000000]",
        icon:"text-[#FF9B24]"
    },{
        para:"Unlimited revisions",
        text:"text-[#000000]",
        icon:"text-[#FF9B24]"
    },{
        para:"1 meeting every 2 weeks",
        text:"text-[#000000]",
        icon:"text-[#FF9B24]"
    },{
        para:"Average 48 hour delivery",
        text:"text-[#000000]",
        icon:"text-[#FF9B24]"
    },
]
},




]

function PricingSection() {
  return (
    <div className="  padding-x py-10">
                            
    <h1 className="text-[#000000] mb-5 text-center font-semibold text-2xl">
    Simple pricing
    </h1>
    <p className="text-[#000000] text-lg font-medium text-center ">Unlimited design with your dedicated designer over Slack and Zoom.</p>
<div className="flex max-lg:flex-wrap justify-center mt-10 gap-5">

    {
        Carditems.map((item,ind)=>(<>



<div key={ind} className={`flex flex-col  gap-5 p-5 rounded-[20px] border-[#777] border-[1px] justify-between ${item.bg} shadow-md shadow-[#bebec0]`}>
        

        <h1 className={`${item.para}  text-[24px] font-bold `}>
        


        {item.Status}
         
        </h1>
        <h2 className={`${item.para} text-sm font-normal`}>{item.title}</h2>


        <p className={`text-sm   ${item.para} font-medium   leading-7`}>
        {item.desc}
        </p>

        <h1 className={`text-[34px] font-bold ${item.text}`}>{item.price} <span className={`text-sm ${item.para} font-semibold`}>/{item.duration}</span></h1>

        {
            item.instructions.map((item,ind)=>(<>

        <p key={ind} className={`text-sm font-medium flex items-center gap-2 ${item.text}`}><CircleCheck className={`${item.icon}`}/>{item.para}</p>

            
            </>))
        }



        <button className={`p-4 transform hover:-translate-y-1 transition duration-400  rounded-md ${item.btnbg} ${item.btncolor} text-lg font-semibold`}>GetStarted</button>


      </div>










        
        </>))
    }
    








</div>


















    </div>
  )
}

export default PricingSection
