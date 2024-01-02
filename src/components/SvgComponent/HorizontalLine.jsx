import React from "react";

const HorizontalLine = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1288"
        height="1"
        viewBox="0 0 1288 1"
        fill="none"
      >
        <path
          d="M0 0.5H1288"
          stroke="url(#paint0_linear_228_550)"
          stroke-dasharray="5 3"
        />
        <defs>
          <linearGradient
            id="paint0_linear_228_550"
            x1="0"
            y1="0.5"
            x2="1288"
            y2="0.499993"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#DCE0D3" stop-opacity="0" />
            <stop offset="0.500779" stop-color="#DCE0D3" />
            <stop offset="1" stop-color="#DCE0D3" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default HorizontalLine;
