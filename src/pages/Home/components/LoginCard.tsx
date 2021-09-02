import { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { getCountries } from "../../../api";
import { Country } from "../../../interfaces/Country";

interface LoginCardProps {}

const LoginCard = (props: LoginCardProps) => {
  const [countries, setCountries] = useState<Country[]>([]);
  useEffect(() => {
    let fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-5 pb-8 pt-5">
      <div className="text-center text-purple-800 font-semibold">
        Giriş yap veya kayıt ol
      </div>

      <div className="flex items-center my-3">
        <select name="" id="" className="border-2 py-2 px-2">
          {countries.map((country) => (
            <option className="">
              {country.name}&emsp;{country.code}
            </option>
          ))}
        </select>

        <input
          type="text"
          className="flex-1 ml-2 border-2 px-3 py-2"
          placeholder="Telefon Numarası"
        />
      </div>

      <input
        type="button"
        value="Telefon numarası ile devam et"
        className="bg-yellow-400 w-full rounded-lg py-[0.65rem]  text-sm text-purple-600 cursor-pointer hover:text-yellow-400 hover:bg-purple-600"
      />

      <div className="w-full h-[1px] my-3 bg-gray-200" />

      <div className="flex items-center justify-between w-full bg-purple-100 cursor-pointer py-2 px-3 rounded-md ">
        <FaFacebook color="rgb(93, 62, 188)" size={20} />
        <span className="text-purple-500 text-sm"> Facebook ile devam et</span>
        <FaFacebook color="rgb(93, 62, 188)" className="opacity-0" size={20} />
      </div>
    </div>
  );
};

export default LoginCard;
