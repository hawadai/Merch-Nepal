import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNav } from "../navigation/index";
import { IoLogOut } from "react-icons/io5";

const Sidebar = ({showSidebar, setShowSidebar}) => {
  const { pathname } = useLocation();
  const [allNav, setAllNav] = useState([]);
  useEffect(() => {
    const navs = getNav("admin");
    setAllNav(navs);
  }, []);
  // console.log(allNav)

  return (
    <div>
      <div onClick={()=> setShowSidebar(false)} className={`fixed duration-200 ${!showSidebar ? 'invisible': 'visible'} w-screen h-screen bg-[#aed6f6] top-0 left-0 z-10`}>
      </div>

      <div
        className={`w-[260px] fixed bg-[#000000] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all ${showSidebar ? 'left-0': '-left-[260px] lg:left-0'}`}
      >
        <div className="h-[80px] flex justify-center items-center">
          <Link to="/" className="w-[200px] h-[80px]">
            <img
              className="w-full h-full"
              src="http://localhost:3000/images/logo3.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <div className="w-[100%] bg-slate-700 h-[4px] "></div>
        </div>
        <br />
        <div className="px-[16px]">
          <ul>
            {allNav.map((n, i) => (
              <li key={i}>
                <Link
                  to={n.path}
                  className={`${
                    pathname === n.path
                      ? "bg-gray-600 shadow-indigo-500/50 text-white duration-500 font-semibold"
                      : "text-[#ffffff] font-bold duration-200 "
                  } px-[12px] py-[10px] rounded-lg flex justify-start items-center gap-[12px] hover:pl-5 transition-all w-full mb-1 `}
                >
                  <span>{n.icon}</span>
                  <span>{n.title}</span>
                </Link>
              </li>
            ))}

            <li>
              <button className="text-[#ffffff] font-bold duration-200 px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1">
                <span>
                  <IoLogOut />
                </span>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
