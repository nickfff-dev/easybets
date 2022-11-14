import { FC } from "react";
import Button from "./Button";
import {ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import Contactus from "../images/Contact us.svg"
export interface SectionSubscribeProps {
  className?: string;
}


const SectionSubscribe: FC<SectionSubscribeProps> = ({ className = "dark:text-white" }) => { 
  return (
    <div className={`relative flex flex-col lg:flex-row lg:items-center ${className}`}>
      <div className="flex-shrink-0 mb-10 lg:mb-0 lg:mr-10 lg:w-2/5 p-12">
      <h2 className="font-semibold text-4xl text-[#04868b]">Never miss a drop!</h2>
        <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
          Subcribe to our super-exclusive drop list and be the first to know
          abour upcoming features and trending bets.
        </span>
        <ul className="space-y-4 mt-10">

          <li className="flex items-center space-x-4">
          <span className="nc-Badge inline-flex px-2.5 py-2 text-white rounded-full font-medium text-xs text-white bg-[#04868b] ">01</span>
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
              Get cashbacks
            </span>
          </li>
          <li className="flex items-center space-x-4">
          <span className="nc-Badge inline-flex px-2.5 py-2  rounded-full font-medium text-xs text-white bg-[#04868b] ">02</span>
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
              Get updates on trending bets
            </span>
          </li>
        </ul>
        <form className="mt-10  max-w-sm">
          <label className="flex items-center">
          <input
            aria-required
            placeholder="Enter your email"
            type="email"
           className="rounded-full px-4 py-3  text-sm font-normal lg:w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800"
          />
          <Button
            type="submit"
            className="  rounded-full  -left-16 disabled:bg-opacity-70   text-neutral-50  "
          >
            <ArrowRightCircleIcon className=" w-11 h-11 text-white" fill="#04868b"/>
            
          </Button>
        </label>
        </form>
      </div>
      <div className="flex-grow">
        <img src={Contactus} alt="contactus" />
      </div>

    </div>
  )
}


export default SectionSubscribe
