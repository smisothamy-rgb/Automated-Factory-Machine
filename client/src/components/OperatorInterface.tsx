import React from 'react';

interface OperatorInterfaceProps {
  productType: string;
  setProductType: (type: string) => void;
  bottleSize: number;
  setBottleSize: (size: number) => void;
}

const OperatorInterface: React.FC<OperatorInterfaceProps> = ({
  productType,
  setProductType,
  bottleSize,
  setBottleSize,
}) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-bold mb-4">Operator Controls</h2>
      <div className="flex flex-col space-y-4">
        <div>
          <label htmlFor="product-type" className="block mb-2 text-lg">
            Product Type:
          </label>
          <select
            id="product-type"
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
            className="bg-gray-700 text-white rounded-md p-2 w-full"
          >
            <option>Water</option>
            <option>Juice</option>
            <option>Soda</option>
          </select>
        </div>
        <div>
          <label htmlFor="bottle-size" className="block mb-2 text-lg">
            Bottle Size (ml):
          </label>
          <select
            id="bottle-size"
            value={bottleSize}
            onChange={(e) => setBottleSize(parseInt(e.target.value, 10))}
            className="bg-gray-700 text-white rounded-md p-2 w-full"
          >
            <option>250</option>
            <option>500</option>
            <option>750</option>
            <option>1000</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default OperatorInterface;
