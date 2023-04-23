import Navbar from "./Navbar";
import PokemonDetail from "./PokemonDetail";
import Pokemons from "./Pokemons";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { createBrowserHistory } from "history";
import Search from "./Search";

function App() {
    return (
        <div className="App">
            <BrowserRouter history={createBrowserHistory()}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Pokemons />} />
                    <Route path="/Pokemon/:id" element={<PokemonDetail />} />
                    <Route path="/Search" element={<Search />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
