interface SortButtonProps {
  label: string;
  active: boolean;
  onClick: (label: string) => void;
}

const SortButton: React.FC<SortButtonProps> = ({ label, active, onClick }) => {
  return (
    <button
      onClick={() => onClick(label)}
      className={`px-4 py-2 rounded-md border border-gray-300 text-white hover:border-purple-500 hover:text-purple-500 transition duration-300 ${
        active ? 'border-purple-500 text-purple-500 ' : ''
      }`}
    >
      {label}
    </button>
  );
};

export default SortButton;
