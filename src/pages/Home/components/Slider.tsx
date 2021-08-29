import { useState } from "react";

const IMAGES = [
  "https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg",
  "https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg",
];

const Slider = () => {
  const [active, setActive] = useState(0);
  setInterval(() => {
    let next = (active + 1) % IMAGES.length;
    setActive(next);
  }, 1000);
  return (
    <div className="relative h-[500px] w-full flex items-center  overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500 before:to-transparent before:z-10 ">
      <img
        src={IMAGES[active]}
        alt=""
        className="object-cover w-full h-full min-w-full"
      />

      {/* {IMAGES.map((image, index) => (
        <img
          key={index}
          src={image}
          alt=""
          className="object-cover w-full h-full min-w-full"
        />
      ))} */}
    </div>
  );
};

export default Slider;
