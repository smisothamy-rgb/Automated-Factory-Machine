import React from 'react';

interface CapperProps {
  isActive: boolean;
  onClick: () => void;
  label: string;
}

const Capper: React.FC<CapperProps> = ({ isActive, onClick, label }) => {
  return (
    <div
      className={`w-16 h-16 border-2 rounded-lg flex items-center justify-center cursor-pointer ${
        isActive ? 'bg-purple-500 border-purple-700' : 'bg-gray-600 border-gray-800'
      }`}
      onClick={onClick}
    >
      <span className="text-white font-bold">{label}</span>
    </div>
  );
};

export default Capper;
