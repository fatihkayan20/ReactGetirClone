import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MOBILE_APP_BANNER } from "../../../util/constants";

interface FooterProps {}

const Footer = (props: FooterProps) => {
  const [active, setActive] = useState<number | null>(0);

  const handleActive = (index: number) => {
    setActive(index === active ? null : index);
  };

  const getItemClassNames = (index: number) => {
    return index === active ? " max-h-full scale-100" : "max-h-0 scale-0 ";
  };

  const getIconStyle = (index: number) => {
    return index === active ? "rotate-180" : "rotate-0";
  };

  const handleRoute = (name: string) => {
    window.location.href =
      name === "instagram"
        ? "https://www.instagram.com/fatihkayann20/"
        : "https://github.com/fatihkayan20/";
  };
  return (
    <div className=" px-5 bg-white">
      <div className="text-purple-800 pt-5">Getir'i indirin!</div>
      <div className="sm:flex">
        <div className="flex flex-col mt-5 gap-x-3 gap-y-3 flex-1 max-w-1/4  mx-1 ">
          <img
            src={MOBILE_APP_BANNER.apple}
            alt=""
            className="w-2/5 sm:w-2/3 cursor-pointer"
          />
          <img
            src={MOBILE_APP_BANNER.google}
            alt=""
            className="w-2/5 sm:w-2/3 cursor-pointer"
          />
          <img
            src={MOBILE_APP_BANNER.huawei}
            alt=""
            className="w-2/5  sm:w-2/3 cursor-pointer"
          />
        </div>

        <div className="mt-5 my-4 flex-1 max-w-1/4  mx-1">
          <div
            onClick={() => handleActive(0)}
            className="flex justify-between items-center cursor-pointer text-purple-800"
          >
            Getir'i keşfedin
            <AiOutlineDown
              className={`transition-all duration-700 bg-purple-100 p-1 rounded-lg sm:hidden ${getIconStyle(
                0
              )}`}
              size={20}
            />
          </div>
          <div
            className={`relative overflow-hidden transition-all duration-700 text-sm my-1 opacity-60 flex flex-col gap-y-1  ${getItemClassNames(
              0
            )}  !max-h-full !scale-100 `}
          >
            <div>Hakkımızda</div>
            <div>Kariyer</div>
            <div>İletişim</div>
            <div>COVID-10 Duyuru</div>
            <div>Sosyal Sorumluluk Projeleri</div>
          </div>
        </div>

        <div className="my-4 flex-1 max-w-1/4  mx-1">
          <div
            onClick={() => handleActive(1)}
            className="flex justify-between items-center cursor-pointer  text-purple-800"
          >
            Yardıma mı ihtiyacınız var?{" "}
            <AiOutlineDown
              className={`transition-all duration-700 bg-purple-100 p-1 rounded-lg sm:hidden ${getIconStyle(
                1
              )}`}
              size={20}
            />
          </div>
          <div
            className={`relative overflow-hidden transition-all duration-700 text-sm my-1 opacity-60 flex flex-col gap-y-1  ${getItemClassNames(
              1
            )} !max-h-full !scale-100`}
          >
            <div>Sıkça Sorulan Sorular</div>
            <div>Kişilsel Verilerin Korunması</div>
            <div>Gizlilik Politikası</div>
            <div>Kullanım Koşulları</div>
            <div>Çerez Politikası</div>
          </div>
        </div>

        <div className="my-4 flex-1 max-w-1/4  mx-1">
          <div
            onClick={() => handleActive(2)}
            className="flex justify-between items-center cursor-pointer  text-purple-800"
          >
            İş Ortağımız Olun
            <AiOutlineDown
              className={`transition-all duration-700 bg-purple-100 p-1 rounded-lg sm:hidden ${getIconStyle(
                2
              )}`}
              size={20}
            />
          </div>
          <div
            className={`relative overflow-hidden transition-all duration-700 text-sm my-1 opacity-60 flex flex-col gap-y-1  ${getItemClassNames(
              2
            )} !max-h-full !scale-100`}
          >
            <div>Bayimiz Olun</div>
            <div>Depomuzu Kiralayın</div>
            <div>GetirYemek Restoranı Olun</div>
            <div>GetirÇarşı İşletmesi Olun</div>
          </div>
        </div>
      </div>
      <div className="my-4 bg-gray-100 py-5 px-5 -mx-5 flex justify-between items-center">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-y-3 gap-x-3 text-xs">
          <div>© 2021 Fatih</div>
          <div className="text-purple-800">Bilgi Toplumu Hizmetleri</div>
        </div>

        <div className="hidden sm:flex sm:flex-row justify-center items-center gap-y-3 gap-x-3 text-xs">
          <FaInstagram
            size={28}
            className="cursor-pointer opacity-50 p-1 rounded-lg hover:opacity-100 hover:text-purple-800 hover:bg-gray-200 "
            onClick={() => handleRoute("instagram")}
          />
          <FaLinkedin
            size={28}
            className="cursor-pointer opacity-50 p-1 rounded-lg hover:opacity-100 hover:text-purple-800 hover:bg-gray-200 "
            onClick={() => handleRoute("linkedin")}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
