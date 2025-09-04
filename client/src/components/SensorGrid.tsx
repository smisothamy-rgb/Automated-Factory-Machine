import React from 'react';
import Sensor from './Sensor';

interface SensorState {
  name: string;
  isActive: boolean;
}

interface SensorGridProps {
  sensors: SensorState[];
}

const SensorGrid: React.FC<SensorGridProps> = ({ sensors }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-bold mb-4">Sensor Monitoring</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sensors.map((sensor) => (
          <Sensor key={sensor.name} name={sensor.name} isActive={sensor.isActive} />
        ))}
      </div>
    </div>
  );
};

export default SensorGrid;
