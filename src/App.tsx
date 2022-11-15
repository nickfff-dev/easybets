import './App.css';
import SectionExplorer from './pages/Explore';
import Homepage from './pages/Homepage';
import NewBet from './pages/NewBet';
import Header from './components/Header';
import Footer from './components/Footer';
import BetDetail from './components/BetDetail';
import data from './data/bets'
import MyBets from './pages/MyBets';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {







  return (

    
    <Router>
<Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/new-bet" element={<NewBet />} />
        <Route path="/somebet" element={<BetDetail bet={data[0]} />} />
        <Route path="/explore" element={<SectionExplorer listofBets={data} />} />
        <Route path="/my-bets" element={<MyBets listofBets={data} />} />

        {
          data.map((bet) => {
      
            return <Route key={bet.id}  path={`/${bet.id}`} element={<BetDetail bet={bet}/>} />
          }
           
           
            )
        }
     </Routes>
   <Footer/>
    </Router>
    

  );
}

export default App;
