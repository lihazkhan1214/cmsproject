
import { useState } from 'react';
import {  Menu, X } from 'lucide-react';
import {Link} from "react-router-dom";
import logo from "../assets/logo.png";
interface typeslik {
  title:string,
  link:string;
}

const itemslinks:typeslik[]=[{
  title:"Home",
  link:"/"
},{
  title:"Pricing",
  link:"/#Princing"
},{
  title:"Multileve",
  link:"/"
},{
  title:"About",
  link:"/"
},{
  title:"Contact",
  link:"/"
},

]


















const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="bg-[#FFF] padding-x mx-auto flex justify-between items-center h-[80px] py-2 relative">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/" >
          <img src={logo} alt='Logo' width={100} height={100} />
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-12 items-center">


{
  itemslinks.map((item,ind)=>(
    <>

<Link key={ind} to={item.link} >
          <span className='text-[#000000] hover:text-[#FF9B24] text-lg font-medium font-[400] cursor-pointer' onClick={closeAllMenus}>{item.title}</span>
        </Link>
    
    </>
  ))
}





        
       
        
       

        

  
      </div>

      {/* Login and Register Buttons */}
      <div className="max-md:hidden  flex  gap-5">
        <Link to="/login" className='bg-[#FFFFFF] text-[14px] transform hover:-translate-y-1 transition duration-400  flex justify-center items-center font-semibold border-[1px] border-[#000000] hover:bg-[#FF9B24] hover:border-[#FF9B24]  rounded-full w-[168px] text-[#000000] h-[50px]'>
          Login
        </Link>
        <Link to="/register" className='bg-[#000000] transform hover:-translate-y-1 transition duration-400 text-[14px] flex justify-center items-center font-semibold border-[1px] border-[#000000]   hover:bg-[#FF9B24] hover:border-[#FF9B24] hover:text-[#000000]  rounded-full w-[168px] text-[#FFF] h-[50px]'>
          Register
        </Link>

        
      </div>

      {/* Hamburger Icon for Mobile Menu */}
      <div className="md:hidden cursor-pointer">
        <button onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X className='w-[25px] h-[25px]' /> : <Menu className='w-[25px] h-[25px]' />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute padding-x top-[80px] flex flex-col gap-5 py-10 left-0 right-0 bg-white shadow-md z-50 md:hidden">
          


          {
  itemslinks.map((item,ind)=>(
    <>

<Link key={ind} to={item.link} >
          <span className='text-[#000000] hover:text-[#FF9B24] text-lg font-medium font-[400] cursor-pointer' onClick={closeAllMenus}>{item.title}</span>
        </Link>
    
    </>
  ))
}






    


    <div className="  flex  flex-col  gap-5">
    <Link to="/login" className='bg-[#FFFFFF] transform hover:-translate-y-1 transition duration-400 text-[14px]  flex justify-center items-center font-semibold border-[1px] border-[#000000] hover:bg-[#FF9B24] hover:border-[#FF9B24]  rounded-full w-[168px] text-[#000000] h-[50px]'>
          Login
        </Link>
        <Link to="/register" className='bg-[#000000] transform hover:-translate-y-1 transition duration-400 text-[14px] flex justify-center items-center font-semibold border-[1px] border-[#000000]   hover:bg-[#FF9B24] hover:border-[#FF9B24] hover:text-[#000000]  rounded-full w-[168px] text-[#FFF] h-[50px]'>
          Register
        </Link>

        
      </div>


    


         
        </div>
      )}
    </nav>
  );
};

export default Navbar;