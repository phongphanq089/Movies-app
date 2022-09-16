import "./App.css";
import Header from "./compoments/Headers/header";
import SimpleBottomNavigation from "./compoments/Navigations";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";

import Movies from "./Pages/Movies/Movies";
import Search from "./Pages/search/Search";
import Trending from "./Pages/Trending/Trending";
import TVmovies from "./Pages/Favorites/Favorites";
function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tvmovies" element={<TVmovies />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </Router>
  );
}

export default App;
