import React from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import SortButton from './SortButton';
import SearchButton from './SearchButton';
import Link from 'next/link';

interface SearchBarProps {
  term: string;
  location: string;
  sortBy: string;
  setTerm: React.Dispatch<React.SetStateAction<string>>;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  searchYelp(term: string, location: string, sortBy: string): void;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
  return (
    <div className="relative w-full">
      <video
        autoPlay
        muted
        loop
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/restaurant.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
      <div className="relative z-10 p-6 text-center">
        <Link href="/" className="block mb-6">
          <h1 className="text-4xl font-bold mb-6 gradient-text">Voraz</h1>
        </Link>

        <div className="mb-6 space-x-4">
          {['Melhor Match', 'Mais Avaliado', 'Mais Comentado'].map((label) => (
            <SortButton
              key={label}
              label={label}
              active={props.sortBy === label}
              onClick={props.setSortBy}
            />
          ))}
        </div>
        <div className="flex items-center space-x-4 mb-6 justify-center">
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="O que você está buscando?"
              value={props.term}
              onChange={(e) => props.setTerm(e.target.value)}
              className="w-full p-2 rounded-md border border-gray-300 text-black placeholder-gray-400 focus:outline-none hover:border-purple-500 transition duration-300 pl-8"
            />
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaSearch size={14} />
            </span>
          </div>
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Localização"
              value={props.location}
              onChange={(e) => props.setLocation(e.target.value)}
              className="w-full p-2 rounded-md border border-gray-300 text-black placeholder-gray-400 focus:outline-none hover:border-purple-500 transition duration-300 pl-8"
            />
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaMapMarkerAlt size={14} />
            </span>
          </div>
        </div>
        <div>
          <SearchButton
            searchYelp={props.searchYelp}
            term={props.term}
            location={props.location}
            sortBy={props.sortBy}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
