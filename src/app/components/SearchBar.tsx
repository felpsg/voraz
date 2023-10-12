import React from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

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
    <div className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="flex flex-col space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="O que você está buscando?"
            value={props.term}
            onChange={(e) => props.setTerm(e.target.value)}
            className="w-full p-3 rounded-md border border-gray-300 text-black placeholder-gray-400 focus:outline-none hover:border-purple-500 transition duration-300 pl-10"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FaSearch />
          </span>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Localização"
            value={props.location}
            onChange={(e) => props.setLocation(e.target.value)}
            className="w-full p-3 rounded-md border border-gray-300 text-black placeholder-gray-400 focus:outline-none hover:border-purple-500 transition duration-300 pl-10"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FaMapMarkerAlt />
          </span>
        </div>
      </div>
      <div className="mt-4 flex space-x-4">
        {['Melhor Match', 'Mais Avaliado', 'Mais Comentado'].map(
          (label, index) => (
            <button
              key={index}
              onClick={() => props.setSortBy(label)}
              className={`flex-1 p-3 rounded-md border border-gray-300 text-white hover:border-purple-500 hover:text-purple-500 transition duration-300 ${
                props.sortBy === label
                  ? 'border-purple-500 text-purple-500'
                  : ''
              }`}
            >
              {label}
            </button>
          ),
        )}
      </div>
      <div className="mt-4 flex justify-center">
        <button
          onClick={() =>
            props.searchYelp(props.term, props.location, props.sortBy)
          }
          className="w-2/3 sm:w-1/3 p-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-md hover:from-purple-600 hover:to-indigo-600 transition duration-300 shadow-lg"
        >
          Pesquisar
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
