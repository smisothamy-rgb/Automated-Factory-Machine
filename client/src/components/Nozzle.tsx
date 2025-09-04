import React from 'react';

interface NozzleProps {
  isActive: boolean;
  onClick: () => void;
  label: string;
}

const Nozzle: React.FC<NozzleProps> = ({ isActive, onClick, label }) => {
  return (
    <div
      className={`w-16 h-16 border-2 rounded-lg flex items-center justify-center cursor-pointer ${
        isActive ? 'bg-green-500 border-green-700' : 'bg-gray-600 border-gray-800'
      }`}
      onClick={onClick}
    >
      <span className="text-white font-bold">{label}</span>
    </div>
  );
};

export default Nozzle;
