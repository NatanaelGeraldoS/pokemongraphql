import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { readStoredFavorite, storeFavorite } from "../LocalStorage";
import { useState, useEffect } from "react";

const GET_POKEMON = gql`
    query ($id: Int) {
        pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
            id
            name
            height
            order
            pokemon_species_id
            pokemon_v2_pokemontypes {
                pokemon_v2_type {
                    name
                    id
                }
            }
        }
    }
`;

const PokemonDetail = () => {
    const { id } = useParams();
    const pokemonId = parseInt(id, 10);

    const { loading, error, data } = useQuery(GET_POKEMON, {
        variables: { id: pokemonId },
    });

    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const storedList = readStoredFavorite();
        setIsFavorite(storedList.some((p) => p.id === pokemonId));
    }, [pokemonId]);

    if (loading)
        return (
            <p className="text-center mt-5 text-xl text-gray-600">Loading...</p>
        );
    if (error)
        return (
            <p className="text-center mt-5 text-xl text-red-600">
                Error: {error.message}
            </p>
        );

    const { name, height, order, pokemon_species_id, pokemon_v2_pokemontypes } =
        data.pokemon_v2_pokemon[0];

    const toggleFavorite = () => {
        let storedList = readStoredFavorite();

        if (isFavorite) {
            storedList = storedList.filter((p) => p.id !== pokemonId);
        } else {
            storedList = [
                ...storedList,
                { id: pokemonId, name, pokemon_v2_pokemontypes },
            ];
            storedList.sort((a, b) => a.id - b.id);
            storedList = Array.from(
                new Set(storedList.map(JSON.stringify)),
                JSON.parse
            );
        }

        storeFavorite(storedList);
        setIsFavorite(!isFavorite);
    };

    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

    const typeColors = {
        fire: "bg-red-500 text-white",
        water: "bg-blue-500 text-white",
        grass: "bg-green-500 text-white",
        electric: "bg-yellow-500 text-black",
        ice: "bg-blue-300 text-black",
        fighting: "bg-orange-600 text-white",
        poison: "bg-purple-500 text-white",
        ground: "bg-yellow-600 text-white",
        flying: "bg-indigo-300 text-black",
        psychic: "bg-pink-500 text-white",
        bug: "bg-green-600 text-white",
        rock: "bg-gray-600 text-white",
        ghost: "bg-purple-700 text-white",
        dragon: "bg-indigo-600 text-white",
        dark: "bg-gray-900 text-white",
        steel: "bg-gray-500 text-white",
        fairy: "bg-pink-300 text-black",
        normal: "bg-gray-300 text-black",
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
            <div className="bg-white shadow-lg rounded-lg p-6 w-96 text-center border border-gray-200">
                <div className="relative">
                    <div className="bg-gray-100 p-4 rounded-full mx-auto w-48 h-48 flex justify-center items-center">
                        <img
                            src={image}
                            alt={name}
                            className="w-40 h-40 object-contain"
                            loading="lazy"
                            onError={(e) => (e.target.src = "/placeholder.png")}
                        />
                    </div>
                </div>

                <h2 className="font-bold text-2xl capitalize text-gray-800 mt-3">
                    {name}
                </h2>

                <p className="text-gray-600 text-lg mt-2">
                    Height: <span className="font-semibold">{height}</span>
                </p>
                <p className="text-gray-600 text-lg">
                    Order: <span className="font-semibold">{order}</span>
                </p>
                <p className="text-gray-600 text-lg">
                    Species ID:{" "}
                    <span className="font-semibold">{pokemon_species_id}</span>
                </p>

                <div className="mt-3 flex flex-wrap justify-center gap-2">
                    {pokemon_v2_pokemontypes.map(({ pokemon_v2_type }) => (
                        <span
                            key={pokemon_v2_type.id}
                            className={`rounded-full text-xs font-bold px-3 py-1 shadow ${
                                typeColors[pokemon_v2_type.name] ||
                                "bg-gray-200 text-gray-700"
                            }`}
                        >
                            {pokemon_v2_type.name}
                        </span>
                    ))}
                </div>

                <button
                    onClick={toggleFavorite}
                    className={`mt-5 font-bold py-2 px-5 rounded-full transition shadow-md flex items-center justify-center gap-2 w-full ${
                        isFavorite
                            ? "bg-gray-500 hover:bg-gray-700 text-white"
                            : "bg-red-500 hover:bg-red-700 text-white"
                    }`}
                >
                    {isFavorite ? (
                        <>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-5 h-5"
                            >
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                            Unfavorite
                        </>
                    ) : (
                        <>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                className="w-5 h-5"
                            >
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                            Favorite
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default PokemonDetail;
