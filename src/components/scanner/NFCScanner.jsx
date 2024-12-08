// src/components/scanner/NFCScanner.jsx
import  'react';
import PropTypes from 'prop-types';
import { CreditCard } from 'lucide-react';

const NFCScanner = ({ onCancel }) => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-12 flex flex-col items-center">
        <div className="animate-pulse text-center">
          <CreditCard className="w-40 h-40 text-blue-600 mb-6" />
          <p className="text-3xl">Approchez votre carte NFC</p>
        </div>
        <button
          onClick={onCancel}
          className="mt-8 px-8 py-3 bg-gray-100 rounded-lg text-xl hover:bg-gray-200"
        >
          Annuler
        </button>
      </div>
    </div>
  );
};

// Ajout de la validation des props
NFCScanner.propTypes = {
  onCancel: PropTypes.func.isRequired
};

export default NFCScanner;