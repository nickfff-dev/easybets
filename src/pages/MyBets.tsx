import { FC } from "react";



export interface MyBetsProps { 
listofBets: any[]
}

const MyBets: FC<MyBetsProps> = (
  {listofBets}
) => {
  return (<>
        <section className="dark:bg-gray-800 dark:text-gray-100">
      <h1 className="text-center text-5xl p-5 font-bold">My Bets</h1>
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">

        {
          listofBets.filter((bet) => bet.contractAddress === "0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a").map((bet, index) => (
            <a rel="noopener noreferrer" href={`/${bet.id}`} className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
            <img src={bet.image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
            <div className="p-6 space-y-2 lg:col-span-5">
                  <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{bet.title}</h3>
              <span className="text-xs dark:text-gray-400">{bet.startDate}</span>
              <p>{bet.description}</p>
            </div>
          </a>
          ))
        }

      </div>
      </section>
  </>)
 }


export default MyBets
