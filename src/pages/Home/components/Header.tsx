import { BiWorld } from "react-icons/bi";
import { FaUserAlt, FaUserPlus } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-purple-800 h-11 ">
      <div className="mx-auto container h-full flex items-center justify-between overflow-hidden">
        <div className="flex items-center gap-x-2">
          <div className="flex items-center gap-x-2 text-white text-sm cursor-pointer h-full p-2 pb-5 -mb-3 rounded-md hover:bg-purple-500">
            getir
          </div>
          <div className="flex items-center gap-x-2 text-white text-sm cursor-pointer h-full p-2 pb-5 -mb-3 rounded-md hover:bg-purple-500 ">
            getiryemek
          </div>
          <div className="flex items-center gap-x-2 text-white text-sm cursor-pointer h-full p-2 pb-5 -mb-3 rounded-md hover:bg-purple-500 ">
            getirbüyük
          </div>
          <div className="flex items-center gap-x-2 text-white text-sm cursor-pointer h-full p-2 pb-5 -mb-3 rounded-md hover:bg-purple-500 ">
            getirsu
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <div className="flex items-center gap-x-2 text-white text-sm cursor-pointer h-full p-2 pb-5 -mb-3 rounded-md hover:bg-purple-500 ">
            <BiWorld />
            Türkçe(TR)
          </div>
          <div className="flex items-center gap-x-2 text-white text-sm cursor-pointer h-full p-2 pb-5 -mb-3 rounded-md hover:bg-purple-500 ">
            <FaUserAlt />
            Giriş Yap
          </div>
          <div className="flex items-center gap-x-2 text-white text-sm cursor-pointer h-full p-2 pb-5 -mb-3 rounded-md hover:bg-purple-500 ">
            <FaUserPlus />
            Kayıt Ol
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
