import { FC } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
export interface AuthorCardProps {
  className?: string;
  id: number | null;
  name: string;
  image: string;
  stake: string;
  status: string;
  endDate: string;
  startDate: string;
}


const AuthorCard: FC<AuthorCardProps> = ({ className = "", name = "", image = "", stake = "", status = "", endDate = "", startDate = "", id=null }) => {
  return (
    <>
   
      <button
       
        className={`nc-CardAuthorBox relative flex flex-col items-center justify-center text-center px-3 py-5 sm:px-6 sm:py-7  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`}
        data-nc-id="CardAuthorBox"
      >

        <div className="relative flex-shrink-0 h-36">
          <div className="nc-NcImage flex h-full w-full flex-shrink-0 rounded-3xl overflow-hidden">
            <img className="object-cover w-full h-full" src={image} alt={name} /></div> </div>
        <div className="mt-2.5 flex flex-col items-center justify-between">
          <h2 className={`text-base font-semibold  text-[#04868b] flex items-center dark:text-white`}>

            {name}
          </h2>
          <div className={` flex flex-col space-y-2  mb-3 mt-1 text-sm font-medium dark:text-white`}>
           
              <span className=" text-sm text-neutral-500 dark:text-neutral-400">Status: {status}</span>
            {` `}
    

            <span className=" text-neutral-400 font-normal">Start: {endDate}</span>
            <span className="text-neutral-400 font-normal "> EndDate: {startDate}</span>
          </div>
        </div>
        {/* <FollowButton className="mt-3" /> */}
        <Button
          
          className="ttnc-ButtonSecondary border bg-[#04868b] border-neutral-200 text-white dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          sizeClass="px-4 py-2 sm:px-5"
        >
          <Link
            to={`/${id}`}
          
          > Stake</Link>
        </Button>
      </button></>
  )
}


export default AuthorCard
