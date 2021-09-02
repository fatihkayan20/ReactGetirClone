import { useEffect, useState } from "react";
import { getCards } from "../../../api";
import { Card } from "../../../interfaces/Card";

interface CardsProps {}

const Cards = (props: CardsProps) => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    let fetchCards = async () => {
      let cardArray = await getCards();
      setCards(cardArray);
    };
    fetchCards();
  }, []);
  return (
    <div className="flex flex-wrap mt-11 bg-gray-100">
      {cards.map(({ img, subTitle, title }, index) => (
        <div className="flex flex-col justify-center items-center w-full sm:flex-1 px-8 py-10 m-2 bg-white shadow ">
          <img src={img} alt="" className="w-[150px] h-[150px] " />
          <div className="text-purple-800 font-semibold">{title}</div>
          <div className="text-gray-500 opacity-70 text-sm">{subTitle}</div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
