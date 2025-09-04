import React from 'react';

interface InventoryManagementProps {
  hopperLevel: number; // as a percentage
}

const InventoryManagement: React.FC<InventoryManagementProps> = ({ hopperLevel }) => {
  const isLow = hopperLevel < 20;

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-bold mb-4">Inventory Management</h2>
      <div className="flex items-center justify-between">
        <span className="text-lg">Hopper Level:</span>
        <span className={`text-lg font-bold ${isLow ? 'text-red-500' : 'text-green-500'}`}>
          {hopperLevel.toFixed(1)}%
        </span>
      </div>
      {isLow && (
        <div className="mt-4 p-4 bg-red-900 border border-red-700 rounded-lg text-center">
          <p className="font-bold text-lg">ALERT: Hopper level is low!</p>
        </div>
      )}
    </div>
  );
};

export default InventoryManagement;
