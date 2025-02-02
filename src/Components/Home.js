import React from "react";
import { useQuery, gql } from "@apollo/client";
import PokemonCard from "./PokemonCard";

const GET_POKEMONS = gql`
    {
        pokemon_v2_pokemon(limit: 50) {
            id
            name
            pokemon_v2_pokemontypes {
                pokemon_v2_type {
                    name
                    id
                }
            }
        }
    }
`;

const Pokemons = () => {
    const { loading, error, data, refetch } = useQuery(GET_POKEMONS);

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="max-w-7xl mx-auto px-5">
                {/* Title */}
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Pokémon List
                </h1>

                {loading && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 animate-pulse">
                        {[...Array(10)].map((_, index) => (
                            <div
                                key={index}
                                className="bg-gray-300 h-56 rounded-lg shadow-md"
                            ></div>
                        ))}
                    </div>
                )}

                {error && (
                    <div className="text-center mt-10">
                        <p className="text-lg font-semibold text-red-600">
                            ❌ Error: {error.message}
                        </p>
                        <button
                            onClick={() => refetch()}
                            className="mt-3 px-4 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-700 transition"
                        >
                            Retry
                        </button>
                    </div>
                )}

                {!loading && !error && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {data.pokemon_v2_pokemon.map((PokemonDetail) => (
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

export default Pokemons;
