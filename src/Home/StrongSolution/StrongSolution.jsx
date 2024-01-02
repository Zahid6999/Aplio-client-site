import React from "react";
import strongSolutionBg from "../../assets/Images/strong-solution-bg.png";
import checkMark from "../../assets/Icon/Check.svg";

// ______________Data List Array of Object __________________
const dataList = [
  {
    id: 1,
    title: "On Demand Support",
    img: checkMark,
  },
  {
    id: 2,
    title: "Information Sharing",
    img: checkMark,
  },
  {
    id: 3,
    title: "Cloud Technology",
    img: checkMark,
  },
];

const StrongSolution = () => {
  return (
    <div className="lg:flex lg:flex-row-reverse gap-11 2xl:gap-24 items-center px-5 md:px-10  xl:px-[100px] 2xl:px-[316px]">
      <section className="mb-5 md:mb-10 lg:mb-0 xl:mb-0">
        <h1 className="text-base font-medium font-inter uppercase leading-[22px] mb-3">
          Strong Solutions
        </h1>
        <h2 className="text-4xl font-bold leading-[48px] lg:w-[596px] mb-8">
          Ensure strong solutions are available at all times
        </h2>
        <p className="text-sm font-normal leading-7 tracking-[-0.3px] ">
          Until recently, the prevailing view assumed lorem ipsum was born as a
          nonsense text. It's not Latin though it looks like nothing.
        </p>

        {dataList?.map((data) => (
          <div key={data.id} className="inline-flex gap-6 mt-6">
            <p className="flex">
              <img
                src={data.img}
                className="bg-white p-[5px] rounded-[20px]"
                alt="Check Mark"
              />{" "}
              {data.title}
            </p>
          </div>
        ))}
        <button className="py-2 px-6 mt-6 text-base font-medium leading-6 tracking-[-0.3px] border-[1px] border-[#EDF0E6] rounded-[30px] hover:bg-[#18181B] hover:text-white delay-75 transition-colors duration-75 hover:scale-95 ease-in block">
          See More
        </button>
      </section>
      <img src={strongSolutionBg} alt="Strong Solution BG" />
    </div>
  );
};

export default StrongSolution;

//  className="text-sm font-medium leading-7 tracking-[-0.3px] "

//
