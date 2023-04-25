import React from "react";
import { useQuery, gql } from "@apollo/client";
import PokemonCard from "./PokemonCard";

const GET_POKEMONS = gql`
    query ($name: String) {
        pokemon_v2_pokemon(where: { name: { _ilike: $name } }) {
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
const SearchPokemon = ({ pokemonSearch }) => {
    const { loading, error, data } = useQuery(GET_POKEMONS, {
        variables: { name: "%" + pokemonSearch + "%" },
    });
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

export default SearchPokemon;
