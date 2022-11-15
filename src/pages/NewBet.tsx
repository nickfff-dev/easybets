import { FC, useState} from "react";
import Button from "../components/Button";
import BgGlassmorphism from "../components/BgGlassMorphism"



export interface NewBetProps { 

  className?: string;
}

const NewBet: FC<NewBetProps> = ({ className = "bg-neutral-100/80 dark:bg-neutral-900" }) => {


  const [betState, setBetState] = useState({
    title: "", description: "", startDate:"", endDate:"", author: "", stake: null, hasenddate:false
  })
  

  const handleChange = (e: any) => {
    setBetState({
      ...betState,
      [e.target.name]: e.target.value
    })
   console.log(betState)
 }
  
  const onFormSubmit = () => {
    
    
    
  }
  
  return (

    <div className={`p-20 ${className}`}>
      
      <BgGlassmorphism/>
      <h2 className="text-[#04868b] dark:text-white text-center md:text-3xl leading-[115%] lg:text-5xl md:leading-[115%] font-semibold ">
         NewBet
      </h2>
      
<form className="lg:w-1/2 mx-auto w-full space-y-10" method="POST" >
  <div className="relative z-0 mb-6 w-full group">
      <input type="text" name="title"  id="title" onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#04868b] focus:outline-none focus:ring-0 focus:border-[#04868b] peer" placeholder=" " />
      <label htmlFor="title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#04868b] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Bet Title</label>
  </div>
  <div className="relative z-0 mb-6 w-full group">
      <textarea  name="description" onChange={handleChange} id="description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#04868b] focus:outline-none focus:ring-0 focus:border-[#04868b] peer" placeholder=" " />
      <label htmlFor="description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#04868b] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Bet Description</label>
  </div> <div className="relative z-0 mb-6 w-full group">
          <input type="checkbox" checked={betState.hasenddate} onChange={
            () => {
              setBetState({
                ...betState,
                hasenddate: !betState.hasenddate
              })
            }
          } name="hasenddate" className="focus:ring-action-primary h-6 w-6 text-primary-500 border-primary rounded border-neutral-500 bg-white dark:bg-neutral-700  dark:checked:bg-primary-500 focus:ring-primary-500" />
        <label htmlFor="hasenddate" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-2.5 translate-x-2.5 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#04868b] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Has EndDate?</label></div>
        <div className="grid md:grid-cols-2 md:gap-6">
          
        <div className="relative z-0 mb-6 w-full group">
        
        <input type="date" name="startDate" onChange={handleChange} id="date" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#04868b] focus:outline-none focus:ring-0 focus:border-[#04868b] peer"  />
        <label htmlFor="startDate" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#04868b] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Start Date</label>
    </div>
    <div className="relative z-0 mb-6 w-full group">
            <input type="date" onChange={handleChange} name="endDate" id="endDate" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 dark:disabled:text-primary-6000/25 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#04868b] focus:outline-none focus:ring-0 focus:border-[#04868b] peer" disabled={ 
              betState.hasenddate ? false : true
            } />
        <label htmlFor="endDate" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75  top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#04868b] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">End Date</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6 ">
    <div className="relative z-0 mb-6 w-full group">
            <input type="number" onChange={handleChange} name="stake" id="stake" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#04868b] focus:outline-none focus:ring-0 focus:border-[#04868b] peer" />
            
        <label htmlFor="stake" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#04868b] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Stake(ETH)</label>
    </div>
    <div className="relative z-0 mb-6 w-full group">
        <input type="text" name="author" onChange={handleChange} id="author" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#04868b] focus:outline-none focus:ring-0 focus:border-[#04868b] peer" placeholder=" " />
        <label htmlFor="author" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#04868b] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Bet Author</label>
    </div>
  </div>
  <Button type="submit" onClick={onFormSubmit} className="  dark:text-white border bg-[#04868b] dark:bg-[#04868b]  border-green-500  text-white  dark:text-white dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800">Submit</Button>
</form>
      </div>
     
)
}


export default NewBet
