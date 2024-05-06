const Profiting = () => {
  return (
    <section className="w-full">
      <div className="w-full max-w-[1440px] mx-auto py-[120px] p-5 lg:px-32 2xl:px-0">
        <h2 className="text-white font-MonumentExtended uppercase mb-20">
          <span className="block text-3xl md:text-5xl text-[68px] leading-[110%] mb-5">
            Profiting Through
          </span>
          <span className="block text-xl md:text-3xl xl:text-[38px] leading-[120%] text-right custom-gradient-text">
            AI Innovation & Decentralization
          </span>
        </h2>
        <div className="mx-auto flex flex-col lg:flex-row lg:items-center gap-[40px]">
          <div className="relative profiting-video max-w-[947px]">
            <video autoPlay loop muted playsInline>
              <source src="/creon-logo.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="h-max lg:max-w-[450px] px-[30px] border-y border-[#13171D]">
            <h3 className="font-Satoshi-Bold text-[22px] text-white leading-[130%] mb-[28px]">
              The dynamic community driven business model of the future.
            </h3>
            <p className="font-Satoshi-Regular text-[18px] text-white leading-[130%]">
              At Creon, we blend the power of AI tools with the dynamic crypto
              and NFT markets, utilizing an innovative business model to drive
              profitability. This approach empowers our community, as our NFT
              and token holders directly benefit from the growth and prosperity
              of the Creon network, creating a win-win scenario for both our
              community and for the projects we launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Profiting;
