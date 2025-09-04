import React from 'react';

interface SystemFeaturesProps {
  onEmergencyStop: () => void;
}

const SystemFeatures: React.FC<SystemFeaturesProps> = ({ onEmergencyStop }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-bold mb-4">System Features</h2>
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Quality Control
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Date Coding
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Auto Labeling
        </button>
        <button
          className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded col-span-2"
          onClick={onEmergencyStop}
        >
          EMERGENCY STOP
        </button>
      </div>
    </div>
  );
};

export default SystemFeatures;
