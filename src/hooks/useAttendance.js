// src/hooks/useAttendance.js
import { useState } from 'react';

const useAttendance = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitAttendance = async (employeeId, action) => {
    setLoading(true);
    setError(null);

    try {
      // Simuler un appel API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Plus tard, vous ajouterez ici l'appel API réel
      console.log('Attendance submitted:', { employeeId, action });
      
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    submitAttendance
  };
};

export default useAttendance;
