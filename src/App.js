import { Container } from '@material-ui/core';
import './App.css';
import Header from './Components/Headers/Header';
import BottomNavigation from './Components/MainNav';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="App">
          <Container>
            <Routes>
              <Route path='/' element={<Trending />} />
              <Route path='/movies' element={<Movies />} />
              <Route path='/series' element={<Series />} />
              <Route path='/search' element={<Search />} />
            </Routes>
          </Container>
        </div>
        <BottomNavigation />
      </BrowserRouter>
    </>
  );
}

export default App;
