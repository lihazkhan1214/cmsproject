
import Wave from 'react-wavify';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import { Facebook ,Twitter,Instagram, MapPin,Phone,Mail} from 'lucide-react';

interface linktypes{
  title:string;
  link:string;
}

const quicklins:linktypes[]=[{
  title:"Home",
  link:"#home"
},{
  title:"About",
  link:"#about"
},
{
  title:"Courses",
  link:"#course"
},
{
  title:"Shop",
  link:"#home"
},
{
  title:"Blog",
  link:"#hom"
},
{
  title:"Contact",
  link:"#hom"
},

];

const programs:linktypes[]=[{
  title:"Play School",
  link:"#home"
},{
  title:"Nursery",
  link:"#about"
},
{
  title:"Junior Kg",
  link:"#course"
},
{
  title:"Senoir Kg",
  link:"#home"
},
{
  title:"Holiday Camp",
  link:"#hom"
},
{
  title:"Day Care",
  link:"#"
},

];






function Footer() {
  return (
    <div className=''>
  <Wave fill='#00BAAE'
        paused={false}
        style={{ display: 'flex' }}
        options={{
          height: 100,
          amplitude: 50,
          speed: 0.17,
          points: 3
        }}
  />

<div className="padding-x  py-10 bg-[#00BAAE]">


<div className="flex max-lg:flex-col max-lg:gap-5 lg:justify-between ">
  <div className="flex flex-col gap-5">
  <img src={logo}  alt='Logo' width={100} height={100}/>
  <p className="text-[18px] sm:w-[440px] text-[#FFFFFF] font-normal">In our Adult Participation programs, for most students, it is their
first program in Kindedo.</p>
</div>



<div className="flex flex-col gap-5 ">

  <h1 className="text-[#FFFFFF] text-lg font-medium">Join Our Newsletter</h1>

<div className="bg-[#FFFFFF] sm:w-[400px] h-[60px] flex  items-center p-1 rounded-[50px] ">

  <input  type="email" placeholder='Email' className="w-[300px]  rounded-[50px] outline-none font-normal text-[18px] text-[#000000] h-[100%]  pl-2" />


  <button className='hover:bg-[#00BAAE] text-[14px] transform hover:-translate-y-1 transition duration-400 flex justify-center items-center font-semibold  border-[#000000]  bg-[#FF9B24]  hover:text-[#FFF]  rounded-full w-[168px] text-[#FFF] h-[50px]'>
          Subscribe Now
        </button>



</div>



</div>


</div>

<hr className='mt-10' />


<div className="flex mt-10 justify-between sm:px-[120px] flex-wrap gap-5 ">


<div className="flex flex-col gap-5 ">
<h1 className="text-lg font-semibold text-[#FFFFFF]">Quick Links</h1>

  {
    quicklins.map((item,ind)=>(<>

<Link key={ind}  className='text-lg text-[#FFFFFF] transform hover:-translate-y-1 transition duration-400 font-normal hover:text-[#FF9B24]' to={item.link}>{item.title}</Link>

    
    </>))
  }









</div>







<div className="flex flex-col gap-5 ">
<h1 className="text-lg font-semibold text-[#FFFFFF]">Programs</h1>

  {
    programs.map((item,ind)=>(<>

<Link key={ind}  className='text-lg text-[#FFFFFF] transform hover:-translate-y-1 transition duration-400 font-normal hover:text-[#FF9B24]' to={item.link}>{item.title}</Link>

    
    </>))
  }









</div>





<div className="flex flex-col gap-5 ">
<h1 className="text-lg font-semibold text-[#FFFFFF]">Socials </h1>



<Link  className='text-lg text-[#FFFFFF] transform hover:-translate-y-1 transition duration-400 flex items-center gap-2 font-normal hover:text-[#FF9B24]' to="/"><Facebook className='text-[#FFF] hover:text-[#FF9B24]'/>Facebook</Link>

<Link  className='text-lg text-[#FFFFFF] transform hover:-translate-y-1 transition duration-400 flex items-center gap-2 font-normal hover:text-[#FF9B24]' to="/"><Twitter className='text-[#FFF] hover:text-[#FF9B24]'/>Twitter</Link>
<Link  className='text-lg text-[#FFFFFF] transform hover:-translate-y-1 transition duration-400 flex items-center gap-2 font-normal hover:text-[#FF9B24]' to="/"><Instagram className='text-[#FFF] hover:text-[#FF9B24]'/>Instagram</Link>

    
   








</div>







<div className="flex flex-col gap-5 ">
<h1 className="text-lg font-semibold text-[#FFFFFF]">Contact Us</h1>

  

<Link  className='text-lg transform hover:-translate-y-1 transition duration-400 text-[#FFFFFF] flex items-center gap-2 font-normal hover:text-[#FF9B24]' to="/"><MapPin className='text-[#FFF] hover:text-[#FF9B24]'/>
14/A, Kilix Home Tower, NYC</Link>
<Link  className='text-lg transform hover:-translate-y-1 transition duration-400 text-[#FFFFFF] flex items-center gap-2 font-normal hover:text-[#FF9B24]' to="/"><Phone className='text-[#FFF] hover:text-[#FF9B24]'/>
907-200-3462
</Link>
    
<Link  className='text-lg transform hover:-translate-y-1 transition duration-400 text-[#FFFFFF] flex items-center gap-2 font-normal hover:text-[#FF9B24]' to="/"><Mail className='text-[#FFF] hover:text-[#FF9B24]'/>
lehaz123@gmail.com</Link>
    
    
   








</div>


























</div>


</div>


       
       
      
    </div>
  )
}

export default Footer
