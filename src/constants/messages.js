export const MESSAGES = {
    SCAN: {
      NFC: {
        START: "Approchez votre carte NFC",
        SUCCESS: "Carte détectée avec succès",
        ERROR: "Erreur lors de la lecture de la carte",
        TIMEOUT: "Délai de lecture dépassé"
      },
      QR: {
        START: "Présentez votre QR code",
        SUCCESS: "QR code scanné avec succès",
        ERROR: "Erreur lors de la lecture du QR code",
        TIMEOUT: "Délai de scan dépassé"
      },
      FACE: {
        START: "Placez votre visage dans le cadre",
        SUCCESS: "Visage reconnu avec succès",
        ERROR: "Erreur lors de la reconnaissance faciale",
        TIMEOUT: "Délai de reconnaissance dépassé"
      }
    },
    ACTIONS: {
      CHECK_IN: {
        CONFIRM: "Confirmer votre arrivée",
        SUCCESS: "Arrivée enregistrée avec succès",
        ERROR: "Erreur lors de l'enregistrement de l'arrivée"
      },
      CHECK_OUT: {
        CONFIRM: "Confirmer votre départ",
        SUCCESS: "Départ enregistré avec succès",
        ERROR: "Erreur lors de l'enregistrement du départ"
      },
      PAUSE: {
        CONFIRM: "Confirmer votre pause",
        SUCCESS: "Pause enregistrée avec succès",
        ERROR: "Erreur lors de l'enregistrement de la pause"
      }
    },
    ERRORS: {
      GENERAL: "Une erreur est survenue",
      NETWORK: "Erreur de connexion au serveur",
      AUTH: "Erreur d'authentification",
      SESSION_EXPIRED: "Votre session a expiré"
    }
  };
  