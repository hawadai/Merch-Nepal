import React, { useState } from "react";
import { FaChevronCircleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [show, setShow] = useState(false);

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-[#1d1a41] rounded-md">
        <div className="flex justify-between items-center">
          <select
            onChange={(e) => setPerPage(parseInt(e.target.value))}
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#c8ff2d] border border-slate-700 rounded-md text-[#090a0b]"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
          <input
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#c8ff2d] border border-2-slate-700 rounded-md text-[#070809]"
            type="text"
            placeholder="search"
          />
        </div>

        <div className="relative mt-5 overflow-x-auto">
          <div className="w-full text-sm text-left [#070809]">
            <div className="text-sm text-[#fdf932] uppercase border-b border-slate-900">
              <div className="flex justify-between items-center">
                <div className="py-3 w-[25%] font-semibold"> Order Id</div>
                <div className="py-3 w-[13%] font-semibold"> Price</div>
                <div className="py-3 w-[18%] font-semibold">
                  {" "}
                  Payment Status
                </div>
                <div className="py-3 w-[18%] font-semibold"> Order Status</div>
                <div className="py-3 w-[18%] font-semibold"> Action</div>
                <div className="py-3 w-[8%] font-semibold">
                  {" "}
                  
                </div>
              </div>
            </div>
          </div>
          <div className="text-[#d0d2d6] ">
            <div className=" flex justify-between items-start border-b border-slate-700">
              <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                #34343
              </div>
              <div className="py-3 w-[13%] font-medium">$654</div>
              <div className="py-3 w-[18%] font-medium">Pending</div>
              <div className="py-3 w-[18%] font-medium">Pending</div>
              <div className="py-3 w-[18%] font-medium hover:underline">
                <Link>View</Link>
              </div>
              <div
                onClick={(e) => setShow(!show)}
                className="py-5 w-[8%] font-medium"
              >
                <FaChevronCircleDown />
              </div>
            </div>

            <div
              className={
                show ? "block-b border-2 bg-[#286a43] rounded-lg shadow-sm shadow-slate-400" : "hidden"
              }
            >
              <div className=" flex justify-start items-start border-b border-slate-900 pl-3">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #12344
                </div>
                <div className="py-3 w-[13%] font-medium">$54</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
              </div>
              <div className=" flex justify-start items-start border-b border-slate-700 pl-3">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #12344
                </div>
                <div className="py-3 w-[13%] font-medium">$54</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
              </div>
            </div>
          </div>
          <div className="text-[#d0d2d6] ">
            <div className=" flex justify-between items-start border-b border-slate-700">
              <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                #34343
              </div>
              <div className="py-3 w-[13%] font-medium">$654</div>
              <div className="py-3 w-[18%] font-medium">Pending</div>
              <div className="py-3 w-[18%] font-medium">Pending</div>
              <div className="py-3 w-[18%] font-medium hover:underline">
                <Link>View</Link>
              </div>
              <div
                onClick={(e) => setShow(!show)}
                className="py-5 w-[8%] font-medium"
              >
                <FaChevronCircleDown />
              </div>
            </div>

            <div
             className={
              show ? "block-b border-2 bg-[#286a43] rounded-lg shadow-sm shadow-slate-400" : "hidden"
            }
            >
              <div className=" flex justify-start items-start border-b border-slate-700 pl-3">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #12344
                </div>
                <div className="py-3 w-[13%] font-medium">$54</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
              </div>
              <div className=" flex justify-start items-start border-b border-slate-700 pl-3">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #12344
                </div>
                <div className="py-3 w-[13%] font-medium">$54</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
              </div>
            </div>
          </div>
          <div className="text-[#d0d2d6] ">
            <div className=" flex justify-between items-start border-b border-slate-700">
              <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                #34343
              </div>
              <div className="py-3 w-[13%] font-medium">$654</div>
              <div className="py-3 w-[18%] font-medium">Pending</div>
              <div className="py-3 w-[18%] font-medium">Pending</div>
              <div className="py-3 w-[18%] font-medium hover:underline">
                <Link>View</Link>
              </div>
              <div
                onClick={(e) => setShow(!show)}
                className="py-5 w-[8%] font-medium"
              >
                <FaChevronCircleDown />
              </div>
            </div>

            <div
              className={
                show ? "block-b border-2 bg-[#286a43] rounded-lg shadow-sm shadow-slate-400" : "hidden"
              }
            >
              <div className=" flex justify-start items-start border-b border-slate-700 pl-3">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #12344
                </div>
                <div className="py-3 w-[13%] font-medium">$54</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
              </div>
              <div className=" flex justify-start items-start border-b border-slate-700 pl-3">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #12344
                </div>
                <div className="py-3 w-[13%] font-medium">$54</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
              </div>
            </div>
          </div>
          <div className="text-[#d0d2d6] ">
            <div className=" flex justify-between items-start border-b border-slate-700">
              <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                #34343
              </div>
              <div className="py-3 w-[13%] font-medium">$654</div>
              <div className="py-3 w-[18%] font-medium">Pending</div>
              <div className="py-3 w-[18%] font-medium">Pending</div>
              <div className="py-3 w-[18%] font-medium hover:underline">
                <Link>View</Link>
              </div>
              <div
                onClick={(e) => setShow(!show)}
                className="py-5 w-[8%] font-medium"
              >
                <FaChevronCircleDown />
              </div>
            </div>

            <div
              className={
                show ? "block-b border-2 bg-[#286a43] rounded-lg shadow-sm shadow-slate-400" : "hidden"
              }
            >
              <div className=" flex justify-start items-start border-b border-slate-700 pl-3">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #12344
                </div>
                <div className="py-3 w-[13%] font-medium">$54</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
              </div>
              <div className=" flex justify-start items-start border-b border-slate-700 pl-3">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #12344
                </div>
                <div className="py-3 w-[13%] font-medium">$54</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
              </div>
            </div>
          </div>
          <div className="text-[#d0d2d6] ">
            <div className=" flex justify-between items-start border-b border-slate-700">
              <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                #34343
              </div>
              <div className="py-3 w-[13%] font-medium">$654</div>
              <div className="py-3 w-[18%] font-medium">Pending</div>
              <div className="py-3 w-[18%] font-medium">Pending</div>
              <div className="py-3 w-[18%] font-medium hover:underline">
                <Link>View</Link>
              </div>
              <div
                onClick={(e) => setShow(!show)}
                className="py-5 w-[8%] font-medium "
              >
                <FaChevronCircleDown />
              </div>
            </div>

            <div
              className={
                show ? "block-b border-2 bg-[#286a43] rounded-lg shadow-sm shadow-slate-400" : "hidden"
              }
            >
              <div className=" flex justify-start items-start border-b border-slate-700 pl-3">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #12344
                </div>
                <div className="py-3 w-[13%] font-medium">$54</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
              </div>
              <div className=" flex justify-start items-start border-b border-slate-700 pl-3">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #12344
                </div>
                <div className="py-3 w-[13%] font-medium">$54</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full flex justify-end mt-4 bottom-4 right-4">

        <Pagination
          pageNumber={currentPage}
          setPageNumber={setCurrentPage}
          totalItem={50}
          perPage={perPage}
          showItem={3}
        />
        </div>
      </div>
    </div>
  );
};

export default Orders;
