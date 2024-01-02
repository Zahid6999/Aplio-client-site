import React from "react";
import productBg from "../../assets/Images/Integration.png";
import bgVectorLine from "../../assets/Bg_vector/Line.svg";

const ProductivityArea = () => {
  return (
    <div className="mt-[130px]">
      <section className="text-center mx-5 md:mx-20 lg:mx-0">
        <h1 className="text-base font-medium font-inter uppercase leading-[22px] mb-3">
          Top Integration
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold leading-[48px] lg:w-[596px] mx-auto mb-8">
          Make productivity easier with 50+ Integrations
        </h2>
        <p className="text-sm font-normal leading-7 tracking-[-0.3px]  text-center md:w-[520px] lg:w-[596px] mx-auto">
          Until recently, the prevailing view assumed lorem ipsum was born as a
          nonsense text. It's not Latin though it looks like nothing.
        </p>
        <button className=" flex mx-auto justify-center py-[13px] px-[30px] text-base font-medium leading-6 tracking-[-0.3px] border-[1px] border-[#EDF0E6] rounded-[30px] mt-10">
          Start Your Journey
        </button>
      </section>

      <section
        style={{
          backgroundImage: `url(${bgVectorLine})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="-mt-10 md:-mt-20  "
      >
        <img src={productBg} alt="" className="mx-auto hidden md:block" />
      </section>
    </div>
  );
};

export default ProductivityArea;
