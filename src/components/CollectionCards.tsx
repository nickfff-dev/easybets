import { FC } from 'react';
import AuthorCard from './AuthorCard';
import data from '../data/bets'


import BgGlassmorphism from './BgGlassMorphism';


export interface CollectionCardsProps { 
  className?: string;
  sectionStyle?: "style1" | "style2";
  gridClassName?: string;
}


const CollectionCards: FC<CollectionCardsProps> = ({ className = "",  gridClassName = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" }) => { 
  return (
    <>
      

      <div className={`grid gap-4  md:gap-7 ${gridClassName}`}>

        {data.map((item) => (
          <AuthorCard
            key={item.id}
            name={item.title}
            image={item.image}
            stake={item.stake}
          
            status={item.status}
            endDate={item.endDate}
            startDate={item.startDate}
          />
        ))}

      </div>

        </>
  )
}



export default CollectionCards
