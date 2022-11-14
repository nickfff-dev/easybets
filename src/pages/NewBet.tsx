import { FC} from "react";
import Button from "../components/Button";
import BgGlassmorphism from "../components/BgGlassMorphism"



export interface NewBetProps { 

  className?: string;
}

const NewBet: FC<NewBetProps> = ({ className = "bg-neutral-100/80 dark:bg-neutral-900" }) => {

  
  return (

    <div className={`p-20 ${className}`}>
      
      <BgGlassmorphism/>
      <h2 className="text-[#04868b] dark:text-white text-center md:text-3xl leading-[115%] lg:text-5xl md:leading-[115%] font-semibold ">
         NewBet
      </h2>
      
<form className="lg:w-1/2 mx-auto w-full space-y-10  ">
  <div className="relative z-0 mb-6 w-full group">
      <input type="text" name="title" id="title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#04868b] focus:outline-none focus:ring-0 focus:border-[#04868b] peer" placeholder=" " />
      <label htmlFor="title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#04868b] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Bet Title</label>
  </div>
  <div className="relative z-0 mb-6 w-full group">
      <textarea  name="description" id="description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#04868b] focus:outline-none focus:ring-0 focus:border-[#04868b] peer" placeholder=" " />
      <label htmlFor="description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#04868b] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Bet Description</label>
  </div>

  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 mb-6 w-full group">
        <input type="date" name="startDate" id="date" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#04868b] focus:outline-none focus:ring-0 focus:border-[#04868b] peer"  />
        <label htmlFor="startDate" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#04868b] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Start Date</label>
    </div>
    <div className="relative z-0 mb-6 w-full group">
        <input type="date" name="endDate" id="endDate" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#04868b] focus:outline-none focus:ring-0 focus:border-[#04868b] peer" placeholder=" " />
        <label htmlFor="endDate" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#04868b] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">End Date</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6 ">
    <div className="relative z-0 mb-6 w-full group">
        <input type="number"  name="stake" id="stake" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#04868b] focus:outline-none focus:ring-0 focus:border-[#04868b] peer" />
        <label htmlFor="stake" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#04868b] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Min Stake</label>
    </div>
    <div className="relative z-0 mb-6 w-full group">
        <input type="text" name="author" id="author" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#04868b] focus:outline-none focus:ring-0 focus:border-[#04868b] peer" placeholder=" " />
        <label htmlFor="author" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#04868b] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Bet Author</label>
    </div>
  </div>
  <Button type="submit" className="  dark:text-white border bg-[#04868b] dark:bg-[#04868b]  border-green-500  text-white  dark:text-white dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800">Submit</Button>
</form>
      </div>
     
)
}


export default NewBet
