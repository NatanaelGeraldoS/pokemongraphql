import { useParams } from "react-router-dom";

function PokemonDetail() {
    const { id } = useParams();
    // Do something with the id parameter
    return <div>Pokemon Details for id {id}</div>;
}

export default PokemonDetail;
