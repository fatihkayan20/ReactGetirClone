import { useState } from "react";
import { BiWorld } from "react-icons/bi";
import { FaUserAlt, FaUserPlus } from "react-icons/fa";
import { NAVS } from "../../../util/constants";

const Header = () => {
  const [selected, setSelected] = useState(0);

  const getSelectedItem = () => {
    return (
      <div className="bg-purple-800 flex justify-center items-center  py-5 sm:hidden">
        <img src={NAVS[selected]} alt="" className="h-[22px]" />
      </div>
    );
  };

  const getClassName = (index: number) => {
    return selected === index ? "bg-purple-800" : "";
  };

  const handleSelect = (value: number) => {
    setSelected(value);
  };

  return (
    <div className="bg-purple-900 h-11 sm:fixed top-0 left-0 w-full z-50">
      <div className="mx-auto container h-full flex items-center justify-between overflow-hidden">
        <div className="flex items-center gap-x-2">
          <div
            className={`flex items-center gap-x-2 text-white text-sm cursor-pointer h-full p-2 pb-5 -mb-3 rounded-md hover:bg-purple-800 ${getClassName(
              0
            )} `}
            onClick={() => handleSelect(0)}
          >
            getir
          </div>
          <div
            className={`flex items-center gap-x-2 text-white text-sm cursor-pointer h-full p-2 pb-5 -mb-3 rounded-md hover:bg-purple-800 ${getClassName(
              1
            )}`}
            onClick={() => handleSelect(1)}
          >
            getiryemek
          </div>
          <div
            className={`flex items-center gap-x-2 text-white text-sm cursor-pointer h-full p-2 pb-5 -mb-3 rounded-md hover:bg-purple-800 ${getClassName(
              2
            )}`}
            onClick={() => handleSelect(2)}
          >
            getirbüyük
          </div>
          <div
            className={`flex items-center gap-x-2 text-white text-sm cursor-pointer h-full p-2 pb-5 -mb-3 rounded-md hover:bg-purple-800 ${getClassName(
              3
            )}`}
            onClick={() => handleSelect(3)}
          >
            getirsu
          </div>
        </div>
        <div className="sm:flex items-center gap-x-3 hidden ">
          <div className="flex items-center gap-x-2 text-white text-sm cursor-pointer h-full p-2 pb-5 -mb-3 rounded-md hover:bg-purple-800 ">
            <BiWorld />
            Türkçe(TR)
          </div>
          <div className="flex items-center gap-x-2 text-white text-sm cursor-pointer h-full p-2 pb-5 -mb-3 rounded-md hover:bg-purple-800 ">
            <FaUserAlt />
            Giriş Yap
          </div>
          <div className="flex items-center gap-x-2 text-white text-sm cursor-pointer h-full p-2 pb-5 -mb-3 rounded-md hover:bg-purple-800 ">
            <FaUserPlus />
            Kayıt Ol
          </div>
        </div>
      </div>
      {getSelectedItem()}
    </div>
  );
};

export default Header;
