import React from "react";
import Rating from "react-rating";
import fullStar from "../../assets/Icon/fullStar.svg";
import star from "../../assets/Icon/Star.svg";

const CardInformation = ({ cardInfo }) => {
  const { logo, title, rating, img, name, position, bg } = cardInfo;

  return (
    <div
      className={`bg-[#fff]  p-[10px] rounded-[20px] drop-shadow-[ 0px 0px 30px 0px rgba(0, 0, 0, 0.07)] ${bg}`}
    >
      <div className="border-[1px] border-[#e6eadd] border-dashed rounded-xl p-8">
        <figure className="mb-6">{logo}</figure>
        <p className="text-base font-light font-inter leading-7 tracking-[-0.3px] mb-5">
          {title}
        </p>

        <Rating
          placeholderRating={rating}
          emptySymbol={<img src={star} className="icon" />}
          placeholderSymbol={<img src={fullStar} className="icon" />}
          fullSymbol={<img src={fullStar} className="icon" />}
          readonly
        />

        <footer className="mt-6 flex items-center gap-4">
          <img src={img} alt="User Images" />
          <figure>
            <h6 className="text-base font-semibold leading-[22px]">{name}</h6>
            <p className="text-sm font-medium text-[#5D6167] leading-[22px]">
              {position}
            </p>
          </figure>
        </footer>
      </div>
    </div>
  );
};

export default CardInformation;
