import  { FC } from "react";
import VectorImg from "../images/VectorHIW.svg";
import Img1 from "../images/connect.svg";
import Img2 from "../images/find.svg";
import Img3 from "../images/bet.svg";
import Img4 from "../images/winner.svg";

export interface SectionHowItWorkProps {
  className?: string;
  data?: typeof DEMO_DATA[0][];
}
const DEMO_DATA = [
  {
  id: 1,
  img:  Img1,
  imgDark:  Img1,
  title: "Connect your wallet",
  desc: "Use Metamask to Connect with wallet",
},
{
  id: 2,
  img:  Img2,
  imgDark:  Img2,
  title: "Explore Bets",
  desc: "Explore runnning bets to find the best one for you",
  },
  {
    id: 3,
    img: Img3,
    imgDark: Img3,
    title: "Create a bet",
    desc: "If no bet is suitable for you, create your own",
  },
  {
    id: 4,
    img: Img4,
    imgDark:" WinnerDark,",
    title: "Check your bets",
    desc: "Review Bet history and check your winnings",
  },
]
const SectionHowItWork: FC<SectionHowItWorkProps> = ({
  className = "bg-neutral-100/80 dark:bg-neutral-900",
  data = DEMO_DATA,
}) => {
  return (
      <div
      className={`nc-SectionHowItWork  ${className}`}
      data-nc-id="SectionHowItWork"
    >
      <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16 xl:gap-20">
      <img
          className="hidden md:block absolute inset-x-0 -top-2"
          src={VectorImg}
          alt="vector"
        />
        {
          data.map((item: typeof DEMO_DATA[number], index: number) => (
            <div
            key={item.id}
            className="relative flex flex-col items-center max-w-xs mx-auto"
            >
              <div className="mb-5 sm:mb-10 lg:mb-20 max-w-[100px] mx-auto">    <img src={item.img} alt={item.title} /></div>
              <span className="nc-Badge inline-flex px-2.5 py-1 mb-4 rounded-full text-white font-medium text-xs bg-[#f0909b]">{`Step: ${item.id}` }</span>
              <div className="text-center mt-auto space-y-5">
                <h3 className="text-lg font-semibold text-[#04868b] dark:text-white">{item.title}</h3>
                <span className="block text-neutral-500 dark:text-neutral-400">
                {item.desc}
              </span>
              </div>
              
          </div>
          ))
        }
       </div>

    </div>
  
)
 }


export default SectionHowItWork;
