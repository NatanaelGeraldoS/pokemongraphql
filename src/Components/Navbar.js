import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faHeart,
    faBars,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as PokeballIcon } from "../Assets/Pokeball.svg";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-red-500 sticky top-0 z-50 shadow-lg rounded-b-2xl transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

                <Link to="/" className="flex items-center text-white">
                    <PokeballIcon className="w-8 h-8 fill-current mr-2" />
                    <span className="font-semibold text-xl tracking-tight">
                        Pokedex
                    </span>
                </Link>

                <div className="hidden md:flex space-x-6">
                    <Link
                        to="/Search"
                        className="text-white hover:text-gray-300 transition duration-200 flex items-center space-x-2"
                    >
                        <FontAwesomeIcon icon={faSearch} />
                        <span className="hidden sm:inline">Search</span>
                    </Link>
                    <Link
                        to="/Favorite"
                        className="text-white hover:text-gray-300 transition duration-200 flex items-center space-x-2"
                    >
                        <FontAwesomeIcon icon={faHeart} />
                        <span className="hidden sm:inline">Favorites</span>
                    </Link>
                </div>

                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                </button>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-red-600 py-2 rounded-b-2xl text-center transition-all duration-300">
                    <Link
                        to="/Search"
                        className="block py-2 text-white hover:bg-red-700 transition-all duration-200"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <FontAwesomeIcon icon={faSearch} className="mr-2" />
                        Search
                    </Link>
                    <Link
                        to="/Favorite"
                        className="block py-2 text-white hover:bg-red-700 transition-all duration-200"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <FontAwesomeIcon icon={faHeart} className="mr-2" />
                        Favorites
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
