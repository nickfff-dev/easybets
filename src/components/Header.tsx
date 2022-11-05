import React, { FC } from "react";
import SwitchDarkMode from "./SwitchDarkMode"
import Button from "./Button";


export interface HeaderProps { }
const Header: FC<HeaderProps> =() =>{
  return (
   
      <div className={`nc-MainNav2 dark:bg-neutral-900 relative z-10 ${"onTop "}`}>
      <div className="container py-5 relative flex justify-between items-center space-x-4 xl:space-x-8">
        <div className="flex justify-start flex-grow items-center space-x-3 sm:space-x-8 lg:space-x-10">
        <a
      href="/"
      className={`ttnc-logo inline-block text-primary-6000`}
    >

      <h1 className="dark:text-white font-bold lg:text-2xl">easyBets</h1>
    </a>
   
        </div>
        <div className="flex-shrink-0 flex items-center justify-end text-neutral-700 dark:text-neutral-100 space-x-1">
          <div className="hidden items-center xl:flex space-x-2">
            <span>Explore</span>
            <div className="hidden sm:block h-10"></div>
           
            <button
              
              className="px-4 py-2 sm:px-5"
           
            >
              New Bet
            </button>
            <Button
              className="ttnc-ButtonSecondary border bg-white border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              sizeClass="px-4 py-2 sm:px-5"
            >
              Connect Wallet
            </Button>
            
            <SwitchDarkMode />
          </div>
         
        </div>
      </div>
    </div>
   
  )
}


export default Header
