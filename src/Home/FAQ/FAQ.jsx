import React, { useState } from "react";
import FaqBg from "../../assets/Bg_vector/Faq-bg.png";
import { Accordion } from "keep-react";

// _______________Accordion Information in Array of Object_____________________
const accordionArrayOfObject = [
  {
    id: 1,
    heading: "  What is a business agency?",
    title:
      " The Keep React is a collection of UI components, styles, and  guidelines that ensure consistency and a unified user experience  across our products.",
  },
  {
    id: 2,
    heading: "  What services does a business agency provide?",
    title:
      " The Keep React is a collection of UI components, styles, and  guidelines that ensure consistency and a unified user experience  across our products.",
  },
  {
    id: 3,
    heading: "  How often should I update my website?",
    title:
      " The Keep React is a collection of UI components, styles, and  guidelines that ensure consistency and a unified user experience  across our products.",
  },
  {
    id: 4,
    heading: "   How do subscriptions work?",
    title:
      " The Keep React is a collection of UI components, styles, and  guidelines that ensure consistency and a unified user experience  across our products.",
  },
  {
    id: 5,
    heading: " What other services are you compatible with?",
    title:
      " The Keep React is a collection of UI components, styles, and  guidelines that ensure consistency and a unified user experience  across our products.",
  },
];

const FAQ = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div
      style={{
        backgroundImage: `url(${FaqBg})`,
        backgroundRepeat: "no-repeat",
        paddingTop: "128px",
        paddingBottom: "130px",
      }}
      className="lg:flex px-4 md:px-10 xl:px-[130px] 2xl:px-[316px] lg:gap-7 xl:gap-20 2xl:gap-[136px] mt-[150px]"
    >
      <section className="lg:w-1/2">
        <h3 className="text-base font-inter font-medium uppercase leading-[22px] ">
          Faq’s
        </h3>
        <h1 className="text-4xl font-bold leading-[48px] mt-3 mb-8">
          Frequently Asked <br /> Question
        </h1>
        <p className="text-base font-inter font-normal leading-7 tracking-[-0.3px]">
          Neque accumsan dolor nullam commodo. Odio massa nisi ullamcorper
          suspendisse amet amet. Aenean suspendisse eget est pulvinar. Fames
          eget eget nascetur ornare
        </p>
      </section>

      {/* ____________________FAQ Accordion_____________________ */}

      <Accordion className=" lg:w-1/2 ">
        {accordionArrayOfObject.map((accordion) => (
          <Accordion.Panel
            key={accordion.id}
            className="bg-[#fff] rounded-[21px] p-[10px] shadow-[ 0px 0px 30px 0px rgba(0, 0, 0, 0.05)] mt-5"
          >
            <Accordion.Container className="bg-white group-hover:bg-[#ebf4fd] transition-colors duration-75 rounded-[20px] border-[1px] border-dashed border-[#DCE0D3]">
              <Accordion.Title
                className="text-[#18181B] "
                onClick={() => setToggle(!toggle)}
              >
                {accordion.heading}
              </Accordion.Title>
              <Accordion.Icon>
                {toggle ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M6.25 10H13.75M10 6.25V13.75M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                      stroke="#18181B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M6.25 10H13.75M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                      stroke="#18181B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                )}
              </Accordion.Icon>
            </Accordion.Container>
            <Accordion.Content className="text-[#5D6167] ">
              {accordion.title}
            </Accordion.Content>
          </Accordion.Panel>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;

{
  /* */
}
