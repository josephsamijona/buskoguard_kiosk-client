// src/constants/types.js
export const ATTENDANCE_TYPES = {
    CHECK_IN: "checkin",
    CHECK_OUT: "checkout",
    PAUSE: "pause",
    RESUME: "resume"
  };
  
  export const SCAN_MODES = {
    NFC: "nfc",
    QR: "qr",
    FACE: "face"
  };
  
  export const USER_ROLES = {
    EMPLOYEE: "employee",
    ADMIN: "admin",
    MANAGER: "manager"
  };
  
  export const STATUS_CODES = {
    SUCCESS: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    SERVER_ERROR: 500
  };