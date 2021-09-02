import { useEffect, useState } from "react";
import { getCategories } from "../../../api";
import { Category } from "../../../interfaces/Category";

interface CategoriesProps {}

const Categories = (props: CategoriesProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    let fetchCategories = async () => {
      let data = await getCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);
  return (
    <div className="py-5 px-5 bg-gray-100 sm:bg-white">
      <div className="text-xs mb-2 font-semibold">Kategoriler</div>
      <div className="flex flex-wrap items-center justify-center ">
        {categories.map((category, index) => {
          return (
            <div
              className="group flex flex-col rounded-md  py-3  cursor-pointer justify-center items-center hover:bg-purple-100"
              key={index}
            >
              <img
                src={category.image}
                alt=""
                className="w-12 h-12 rounded-md border mx-7 mb-2 "
              />
              <div className="text-sm font-semibold group-hover:text-purple-800">
                {" "}
                {category.name}{" "}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
