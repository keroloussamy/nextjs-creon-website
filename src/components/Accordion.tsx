"use client";

import Image from "next/image";
import { useState } from "react";

const Accordion = ({
  title,
  content,
  imageUrl,
}: {
  title: string;
  content: string;
  imageUrl: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-[#13171D] pb-5">
      <button className="flex justify-between items-center w-full mission" onClick={toggleAccordion}>
        <div className="flex items-center">
          <Image src={imageUrl} alt="Image" width={100} height={114} />
          <span className="text-left mx-[30px] text-[22px] leading-[130%] text-white font-Satoshi-Bold">
            {title}
          </span>
        </div>
        {isOpen ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="arrow min-w-max"
          >
            <path d="M2 11L8 5L14 11" stroke="white" stroke-width="1.5" />
          </svg>
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="arrow min-w-max"
          >
            <path d="M2 5L8 11L14 5" stroke="white" stroke-width="1.5" />
          </svg>
        )}
      </button>
      <div
        className={`overflow-hidden text-white duration-300 font-Satoshi-Regular ease-in-out text-[18px] leading-[130%] ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-5 ml-[110px]">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
