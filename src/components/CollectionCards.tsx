import { FC } from 'react';
import AuthorCard from './AuthorCard';



import BgGlassmorphism from './BgGlassMorphism';
const data = [{
  id: 1,
  name: 'Who Will Win The Election?',
  image: 'https://images.pexels.com/photos/8089969/pexels-photo-8089969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  stake: '1.549',
  status: 'Open',
  endDate: '2021-12-31',
  startDate: '2021-12-31',
},
  {
    
    id: 2,
    name: 'Who Will Win The War?',
    image: 'https://images.pexels.com/photos/8089969/pexels-photo-8089969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    stake: '1.549',
    status: 'Open',
    endDate: '2021-12-31',
    startDate: '2021-12-31',
  },
  {
    id: 3,
    name: 'Who Will Win the WorldCup',
    image: 'https://images.pexels.com/photos/58461/pexels-photo-58461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    stake: '1.549',
    status: 'Open',
    endDate: '2021-12-31',
    startDate: '2021-12-31',
  },
  {
    
    id: 4,
    name: 'When Is the World Going to End?',
    image: 'https://images.pexels.com/photos/88652/pexels-photo-88652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    stake: '1.549',
    status: 'Open',
    endDate: '2021-12-31',
    startDate: '2021-12-31',
  
}]

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
            name={item.name}
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
