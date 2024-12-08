import  'react';
import PropTypes from 'prop-types';

const ConfirmationDialog = ({ action, employeeName, onConfirm, onCancel }) => {
  const date = new Date();

  const getActionText = (action) => {
    switch (action) {
      case 'checkin': return 'Check-in';
      case 'checkout': return 'Check-out';
      case 'pause': return 'Pause';
      default: return action;
    }
  };

  return (
    <div className="h-full flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-12 w-2/3">
        <h2 className="text-3xl font-bold text-center mb-8">
          Confirmation {getActionText(action)}
        </h2>
        <div className="grid grid-cols-2 gap-6 text-xl mb-12">
          <p><strong>Employé:</strong> {employeeName}</p>
          <p><strong>Action:</strong> {getActionText(action)}</p>
          <p><strong>Date:</strong> {date.toLocaleDateString()}</p>
          <p><strong>Heure:</strong> {date.toLocaleTimeString()}</p>
        </div>
        <div className="flex justify-center gap-8">
          <button
            onClick={onConfirm}
            className="px-12 py-4 bg-blue-500 text-white text-xl rounded-lg hover:bg-blue-600 transition-colors"
          >
            Confirmer
          </button>
          <button
            onClick={onCancel}
            className="px-12 py-4 bg-gray-100 text-xl rounded-lg hover:bg-gray-200 transition-colors"
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};

ConfirmationDialog.propTypes = {
  action: PropTypes.oneOf(['checkin', 'checkout', 'pause']).isRequired,
  employeeName: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default ConfirmationDialog;