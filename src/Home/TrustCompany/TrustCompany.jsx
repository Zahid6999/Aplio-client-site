import React from "react";
import trustImg1 from "../../assets/CompanyLogo/1.png";
import trustImg2 from "../../assets/CompanyLogo/2.png";
import trustImg3 from "../../assets/CompanyLogo/3.png";
import trustImg4 from "../../assets/CompanyLogo/4.png";
import trustImg5 from "../../assets/CompanyLogo/5.png";
import trustImg6 from "../../assets/CompanyLogo/6.png";

const imgList = [
  {
    id: 1,
    img: trustImg1,
  },
  {
    id: 2,
    img: trustImg2,
  },
  {
    id: 3,
    img: trustImg3,
  },
  {
    id: 4,
    img: trustImg4,
  },
  {
    id: 5,
    img: trustImg5,
  },
  {
    id: 6,
    img: trustImg6,
  },
];
const TrustCompany = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-[48px] mt-[150px] mb-8">
        The world's best companies <br /> trust aplio.
      </h1>
      <p className="text-base md:text-xl text-[#5D6167] text-center font-inter font-normal md:leading-[62px] mb-[60px]">
        Trusted by thousands of companies across 50+ countries
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 md:gap-16 lg:gap-[114px] mx-5 md:mx-10 lg:mx-[316px] border-t border-b  border-dashed border-[#DCE0D3] py-10">
        {imgList.map((trustCompany) => (
          <img className="" key={trustCompany.id} src={trustCompany.img}></img>
        ))}
      </div>
      <button className=" flex mx-auto justify-center py-[13px] px-[30px] text-base font-medium leading-6 tracking-[-0.3px] border-[1px] border-[#EDF0E6] rounded-[30px] mt-[62px]">
        Start Your Journey
      </button>
    </div>
  );
};

export default TrustCompany;
