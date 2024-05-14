
import  React,{ useState } from 'react';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import {dropdownLinksData} from "../constants/index";
import {Link} from "react-router-dom";
import logo from "../assets/logo.png";
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
        <Link to="/" >
          <span className='text-[#000000] hover:text-[#FB651E] text-lg font-medium hover:text-opcity-1 font-[400] cursor-pointer' onClick={closeAllMenus}>Recent Work</span>
        </Link>
        <Link to="/" >
          <span className='text-[#000000] hover:text-[#FB651E] text-lg font-medium  font-[400] cursor-pointer' onClick={closeAllMenus}>Pricing</span>
        </Link>
        <Link to="/" >
          <span className='text-[#000000] hover:text-[#FB651E] text-lg font-medium  font-[400] cursor-pointer' onClick={closeAllMenus}>Case Studies</span>
        </Link>
        <Link to="/" >
        </Link>
        {Object.keys(dropdownLinksData).map((key, index) => (
          <div key={index} className="relative">
            <span
              onClick={() => toggleDropdown(key)}
              className='text-[#000000] text-lg font-medium flex items-center hover:text-[#FB651E] font-[400] cursor-pointer'
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
              {openDropdown === key ? <ChevronUp className='ml-2 w-[15px] h-[15px]' /> : <ChevronDown className='ml-2 w-[15px] h-[15px]' />}
            </span>
            {openDropdown === key && (
              <div className="absolute z-10 bg-white w-[220px] px-4 flex-col items-center shadow-md mt-2 py-2 rounded-lg">
                {dropdownLinksData[key].map((link, linkIndex) => (
                  <React.Fragment key={linkIndex}>
                    <Link to={link.href} >
                      <span onClick={closeAllMenus} className="block text-center py-2 text-nowrap text-[#000000] text-lg font-medium hover:text-[#FB651E] cursor-pointer">
                        {link.name}
                      </span>
                    </Link>
                    {linkIndex < dropdownLinksData[key].length - 1 && (
                      <hr className='hidden h-[1px] bg-[#AEAEAE]' />
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        ))}

        

  
      </div>

      {/* Login and Register Buttons */}
      <div className="max-md:hidden  flex  gap-5">
        <button className='bg-[#FFFFFF] text-[14px]  flex justify-center items-center font-semibold border-[1px] border-[#000000] hover:bg-[#FB651E] hover:border-[#FB651E]  rounded-full w-[168px] text-[#000000] h-[50px]'>
          Designer Application
        </button>
        <button className='bg-[#000000] text-[14px] flex justify-center items-center font-semibold border-[1px] border-[#000000]   hover:bg-[#FB651E] hover:border-[#FB651E] hover:text-[#000000]  rounded-full w-[168px] text-[#FFF] h-[50px]'>
          Hire Designer
        </button>

        
      </div>

      {/* Hamburger Icon for Mobile Menu */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X className='w-[25px] h-[25px]' /> : <Menu className='w-[25px] h-[25px]' />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute padding-x top-[80px] flex flex-col gap-5 py-10 left-0 right-0 bg-white shadow-md z-50 md:hidden">
          


          <Link to="/" >
          <span className='text-[#000000] hover:text-[#FB651E] text-lg font-medium hover:text-opcity-1 font-[400] cursor-pointer' onClick={closeAllMenus}>Recent Work</span>
        </Link>
        <Link to="/" >
          <span className='text-[#000000] hover:text-[#FB651E] text-lg font-medium  font-[400] cursor-pointer' onClick={closeAllMenus}>Pricing</span>
        </Link>
        <Link to="/" >
          <span className='text-[#000000] hover:text-[#FB651E] text-lg font-medium  font-[400] cursor-pointer' onClick={closeAllMenus}>Case Studies</span>
        </Link>






          {Object.keys(dropdownLinksData).map((key, index) => (
            <div key={index} className="">
              <span
                onClick={() => toggleDropdown(key)}
                className='text-[#000000] hover:text-[#FB651E] flex items-center gap-2 text-lg font-medium hover:text-opcity-1 font-[400] cursor-pointer'
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
                {openDropdown === key ? <ChevronUp className=' w-[15px] h-[15px]' /> : <ChevronDown className=' w-[15px] h-[15px]' />}
              </span>
              {openDropdown === key && (
                <div className="bg-white w-full flex-col items-center shadow-md  rounded">
                  {dropdownLinksData[key].map((link, linkIndex) => (
                    <React.Fragment key={linkIndex}>
                      <Link to={link.href} >
                        <span onClick={closeAllMenus} className="text-[#000000] my-2 block text-center  hover:text-[#FB651E] text-lg font-medium hover:text-opcity-1 font-[400] cursor-pointer">
                          {link.name}
                        </span>
                      </Link>
                      {linkIndex < dropdownLinksData[key].length - 1 && (
                        <hr className=' hidden h-[1px] bg-[#AEAEAE]' />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          ))}
    


    <div className="  flex  flex-col  gap-5">
    <button className='bg-[#FFFFFF] text-[14px]  flex justify-center items-center font-semibold border-[1px] border-[#000000] hover:bg-[#FB651E] hover:border-[#FB651E]  rounded-full w-[168px] text-[#000000] h-[50px]'>
          Designer Application
        </button>
        <button className='bg-[#000000] text-[14px] flex justify-center items-center font-semibold border-[1px] border-[#000000]   hover:bg-[#FB651E] hover:border-[#FB651E] hover:text-[#000000]  rounded-full w-[168px] text-[#FFF] h-[50px]'>
          Hire Designer
        </button>

        
      </div>


    


         
        </div>
      )}
    </nav>
  );
};

export default Navbar;