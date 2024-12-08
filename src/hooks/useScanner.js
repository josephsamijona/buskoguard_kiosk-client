// src/hooks/useScanner.js
import { useState, useCallback } from 'react';

const useScanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState(null);

  const startScanning = useCallback(async (mode) => {
    setIsScanning(true);
    setError(null);

    try {
      // Simulation différente selon le mode de scan
      switch (mode) {
        case 'nfc':
          await new Promise((resolve) => setTimeout(resolve, 2000));
          return { id: '123', name: 'John Doe', scanType: 'nfc' };
          
        case 'qr':
          await new Promise((resolve) => setTimeout(resolve, 2000));
          return { id: '456', name: 'Jane Doe', scanType: 'qr' };
          
        case 'face':
          await new Promise((resolve) => setTimeout(resolve, 2000));
          return { id: '789', name: 'Jim Doe', scanType: 'face' };
          
        default:
          throw new Error('Mode de scan non supporté');
      }
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsScanning(false);
    }
  }, []);

  const stopScanning = useCallback(() => {
    setIsScanning(false);
    setError(null);
  }, []);

  return {
    isScanning,
    error,
    startScanning,
    stopScanning
  };
};

export default useScanner;