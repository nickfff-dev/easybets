import React, { FC } from "react";
import imagePng from "../images/about-hero-right.png";
import Button from "./Button";
import Vector1 from "../images/Vector1.png";

export interface SectionHero2Props {
  children?: React.ReactNode;
  className?: string;
}

const SectionHero2: FC<SectionHero2Props> = ({ className = "dark:text-white", children }) => {
  return (
    <div
      className={`nc-SectionHero2 container  flex flex-col-reverse lg:flex-col relative ${className}`}>

      <div className="flex flex-col lg:flex-row lg:items-center ">
        <div className=" text-neutral-500  flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-6 pb-5 lg:pb-5 xl:pb-5 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="relative  font-semibold text-4xl text-[#04868b] md:text-5xl xl:text-6xl !leading-[114%] dark:text-white">
           Stake    On
            Future & Current <img
                  className="w-12 absolute bottom-2"
                  src={Vector1}
                  alt="Vector1"
            /> Events!
          
              
                
          </h2>
          <span className="text-base md:text-lg text-neutral-500">
            You can Bet on  the Super Bowl winner, World Series, NBA Championship, Stanley Cup or College Football Playoff, MVP awards, or a scoring or home run champ.
            <br />{" "}

          </span>
          <Button className=" px-4 py-2 sm:px-5  bg-[#04868b] text-white  dark:text-white dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800">
            <span>Explore</span>
            <span>
              <svg className="w-5 h-5 ml-2.5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 22L20 20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Button>
        </div>
        <div className="flex-grow">
          <img className="w-full" src={imagePng}  alt="hero" />
        </div>
      </div>


    </div>
  );
};

export default SectionHero2;
