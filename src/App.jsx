import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import ChampionDetails from './pages/ChampionDetails';
import Champions from './pages/Champions';
import Home from './pages/Home';

function App() {



  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="champions" element={<Champions/>}/>
        <Route path="champions/:name" element={<ChampionDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
