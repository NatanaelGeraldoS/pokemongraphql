import React from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({ PokemonDetail }) => {
    const { id, name, pokemon_v2_pokemontypes } = PokemonDetail;
    console.log(pokemon_v2_pokemontypes);
    const image =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" +
        id +
        ".svg";
    const targetPage = "/Pokemon/" + id;
    return (
        <Link
            to={targetPage}
            className="border border-gray-300 shadow rounded-lg overflow-hidden"
        >
            <div className="bg-gray-100 p-4">
                <img src={image} alt={name} className="w-full h-48" />
            </div>
            <div className="p-4">
                <h2 className="font-bold text-xl mb-2">{name}</h2>
                <div className="flex flex-wrap">
                    {pokemon_v2_pokemontypes.map((type) => {
                        return (
                            <span
                                key={type.pokemon_v2_type.id}
                                className={`bg-gray-200 rounded-full text-gray-700 text-sm font-bold mr-2 mb-2 px-3 py-1 ${type.pokemon_v2_type.name}`}
                            >
                                {type.pokemon_v2_type.name}
                            </span>
                        );
                    })}
                </div>
            </div>
        </Link>
    );
};

export default PokemonCard;
