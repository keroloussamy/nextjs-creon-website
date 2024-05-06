import React from "react";
import Image from "next/image";

const cards = [
  {
    title: "token",
    subtitle: "The Gateway token to the world of AI",
    text: "Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.",
    image: "/card1.png",
  },
  {
    title: "revenue",
    subtitle: "Driving income and growth through decentralization",
    text: "CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.",
    image: "/card2.png",
  },
  {
    title: "launchpad",
    subtitle: "Driving the future of AI Innovation",
    text: "The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.",
    image: "/card3.png",
  },
];

const ComingSoon = () => {
  return (
    <section className="py-[156px] w-full max-w-[1440px] relative z-30 mx-auto overflow-scroll overflow-y-hidden 2xl:overflow-hidden">
      <div className="mx-auto flex flex-col md:flex-row md:flex-wrap justify-between gap-[40px] w-full p-5 lg:px-32 2xl:px-0">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex-1 w-full relative border-b border-[#13171D] py-[30px] pr-[30px] rounded-[6px] bg-[#13171D]"
          >
            <p className="text-[12px] text-black w-max absolute right-[36px] top-[-10px] font-Satoshi-Bold leading-[110%] text-center uppercase bg-white px-[6px] py-[3px] rounded-[100px]">
              COMING SOON
            </p>
            <div className="h-[120px] mb-[30px]">
              <p className="pl-[30px] text-[38px] text-white uppercase leading-[120%] mb-[15px] font-MonumentExtended">
                {card.title}
              </p>
              <p className="pl-[30px] text-[22px] custom-gradient-text font-Satoshi-Bold text-white leading-[130%]">
                {card.subtitle}
              </p>
            </div>

            <div className="card-container w-full h-[234px] relative left-[0px] mb-[18px] overflow-hidden">
              <Image
                src={card.image}
                alt="read more"
                width={272}
                height={234}
                className="object-cover w-full h-full hover:shadow-lg transition-transform duration-300 transform hover:scale-110"
              />
            </div>
            <p className="pl-[30px] font-Satoshi-Regular w-full text-[18px] text-white leading-[130%]">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComingSoon;
