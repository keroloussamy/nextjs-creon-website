import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-transparent w-full text-white">
      <div className="w-full max-w-[1440px] mx-auto p-5 lg:px-32 2xl:px-0 flex flex-col justify-center items-center gap-y-[15px] md:flex-row md:justify-between">
        <div className="flex flex-col-reverse md:flex-row gap-x-[90px] gap-y-[28px] items-center">
          <p className="text-[14px] lg:text-[16px] leading-[130%]">
            © Creon 2024. All rights reserved.
          </p>
          <div className="flex gap-x-[10px] items-center">
            <div className="w-[34px] h-[34px] rounded-full border-2 border-white flex items-center justify-center hover:bg-[#3D8BFF] hover:border-transparent duration-[250ms] ease-out cursor-pointer">
              <a href="#">
                <Image
                  src="/telegram.svg"
                  alt="telegram"
                  width={16}
                  height={16}
                />
              </a>
            </div>
            <div className="w-[34px] h-[34px] rounded-full border-2 border-white flex items-center justify-center hover:bg-[#3D8BFF] hover:border-transparent duration-[250ms] ease-out cursor-pointer">
              <a href="#">
                <Image
                  src="/discord.svg"
                  alt="telegram"
                  width={16}
                  height={16}
                />
              </a>
            </div>
            <div className="w-[34px] h-[34px] rounded-full border-2 border-white flex items-center justify-center hover:bg-[#3D8BFF] hover:border-transparent duration-[250ms] ease-out cursor-pointer">
              <a href="#">
                <Image
                  src="/twitter.svg"
                  alt="telegram"
                  width={16}
                  height={16}
                />
              </a>
            </div>
          </div>
        </div>
        <p className="flex items-center gap-x-[6px] text-[14px] lg:text-[16px]">
          <span>Powered by</span>
          <Image src="/niftables-logo.svg" alt="logo" width={101} height={18} />
        </p>
      </div>
    </footer>
  );
};
export default Footer;
