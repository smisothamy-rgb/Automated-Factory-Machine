import React, { useState, useEffect } from 'react';
import NozzleGrid from './components/NozzleGrid';
import CapperGrid from './components/CapperGrid';
import SensorGrid from './components/SensorGrid';
import GroupingStation from './components/GroupingStation';
import ProductionTracking from './components/ProductionTracking';
import SystemFeatures from './components/SystemFeatures';
import OperatorInterface from './components/OperatorInterface';
import AdminInterface from './components/AdminInterface';
import InventoryManagement from './components/InventoryManagement';

interface ItemState {
  id: number;
  isActive: boolean;
}

interface SensorState {
  name: string;
  isActive: boolean;
}

const SENSOR_NAMES = [
  'Feeder Sensor',
  'Labeling Sensor',
  'Date Coder Sensor',
  'Quality Sensor',
  'Filling Sensor',
  'Capping Sensor',
  'Grouping Sensor',
];

function App() {
  const [nozzles, setNozzles] = useState<ItemState[]>(
    Array.from({ length: 20 }, (_, i) => ({ id: i, isActive: true }))
  );

  const [cappers, setCappers] = useState<ItemState[]>(
    Array.from({ length: 20 }, (_, i) => ({ id: i, isActive: true }))
  );

  const [sensors, setSensors] = useState<SensorState[]>(
    SENSOR_NAMES.map((name) => ({ name, isActive: true }))
  );

  const [packSize, setPackSize] = useState(12);
  const [packagedBottles, setPackagedBottles] = useState(0);
  const [packagesComplete, setPackagesComplete] = useState(0);

  const [bottlesProcessed, setBottlesProcessed] = useState(0);
  const [bottlesFilled, setBottlesFilled] = useState(0);
  const [bottlesCapped, setBottlesCapped] = useState(0);

  const [isEmergencyStopped, setEmergencyStopped] = useState(false);

  const [productType, setProductType] = useState('Water');
  const [bottleSize, setBottleSize] = useState(500);

  const [hopperLevel, setHopperLevel] = useState(100);

  useEffect(() => {
    if (isEmergencyStopped) return;

    const sensorInterval = setInterval(() => {
      setSensors((prevSensors) =>
        prevSensors.map((sensor) => ({
          ...sensor,
          isActive: Math.random() > 0.1,
        }))
      );
    }, 2000);

    const productionInterval = setInterval(() => {
      const allSensorsActive = sensors.every((s) => s.isActive);
      if (!allSensorsActive) return;

      const newProcessed = Math.floor(Math.random() * 5);
      setBottlesProcessed((prev) => prev + newProcessed);

      const newFilled = Math.min(newProcessed, nozzles.filter((n) => n.isActive).length);
      setBottlesFilled((prev) => prev + newFilled);
      setHopperLevel(prev => Math.max(0, prev - newFilled * 0.1));

      const newCapped = Math.min(newFilled, cappers.filter(c => c.isActive).length);
      setBottlesCapped(prev => prev + newCapped);

      setPackagedBottles(prev => {
        const newTotal = prev + newCapped;
        if (newTotal >= packSize) {
          setPackagesComplete(prevPkgs => prevPkgs + Math.floor(newTotal / packSize));
          return newTotal % packSize;
        }
        return newTotal;
      });

    }, 1500);

    return () => {
      clearInterval(sensorInterval);
      clearInterval(productionInterval);
    };
  }, [sensors, nozzles, cappers, packSize, isEmergencyStopped]);

  const handleToggleNozzle = (id: number) => {
    setNozzles((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item
      )
    );
  };

  const handleToggleAllNozzles = (state: boolean) => {
    setNozzles((prev) => prev.map((item) => ({ ...item, isActive: state })));
  };

  const handleToggleCapper = (id: number) => {
    setCappers((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item
      )
    );
  };

  const handleToggleAllCappers = (state: boolean) => {
    setCappers((prev) => prev.map((item) => ({ ...item, isActive: state })));
  };

  const handleEmergencyStop = () => {
    setEmergencyStopped(true);
    handleToggleAllNozzles(false);
    handleToggleAllCappers(false);
  };

  const activeNozzlesCount = nozzles.filter((n) => n.isActive).length;
  const activeCappersCount = cappers.filter((c) => c.isActive).length;
  const successRate = bottlesProcessed > 0 ? (bottlesCapped / bottlesProcessed) * 100 : 100;

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Bottling Plant Control</h1>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2">
            <NozzleGrid
              nozzles={nozzles}
              onToggleNozzle={handleToggleNozzle}
              onToggleAllNozzles={handleToggleAllNozzles}
              activeNozzlesCount={activeNozzlesCount}
            />
            <CapperGrid
              cappers={cappers}
              onToggleCapper={handleToggleCapper}
              onToggleAllCappers={handleToggleAllCappers}
              activeCappersCount={activeCappersCount}
            />
            <SystemFeatures onEmergencyStop={handleEmergencyStop} />
          </div>
          <div>
            <OperatorInterface
              productType={productType}
              setProductType={setProductType}
              bottleSize={bottleSize}
              setBottleSize={setBottleSize}
            />
            <AdminInterface />
            <InventoryManagement hopperLevel={hopperLevel} />
            <SensorGrid sensors={sensors} />
            <GroupingStation
              packSize={packSize}
              setPackSize={setPackSize}
              packagedBottles={packagedBottles}
            />
            <ProductionTracking
              bottlesProcessed={bottlesProcessed}
              bottlesFilled={bottlesFilled}
              bottlesCapped={bottlesCapped}
              packagesComplete={packagesComplete}
              successRate={successRate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
