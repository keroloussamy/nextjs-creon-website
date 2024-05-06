const CreonPass = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col xl:flex-row justify-between gap-10 w-full max-w-[1440px] mx-auto my-20 p-5 lg:px-32 2xl:px-0">
        <div className="my-[55px] w-full text-center xl:text-start">
          <h2 className="text-[32px] md:text-[44px] xl:text-[68px] text-white font-MonumentExtended uppercase leading-[110%] mb-[60px]">
            creon pass nft
          </h2>
          <h3 className="custom-gradient-text font-Satoshi-Bold text-[22px] text-white leading-[130%] mb-[25px]">
            The Creon NFT pass unlocks access to AI projects, the Creon
            launchpad, and a ticket to generate passive income through AI-driven
            tools
          </h3>
          <div className="flex flex-col items-center xl:items-start gap-[70px]">
            <div className="flex flex-col gap-[10px] text-white font-Satoshi-Regular text-[18px]">
              <p className="px-[18px] pt-[12px] pb-[16px] border rounded-md border-[#13171D]">
                Pre-launch investment opportunities for upcoming AI projects
              </p>
              <p className="px-[18px] pt-[12px] pb-[16px] border rounded-md border-[#13171D]">
                Free and early access to Creon built AI projects
              </p>
              <p className="px-[18px] pt-[12px] pb-[16px] border rounded-md border-[#13171D]">
                Higher allocation limits on the Creon AI Launchpad
              </p>
              <p className="px-[18px] pt-[12px] pb-[16px] border rounded-md border-[#13171D]">
                Revenue share distribution from Creon built AI projects
              </p>
            </div>
            <button className="animate-button animate-button-gradient inline-block h-[54px] leading-[54px] w-full max-w-[450px] overflow-hidden relative rounded-md text-white hover:bg-[#3D8BFF] hover:border-transparent duration-300 ease-out">
              <span className="label-up block relative top-0 duration-300 h-full px-[25px]">
                Buy Creon Pass
              </span>
              <span className="label-up block relative top-0 duration-300 h-full px-[25px]">
                Buy Creon Pass
              </span>
            </button>
          </div>
        </div>
        <div className="w-full h-auto">
          <div className="w-full mx-auto">
            <video className="object-cover w-full h-full" autoPlay muted loop>
              <source src="/nft-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreonPass;
