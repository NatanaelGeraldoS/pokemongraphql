import React from "react";
import { readStoredFavorite } from "../LocalStorage";
import PokemonCard from "./PokemonCard";

const Favorite = () => {
    const ListFavorite = readStoredFavorite();
    console.log(ListFavorite);
    if (ListFavorite === []) {
        return <div>Favorite is Empty</div>;
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 mt-5 px-10 mx-auto">
            {ListFavorite.map((PokemonDetail) => {
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
export default Favorite;
