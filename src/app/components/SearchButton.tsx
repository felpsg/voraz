interface SearchButtonProps {
  searchYelp: (term: string, location: string, sortBy: string) => void;
  term: string;
  location: string;
  sortBy: string;
}

const SearchButton: React.FC<SearchButtonProps> = ({
  searchYelp,
  term,
  location,
  sortBy,
}) => {
  return (
    <button
      onClick={() => searchYelp(term, location, sortBy)}
      className="px-20 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-md hover:from-purple-600 hover:to-indigo-600 transition duration-300 shadow-lg"
    >
      Pesquisar
    </button>
  );
};

export default SearchButton;
