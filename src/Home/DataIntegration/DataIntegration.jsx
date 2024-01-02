import React from "react";
import dataIntegrationBG from "../../assets/Bg_vector/data-integration.png";
import checkMark from "../../assets/Icon/Check.svg";
import sideImg from "../../assets/Images/data-integration.png";

// ______________Data List Array of Object __________________
const dataList = [
  {
    id: 1,
    title: "Guided Payment Procurement",
    img: checkMark,
  },
  {
    id: 2,
    title: "Guided Payment Procurement",
    img: checkMark,
  },
  {
    id: 3,
    title: "Guided Payment Procurement",
    img: checkMark,
  },
];

const DataIntegration = () => {
  return (
    <div
      style={{
        background: `url(${dataIntegrationBG})`,
      }}
      className="lg:flex lg:gap-[100px] pt-[277px] pb-[185px] relative -mt-20 w-full  -z-10 px-5 md:px-10 lg:px-[317px] mb-[150px]"
    >
      <section>
        <h1 className="text-base font-medium font-inter uppercase leading-[22px] mb-3">
          data Integration
        </h1>
        <h2 className="text-4xl font-bold leading-[48px] lg:w-[596px] mb-8">
          A strong vision is crucial for the analysis of wealth
        </h2>
        <p className="text-sm font-normal leading-7 tracking-[-0.3px] ">
          Until recently, the prevailing view assumed lorem ipsum was born as a
          nonsense text nothing Before & After magazine.
        </p>

        {dataList?.map((data) => (
          <div key={data.id} className="flex gap-3 pt-5">
            <img
              src={data.img}
              alt="Check Mark"
              className="bg-white p-[5px] rounded-[20px]"
            />
            <p className="text-base font-medium leading-7 tracking-[-0.3px] ">
              {data.title}
            </p>
          </div>
        ))}
        <button className=" bg-[#18181B] py-[13px] px-[30px] text-base font-medium leading-6 tracking-[-0.3px]  rounded-[30px] text-white mt-[53px] hover:bg-[#2e2e34]">
          Start Your Journey
        </button>
      </section>

      <section>
        <img src={sideImg} alt="Data Integration Images" />
      </section>
    </div>
  );
};

export default DataIntegration;
