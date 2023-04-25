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
    const { loading, error, data } = useQuery(GET_POKEMONS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 mt-5 px-10 mx-auto">
            {data.pokemon_v2_pokemon.map((PokemonDetail) => {
                return (
                    <PokemonCard
                        PokemonDetail={PokemonDetail}
                        key={PokemonDetail.id}
                    />
                );
            })}
        </div>
    );
};
export default Pokemons;
