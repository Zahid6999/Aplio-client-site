import React from "react";
import { Button, Navbar } from "keep-react";
import { MagnifyingGlass } from "phosphor-react";
import vectorImg1 from "../assets/Bg_vector/topVector.svg";
import { motion } from "framer-motion";
// _______________Nav List___________________
const navList = (
  <>
    <li className="text-base text-[#18181B] border-[1px] border-[#EDF0E6] rounded-[40px] py-[5px] px-5 font-medium hover:text-orange-500 ease-in-out">
      Home
    </li>
    <li className="text-base text-[#18181B]  py-[5px] px-5 font-medium hover:text-orange-500 ease-in-out">
      About
    </li>
    <li className="text-base text-[#18181B]  py-[5px] px-5 font-medium hover:text-orange-500 ease-in-out">
      Services
    </li>
    <li className="text-base text-[#18181B]  py-[5px] px-5 font-medium hover:text-orange-500 ease-in-out">
      Contact
    </li>
    <li className="text-base text-[#18181B]  py-[5px] px-5 font-medium hover:text-orange-500 ease-in-out">
      Pages
    </li>
    <li className="text-base text-[#18181B]  py-[5px] px-5 font-medium hover:text-orange-500 ease-in-out">
      News
    </li>
  </>
);

const Header = () => {
  return (
    <motion.div
      style={{
        background: `url(${vectorImg1})`,
        height: "520px",
        flexShrink: 0,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ y: 50, opacity: 0 }}
      transition={{ duration: 1.1 }}
      animate={{ y: 0, opacity: 1 }}
      className="lg:px-[55px] xl:px-[150px] 2xl:px-[150px] relative z-30  bg-[#f1f3e5]"
    >
      <Navbar fluid={true}>
        <Navbar.Container className="flex items-center justify-between xl:px-[15px] 2xl:px-[160px] absolute z-0 pt-4 ">
          <Navbar.Brand>
            <h1 className=" text-[30px] font-semibold leading-[78px] ">
              aplio
            </h1>
          </Navbar.Brand>
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-3 xl:ml-[241px] xl:mr-[110px] px-[30px] py-[15px] rounded-full bg-white drop-shadow-2xl"
          >
            {navList}
          </Navbar.Container>

          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
              {navList}
            </Navbar.Container>
          </Navbar.Collapse>

          <Navbar.Container className="flex items-center gap-3">
            <Navbar.Container
              tag="ul"
              className="lg:flex hidden items-center justify-between gap-5"
            ></Navbar.Container>
            <Button size="sm" type="link">
              <span>
                <MagnifyingGlass size={20} color="#444" />
              </span>
            </Button>
            <Button
              size=""
              type="default"
              className="bg-[#18181B] py-3 xl:py-3 px-6 2xl:px-[30px] xl:px-5 text-base text-white font-[outFit] rounded-[30px] hover:bg-[#42424b]"
            >
              Sign Up Free
            </Button>
            <Navbar.Toggle />
          </Navbar.Container>
        </Navbar.Container>
      </Navbar>
    </motion.div>
  );
};

export default Header;
