import { FC } from "react";

import BackgroundSection from "../components/Background"
import BgGlassmorphism from "../components/BgGlassMorphism"
import SectionHero2 from "../components/SectionHero2"
import SectionHowItWork from "../components/SectionHowItWork";
import CollectionCards from "../components/CollectionCards";
import SectionSubscribe from "../components/SectionSubscribe";



export interface HomepageProps { 
  className?: string;
}

const Homepage: FC<HomepageProps> = ({ className = "bg-neutral-100/80 dark:bg-neutral-900" }) =>{
  return (

    <div className={`nc-PageHome overflow-hidden ${className}`}>
       <BgGlassmorphism/>
    
      <div className="relative mt-8  sm:mb-20 lg:pt-24 lg:mb-40">
        <SectionHero2 />
        
      </div>
      <div className="relative lg:mb-20 m-5 p-12 rounded-[25px] text-center">
      <BackgroundSection  />
        <h1 className="relative font-semibold pb-7 text-4xl text-[#04868b] dark:text-white  md:text-5xl xl:text-6xl ">How It Works</h1>
        <SectionHowItWork className="mt-8 lg:mt-8 xl:mt-12" /></div>
      
      <div className="relative m-7 mb-20 border-t border-b dark:border-[#04868b]  border-[neutral-200]">
      <div className="relative py-10 lg:py-18 lg:m-5 p-12 rounded-[25px]  ">
      <BgGlassmorphism />
      <h1 className="text-center lg:text-4xl mb-8    text-[#04868b] font-bold dark:text-white">Explore</h1>
        
        <CollectionCards />
      </div>
  </div>
      <div className="relative h-auto lg:w-[1400px] mx-auto mb-20">

        <BackgroundSection />
        <SectionSubscribe />
    
  </div>
      </div>
      
  )
 }


export default Homepage
