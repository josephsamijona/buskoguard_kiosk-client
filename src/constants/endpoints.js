// API endpoints
// src/constants/endpoints.js
export const API_ENDPOINTS = {
    BASE_URL: import.meta.env.VITE_API_URL || "https://buskoguard.up.railway.app/api",
    AUTH: {
      NFC_SCAN: "/auth/nfc",
      QR_SCAN: "/auth/qrcode",
      FACE_SCAN: "/auth/face"
    },
    ATTENDANCE: {
      CHECK_IN: "/attendance/check-in",
      CHECK_OUT: "/attendance/check-out",
      PAUSE: "/attendance/pause",
      RESUME: "/attendance/resume",
      STATUS: "/attendance/status"
    },
    EMPLOYEE: {
      PROFILE: "/employee/profile",
      HISTORY: "/employee/history"
    }
  };
  