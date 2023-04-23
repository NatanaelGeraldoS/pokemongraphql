import React, { useState } from "react";
import SearchPokemon from "./SearchPokemon";

const Search = () => {
    const [keyword, setKeyword] = useState("");
    const [pokemonName, setPokemonName] = useState("");
    const onChange = (e) => {
        setKeyword(e.target.value);
    };
    const onClickSearch = () => {
        setPokemonName(keyword);
    };
    return (
        <div className="mt-5 mx-5">
            <div className="relative">
                <input
                    type="text"
                    className="w-full h-10 pl-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring focus:border-red-300"
                    value={keyword}
                    onChange={onChange}
                    placeholder="Search Pokemon"
                />
                <button
                    onClick={onClickSearch}
                    className="absolute top-0 right-0 h-full px-3 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
                >
                    Search
                </button>
            </div>
            {pokemonName ? <SearchPokemon pokemonSearch={pokemonName} /> : null}
        </div>
    );
};
export default Search;
