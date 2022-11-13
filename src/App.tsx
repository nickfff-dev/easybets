import './App.css';
import Homepage from './pages/Homepage';
import NewBet from './pages/NewBet';
import Header from './components/Header';
import Footer from './components/Footer';
import BetDetail from './pages/BetDetail';
import data from './data/bets'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  console.log(encodeURIComponent(data[0].title))
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/new-bet" element={<NewBet />} />
        {
          data.map((bet, index) => (
            <Route  path={`/${encodeURIComponent(bet.title)}`} key={bet.title} element={<BetDetail title={bet.title} description={bet.description} contractAddress={bet.contractAddress} endDate={bet.endDate} stake={ bet.stake} /> } />))
        }
     </Routes>
      <Footer />
    </Router>
  );
}

export default App;
