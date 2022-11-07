
import './App.css';
import Homepage from './pages/Homepage';
import NewBet from './pages/NewBet';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter , Route,Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/new-bet" element={<NewBet />} />
     </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
