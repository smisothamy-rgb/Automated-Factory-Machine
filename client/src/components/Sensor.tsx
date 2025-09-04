import React from 'react';

interface SensorProps {
  name: string;
  isActive: boolean;
}

const Sensor: React.FC<SensorProps> = ({ name, isActive }) => {
  const statusColor = isActive ? 'bg-green-500' : 'bg-red-500';
  const statusText = isActive ? 'Active' : 'Inactive';

  return (
    <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
      <span className="text-lg font-medium">{name}</span>
      <div className="flex items-center">
        <div className={`w-4 h-4 rounded-full mr-2 ${statusColor}`}></div>
        <span>{statusText}</span>
      </div>
    </div>
  );
};

export default Sensor;
