import React from 'react';

interface GroupingStationProps {
  packSize: number;
  setPackSize: (size: number) => void;
  packagedBottles: number;
}

const GroupingStation: React.FC<GroupingStationProps> = ({
  packSize,
  setPackSize,
  packagedBottles,
}) => {
  const progress = (packagedBottles / packSize) * 100;

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-bold mb-4">Grouping Station</h2>
      <div className="flex items-center mb-4">
        <label htmlFor="pack-size" className="mr-4 text-lg">
          Pack Size:
        </label>
        <input
          type="number"
          id="pack-size"
          min="1"
          max="20"
          value={packSize}
          onChange={(e) => setPackSize(parseInt(e.target.value, 10))}
          className="bg-gray-700 text-white rounded-md p-2 w-24 text-center"
        />
      </div>
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-base font-medium text-gray-300">Package Progress</span>
          <span className="text-sm font-medium text-gray-300">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-4">
          <div
            className="bg-blue-500 h-4 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div className="grid grid-cols-10 gap-2">
        {Array.from({ length: packSize }).map((_, i) => (
          <div
            key={i}
            className={`w-12 h-12 rounded-full border-2 ${
              i < packagedBottles ? 'bg-blue-400 border-blue-600' : 'bg-gray-600 border-gray-700'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GroupingStation;
