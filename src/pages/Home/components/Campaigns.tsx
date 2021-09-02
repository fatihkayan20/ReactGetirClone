import { useEffect, useState } from "react";
import { CAMPAIGNS } from "../../../util/constants";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineRight } from "react-icons/ai";

interface CampaignsProps {
  slideDelay: number;
}

const Campaigns = ({ slideDelay }: CampaignsProps) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    let slide = setInterval(() => {
      let next = (active + 1) % CAMPAIGNS.length;
      setActive(next);
    }, slideDelay);
    return () => {
      clearInterval(slide);
    };
  }, [active, slideDelay]);

  return (
    <div className="px-5 pb-5">
      <div className="text-xs font-semibold text-gray-700 pt-5 mb-2 hidden sm:block">
        Kampanyalar
      </div>
      <div className="sm:hidden flex items-center justify-between px-2 bg-white py-3 mt-[50px] cursor-pointer">
        <div className="flex items-center gap-x-1 font-semibold text-sm">
          <HiLocationMarker color={"rgb(93, 56, 192)"} size={18} />
          Teslimat Adresi Belirle
        </div>

        <AiOutlineRight color={"rgb(93, 56, 192)"} size={18} />
      </div>
      <div className="flex overflow-hidden">
        {CAMPAIGNS.map((image, index) => {
          const transformX = `translateX(calc(${active * -100}% - ${
            active * 1.25
          }rem))`;
          return (
            <img
              key={index}
              src={image}
              alt=""
              className=" object-cover   rounded-lg mr-5 transition-all duration-1000 sm:w-[400px] sm:h-[200px]"
              style={{ transform: transformX }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Campaigns;
