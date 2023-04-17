import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import * as gameService from './services/gameService';

import { Catalog } from "./components/Catalog/Catalog";
import { CrateGame } from "./components/CreateGame/CreateGame";
import { Header } from "./components/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { GameDetails } from './components/GameDetails/GameDetails';

function App() {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService.getAll()
      .then(result => {
        setGames(result)
      })
  }, []);

  const onCreateGameSubmit = async (data) => {
    const newGame = await gameService.create(data);

    // takes the old state and adds the new game
    setGames(state => [...state, newGame]);

    //redirects to the catalog page
    navigate('/catalog');
  }

  return (
    <div id="box">
      <Header />

      <main id="main-content">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/create-game' element={<CrateGame onCreateGameSubmit={onCreateGameSubmit} />}></Route>
          <Route path='/catalog' element={<Catalog games={games} />}></Route>
          <Route path='/catalog/:gameId' element={<GameDetails />}></Route>
        </Routes>
      </main>
    </div >
  );
}

export default App;
