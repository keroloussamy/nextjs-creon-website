import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="z-10 bg-transparent flex items-center justify-between pt-[30px] px-[50px]">
      <div className="flex items-center">
        <Image src="/logo.svg" alt="logo" width={120} height={33} />
      </div>
      <ul className="flex flex-row gap-[40px] items-center font-Satoshi-Bold text-lg">
        <li>
          <Link href="/" className="text-white hover:text-[#3D8BFF] duration-200 ease-linear">
            Creon Pass
          </Link>
        </li>
        <li className="hidden xl:flex items-start gap-x-[4px]">
          <Link href="/" className="text-white cursor-default">
            Token
          </Link>
          <p className='text-[10px] leading-[110%] rounded-[100px] text-center px-[4px] pt-[2px] pb-[1px] uppercase bg-black text-[#AB23FF]'>soon</p>
        </li>
        <li className="hidden xl:flex items-start gap-x-[4px]">
          <Link href="/" className="text-white cursor-default">
            AI Revenue
          </Link>
          <p className='text-[10px] leading-[110%] rounded-[100px] text-center px-[4px] pt-[2px] pb-[1px] uppercase bg-black text-[#AB23FF]'>soon</p>
        </li>
        <li className="hidden xl:flex items-start gap-x-[4px]">
          <Link href="/" className="text-white cursor-default">
            AI Launchpad
          </Link>
          <p className='text-[10px] leading-[110%] rounded-[100px] text-center px-[4px] pt-[2px] pb-[1px] uppercase bg-black text-[#AB23FF]'>soon</p>
        </li>
        <li>
          <button className="animate-button inline-block h-11 leading-[44px] overflow-hidden relative border-2 border-white rounded-md text-white hover:bg-[#3D8BFF] hover:border-transparent duration-300 ease-out">
            <span className="label-up block relative top-0 duration-300 h-full px-[25px]">Connect</span>
            <span className="label-up block relative top-0 duration-300 h-full px-[25px]">Connect</span>
          </button>
          
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
