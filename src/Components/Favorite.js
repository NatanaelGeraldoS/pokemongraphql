import React from "react";
import { readStoredFavorite } from "../LocalStorage";
import PokemonCard from "./PokemonCard";
import { Link } from "react-router-dom";

const Favorite = () => {
    const ListFavorite = readStoredFavorite();

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="max-w-7xl mx-auto px-5">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Your Favorite Pokémon ❤️
                </h1>

                {ListFavorite.length === 0 ? (
                    <div className="text-center mt-10">
                        <img
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
                            alt="Pikachu"
                            className="mx-auto w-40 h-40 opacity-70"
                        />
                        <p className="text-lg font-semibold text-gray-600 mt-4">
                            No Pokémon in favorites yet! 🥺
                        </p>
                        <Link
                            to="/"
                            className="mt-5 inline-block px-6 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-700 transition"
                        >
                            Explore Pokémon
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 animate-fadeIn">
                        {ListFavorite.map((PokemonDetail) => (
                            <PokemonCard
                                PokemonDetail={PokemonDetail}
                                key={PokemonDetail.id}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Favorite;
