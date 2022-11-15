import { FC } from "react";


export interface SectionExploreProps{

listofBets: any[]
}

const SectionExplore: FC<SectionExploreProps> = (
  {listofBets}
 
) => { 
  return (
   
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <h1 className="text-center text-5xl p-5 font-bold">Explore our Bets</h1>
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href={`/${listofBets[0].id}`} className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
			<img src={listofBets[0].image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{listofBets[0].title}</h3>
				<span className="text-xs dark:text-gray-400">{listofBets[0].startDate}</span>
				<p>{listofBets[0].description}</p>
			</div>
		</a>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {
            listofBets.slice(1).map((bet, index) => (
              <a key={index} rel="noopener noreferrer" href={`/${bet.id}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
              <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={bet.image} />
              <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{ bet.title}</h3>
                  <span className="text-xs dark:text-gray-400">{ bet.startDate}</span>
                  <p>{ bet.description}</p>
              </div>
            </a>

            ))
          }
			
		</div>
		<div className="flex justify-center">
			<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">Load more posts...</button>
		</div>
	</div>
</section>
 
  
  )
}


export default SectionExplore
