import React from "react";
import FaqBg from "../../assets/Bg_vector/Faq-bg.png";
import TickMarkSvg from "../../components/SvgComponent/TickMarkSvg";

const FreeTrial = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${FaqBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        paddingTop: "150px",
        paddingBottom: "150px",
      }}
      className="px-4 md:px-10 lg:px-0 mt-[150px]"
    >
      <h1 className="text-4xl md:text-5xl text-center font-inter font-bold md:leading-[60px] md:tracking-[-2.3px]">
        Start Your Free <br /> Trial Today.
      </h1>
      <p className="text-base text-center text-[#5D6167] font-medium leading-7 tracking-[-0.3px] mt-6">
        By creating a custom Web design for your business,
        <br /> we can bring your vision to life.
      </p>
      <button className=" bg-[#18181B] py-[13px] px-[30px] text-base font-medium leading-6 tracking-[-0.3px]  rounded-[30px] text-white mt-[36px] hover:bg-[#2e2e34] block mx-auto">
        Get Started Today
      </button>

      <section className="md:flex md:gap-24 justify-center items-center mt-20 pl-8 md:pl-0 lg:pl-0">
        <div className="flex gap-3">
          <TickMarkSvg />
          <p className="text-base font-normal font-inter leading-6 tracking-[-0.3px]">
            No Credit Card Required
          </p>
        </div>
        <div className="flex gap-3">
          <TickMarkSvg />
          <p className="text-base font-normal font-inter leading-6 tracking-[-0.3px]">
            Free For 30 Day Trial.
          </p>
        </div>
        <div className="flex gap-3">
          <TickMarkSvg />
          <p className="text-base font-normal font-inter leading-6 tracking-[-0.3px]">
            Money Back Guarente.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FreeTrial;
