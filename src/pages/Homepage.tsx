import React, { FC } from "react";
import Header from "../components/Header"
import BackgroundSection from "../components/Background"
import BgGlassmorphism from "../components/BgGlassMorphism"
import SectionHero2 from "../components/SectionHero2"
import SectionHowItWork from "../components/SectionHowItWork";


export interface HomepageProps { 
  className?: string;
}

const Homepage: FC<HomepageProps> = ({ className = "bg-neutral-100/80 dark:bg-neutral-900" }) =>{
  return (
    <div className={`nc-PageHome overflow-hidden ${className}`}>
      <BackgroundSection  className="bg-neutral-100/80 dark:bg-neutral-900"/>
    
      <div className="container  relative mt-5 mb-20 sm:mb-24 lg:mt-20 lg:mb-32">
        <SectionHero2 />
        <SectionHowItWork className="mt-12 lg:mt-12 xl:mt-5" />
        </div>
    </div>
  )
 }


export default Homepage
