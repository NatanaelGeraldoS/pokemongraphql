import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHeart } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as PokeballIcon } from "./Assets/Pokeball.svg";
const Navbar = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-red-500 p-6 py-3 drop-shadow-lg rounded-b-2xl sticky top-0 w-full">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <PokeballIcon className="w-8 h-8 fill-current mr-2" />
                <span className="font-semibold text-xl tracking-tight">
                    Pokedex
                </span>
            </div>
            <div className="flex items-center">
                <div className="text-white hover:text-gray-300 transition-all duration-200 cursor-pointer font-semibold py-2 px-4 mr-2">
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                <div className="text-white hover:text-gray-300 transition-all duration-200 cursor-pointer font-semibold py-2 px-4 mr-2">
                    <FontAwesomeIcon icon={faHeart} />
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
