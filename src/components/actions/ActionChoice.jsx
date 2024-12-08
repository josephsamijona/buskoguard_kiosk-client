import 'react';
import PropTypes from 'prop-types';
import { LogIn, LogOut, Coffee } from 'lucide-react';

const ActionChoice = ({ employeeName, onSelect, onCancel }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-12">Bonjour, {employeeName}</h2>
      <div className="grid grid-cols-3 gap-12">
        <button
          onClick={() => onSelect('checkin')}
          className="h-48 w-64 flex flex-col items-center justify-center p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
        >
          <LogIn className="w-20 h-20 mb-4 text-green-600" />
          <span className="text-2xl">Check-in</span>
        </button>
        <button
          onClick={() => onSelect('checkout')}
          className="h-48 w-64 flex flex-col items-center justify-center p-6 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
        >
          <LogOut className="w-20 h-20 mb-4 text-red-600" />
          <span className="text-2xl">Check-out</span>
        </button>
        <button
          onClick={() => onSelect('pause')}
          className="h-48 w-64 flex flex-col items-center justify-center p-6 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
        >
          <Coffee className="w-20 h-20 mb-4 text-orange-600" />
          <span className="text-2xl">Pause</span>
        </button>
      </div>
      <button
        onClick={onCancel}
        className="mt-8 px-8 py-3 bg-gray-100 rounded-lg text-xl hover:bg-gray-200"
      >
        Annuler
      </button>
    </div>
  );
};

ActionChoice.propTypes = {
  employeeName: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default ActionChoice;