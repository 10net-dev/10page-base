import Image from "next/image";
import configCopy from "../../../config";

export function Cta() {
  return (
    <div className="max-w-[100%] mx-auto bg-gradient-to-br from-primary via-blue-500 to-blue-200 py-[56px] px-[32px] justify-center text-center lg:my-[60px] lg:px-[324px] lg:py-[89px]">
      <h1 className="text-white text-[32px] font-medium lg:text-[56px] leading-[64px] ">
        {configCopy.cta.header}
      </h1>
      <p className="text-white pt-6 lg:pt-[48px] lg:text-[18px]">
        {configCopy.cta.subtitle}
      </p>

      <div className="mt-[40px] flex flex-col w-full items-center lg:mt-[56px] lg:flex-row lg:justify-center gap-x-[40px]">
        <button className="py-[16px] px-[32px] bg-white rounded-[4px] text-primary w-fit font-medium">
          {configCopy.cta.button}
        </button>

      </div>
    </div>
  );
}
