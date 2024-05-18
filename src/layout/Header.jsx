import React from 'react';
import { FaList } from 'react-icons/fa';

const Header = ({showSidebar, setShowSidebar}) => {
    return (
        <div className='fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-40'>
          <div className='ml-0 lg:ml-[260px] rounded-lg h-[65px] flex justify-between items-center bg-[#135a76] px-5 transition-all'>

        <div onClick={() => setShowSidebar(!showSidebar)} className='w-[35px] flex lg:hidden h-[35px] rounded-sm bg-[#135a76] shadow-lg hover:shadow-indigo-500/50 justify-center items-center cursor-pointer ' >
          <span><FaList/></span>
        </div>

        <div className='hidden md:block'>
          <input  className='px-3 py-2 outline-none border bg-transparent border-indigo rounded-md text-[#ffffff] focus:border-2 border-indigo-500 overflow-hidden ' type="text" name='search' placeholder='search ' />
        </div>

        <div className='flex justify-center items-center gap-8 relative'>
          <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center gap-3'>
              <div className='flex justify-center items-center flex-col text-end'>
          <h2 className='text-md font-semibold font-mono text-zinc-50'>Aayush</h2>
          <span className='text-[14px] w-full font-normal text-sky-500'>Admin</span>
              </div>
              <img className='w-[45px] h-[45px] rounded-full overflow-hidden' src="http://localhost:3000/images/admin.jpg" alt="" />

            </div>
          </div>

        </div>  


          </div> 
        </div>
    );
};

export default Header;