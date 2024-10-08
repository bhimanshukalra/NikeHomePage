import React from "react";
import { Shoe } from "../constants";

type ShoeCardProps = {
  shoeItem: Shoe;
  changeBigShoeImage: (url: string) => void;
  bigShoeImg: string;
};

const ShoeCard = ({
  shoeItem,
  changeBigShoeImage,
  bigShoeImg,
}: ShoeCardProps) => {
  const handleClick = () => {
    if (bigShoeImg !== shoeItem.bigShoe) {
      changeBigShoeImage(shoeItem.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 ${
        bigShoeImg === shoeItem.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      }`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={shoeItem.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
