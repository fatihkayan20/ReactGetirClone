import { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { COUNTRIES, IMAGES } from "../../../util/constants";

interface SliderProps {
  slideDelay: number;
}

const Slider = ({ slideDelay }: SliderProps) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    let slide = setInterval(() => {
      let next = (active + 1) % IMAGES.length;
      setActive(next);
    }, slideDelay);
    return () => {
      clearInterval(slide);
    };
  }, [active, slideDelay]);

  return (
    <div className="relative h-[500px] w-full flex items-center  overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500 before:to-transparent before:z-10  ">
      {IMAGES.map((image, index) => {
        const transformX = `translateX(${active * -100}%)`;
        return (
          <img
            key={index}
            src={image}
            alt=""
            className="object-cover w-full h-full min-w-full transition-all duration-1000"
            style={{ transform: transformX }}
          />
        );
      })}

      <div className="container absolute z-20 top-0 h-full left-1/2 -translate-x-1/2  flex justify-between items-center">
        <div className="w-64">
          <img
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt=""
          />
          <div className="text-gray-200 text-3xl font-semibold mt-4">
            Dakikalar içinde kapınızda
          </div>
        </div>

        <div className="bg-white p-3 rounded-lg">
          <div className="text-center text-purple-600 font-semibold">
            Giriş yap veya kayıt ol
          </div>

          <div className="flex items-center my-3">
            <select name="" id="" className="border-2 py-1 px-2">
              {COUNTRIES.map((country) => (
                <option className="">
                  {country.name}&emsp;{country.code}
                </option>
              ))}
            </select>

            <input
              type="text"
              className="ml-2 border-2 px-3 py-1"
              placeholder="Telefon Numarası"
            />
          </div>

          <input
            type="button"
            value="Telefon numarası ile devam et"
            className="bg-yellow-400 w-full rounded-lg py-2 text-sm text-purple-600 cursor-pointer hover:text-yellow-400 hover:bg-purple-600"
          />

          <div className="w-full h-[.5px] bg-gray-400 my-3"></div>
          <div className="flex items-center justify-between w-full bg-purple-100 cursor-pointer py-2 px-3">
            <FaFacebook color="rgb(93, 62, 188)" size={20} />
            <span className="text-purple-500 text-sm">
              {" "}
              Facebook ile devam et
            </span>
            <FaFacebook
              color="rgb(93, 62, 188)"
              className="opacity-0"
              size={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
