import React from 'react';

interface ProductionTrackingProps {
  bottlesProcessed: number;
  bottlesFilled: number;
  bottlesCapped: number;
  packagesComplete: number;
  successRate: number;
}

const ProductionTracking: React.FC<ProductionTrackingProps> = ({
  bottlesProcessed,
  bottlesFilled,
  bottlesCapped,
  packagesComplete,
  successRate,
}) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-bold mb-4">Production Tracking</h2>
      <div className="grid grid-cols-2 gap-4 text-lg">
        <div className="bg-gray-700 p-4 rounded-lg">
          <p className="font-bold">Bottles Processed:</p>
          <p>{bottlesProcessed}</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <p className="font-bold">Bottles Filled:</p>
          <p>{bottlesFilled}</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <p className="font-bold">Bottles Capped:</p>
          <p>{bottlesCapped}</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <p className="font-bold">Packages Complete:</p>
          <p>{packagesComplete}</p>
        </div>
        <div className="bg-green-700 p-4 rounded-lg col-span-2">
          <p className="font-bold">Success Rate:</p>
          <p>{successRate.toFixed(2)}%</p>
        </div>
      </div>
    </div>
  );
};

export default ProductionTracking;
