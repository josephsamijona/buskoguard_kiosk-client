// src/components/scanner/FaceScanner.jsx
import 'react';
import PropTypes from 'prop-types';
import { Camera } from 'lucide-react';

const FaceScanner = ({ onCancel }) => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-12 flex flex-col items-center">
        <div className="text-center">
          <div className="w-96 h-96 rounded-full border-8 border-purple-500 relative mb-6">
            <div className="absolute inset-0 border-4 border-purple-500 rounded-full animate-pulse" />
            <Camera className="w-24 h-24 text-purple-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <p className="text-3xl">Placez votre visage dans le cadre</p>
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
FaceScanner.propTypes = {
  onCancel: PropTypes.func.isRequired
};

export default FaceScanner;