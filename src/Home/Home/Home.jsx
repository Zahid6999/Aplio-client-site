import { Avatar, Button, Progress } from "keep-react";
import React from "react";
import avater1 from "../../assets/Images/avater-1.png";
import avater2 from "../../assets/Images/avater-2.png";
import avater3 from "../../assets/Images/avater-3.png";
import avater4 from "../../assets/Images/avater-4.png";
import vector from "../../assets/Icon/Vector (1).png";
import rating from "../../assets/Icon/Rate item.png";
import chart from "../../assets/Bg_vector/Group 1000002107.png";
import chartAreaBg from "../../assets/Bg_vector/1.png";
import bottomVector from "../../assets/Bg_vector/bottomVector .svg";
import Rating from "react-rating";
import { motion } from "framer-motion";

// Chart---------------------------

const Home = () => {
  return (
    <div className="-mt-64 px-7 pb-[148px] md:px-10 lg:px-32  2xl:px-[316px] bg-[#f8faf0]  lg:flex  lg:gap-[92px]">
      <motion.section
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.7, delay: 0.5, type: "spring" }}
      >
        <p className="text-base text-[#18181B] font-medium font-inter uppercase leading-5 ">
          50k+ Trusted Businesses
        </p>
        <h1 className="text-[44px] md:text-[64px] text-[#18181B] font-bold  leading-[78px] mt-10 mb-12">
          Make your{" "}
          <span className="border-2 border-[#18181B] rounded-[80px] italic font-[playfair] py-1 px-5">
            Financ
          </span>
          <br /> more efficient.
        </h1>
        <p className="text-sm text-[#18181B] font-inter font-normal leading-7 tracking-[-0.3px] lg:w-[586px]">
          Until recently, the prevailing view assumed lorem ipsum was born as a
          nonsense text. It's not Latin, though it looks like it
        </p>
        <div className=" w-[518px] flex  items-center relative mt-12">
          <input
            type="email"
            name="name"
            placeholder="Enter Your Email"
            className="w-[320px] md:w-[518px] lg:w-[518px] h-[60px] md:h-[60px] lg:h-[60px] pl-5 text-[#5D6167] font-inter text-base leading-7 tracking-[-0.3px] font-normal  ring-1 ring-[#EDF0E6] focus:ring-1 focus:ring-[#EDF0E6]  rounded-[40px] bg-[#FFFFFF]"
          />
          <Button className="inline-block absolute right-52  md:right-2  bg-[#18181B]  md:px-[30px] text-base text-white font-inter font-medium leading-6 tracking-[-0.3px] rounded-[30px] hover:bg-[#3f3f43]  cursor-pointer">
            Get Started
          </Button>
        </div>
      </motion.section>

      <motion.section
        className="mt-10  lg:-mt-12"
        style={{
          backgroundImage: `url(${chartAreaBg})`,
          backgroundRepeat: "no-repeat",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.8 }}
      >
        <div className="w-[350px]  flex-shrink-0 bg-[#fff] p-[10px] rounded-[20px] shadow-[ 0px 0px 30px 0px rgba(0, 0, 0, 0.05)] md:ml-16">
          <div className="border-[1px] border-[#DCE0D3] border-dashed rounded-xl p-6">
            <section className="flex justify-between">
              <Avatar.Group>
                <Avatar shape="circle" size="md" stacked={true} img={avater1} />
                <Avatar shape="circle" size="md" stacked={true} img={avater2} />
                <Avatar shape="circle" size="md" stacked={true} img={avater3} />
                <Avatar shape="circle" size="md" stacked={true} img={avater4} />

                <Avatar.Counter
                  size="md"
                  total={20}
                  className="bg-[#F3F8E8] text-[#18181B] text-sm font-semibold font-[] leading-5 "
                  href="/"
                />
              </Avatar.Group>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="20"
                  viewBox="0 0 4 20"
                  fill="none"
                >
                  <path
                    d="M2 4C0.89543 4 -1.35705e-07 3.10457 -8.74228e-08 2C-3.91405e-08 0.89543 0.895431 -1.35705e-07 2 -8.74228e-08C3.10457 -3.91405e-08 4 0.89543 4 2C4 3.10457 3.10457 4 2 4Z"
                    fill="#CED1C7"
                  />
                  <path
                    d="M2 12C0.89543 12 -4.85396e-07 11.1046 -4.37114e-07 10C-3.88832e-07 8.89543 0.89543 8 2 8C3.10457 8 4 8.89543 4 10C4 11.1046 3.10457 12 2 12Z"
                    fill="#CED1C7"
                  />
                  <path
                    d="M2 20C0.89543 20 -8.35087e-07 19.1046 -7.86805e-07 18C-7.38523e-07 16.8954 0.89543 16 2 16C3.10457 16 4 16.8954 4 18C4 19.1046 3.10457 20 2 20Z"
                    fill="#CED1C7"
                  />
                </svg>
              </button>
            </section>
            <>
              <h1 className="text-lg text-[#18181B] font-semibold leading-5 py-5 border-b border-[#DCE0D3] border-dashed ">
                Get Global Investment Policy In The Year
              </h1>
              <div className="flex justify-between mt-5 mb-3 ">
                <p className="text-sm font-medium leading-7 ">Strategy</p>
                <p className="text-sm font-medium leading-7 ">80%</p>
              </div>
              <Progress
                color="success"
                rounded={true}
                size="sm"
                // labelProgress={true}
              />
            </>
          </div>
        </div>

        <div className="md:flex md:justify-center md:items-center md:gap-[70px] mt-5 pl-12 md:pl-0 lg:ml-32">
          {/* ________________Rating Circle_____________________ */}
          <div className="w-[170px] h-[170px]  bg-[#fff]  p-[10px] rounded-[170px] shadow-[ 0px 0px 30px 0px rgba(0, 0, 0, 0.05)] mb-5 md:mb-0 lg:mb-0 ">
            <div className="border-[1px] border-[#DCE0D3] border-dashed w-[150px] h-[150px] rounded-[150px]  flex justify-center items-center ">
              <div>
                <h1 className="text-[34px] font-bold leading-7 text-center">
                  4.7
                </h1>
                <Rating
                  className="my-2"
                  readonly
                  placeholderRating={5}
                  emptySymbol={
                    <img src="assets/images/star-grey.png" className="icon" />
                  }
                  placeholderSymbol={<img src={rating} className="icon" />}
                  fullSymbol={<img src={rating} className="icon" />}
                />
                <p className=" text-xs font-semibold leading-7 text-center">
                  320 Rating
                </p>
              </div>
            </div>
          </div>

          {/* ________________Report Chart_____________________ */}

          <div
            className="w-[220px] h-[270px] flex-shrink-0  bg-[#fff]  p-[10px] rounded-[20px] shadow-[ 0px 0px 30px 0px rgba(0, 0, 0, 0.05)] "
            style={{ backgroundImage: `url(${bottomVector})` }}
          >
            <div className="border-[1px] border-[#DCE0D3] border-dashed w-[200px] h-[250px] rounded-xl  p-5">
              <h2 className="text-lg font-semibold leading-5 pb-5 border-b border-dashed ">
                Financial Report Chart
              </h2>
              <section className="flex justify-between items-center pt-3">
                <div>
                  <h3 className="text-xs text-[#5D6167] font-semibold leading-7 ">
                    Revenue
                  </h3>
                  <h4 className="text-sm font-semibold leading-7 ">$3500.20</h4>
                </div>
                <button className="w-10 h-10 border-[1px] border-[#DCE0D3] border-dashed rounded-[44px] py-[15px] px-[10px] flex place-items-center">
                  <img src={vector} alt="" />
                </button>
              </section>
              <img src={chart} alt="" />
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
