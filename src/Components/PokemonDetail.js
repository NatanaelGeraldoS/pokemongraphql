import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const GET_POKEMON = gql`
    query ($id: Int) {
        pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
            id
            name
            pokemon_v2_pokemonsprites {
                id
                sprites
            }
        }
    }
`;
function PokemonDetail() {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_POKEMON, {
        variables: { id: id },
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    console.log(data.pokemon_v2_pokemon);
    return <div>Pokemon Details for id {id}</div>;
}

export default PokemonDetail;
