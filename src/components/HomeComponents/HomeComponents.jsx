import React from "react";
import Home from "../../Home/Home/Home";
import TrustCompany from "../../Home/TrustCompany/TrustCompany";
import OurServices from "../../Home/OurServices/OurServices";
import DataIntegration from "../../Home/DataIntegration/DataIntegration";
import StrongSolution from "../../Home/StrongSolution/StrongSolution";
import ProductivityArea from "../../Home/ProductivityArea/ProductivityArea";
import FAQ from "../../Home/FAQ/FAQ";
import Testimonial from "../../Home/Testimonial/Testimonial";
import FreeTrial from "../../Home/FreeTrial/FreeTrial";

const HomeComponents = () => {
  return (
    <div>
      <Home />
      <TrustCompany />
      <OurServices />
      <DataIntegration />
      <StrongSolution />
      <ProductivityArea />
      <FAQ />
      <Testimonial />
      <FreeTrial />
    </div>
  );
};

export default HomeComponents;
