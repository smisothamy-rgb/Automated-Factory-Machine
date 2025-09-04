import React from 'react';
import Capper from './Capper';

interface CapperState {
  id: number;
  isActive: boolean;
}

interface CapperGridProps {
  cappers: CapperState[];
  onToggleCapper: (id: number) => void;
  onToggleAllCappers: (state: boolean) => void;
  activeCappersCount: number;
}

const CapperGrid: React.FC<CapperGridProps> = ({
  cappers,
  onToggleCapper,
  onToggleAllCappers,
  activeCappersCount,
}) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-bold mb-4">Capper System Control</h2>
      <div className="flex justify-between items-center mb-4">
        <div>
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={() => onToggleAllCappers(true)}
          >
            All ON
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => onToggleAllCappers(false)}
          >
            All OFF
          </button>
        </div>
        <div className="text-xl">
          Active Cappers: <span className="font-bold">{activeCappersCount}</span> / 20
        </div>
      </div>
      <div className="grid grid-cols-10 gap-4">
        {cappers.map((capper) => (
          <Capper
            key={capper.id}
            isActive={capper.isActive}
            onClick={() => onToggleCapper(capper.id)}
            label={`${capper.id + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CapperGrid;
