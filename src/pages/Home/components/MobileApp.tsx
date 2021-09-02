import { MOBILE_APP_BANNER } from "../../../util/constants";

interface MobileAppProps {}

const MobileApp = (props: MobileAppProps) => {
  return (
    <div
      className="relative overflow-hidden mx-5 sm:rounded-lg bg-purple-700 flex p-5 sm:py-16 sm:px-10"
      style={{ backgroundImage: `url(${MOBILE_APP_BANNER.bg})` }}
    >
      <div className="max-w-md w-full sm:w-3/5">
        <div className="text-white font-bold text-2xl mb-3">
          Getir'i indirin!
        </div>
        <div className="text-white font-semibold text-sm">
          İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.
        </div>

        <div className="flex flex-col sm:flex-row mt-5 gap-x-3 gap-y-3">
          <img
            src={MOBILE_APP_BANNER.apple}
            alt=""
            className="w-2/5 cursor-pointer"
          />
          <img
            src={MOBILE_APP_BANNER.google}
            alt=""
            className="w-2/5 cursor-pointer"
          />
          <img
            src={MOBILE_APP_BANNER.huawei}
            alt=""
            className="w-2/5 cursor-pointer"
          />
        </div>
      </div>

      <img
        src={MOBILE_APP_BANNER.img}
        alt=""
        className="absolute left-[calc(100%/4*3)] bottom-0 top-0 h-full hidden sm:block"
        style={{ flexGrow: 0 }}
      />
    </div>
  );
};

export default MobileApp;
