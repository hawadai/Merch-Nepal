import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { FaEdit, FaTrash } from "react-icons/fa";
import { IoMdCloseCircle, IoMdImages } from "react-icons/io";
import { BeatLoader } from "react-spinners";
import { overrideStyle } from "../../utils/utils";
import { categoryAdd } from "../../store/Reducers/categoryReducer";
import { useDispatch, useSelector } from "react-redux";

const Category = () => {
  const dispatch = useDispatch();
  const { loader } = useSelector((state) => state.category);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [show, setShow] = useState(false);
  const [perPage, setPerPage] = useState(5);
  const [imageShow, setImage] = useState("");
  const [state, setState] = useState({
    name: "",
    image: "",
  });
  const imageHandle = (e) => {
    let files = e.target.files;
    if (files.length > 0) {
      setImage(URL.createObjectURL(files[0]));
      setState({
        ...state,
        image: files[0],
      });
    }
  };
  const add_category = (e) => {
    e.preventDefault();
    dispatch(categoryAdd(state));
  };

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="flex lg:hidden justify-between items-center mb-5 p-4 bg-[#ffbb00] rounded-md">
        <h1 className="font-semibold text-lg"> Category</h1>
        <button
          onClick={() => setShow(true)}
          className="bg-[#c8ff2d] shadow-lg hover:shadow-slate-600 px-4 py-2 cursor-pointer rounded-md text-sm font-bold"
        >
          Add
        </button>
      </div>

      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-7/12">
          <div className="w-full p-4 bg-[#1d1a41] rounded-md">
            <div className="flex justify-between items-center">
              <select
                onChange={(e) => setPerPage(parseInt(e.target.value))}
                className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#c8ff2d] border border-slate-700 rounded-md text-[#090a0b] font-semibold"
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
              <input
                className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#c8ff2d] border border-slate-700 rounded-md text-[#070809]"
                type="text"
                placeholder="search"
              />
            </div>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-[#d0d2d6]">
                <thead className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
                  <tr>
                    <th scope="col" className="py-3 px-4">
                      Num
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Image
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Name
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {[1, 2, 3, 4, 5].map((d, i) => (
                    <tr key={i}>
                      <td
                        scope="row"
                        className="py-1 px-4 font-medium whitespace-nowrap"
                      >
                        {d}
                      </td>
                      <td
                        scope="row"
                        className="py-1 px-4 font-medium whitespace-nowrap"
                      >
                        <img
                          className="w-[45px] h-[45]"
                          src={`http://localhost:3000/images/categories/${d}.jpg`}
                          alt="error"
                        />
                      </td>
                      <td
                        scope="row"
                        className="py-1 px-4 font-medium whitespace-nowrap"
                      >
                        Tshirt
                      </td>

                      <td
                        scope="row"
                        className="py-3 px-4 font-medium whitespace-nowrap hover:underline"
                      >
                        <div className="flex justify-start items-center gap-4">
                          <Link className="p-[6px] bg-yellow-500 rounded-lg hover:shadow-lg hover:shadow-yellow-400 text-[#000000]">
                            <FaEdit />{" "}
                          </Link>
                          <Link className="p-[6px] bg-red-500 rounded-lg hover:shadow-lg hover:shadow-red-400 text-[#ffffff]">
                            <FaTrash />{" "}
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="w-full flex justify-end mt-5 bottom-4 right-4">
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

        <div
          className={`w-[320px] lg:w-5/12 translate-x-100 lg:relative lg:right-0 fixed ${
            show ? "right-0" : "-right-[340px]"
          } z-[9999] top-0 transition-all duration-500 `}
        >
          <div className="w-full pl-5 ">
            <div className="bg-[#1d1a41] h-screen lg:h-auto px-3 py-2 lg:rounded-lg text-[#ffff]">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-[#ffbb00] font-semibold text-xl mb-4 w-full text-center">
                  Add Category
                </h1>
                <div
                  onClick={() => setShow(false)}
                  className="block lg:hidden text-white text-[20px]"
                >
                  <IoMdCloseCircle />
                </div>
              </div>
              <form onSubmit={add_category}>
                <div className="flex flex-col w-full gap-1 mb-3 ">
                  <label htmlFor="name">Category Name</label>
                  <input
                    value={state.name}
                    onChange={(e) =>
                      setState({ ...state, name: e.target.value })
                    }
                    className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#1b1f12] border border-slate-700 rounded-md text-[#ffffff] "
                    type="text"
                    id="name"
                    name="category_name"
                    placeholder="Category Name"
                  />
                </div>
                <div>
                  <label
                    className="flex justify-center items-center flex-col h-[238px] cursor-pointer border-2 border-dashed hover:border-yellow-500 w-full border-[#d0d2d6]"
                    htmlFor="image"
                  >
                    {" "}
                    {imageShow ? (
                      <img className="w-full h-full" src={imageShow} />
                    ) : (
                      <>
                        <span>
                          <IoMdImages />{" "}
                        </span>
                        <span>Select Image</span>
                      </>
                    )}
                  </label>
                  <input
                    onChange={imageHandle}
                    className="hidden"
                    type="file"
                    name="image"
                    id="image"
                  />
                  <div>
                    <button
                      disabled={loader ? true : false}
                      className="bg-[#c8d90d] w-full hover:shadow-slate-200 hover:shadow-md rounded-lg px-7 py-2 mt-1.5  text-black font-semibold"
                    >
                      {" "}
                      {loader ? (
                        <BeatLoader color="#fff" cssOverride={overrideStyle} />
                      ) : (
                        "Add Category"
                      )}{" "}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
