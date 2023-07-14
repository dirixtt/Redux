import React from "react";
import Logo from '../assets/robotImage.jfif'
export default function Footer() {
  return (
    <div className="items-center bg-[#F8EDE3] flex justify-between mt-[20px] p-[12px]">
      <div>
        <div className="flex  items-center">
          <div className=" logo sm:hidden xl:w-[50px] xl:h-[40px] md:w-[40px] md:block 2xl:h-[75px] 2xl:w-[75px] rounded-full"><img src={Logo} alt="" /></div>
          <div className="text-slate-500 ml-3 2xl:text-[35px] sm:text-[15px] md:text-[18px] xl:text-[20px] font-medium">AIBOT.uz</div>
        </div>
      </div>
      <div>
        <p className="items-center 2xl:text-[35px] sm:hidden xl:block flex text-slate-500 ml-3 md:block md:text-[23px] xl:text-[20px] font-semibold font-mono ">CodeVision Group</p>
      </div>
      <div className="items-center 2xl:text-[35px] flex text-slate-500 ml-3 md:text-[18px]  sm:text-[15px] xl:text-[20px] font-medium">+998(90)000-00-00</div>
    </div>
  );
}