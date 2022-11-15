import { FC } from "react";
import AccordionInfo from "../components/AccordionInfo";
import TimeCountDown from "../components/TimeCountdown";
import Button from "../components/Button";

export interface BetDetailProps { 
  bet: {
  title: string;
  description: string;
  contractAddress: string;
  endDate: string;
  stake: string;
  image: string;
  hasenddate: boolean;
  }
  
}


const BetDetail: FC<BetDetailProps> = ({ bet }) => {
  return (
    <div className="container abstract   pt-24 bg-neutral-100/80 dark:bg-neutral-900 flex ">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
        <div className="space-y-8 lg:space-y-10">
          <div className="relative">
            <div className="aspect-w-11 aspect-h-12 rounded-3xl overflow-hidden">
              <img src={bet.image} alt="bet" />
            </div>

          </div>
          <AccordionInfo
            description={bet.description}
            contractAddress={bet.contractAddress}
          />
        </div>
        <div className="pt-10 lg:pt-0 xl:pl-10 border-t-2 border-neutral-200 dark:border-neutral-700 lg:border-t-0">
        <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
    <div className="pb-9 space-y-5">
      <div className="flex justify-between items-center">
      <span className="nc-Badge inline-flex px-2.5 py-2 text-white rounded-full font-medium text-xs text-white bg-[#04868b] ">category</span>
      </div>
      <h2 className="text-2xl sm:text-3xl text-[#04868b] lg:text-4xl font-semibold dark:text-white">
            {bet.title}
          </h2>
    </div>
    <div className="py-9">
              <TimeCountDown endDate={bet.endDate} />
    </div>
         <div className="pb-9 pt-14">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
            <div className="flex-1 flex flex-col sm:flex-row items-baseline p-6 border-2 border-[#04868b]/50 rounded-xl relative">
              <span className="absolute bottom-full translate-y-1 py-1 px-1.5 bg-white dark:bg-neutral-900 text-sm text-neutral-500 dark:text-neutral-400">
                Current Bid
              </span>
              <span className="text-3xl xl:text-4xl font-semibold text-[#04868b]">
                {bet.stake} ETH
              </span>
              <span className="text-lg text-neutral-400 sm:ml-5">
                ( ≈ $3,221.22)
              </span>
            </div>

          
      </div>
    </div>
    <Button  className="dark:text-white border bg-[#04868b] dark:bg-[#04868b]  border-green-500  text-white  dark:text-white dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800" sizeClass="px-4 py-2 sm:px-5">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                  d="M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H6.26C4.19 22 2.5 20.31 2.5 18.24V11.51C2.5 9.44001 4.19 7.75 6.26 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.5 12.4101V7.8401C2.5 6.6501 3.23 5.59006 4.34 5.17006L12.28 2.17006C13.52 1.70006 14.85 2.62009 14.85 3.95009V7.75008"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.5588 13.9702V16.0302C22.5588 16.5802 22.1188 17.0302 21.5588 17.0502H19.5988C18.5188 17.0502 17.5288 16.2602 17.4388 15.1802C17.3788 14.5502 17.6188 13.9602 18.0388 13.5502C18.4088 13.1702 18.9188 12.9502 19.4788 12.9502H21.5588C22.1188 12.9702 22.5588 13.4202 22.5588 13.9702Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 12H14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="ml-2.5">Place a bid</span>
            </Button>

      </div>
          </div>
      </div>
    </div>
 
  )
}


export default BetDetail



