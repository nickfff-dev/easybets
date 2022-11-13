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
    
      <div className="relative mt-8  sm:mb-20 lg:pt-24 lg:mb-48">
        <SectionHero2 />
        
      </div>
      <div className="bg-neutral-50 dark:bg-neutral-800 lg:mb-20 lg:p-12 text-center"><h1 className="font-semibold text-4xl text-[#04868b] dark:text-white  md:text-5xl xl:text-6xl ">How It Works</h1>
        <SectionHowItWork className="mt-8 lg:mt-8 xl:mt-12" /></div>
      
      <div className="relative py-10 lg:py-18 ">
      <h1 className="text-center lg:text-4xl mb-8 text-[#04868b] font-bold dark:text-white">Explore</h1>
        <BgGlassmorphism />
        <CollectionCards />
      </div>
      <div className="relative p-10 py-20 lg:py-28">
        <BackgroundSection />
        <SectionSubscribe />
      </div>
    </div>
  )
 }


export default Homepage
