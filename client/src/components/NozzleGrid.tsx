import React from 'react';
import Nozzle from './Nozzle';

interface NozzleState {
  id: number;
  isActive: boolean;
}

interface NozzleGridProps {
  nozzles: NozzleState[];
  onToggleNozzle: (id: number) => void;
  onToggleAllNozzles: (state: boolean) => void;
  activeNozzlesCount: number;
}

const NozzleGrid: React.FC<NozzleGridProps> = ({
  nozzles,
  onToggleNozzle,
  onToggleAllNozzles,
  activeNozzlesCount,
}) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Filling Nozzles Control</h2>
      <div className="flex justify-between items-center mb-4">
        <div>
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={() => onToggleAllNozzles(true)}
          >
            All ON
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => onToggleAllNozzles(false)}
          >
            All OFF
          </button>
        </div>
        <div className="text-xl">
          Active Nozzles: <span className="font-bold">{activeNozzlesCount}</span> / 20
        </div>
      </div>
      <div className="grid grid-cols-10 gap-4">
        {nozzles.map((nozzle) => (
          <Nozzle
            key={nozzle.id}
            isActive={nozzle.isActive}
            onClick={() => onToggleNozzle(nozzle.id)}
            label={`${nozzle.id + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NozzleGrid;
