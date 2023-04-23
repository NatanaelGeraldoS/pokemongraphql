import React from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({ PokemonDetail }) => {
    const { id, name } = PokemonDetail;
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
        </Link>
    );
};

export default PokemonCard;
