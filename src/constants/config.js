// Configuration constants
// src/constants/config.js
export const APP_CONFIG = {
    NAME: "Système d'Attendance",
    VERSION: "1.0.0",
    THEME: {
      PRIMARY_COLOR: "blue",
      SECONDARY_COLOR: "gray",
      SUCCESS_COLOR: "green",
      ERROR_COLOR: "red",
      WARNING_COLOR: "orange"
    },
    TIMEOUTS: {
      SCAN_TIMEOUT: 30000, // 30 secondes pour le scan
      SESSION_TIMEOUT: 60000, // 1 minute d'inactivité
      ANIMATION_DURATION: 200 // 200ms pour les animations
    },
    STORAGE_KEYS: {
      AUTH_TOKEN: "attendance_auth_token",
      USER_PREFERENCES: "attendance_preferences",
      LAST_SESSION: "attendance_last_session"
    }
  };