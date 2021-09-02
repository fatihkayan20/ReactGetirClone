import { useEffect, useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineRight } from "react-icons/ai";
import { Campaign } from "../../../interfaces/Campaign";
import { getCampaigns } from "../../../api";

interface CampaignsProps {
  slideDelay: number;
}

const Campaigns = ({ slideDelay }: CampaignsProps) => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let fetchCampaigns = async () => {
      let campaignArray = await getCampaigns();
      setCampaigns(campaignArray);
    };
    fetchCampaigns();
  }, []);

  useEffect(() => {
    let slide = setInterval(() => {
      let next = (active + 1) % campaigns.length;
      setActive(next);
    }, slideDelay);
    return () => {
      clearInterval(slide);
    };
  }, [active, campaigns.length, slideDelay]);

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
        {campaigns.map(({ url }, index) => {
          const transformX = `translateX(calc(${active * -100}% - ${
            active * 1.25
          }rem))`;
          return (
            <img
              key={index}
              src={url}
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
