import React from "react";
import { useQuery, gql } from "@apollo/client";
const GET_POKEMONS = gql`
    {
        pokemon_v2_pokemon(limit: 50) {
            id
            name
            pokemon_v2_pokemonsprites {
                id
                sprites
            }
        }
    }
`;
const Pokemons = () => {
    const { loading, error, data } = useQuery(GET_POKEMONS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    console.log(data.pokemon_v2_pokemon);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 mt-5 px-10 mx-auto">
            {data.pokemon_v2_pokemon.map(({ id, name }) => {
                const image =
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" +
                    id +
                    ".svg";
                return (
                    <div className="border border-gray-300 shadow rounded-lg overflow-hidden">
                        <div className="bg-gray-100 p-4">
                            <img
                                src={image}
                                alt={name}
                                className="w-full h-48"
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="font-bold text-xl mb-2">{name}</h2>
                            {/* <div className="flex flex-wrap">
                            {types.map((type) => (
                                <span
                                    key={type}
                                    className="bg-gray-200 rounded-full text-gray-700 text-sm font-bold mr-2 mb-2 px-3 py-1"
                                >
                                    {type}
                                </span>
                            ))}
                        </div> */}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
export default Pokemons;
