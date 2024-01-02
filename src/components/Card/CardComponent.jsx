import React from "react";

const CardComponent = ({ card }) => {
  return (
    <div className=" flex-shrink-0 bg-white p-[10px] shadow-xl  rounded-[20px] ">
      <div className="border-[1px] border-dashed border-[#DCE0D3] rounded-xl p-10">
        <p>{card.img}</p>
        <h3 className="mt-6 mb-[10px] text-2xl font-semibold leading-8">
          {card.title}
        </h3>
        <p className="text-base font-light font-inter leading-7 tracking-[-0.3px]">
          {card.text}
        </p>
        <button className="py-2 px-6 mt-6 text-base font-medium leading-6 tracking-[-0.3px] border-[1px] border-[#EDF0E6] rounded-[30px] hover:bg-[#18181B] hover:text-white delay-75 transition-colors duration-75 hover:scale-95 ease-in ">
          {" "}
          See More
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
