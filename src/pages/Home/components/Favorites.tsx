import { useEffect, useState } from "react";
import { getFavorites } from "../../../api";
import { Favorite } from "../../../interfaces/Favorite";

interface FavoritesProps {}

const Favorites = (props: FavoritesProps) => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  useEffect(() => {
    let fetchFavorites = async () => {
      let data = await getFavorites();
      setFavorites(data);
    };
    fetchFavorites();
  }, []);
  return (
    <div className="px-5 pt-3">
      <div className="text-xs font-semibold mb-2 ">Favoriler</div>
      <div className="flex flex-wrap bg-white shadow items-center justify-center gap-x-14 gap-y-3  py-5">
        {favorites.map(({ price, name, unit, img }, index) => (
          <div className="w-28 h-36   cursor-pointer  flex-col flex justify-center items-center my-2 gap-y-1">
            <img
              key={index}
              src={img}
              alt=""
              className=" object-cover w-24 h-24  border border-gray-100 "
            />

            <div className="text-xs"> {price} </div>
            <div className="text-xs font-semibold flex-wrap"> {name} </div>
            <div className="text-xs text-gray-400"> {unit} </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
