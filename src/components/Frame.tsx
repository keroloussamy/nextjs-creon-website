import Image from "next/image";

export const cards = [
  {
    title: "AI Prospects, Market Size, and Development Pace",
    text: "The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.",
    image: "/frame1.png",
  },
  {
    title: "AI Tools and Market",
    text: "AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.",
    image: "/frame2.png",
  },
  {
    title: "AI, Crypto, and NFT Market",
    text: "Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.",
    image: "/frame3.png",
  },
];

const Frame = () => {
  return (
    <section className="w-full h-max py-[80px]">
      <div className="w-full h-full max-w-[1440px] mx-auto p-5 lg:px-32 2xl:px-0 justify-between">
        <div className="flex flex-col w-full md:max-w-full gap-x-[20px] gap-y-[20px]">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full md:max-w-full xl:max-w-[1440px] mx-auto flex flex-col md:flex-row-reverse flex-shrink-0 relative border-b border-[#13171D] rounded-[6px] bg-[#13171D]"
            >
              <div className="flex-shrink-0 w-full md:w-[223px] xl:w-[453px] overflow-hidden">
                <Image
                  src={card.image}
                  alt="read more"
                  width={453}
                  height={302}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-10">
                <p className="text-[38px] text-white font-MonumentExtended uppercase leading-[120%] mb-[15px]">
                  {card.title}
                </p>
                <p className="font-Satoshi-Regular w-full text-[18px] text-white leading-[130%]">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="frame-video absolute bottom-0 -z-10 w-full">
        <video autoPlay loop muted playsInline className="object-fill w-full">
          <source src="/roadmap-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Frame;
