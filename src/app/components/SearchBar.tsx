import React from 'react';

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
    <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
      <div className="mb-4">
        <input
          type="text"
          placeholder="O que você está buscando?"
          value={props.term}
          onChange={(e) => props.setTerm(e.target.value)}
          className="w-full bg-gray-800 text-white p-3 rounded-md placeholder-gray-400 focus:outline-none focus:ring focus:ring-purple-300"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Localização"
          value={props.location}
          onChange={(e) => props.setLocation(e.target.value)}
          className="w-full bg-gray-800 text-white p-3 rounded-md placeholder-gray-400 focus:outline-none focus:ring focus:ring-purple-300"
        />
      </div>
      <div className="flex justify-center">
        <button className="w-2/3 sm:w-1/3 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300">
          Pesquisar
        </button>
      </div>

      <div className="mt-4 flex space-x-4">
        <button className="flex-1 bg-purple-800 text-white p-3 rounded-md hover:bg-purple-900 transition duration-300">
          Melhor Match
        </button>
        <button className="flex-1 bg-purple-800 text-white p-3 rounded-md hover:bg-purple-900 transition duration-300">
          Mais Avaliado
        </button>
        <button className="flex-1 bg-purple-800 text-white p-3 rounded-md hover:bg-purple-900 transition duration-300">
          Mais Comentado
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
