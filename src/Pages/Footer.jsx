import React from "react";
import facebook from "../assets/CompanyLogo/facebook.svg";
import github from "../assets/CompanyLogo/github.svg";
import linkedin from "../assets/CompanyLogo/linkedin.svg";
import behance from "../assets/CompanyLogo/behance.svg";
import HorizontalLine from "../components/SvgComponent/HorizontalLine";
const Footer = () => {
  return (
    <footer className="px-7 md:px-12 xl:px-[140px] 2xl:px-[316px] py-[72px]">
      <div className=" md:flex ">
        <section className="md:w-1/2">
          <h1 className="text-3xl font-semibold leading-[78px]">aplio</h1>
          <p className="text-sm font-normal font-inter leading-7 tracking-[-0.3px] lg:w-[348px]">
            Turpis tortor nunc sed amet et faucibus vitae morbi congue sed id
            mauris.
          </p>
        </section>
        <section className="md:w-1/2 grid gap-10 lg:gap-[150px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {/* explore */}
          <div>
            <h6 className="text-xl  font-medium font-inter leading-[30px] tracking-[-0.3px]">
              Explore
            </h6>
            <ul>
              <li className="text-base  font-normal font-inter leading-[44px] tracking-[-0.3px] p-0">
                <a href="#">Instructions</a>
              </li>
              <li className="text-base  font-normal font-inter leading-[44px] tracking-[-0.3px]">
                <a href="#">Style guide</a>
              </li>
              <li className="text-base  font-normal font-inter leading-[44px] tracking-[-0.3px]">
                <a href="#">Licenses</a>
              </li>
              <li className="text-base  font-normal font-inter leading-[44px] tracking-[-0.3px]">
                <a href="#">Solutions</a>
              </li>
              <li className="text-base  font-normal font-inter leading-[44px] tracking-[-0.3px]">
                <a href="#">Pricing</a>
              </li>
            </ul>
          </div>
          {/* Resources */}
          <div>
            <h6 className="text-xl  font-medium font-inter leading-[30px] tracking-[-0.3px]">
              Resources
            </h6>
            <ul>
              <li className="text-base  font-normal font-inter leading-[44px] tracking-[-0.3px] p-0">
                <a href="#">About us</a>
              </li>
              <li className="text-base  font-normal font-inter leading-[44px] tracking-[-0.3px]">
                <a href="#">Help Center</a>
              </li>
              <li className="text-base  font-normal font-inter leading-[44px] tracking-[-0.3px]">
                <a href="#">Feature</a>
              </li>
              <li className="text-base  font-normal font-inter leading-[44px] tracking-[-0.3px]">
                <a href="#">Support</a>
              </li>
              <li className="text-base  font-normal font-inter leading-[44px] tracking-[-0.3px]">
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          {/* Get Touch */}
          <div>
            <h6 className="text-xl  font-medium font-inter leading-[30px] tracking-[-0.3px]">
              Get Touch
            </h6>
            <ul>
              <li className="text-base  font-normal font-inter leading-[44px] tracking-[-0.3px] p-0">
                <a href="#">Need Support</a>
              </li>
              <li className="text-base  font-normal font-inter leading-[44px] tracking-[-0.3px]">
                <a href="#">hello@example.com</a>
              </li>
              <li className="text-base  font-normal font-inter leading-[44px] tracking-[-0.3px]">
                <a href="#">+391(0)3525684593</a>
              </li>

              <li className="flex gap-4 mt-[30px]">
                <img
                  src={facebook}
                  className="hover:bg-black rounded-2xl cursor-pointer"
                  alt="faceBook"
                />
                <img
                  src={github}
                  className="hover:bg-[#B1E346] rounded-2xl cursor-pointer"
                  alt="github"
                />
                <img
                  src={linkedin}
                  className="hover:bg-[#B1E346] rounded-2xl cursor-pointer"
                  alt="linkedin"
                />
                <img
                  src={behance}
                  className="hover:bg-[#B1E346] rounded-2xl cursor-pointer"
                  alt="behance"
                />
              </li>
            </ul>
          </div>
        </section>
      </div>
      <section className="hidden  lg:block lg:flex lg:justify-center mt-20 mb-10">
        <HorizontalLine />
      </section>
      <div className="lg:flex lg:justify-between">
        <p className="text-base font-light leading-7 tracking-[-0.3px]">
          @ 2023 Aplio. All Rights Reserved
        </p>
        <p className="text-base font-light leading-7 tracking-[-0.3px]">
          Privacy Policy <span> Terms & Conditions</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
