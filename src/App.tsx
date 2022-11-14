import './App.css';
import { useEffect } from 'react';
import Homepage from './pages/Homepage';
import NewBet from './pages/NewBet';
import Header from './components/Header';
import Footer from './components/Footer';
import BetDetail from './components/BetDetail';
import data from './data/bets'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {







  return (

    
    <Router>
<Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/new-bet" element={<NewBet />} />
        <Route path="/somebet" element={<BetDetail bet={data[0]} />} />

        {
          data.map((bet) => {
            const route = encodeURIComponent(bet.title)
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
