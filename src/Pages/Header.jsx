import React from "react";
import { Button, Navbar } from "keep-react";
import { MagnifyingGlass } from "phosphor-react";
import vectorImg1 from "../assets/Bg_vector/topVector.svg";

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
    <div
      style={{
        background: `url(${vectorImg1})`,
        height: "520px",
        flexShrink: 0,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="lg:px-[155px] !bg-[#f7faf2]"
    >
      <Navbar fluid={true}>
        <Navbar.Container className="flex items-center justify-between lg:px-[160px] pt-4">
          <Navbar.Brand>
            <h1 className=" text-[30px] font-semibold leading-[78px] ">
              aplio
            </h1>
          </Navbar.Brand>
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-3 "
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
              size="sm"
              type="default"
              className="bg-[#18181B] py-1 md:px-[30px] text-base text-white font-[outFit] rounded-[30px] hover:bg-[#0e0e1d]"
            >
              Sign Up Free
            </Button>
            <Navbar.Toggle />
          </Navbar.Container>
        </Navbar.Container>
      </Navbar>
    </div>
  );
};

export default Header;
