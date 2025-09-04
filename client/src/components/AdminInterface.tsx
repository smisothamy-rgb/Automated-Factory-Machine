import React from 'react';

const AdminInterface: React.FC = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-bold mb-4">Admin Controls</h2>
      <div className="flex flex-col space-y-4">
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Add Product
        </button>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Remove Product
        </button>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Add User
        </button>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Remove User
        </button>
      </div>
    </div>
  );
};

export default AdminInterface;
