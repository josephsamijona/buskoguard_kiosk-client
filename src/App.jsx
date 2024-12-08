// src/App.jsx
import  { useState } from 'react';
import MainLayout from './components/layout/MainLayout';
import { NFCScanner, QRScanner, FaceScanner } from './components/scanner';
import ActionChoice from './components/actions/ActionChoice';
import ConfirmationDialog from './components/actions/ConfirmationDialog';
import { CreditCard, QrCode, Camera } from 'lucide-react';

const App = () => {
  // États de l'application
  const [scanMode, setScanMode] = useState(null);
  const [employee, setEmployee] = useState(null);
  const [selectedAction, setSelectedAction] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Gestion des scans
  const handleScan = (mode) => {
    setScanMode(mode);
    // Simuler une authentification réussie après 2 secondes
    setTimeout(() => {
      handleScanSuccess({ id: '123', name: 'John Doe' });
    }, 2000);
  };

  const handleScanSuccess = (employeeData) => {
    setEmployee(employeeData);
    setScanMode(null);
  };

  // Gestion des actions
  const handleActionSelect = (action) => {
    setSelectedAction(action);
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    // Ici, vous ajouterez plus tard la logique pour envoyer l'action au backend
    console.log('Action confirmée:', {
      employee,
      action: selectedAction,
      timestamp: new Date()
    });
    resetState();
  };

  const handleCancel = () => {
    resetState();
  };

  // Réinitialiser l'état
  const resetState = () => {
    setScanMode(null);
    setEmployee(null);
    setSelectedAction(null);
    setShowConfirmation(false);
  };

  return (
    <MainLayout>
      {/* Écran de sélection du mode de scan */}
      {!scanMode && !employee && !showConfirmation && (
        <div className="h-full flex">
          <div className="flex-1 grid grid-cols-3 gap-8 place-content-center">
            <button
              onClick={() => handleScan('nfc')}
              className="h-64 flex flex-col items-center justify-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <CreditCard className="w-24 h-24 mb-4 text-blue-600" />
              <span className="text-2xl font-medium">Scanner NFC</span>
            </button>
            <button
              onClick={() => handleScan('qr')}
              className="h-64 flex flex-col items-center justify-center p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <QrCode className="w-24 h-24 mb-4 text-green-600" />
              <span className="text-2xl font-medium">Scanner QR Code</span>
            </button>
            <button
              onClick={() => handleScan('face')}
              className="h-64 flex flex-col items-center justify-center p-6 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <Camera className="w-24 h-24 mb-4 text-purple-600" />
              <span className="text-2xl font-medium">Reconnaissance Faciale</span>
            </button>
          </div>
        </div>
      )}

      {/* Composants de scan */}
      {scanMode === 'nfc' && <NFCScanner onCancel={handleCancel} />}
      {scanMode === 'qr' && <QRScanner onCancel={handleCancel} />}
      {scanMode === 'face' && <FaceScanner onCancel={handleCancel} />}

      {/* Choix d'action après authentification */}
      {employee && !showConfirmation && (
        <ActionChoice
          employeeName={employee.name}
          onSelect={handleActionSelect}
          onCancel={handleCancel}
        />
      )}

      {/* Dialog de confirmation */}
      {showConfirmation && (
        <ConfirmationDialog
          action={selectedAction}
          employeeName={employee.name}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </MainLayout>
  );
};

export default App;