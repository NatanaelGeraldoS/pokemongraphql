import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { readStoredFavorite, storeFavorite } from "../LocalStorage";

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

    const { loading, error, data } = useQuery(GET_POKEMON, {
        variables: { id: id },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    const { name, height, order, pokemon_species_id,pokemon_v2_pokemontypes } =
        data.pokemon_v2_pokemon[0];

    const onClickFav = () => {
        const storedList = readStoredFavorite();
        var mergedList = [...storedList, { id, name,pokemon_v2_pokemontypes }];
        mergedList.sort((a, b) => a.id - b.id);
        mergedList = Array.from(
            new Set(mergedList.map(JSON.stringify)),
            JSON.parse
        );
        storeFavorite(mergedList);
    };

    const onClickUnFav = () => {
        const storedList = readStoredFavorite();
        var mergedList = [...storedList];
        mergedList = mergedList.filter((x) => x.id !== id);
        storeFavorite(mergedList);
    };

    const image =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" +
        id +
        ".svg";

    return (
        <div className="mt-5 text-center">
            <img src={image} className="text-center mx-auto" />
            <p className="font-bold text-3xl mt-5">{name}</p>
            <p>Height : {height}</p>
            <p>order : {order}</p>
            <p>Species ID : {pokemon_species_id}</p>

            <button
                onClick={onClickFav}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
                Favorite Me
            </button>
            <button
                onClick={onClickUnFav}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
                Unfavorite Me
            </button>
        </div>
    );
};

export default PokemonDetail;
