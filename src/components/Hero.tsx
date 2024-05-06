import "@/app/globals.css";

const Hero = () => {
  return (
    <main className="w-full h-screen flex flex-col justify-end">
      <div className="max-w-[1440px] w-full mx-auto mb-[100px] pb-[25px] p-5 lg:px-32 2xl:px-0">
        <div className="text-white mb-auto">
          <h1 className="font-MonumentExtended text-4xl md:text-5xl xl:text-6xl 2xl:text-[68px] uppercase leading-[110%] mb-[40px]">
            The world&apos;s first <br /> platform for Tokenizing <br /> AI
            blockchain projects
          </h1>
          <p className="custom-gradient-border custom-gradient-text border-y max-w-max py-[12px] font-Satoshi-Bold text-[18px] leading-[130%]">
            Hold the Creon Pass NFT and earn passive income from AI Tools
          </p>
        </div>
      </div>
      <div className="video-container absolute top-0 -z-10">
        <video autoPlay loop muted playsInline className="object-fill">
          <source src="/main-background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </main>
  );
};

export default Hero;
