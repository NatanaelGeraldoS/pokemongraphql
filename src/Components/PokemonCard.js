import React, { useState } from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({ PokemonDetail }) => {
    const { id, name, pokemon_v2_pokemontypes } = PokemonDetail;
    const [imageLoaded, setImageLoaded] = useState(false);

    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
    const targetPage = `/Pokemon/${id}`;

    const typeColors = {
        fire: "bg-red-500 text-white shadow-red-500",
        water: "bg-blue-500 text-white shadow-blue-500",
        grass: "bg-green-500 text-white shadow-green-500",
        electric: "bg-yellow-500 text-black shadow-yellow-500",
        ice: "bg-blue-300 text-black shadow-blue-300",
        fighting: "bg-orange-600 text-white shadow-orange-600",
        poison: "bg-purple-500 text-white shadow-purple-500",
        ground: "bg-yellow-600 text-white shadow-yellow-600",
        flying: "bg-indigo-300 text-black shadow-indigo-300",
        psychic: "bg-pink-500 text-white shadow-pink-500",
        bug: "bg-green-600 text-white shadow-green-600",
        rock: "bg-gray-600 text-white shadow-gray-600",
        ghost: "bg-purple-700 text-white shadow-purple-700",
        dragon: "bg-indigo-600 text-white shadow-indigo-600",
        dark: "bg-gray-900 text-white shadow-gray-900",
        steel: "bg-gray-500 text-white shadow-gray-500",
        fairy: "bg-pink-300 text-black shadow-pink-300",
        normal: "bg-gray-300 text-black shadow-gray-300",
    };

    return (
        <Link
            to={targetPage}
            className="block border border-gray-300 shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
            <div className="relative bg-gray-100 p-4 flex justify-center items-center">
                {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin"></div>
                    </div>
                )}
                <img
                    src={image}
                    alt={name}
                    className={`w-32 h-32 object-contain transition-opacity duration-300 ${
                        imageLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    loading="lazy"
                    onLoad={() => setImageLoaded(true)}
                    onError={(e) => (e.target.src = "/placeholder.png")}
                />
            </div>

            <div className="p-4 text-center">
                <h2 className="font-bold text-lg capitalize mb-2 text-gray-800">
                    {name}
                </h2>

                <div className="flex flex-wrap justify-center">
                    {pokemon_v2_pokemontypes.map(({ pokemon_v2_type }) => (
                        <span
                            key={pokemon_v2_type.id}
                            className={`rounded-full text-xs font-bold px-3 py-1 m-1 shadow-lg ${
                                typeColors[pokemon_v2_type.name] ||
                                "bg-gray-200 text-gray-700"
                            }`}
                        >
                            {pokemon_v2_type.name}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default PokemonCard;
