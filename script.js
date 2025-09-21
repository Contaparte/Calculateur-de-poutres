// Table des données Versa-Lam 2.0E extraite du Guide du concepteur page 5
const VERSA_LAM_TABLE = {
    6: {
        "7¼": { wv: 762, wt: null, wf: 1399 },
        "9¼": { wv: null, wt: null, wf: 1885 },
        "9½": { wv: null, wt: null, wf: 1950 },
        "11¼": { wv: null, wt: null, wf: 2429 },
        "11⅞": { wv: null, wt: null, wf: 2613 },
        "14": { wv: null, wt: null, wf: 3292 }
    },
    8: {
        "7¼": { wv: 321, wt: 478, wf: 947 },
        "9¼": { wv: 667, wt: null, wf: 1326 },
        "9½": { wv: 723, wt: null, wf: 1369 },
        "11¼": { wv: null, wt: null, wf: 1679 },
        "11⅞": { wv: null, wt: null, wf: 1796 },
        "14": { wv: null, wt: null, wf: 2215 },
        "16": { wv: null, wt: null, wf: 2648 }
    },
    10: {
        "7¼": { wv: 164, wt: 243, wf: 604 },
        "9¼": { wv: 341, wt: 508, wf: 959 },
        "9½": { wv: 370, wt: 550, wf: 1009 },
        "11¼": { wv: 615, wt: null, wf: 1282 },
        "11⅞": { wv: 723, wt: null, wf: 1367 },
        "14": { wv: null, wt: null, wf: 1668 },
        "16": { wv: null, wt: null, wf: 1972 }
    },
    12: {
        "7¼": { wv: 95, wt: 139, wf: 418 },
        "9¼": { wv: 197, wt: 292, wf: 664 },
        "9½": { wv: 214, wt: 316, wf: 699 },
        "11¼": { wv: 355, wt: 528, wf: 963 },
        "11⅞": { wv: 418, wt: 622, wf: 1067 },
        "14": { wv: 686, wt: null, wf: 1337 },
        "16": { wv: 1024, wt: null, wf: 1570 },
        "18": { wv: null, wt: null, wf: 1816 }
    },
    14: {
        "7¼": { wv: 59, wt: 86, wf: 306 },
        "9¼": { wv: 124, wt: 182, wf: 486 },
        "9½": { wv: 134, wt: 197, wf: 512 },
        "11¼": { wv: 224, wt: 330, wf: 706 },
        "11⅞": { wv: 263, wt: 389, wf: 782 },
        "14": { wv: 432, wt: 641, wf: 1069 },
        "16": { wv: 644, wt: null, wf: 1304 },
        "18": { wv: 918, wt: null, wf: 1501 }
    },
    16: {
        "7¼": { wv: 40, wt: 56, wf: 233 },
        "9¼": { wv: 83, wt: 120, wf: 371 },
        "9½": { wv: 90, wt: 130, wf: 390 },
        "11¼": { wv: 150, wt: 219, wf: 538 },
        "11⅞": { wv: 176, wt: 258, wf: 597 },
        "14": { wv: 289, wt: 427, wf: 816 },
        "16": { wv: 432, wt: 639, wf: 1051 },
        "18": { wv: 615, wt: null, wf: 1278 }
    },
    18: {
        "9¼": { wv: 58, wt: 83, wf: 292 },
        "9½": { wv: 63, wt: 90, wf: 307 },
        "11¼": { wv: 105, wt: 152, wf: 424 },
        "11⅞": { wv: 124, wt: 180, wf: 470 },
        "14": { wv: 203, wt: 297, wf: 643 },
        "16": { wv: 303, wt: 447, wf: 829 },
        "18": { wv: 432, wt: 639, wf: 1036 }
    },
    20: {
        "9¼": { wv: 42, wt: 59, wf: 235 },
        "9½": { wv: 46, wt: 64, wf: 247 },
        "11¼": { wv: 76, wt: 109, wf: 342 },
        "11⅞": { wv: 90, wt: 129, wf: 379 },
        "14": { wv: 148, wt: 215, wf: 519 },
        "16": { wv: 221, wt: 323, wf: 669 },
        "18": { wv: 314, wt: 463, wf: 837 }
    },
    22: {
        "11¼": { wv: 57, wt: 80, wf: 281 },
        "11⅞": { wv: 67, wt: 95, wf: 312 },
        "14": { wv: 111, wt: 159, wf: 427 },
        "16": { wv: 166, wt: 241, wf: 551 },
        "18": { wv: 236, wt: 345, wf: 690 }
    },
    24: {
        "11¼": { wv: 44, wt: 61, wf: 235 },
        "11⅞": { wv: 52, wt: 72, wf: 261 },
        "14": { wv: 85, wt: 121, wf: 357 },
        "16": { wv: 127, wt: 183, wf: 461 },
        "18": { wv: 182, wt: 264, wf: 578 }
    },
    26: {
        "11¼": { wv: 41, wt: 55, wf: 221 },
        "14": { wv: 67, wt: 94, wf: 303 },
        "16": { wv: 100, wt: 142, wf: 392 },
        "18": { wv: 143, wt: 205, wf: 491 }
    },
    28: {
        "14": { wv: 53, wt: 73, wf: 260 },
        "16": { wv: 80, wt: 112, wf: 336 },
        "18": { wv: 114, wt: 163, wf: 421 }
    },
    30: {
        "14": { wv: 43, wt: 58, wf: 225 },
        "16": { wv: 65, wt: 90, wf: 291 },
        "18": { wv: 93, wt: 130, wf: 365 }
    }
};

// Table des données CCQ - Tableaux 9.23.4.2.-H, I, J (Poutres composées)
const CCQ_TABLE = {
    // Tableau 9.23.4.2.-H - 1 plancher supporté
    1: {
        // Douglas Fir-Larch Select Structural
        "douglas_select": {
            6: { "3-38x184": 3.36, "4-38x184": 3.70, "5-38x184": 3.99, "3-38x235": 4.30, "4-38x235": 4.73, "5-38x235": 5.09, "3-38x286": 5.23, "4-38x286": 5.66, "5-38x286": 5.99 },
            8: { "3-38x184": 3.12, "4-38x184": 3.44, "5-38x184": 3.70, "3-38x235": 3.99, "4-38x235": 4.39, "5-38x235": 4.73, "3-38x286": 4.84, "4-38x286": 5.34, "5-38x286": 5.66 },
            10: { "3-38x184": 2.94, "4-38x184": 3.23, "5-38x184": 3.48, "3-38x235": 3.75, "4-38x235": 4.13, "5-38x235": 4.45, "3-38x286": 4.41, "4-38x286": 5.03, "5-38x286": 5.41 },
            12: { "3-38x184": 2.79, "4-38x184": 3.07, "5-38x184": 3.31, "3-38x235": 3.52, "4-38x235": 3.92, "5-38x235": 4.23, "3-38x286": 4.09, "4-38x286": 4.72, "5-38x286": 5.14 },
            14: { "3-38x184": 2.67, "4-38x184": 2.94, "5-38x184": 3.17, "3-38x235": 3.29, "4-38x235": 3.75, "5-38x235": 4.04, "3-38x286": 3.82, "4-38x286": 4.41, "5-38x286": 4.92 },
            16: { "3-38x184": 2.54, "4-38x184": 2.83, "5-38x184": 3.04, "3-38x235": 3.11, "4-38x235": 3.59, "5-38x235": 3.89, "3-38x286": 3.60, "4-38x286": 4.16, "5-38x286": 4.65 },
            18: { "3-38x184": 2.41, "4-38x184": 2.73, "5-38x184": 2.94, "3-38x235": 2.95, "4-38x235": 3.40, "5-38x235": 3.75, "3-38x286": 3.42, "4-38x286": 3.95, "5-38x286": 4.41 },
            20: { "3-38x184": 2.28, "4-38x184": 2.62, "5-38x184": 2.85, "3-38x235": 2.80, "4-38x235": 3.24, "5-38x235": 3.62, "3-38x286": 3.26, "4-38x286": 3.76, "5-38x286": 4.20 }
        },
        // Hem-Fir Select Structural  
        "hem_fir_select": {
            6: { "3-38x184": 3.32, "4-38x184": 3.65, "5-38x184": 3.93, "3-38x235": 4.24, "4-38x235": 4.66, "5-38x235": 5.03, "3-38x286": 5.16, "4-38x286": 5.61, "5-38x286": 5.93 },
            8: { "3-38x184": 3.08, "4-38x184": 3.39, "5-38x184": 3.65, "3-38x235": 3.93, "4-38x235": 4.33, "5-38x235": 4.66, "3-38x286": 4.76, "4-38x286": 5.27, "5-38x286": 5.61 },
            10: { "3-38x184": 2.90, "4-38x184": 3.19, "5-38x184": 3.44, "3-38x235": 3.70, "4-38x235": 4.08, "5-38x235": 4.39, "3-38x286": 4.35, "4-38x286": 4.96, "5-38x286": 5.34 },
            12: { "3-38x184": 2.75, "4-38x184": 3.03, "5-38x184": 3.27, "3-38x235": 3.47, "4-38x235": 3.87, "5-38x235": 4.17, "3-38x286": 4.02, "4-38x286": 4.65, "5-38x286": 5.07 },
            14: { "3-38x184": 2.63, "4-38x184": 2.90, "5-38x184": 3.12, "3-38x235": 3.24, "4-38x235": 3.70, "5-38x235": 3.99, "3-38x286": 3.66, "4-38x286": 4.35, "5-38x286": 4.85 },
            16: { "3-38x184": 2.49, "4-38x184": 2.79, "5-38x184": 3.00, "3-38x235": 2.95, "4-38x235": 3.53, "5-38x235": 3.83, "3-38x286": 3.32, "4-38x286": 4.10, "5-38x286": 4.58 },
            18: { "3-38x184": 2.28, "4-38x184": 2.69, "5-38x184": 2.90, "3-38x235": 2.70, "4-38x235": 3.35, "5-38x235": 3.70, "3-38x286": 3.04, "4-38x286": 3.87, "5-38x286": 4.35 },
            20: { "3-38x184": 2.10, "4-38x184": 2.58, "5-38x184": 2.81, "3-38x235": 2.47, "4-38x235": 3.18, "5-38x235": 3.57, "3-38x286": 2.80, "4-38x286": 3.66, "5-38x286": 4.13 }
        }
    },
    // Tableau 9.23.4.2.-I - 2 planchers supportés
    2: {
        "douglas_select": {
            6: { "3-38x184": 2.80, "4-38x184": 3.08, "5-38x184": 3.32, "3-38x235": 3.49, "4-38x235": 3.93, "5-38x235": 4.24, "3-38x286": 4.05, "4-38x286": 4.67, "5-38x286": 5.16 },
            8: { "3-38x184": 2.55, "4-38x184": 2.86, "5-38x184": 3.08, "3-38x235": 3.12, "4-38x235": 3.60, "5-38x235": 3.93, "3-38x286": 3.62, "4-38x286": 4.18, "5-38x286": 4.67 },
            10: { "3-38x184": 2.33, "4-38x184": 2.69, "5-38x184": 2.90, "3-38x235": 2.85, "4-38x235": 3.29, "5-38x235": 3.68, "3-38x286": 3.30, "4-38x286": 3.82, "5-38x286": 4.27 },
            12: { "3-38x184": 2.16, "4-38x184": 2.49, "5-38x184": 2.75, "3-38x235": 2.64, "4-38x235": 3.04, "5-38x235": 3.40, "3-38x286": 2.99, "4-38x286": 3.53, "5-38x286": 3.95 },
            14: { "3-38x184": 2.00, "4-38x184": 2.33, "5-38x184": 2.60, "3-38x235": 2.38, "4-38x235": 2.85, "5-38x235": 3.18, "3-38x286": 2.69, "4-38x286": 3.30, "5-38x286": 3.69 },
            16: { "3-38x184": 1.82, "4-38x184": 2.20, "5-38x184": 2.45, "3-38x235": 2.17, "4-38x235": 2.68, "5-38x235": 3.00, "3-38x286": 2.45, "4-38x286": 3.08, "5-38x286": 3.48 },
            18: { "3-38x184": 1.67, "4-38x184": 2.08, "5-38x184": 2.33, "3-38x235": 2.00, "4-38x235": 2.51, "5-38x235": 2.85, "3-38x286": 2.26, "4-38x286": 2.83, "5-38x286": 3.30 },
            20: { "3-38x184": 1.54, "4-38x184": 1.97, "5-38x184": 2.22, "3-38x235": 1.85, "4-38x235": 2.37, "5-38x235": 2.72, "3-38x286": 2.10, "4-38x286": 2.61, "5-38x286": 3.13 }
        },
        "hem_fir_select": {
            6: { "3-38x184": 2.76, "4-38x184": 3.04, "5-38x184": 3.27, "3-38x235": 3.43, "4-38x235": 3.88, "5-38x235": 4.18, "3-38x286": 3.99, "4-38x286": 4.60, "5-38x286": 5.09 },
            8: { "3-38x184": 2.51, "4-38x184": 2.82, "5-38x184": 3.04, "3-38x235": 2.97, "4-38x235": 3.55, "5-38x235": 3.88, "3-38x286": 3.34, "4-38x286": 4.12, "5-38x286": 4.60 },
            10: { "3-38x184": 2.15, "4-38x184": 2.65, "5-38x184": 2.86, "3-38x235": 2.56, "4-38x235": 3.24, "5-38x235": 3.62, "3-38x286": 2.88, "4-38x286": 3.65, "5-38x286": 4.20 },
            12: { "3-38x184": 1.90, "4-38x184": 2.40, "5-38x184": 2.72, "3-38x235": 2.26, "4-38x235": 2.85, "5-38x235": 3.35, "3-38x286": 2.55, "4-38x286": 3.21, "5-38x286": 3.87 },
            14: { "3-38x184": 1.70, "4-38x184": 2.15, "5-38x184": 2.56, "3-38x235": 2.03, "4-38x235": 2.56, "5-38x235": 3.08, "3-38x286": 2.30, "4-38x286": 2.88, "5-38x286": 3.46 },
            16: { "3-38x184": 1.56, "4-38x184": 1.95, "5-38x184": 2.35, "3-38x235": 1.86, "4-38x235": 2.32, "5-38x235": 2.79, "3-38x286": 2.11, "4-38x286": 2.62, "5-38x286": 3.14 },
            18: { "3-38x184": 1.44, "4-38x184": 1.79, "5-38x184": 2.15, "3-38x235": 1.72, "4-38x235": 2.14, "5-38x235": 2.56, "3-38x286": 1.96, "4-38x286": 2.42, "5-38x286": 2.88 },
            20: { "3-38x184": 1.35, "4-38x184": 1.66, "5-38x184": 1.97, "3-38x235": 1.60, "4-38x235": 1.98, "5-38x235": 2.36, "3-38x286": 1.83, "4-38x286": 2.25, "5-38x286": 2.65 }
        }
    },
    // Tableau 9.23.4.2.-J - 3 planchers supportés
    3: {
        "douglas_select": {
            6: { "3-38x184": 2.38, "4-38x184": 2.74, "5-38x184": 2.95, "3-38x235": 2.91, "4-38x235": 3.36, "5-38x235": 3.75, "3-38x286": 3.37, "4-38x286": 3.89, "5-38x286": 4.35 },
            8: { "3-38x184": 2.13, "4-38x184": 2.46, "5-38x184": 2.74, "3-38x235": 2.60, "4-38x235": 3.00, "5-38x235": 3.36, "3-38x286": 2.92, "4-38x286": 3.48, "5-38x286": 3.89 },
            10: { "3-38x184": 1.88, "4-38x184": 2.24, "5-38x184": 2.51, "3-38x235": 2.24, "4-38x235": 2.74, "5-38x235": 3.06, "3-38x286": 2.53, "4-38x286": 3.18, "5-38x286": 3.56 },
            12: { "3-38x184": 1.66, "4-38x184": 2.08, "5-38x184": 2.32, "3-38x235": 1.99, "4-38x235": 2.49, "5-38x235": 2.84, "3-38x286": 2.25, "4-38x286": 2.81, "5-38x286": 3.29 },
            14: { "3-38x184": 1.50, "4-38x184": 1.88, "5-38x184": 2.17, "3-38x235": 1.80, "4-38x235": 2.24, "5-38x235": 2.65, "3-38x286": 2.04, "4-38x286": 2.53, "5-38x286": 3.02 },
            16: { "3-38x184": 1.38, "4-38x184": 1.71, "5-38x184": 2.05, "3-38x235": 1.65, "4-38x235": 2.04, "5-38x235": 2.44, "3-38x286": 1.88, "4-38x286": 2.31, "5-38x286": 2.75 },
            18: { "3-38x184": 1.28, "4-38x184": 1.58, "5-38x184": 1.88, "3-38x235": 1.53, "4-38x235": 1.89, "5-38x235": 2.24, "3-38x286": 1.75, "4-38x286": 2.14, "5-38x286": 2.53 },
            20: { "3-38x184": 1.19, "4-38x184": 1.47, "5-38x184": 1.74, "3-38x235": 1.43, "4-38x235": 1.76, "5-38x235": 2.08, "3-38x286": 1.64, "4-38x286": 2.00, "5-38x286": 2.35 }
        },
        "hem_fir_select": {
            6: { "3-38x184": 2.22, "4-38x184": 2.70, "5-38x184": 2.91, "3-38x235": 2.64, "4-38x235": 3.31, "5-38x235": 3.70, "3-38x286": 2.98, "4-38x286": 3.78, "5-38x286": 4.29 },
            8: { "3-38x184": 1.85, "4-38x184": 2.35, "5-38x184": 2.70, "3-38x235": 2.21, "4-38x235": 2.79, "5-38x235": 3.31, "3-38x286": 2.50, "4-38x286": 3.14, "5-38x286": 3.78 },
            10: { "3-38x184": 1.61, "4-38x184": 2.02, "5-38x184": 2.43, "3-38x235": 1.92, "4-38x235": 2.40, "5-38x235": 2.89, "3-38x286": 2.18, "4-38x286": 2.71, "5-38x286": 3.24 },
            12: { "3-38x184": 1.43, "4-38x184": 1.78, "5-38x184": 2.14, "3-38x235": 1.71, "4-38x235": 2.13, "5-38x235": 2.54, "3-38x286": 1.95, "4-38x286": 2.40, "5-38x286": 2.86 },
            14: { "3-38x184": 1.30, "4-38x184": 1.61, "5-38x184": 1.92, "3-38x235": 1.56, "4-38x235": 1.92, "5-38x235": 2.28, "3-38x286": 1.77, "4-38x286": 2.18, "5-38x286": 2.58 },
            16: { "3-38x184": 1.19, "4-38x184": 1.47, "5-38x184": 1.74, "3-38x235": 1.44, "4-38x235": 1.76, "5-38x235": 2.08, "3-38x286": 1.64, "4-38x286": 2.00, "5-38x286": 2.35 },
            18: { "3-38x184": 1.11, "4-38x184": 1.36, "5-38x184": 1.61, "3-38x235": 1.34, "4-38x235": 1.63, "5-38x235": 1.92, "3-38x286": 1.53, "4-38x286": 1.85, "5-38x286": 2.18 },
            20: { "3-38x184": 1.05, "4-38x184": 1.27, "5-38x184": 1.50, "3-38x235": 1.25, "4-38x235": 1.52, "5-38x235": 1.79, "3-38x286": 1.44, "4-38x286": 1.73, "5-38x286": 2.04 }
        }
    }
};

// Conversion des dimensions impériales pour l'affichage
const CCQ_BEAM_DIMENSIONS = {
    "3-38x184": "3-1½\"×7¼\"",
    "4-38x184": "4-1½\"×7¼\"", 
    "5-38x184": "5-1½\"×7¼\"",
    "3-38x235": "3-1½\"×9¼\"",
    "4-38x235": "4-1½\"×9¼\"",
    "5-38x235": "5-1½\"×9¼\"", 
    "3-38x286": "3-1½\"×11¼\"",
    "4-38x286": "4-1½\"×11¼\"",
    "5-38x286": "5-1½\"×11¼\""
};

// Hauteurs disponibles pour Versa-Lam
const HAUTEURS = ["7¼", "9¼", "9½", "11¼", "11⅞", "14", "16", "18"];

// Variables globales
let currentTab = 'versa-lam';

// Fonction de gestion des onglets
function switchTab(tabName) {
    // Cacher tous les contenus d'onglets
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Désactiver tous les boutons d'onglets
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    // Activer l'onglet sélectionné
    document.getElementById(tabName + '-content').classList.add('active');
    document.querySelector(`[onclick="switchTab('${tabName}')"]`).classList.add('active');
    
    currentTab = tabName;
}

function updateLargeursEtages(type = 'versa') {
    const suffix = type === 'versa' ? 'Versa' : 'Ccq';
    const nbEtages = parseInt(document.getElementById(`nbEtages${suffix}`).value);
    const container = document.getElementById(`largeursContainer${suffix}`);
    
    let html = '<label>Largeurs tributaires par étage</label>';
    
    for (let i = 1; i <= nbEtages; i++) {
        const etageLabel = `Étage ${i}`;
        
        html += `
            <div class="largeur-etage">
                <div class="input-row">
                    <div class="input-field">
                        <label for="ltEtage${i}${suffix}">L.T. ${etageLabel}</label>
                        <div class="dimension-input">
                            <input type="number" id="ltEtage${i}Pieds${suffix}" step="0.1" min="0" placeholder="Pieds">
                            <span>pi</span>
                            <input type="number" id="ltEtage${i}Pouces${suffix}" step="0.1" min="0" max="11.9" placeholder="Pouces">
                            <span>po</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    container.innerHTML = html;
}

function calculerPoutre(type = null) {
    if (!type) type = currentTab === 'versa-lam' ? 'versa' : 'ccq';
    
    if (type === 'versa') {
        calculerPoutreVersa();
    } else {
        calculerPoutreCcq();
    }
}

function calculerPoutreVersa() {
    // Récupération des valeurs d'entrée
    const porteePieds = parseFloat(document.getElementById('porteePiedsVersa').value) || 0;
    const porteePouces = parseFloat(document.getElementById('porteePoucesVersa').value) || 0;
    const portee = porteePieds + (porteePouces / 12);
    
    const nbEtages = parseInt(document.getElementById('nbEtagesVersa').value);
    const chargeMorte = parseFloat(document.getElementById('chargeMorteVersa').value) || 0;
    const chargeVive = parseFloat(document.getElementById('chargeViveVersa').value) || 0;
    const chargeViveNeige = parseFloat(document.getElementById('chargeViveNeigeVersa').value) || 0;
    const largeurMax = parseFloat(document.getElementById('largeurMaxVersa').value) || null;
    const hauteurMax = parseFloat(document.getElementById('hauteurMaxVersa').value) || null;
    const optimisation = document.getElementById('optimisationVersa').value;

    // Validation des entrées
    if (!portee || portee < 6 || portee > 30) {
        document.getElementById('poutreResultsVersa').innerHTML = `
            <p style="text-align: center; color: #A0522D; margin-top: 50px;">
                La portée doit être entre 6 et 30 pieds
            </p>
        `;
        return;
    }

    // Calcul des largeurs tributaires totales
    let ltTotal = 0;
    const largeurs = [];
    
    for (let i = 1; i <= nbEtages; i++) {
        const pieds = parseFloat(document.getElementById(`ltEtage${i}PiedsVersa`).value) || 0;
        const pouces = parseFloat(document.getElementById(`ltEtage${i}PoucesVersa`).value) || 0;
        const largeur = pieds + (pouces / 12);
        largeurs.push(largeur);
        ltTotal += largeur;
    }

    // Vérification qu'il y a au moins des valeurs pour calculer
    if (ltTotal === 0 || chargeMorte === 0 || chargeVive === 0) {
        document.getElementById('resultWvVersa').textContent = '-';
        document.getElementById('resultWmVersa').textContent = '-';
        document.getElementById('resultWtVersa').textContent = '-';
        document.getElementById('resultWfVersa').textContent = '-';
        document.getElementById('poutreResultsVersa').innerHTML = `
            <p style="text-align: center; color: #A0522D; margin-top: 50px;">
                Entrez les paramètres pour voir les options de poutres.
            </p>
        `;
        return;
    }

    // Calculs selon la méthodologie (étapes 4-7)
    
    // Étape 4: Charge vive uniformément répartie
    const chargeViveTotale = chargeVive + chargeViveNeige;
    const wvTotal = chargeViveTotale * ltTotal;

    // Étape 5: Charge morte uniformément répartie
    const wmTotal = chargeMorte * ltTotal;

    // Étape 6: Charge totale non pondérée
    const wtTotal = wvTotal + wmTotal;

    // Étape 7: Charge totale pondérée
    const wfTotal = wvTotal * 1.5 + wmTotal * 1.25;

    // Affichage des résultats de calcul
    document.getElementById('resultWvVersa').textContent = `${wvTotal.toFixed(1)} lb/pi`;
    document.getElementById('resultWmVersa').textContent = `${wmTotal.toFixed(1)} lb/pi`;
    document.getElementById('resultWtVersa').textContent = `${wtTotal.toFixed(1)} lb/pi`;
    document.getElementById('resultWfVersa').textContent = `${wfTotal.toFixed(1)} lb/pi`;

    // Étape 8: Recherche des poutres viables
    const poutresViables = trouverPoutresViables(portee, wvTotal, wtTotal, wfTotal, largeurMax, hauteurMax, optimisation);
    
    afficherResultatsPoutres(poutresViables, wvTotal, wtTotal, wfTotal, 'versa');
}

function calculerPoutreCcq() {
    // Récupération des valeurs d'entrée
    const porteePieds = parseFloat(document.getElementById('porteePiedsCcq').value) || 0;
    const porteePouces = parseFloat(document.getElementById('porteePoucesCcq').value) || 0;
    const portee = porteePieds + (porteePouces / 12);
    
    const nbEtages = parseInt(document.getElementById('nbEtagesCcq').value);
    const chargeMorte = parseFloat(document.getElementById('chargeMorteCcq').value) || 0;
    const chargeVive = parseFloat(document.getElementById('chargeViveCcq').value) || 0;
    const chargeViveNeige = parseFloat(document.getElementById('chargeViveNeigeCcq').value) || 0;
    const largeurMax = parseFloat(document.getElementById('largeurMaxCcq').value) || null;
    const hauteurMax = parseFloat(document.getElementById('hauteurMaxCcq').value) || null;
    const optimisation = document.getElementById('optimisationCcq').value;

    // Validation des entrées
    if (!portee || portee < 6 || portee > 30) {
        document.getElementById('poutreResultsCcq').innerHTML = `
            <p style="text-align: center; color: #A0522D; margin-top: 50px;">
                La portée doit être entre 6 et 30 pieds
            </p>
        `;
        return;
    }

    // Calcul des largeurs tributaires totales
    let ltTotal = 0;
    const largeurs = [];
    
    for (let i = 1; i <= nbEtages; i++) {
        const pieds = parseFloat(document.getElementById(`ltEtage${i}PiedsCcq`).value) || 0;
        const pouces = parseFloat(document.getElementById(`ltEtage${i}PoucesCcq`).value) || 0;
        const largeur = pieds + (pouces / 12);
        largeurs.push(largeur);
        ltTotal += largeur;
    }

    // Vérification qu'il y a au moins des valeurs pour calculer
    if (ltTotal === 0 || chargeMorte === 0 || chargeVive === 0) {
        document.getElementById('resultWvCcq').textContent = '-';
        document.getElementById('resultWmCcq').textContent = '-';
        document.getElementById('resultWtCcq').textContent = '-';
        document.getElementById('resultWfCcq').textContent = '-';
        document.getElementById('poutreResultsCcq').innerHTML = `
            <p style="text-align: center; color: #A0522D; margin-top: 50px;">
                Entrez les paramètres pour voir les options de poutres.
            </p>
        `;
        return;
    }

    // Calculs selon la méthodologie CCQ
    const chargeViveTotale = chargeVive + chargeViveNeige;
    const wvTotal = chargeViveTotale * ltTotal;
    const wmTotal = chargeMorte * ltTotal;
    const wtTotal = wvTotal + wmTotal;
    const wfTotal = wvTotal * 1.5 + wmTotal * 1.25;

    // Affichage des résultats de calcul
    document.getElementById('resultWvCcq').textContent = `${wvTotal.toFixed(1)} lb/pi`;
    document.getElementById('resultWmCcq').textContent = `${wmTotal.toFixed(1)} lb/pi`;
    document.getElementById('resultWtCcq').textContent = `${wtTotal.toFixed(1)} lb/pi`;
    document.getElementById('resultWfCcq').textContent = `${wfTotal.toFixed(1)} lb/pi`;

    // Recherche des poutres viables CCQ
    const poutresViables = trouverPoutresViablesCcq(portee, ltTotal, nbEtages, largeurMax, hauteurMax, optimisation);
    
    afficherResultatsPoutres(poutresViables, wvTotal, wtTotal, wfTotal, 'ccq');
}

function trouverPoutresViablesCcq(portee, ltTotal, nbEtages, largeurMax, hauteurMax, optimisation) {
    const poutresViables = [];
    
    // Utiliser le bon tableau selon le nombre d'étages
    const tableauNbEtages = Math.min(nbEtages, 3); // Max 3 étages dans les tableaux
    const tableauCcq = CCQ_TABLE[tableauNbEtages];
    
    if (!tableauCcq) return [];
    
    // Convertir la portée en mètres pour la recherche dans le tableau
    const porteeMetres = Math.round(portee * 0.3048);
    
    // Essayer Douglas Fir-Larch Select Structural et Hem-Fir Select Structural
    const essences = ['douglas_select', 'hem_fir_select'];
    
    for (let essence of essences) {
        const donnees = tableauCcq[essence];
        if (!donnees) continue;
        
        // Trouver la portée dans le tableau (ou la plus proche supérieure)
        let porteeTable = null;
        for (let p of Object.keys(donnees).map(Number).sort((a, b) => a - b)) {
            if (p >= porteeMetres) {
                porteeTable = p;
                break;
            }
        }
        
        if (!porteeTable || !donnees[porteeTable]) continue;
        
        const specsPortee = donnees[porteeTable];
        
        // Tester chaque dimension de poutre disponible
        for (let [dimension, porteeMax] of Object.entries(specsPortee)) {
            if (portee <= porteeMax) {
                // Extraire les informations de la dimension
                const [nbPlis, largeurMm, hauteurMm] = dimension.split('-')[1].split('x');
                const largeurPoutre = parseInt(nbPlis) * 1.5; // 38mm ≈ 1.5"
                const hauteurPoutre = parseInt(hauteurMm) * 0.0394; // mm to inches
                
                // Vérifier contraintes dimensionnelles
                if (largeurMax && largeurPoutre > largeurMax) continue;
                if (hauteurMax && hauteurPoutre > hauteurMax) continue;
                
                poutresViables.push({
                    dimension: dimension,
                    displayName: CCQ_BEAM_DIMENSIONS[dimension],
                    nbPlis: parseInt(nbPlis),
                    largeurPoutre: largeurPoutre,
                    hauteurPoutre: hauteurPoutre,
                    porteeMax: porteeMax,
                    essence: essence === 'douglas_select' ? 'Douglas Fir-Larch Select' : 'Hem-Fir Select',
                    porteeTable: porteeTable
                });
            }
        }
    }
    
    // Trier selon l'optimisation
    if (optimisation === 'plis') {
        poutresViables.sort((a, b) => {
            if (a.nbPlis !== b.nbPlis) return a.nbPlis - b.nbPlis;
            return a.hauteurPoutre - b.hauteurPoutre;
        });
    } else {
        poutresViables.sort((a, b) => {
            if (a.hauteurPoutre !== b.hauteurPoutre) return a.hauteurPoutre - b.hauteurPoutre;
            return a.nbPlis - b.nbPlis;
        });
    }
    
    return poutresViables;
}

function trouverPoutresViables(portee, wvTotal, wtTotal, wfTotal, largeurMax, hauteurMax, optimisation) {
    const poutresViables = [];
    
    // Trouver la portée dans la table (ou la plus proche supérieure)
    let porteeTable = null;
    for (let p of Object.keys(VERSA_LAM_TABLE).map(Number).sort((a, b) => a - b)) {
        if (p >= portee) {
            porteeTable = p;
            break;
        }
    }
    
    if (!porteeTable || !VERSA_LAM_TABLE[porteeTable]) {
        return [];
    }

    const donnees = VERSA_LAM_TABLE[porteeTable];
    
    // Tester différents nombres de plis (1 à 4)
    for (let nbPlis = 1; nbPlis <= 4; nbPlis++) {
        const largeurPoutre = nbPlis * 1.75;
        
        // Vérifier contrainte de largeur
        if (largeurMax && largeurPoutre > largeurMax) {
            continue;
        }
        
        // Charges par pli
        const wvParPli = wvTotal / nbPlis;
        const wtParPli = wtTotal / nbPlis;
        const wfParPli = wfTotal / nbPlis;
        
        // Vérifier chaque hauteur disponible
        for (let hauteur of HAUTEURS) {
            const hauteurNum = parseFloat(hauteur.replace('¼', '.25').replace('½', '.5').replace('⅞', '.875'));
            
            // Vérifier contrainte de hauteur
            if (hauteurMax && hauteurNum > hauteurMax) {
                continue;
            }
            
            if (donnees[hauteur]) {
                const spec = donnees[hauteur];
                
                // Vérifier les trois critères de chargement
                let critere1 = true; // Charge vive non pondérée
                let critere2 = true; // Charge totale non pondérée  
                let critere3 = true; // Charge totale pondérée
                
                if (spec.wv !== null && wvParPli > spec.wv) {
                    critere1 = false;
                }
                
                if (spec.wt !== null && wtParPli > spec.wt) {
                    critere2 = false;
                }
                
                if (spec.wf !== null && wfParPli > spec.wf) {
                    critere3 = false;
                }
                
                if (critere1 && critere2 && critere3) {
                    poutresViables.push({
                        hauteur: hauteur,
                        hauteurNum: hauteurNum,
                        nbPlis: nbPlis,
                        largeurPoutre: largeurPoutre,
                        porteeTable: porteeTable,
                        wvMax: spec.wv || 'N/A',
                        wtMax: spec.wt || 'N/A',
                        wfMax: spec.wf || 'N/A',
                        critere1: critere1,
                        critere2: critere2,
                        critere3: critere3
                    });
                }
            }
        }
    }
    
    // Trier selon l'optimisation choisie
    if (optimisation === 'plis') {
        poutresViables.sort((a, b) => {
            if (a.nbPlis !== b.nbPlis) return a.nbPlis - b.nbPlis;
            return a.hauteurNum - b.hauteurNum;
        });
    } else {
        poutresViables.sort((a, b) => {
            if (a.hauteurNum !== b.hauteurNum) return a.hauteurNum - b.hauteurNum;
            return a.nbPlis - b.nbPlis;
        });
    }
    
    return poutresViables;
}

function afficherResultatsPoutres(poutresViables, wvTotal, wtTotal, wfTotal, type) {
    const suffix = type === 'versa' ? 'Versa' : 'Ccq';
    const container = document.getElementById(`poutreResults${suffix}`);
    
    if (poutresViables.length === 0) {
        container.innerHTML = `
            <div class="no-solution">
                <h3>Aucune poutre viable trouvée</h3>
                <p>Les charges dépassent les capacités des poutres ${type === 'versa' ? 'Versa-Lam 2.0E' : 'CCQ'} pour cette portée.</p>
                <p>Suggestions :</p>
                <ul style="text-align: left; margin-top: 10px;">
                    <li>Augmenter les contraintes de largeur/hauteur</li>
                    <li>Réduire la portée</li>
                    <li>Réduire les charges</li>
                    <li>Considérer des appuis intermédiaires</li>
                </ul>
            </div>
        `;
        return;
    }

    let html = `
        <div class="poutre-options">
            <h3 style="margin-bottom: 20px; color: #D2691E;">
                Poutres ${type === 'versa' ? 'Versa-Lam®' : 'CCQ'} viables (${poutresViables.length} option${poutresViables.length > 1 ? 's' : ''})
            </h3>
    `;

    poutresViables.forEach((poutre, index) => {
        if (type === 'versa') {
            const epaisseur = poutre.nbPlis === 1 ? "1¾\"" : `${poutre.nbPlis} × 1¾\"`;
            
            html += `
                <div class="poutre-option" onclick="selectionnerPoutre(${index}, '${type}')">
                    <div class="poutre-title">
                        ${epaisseur} × ${poutre.hauteur}" (${poutre.largeurPoutre}" × ${poutre.hauteur}")
                    </div>
                    <div class="poutre-specs">
                        <div><strong>Portée:</strong> ${poutre.porteeTable}'</div>
                        <div><strong>Nombre de plis:</strong> ${poutre.nbPlis}</div>
                        <div><strong>Capacité Wv:</strong> ${poutre.wvMax} lb/pi</div>
                        <div><strong>Capacité Wt:</strong> ${poutre.wtMax} lb/pi</div>
                        <div><strong>Capacité Wf:</strong> ${poutre.wfMax} lb/pi</div>
                    </div>
                </div>
            `;
        } else {
            html += `
                <div class="poutre-option" onclick="selectionnerPoutre(${index}, '${type}')">
                    <div class="poutre-title">
                        ${poutre.displayName} - ${poutre.essence}
                    </div>
                    <div class="poutre-specs">
                        <div><strong>Portée max:</strong> ${poutre.porteeMax.toFixed(2)} m</div>
                        <div><strong>Nombre de plis:</strong> ${poutre.nbPlis}</div>
                        <div><strong>Largeur:</strong> ${poutre.largeurPoutre.toFixed(1)}"</div>
                        <div><strong>Hauteur:</strong> ${poutre.hauteurPoutre.toFixed(1)}"</div>
                        <div><strong>Tableau:</strong> ${poutre.porteeTable}m</div>
                    </div>
                </div>
            `;
        }
    });

    html += `
        <div style="margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 8px; font-size: 0.9em;">
            <strong>Charges de conception totales:</strong><br>
            Wv = ${wvTotal.toFixed(1)} lb/pi | 
            Wt = ${wtTotal.toFixed(1)} lb/pi | 
            Wf = ${wfTotal.toFixed(1)} lb/pi<br>
            <em>Les valeurs ci-dessus représentent les charges totales supportées par la poutre complète.</em>
        </div>
    `;

    html += '</div>';
    container.innerHTML = html;
}

function selectionnerPoutre(index, type = 'versa') {
    const suffix = type === 'versa' ? 'Versa' : 'Ccq';
    // Retirer la sélection précédente
    document.querySelectorAll(`#poutreResults${suffix} .poutre-option`).forEach(option => {
        option.classList.remove('selected');
    });
    
    // Ajouter la sélection à l'option cliquée
    document.querySelectorAll(`#poutreResults${suffix} .poutre-option`)[index].classList.add('selected');
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser les largeurs tributaires pour les deux onglets
    updateLargeursEtages('versa');
    updateLargeursEtages('ccq');
    
    // Calculer automatiquement lors des changements de valeurs - Versa-Lam
    const inputsVersa = ['porteePiedsVersa', 'porteePoucesVersa', 'nbEtagesVersa', 'chargeMorteVersa', 'chargeViveVersa', 'chargeViveNeigeVersa', 'largeurMaxVersa', 'hauteurMaxVersa', 'optimisationVersa'];
    inputsVersa.forEach(inputId => {
        const element = document.getElementById(inputId);
        if (element) {
            element.addEventListener('input', function() {
                clearTimeout(this.timer);
                this.timer = setTimeout(() => calculerPoutre('versa'), 500);
            });
        }
    });
    
    // Calculer automatiquement lors des changements de valeurs - CCQ
    const inputsCcq = ['porteePiedsCcq', 'porteePoucesCcq', 'nbEtagesCcq', 'chargeMorteCcq', 'chargeViveCcq', 'chargeViveNeigeCcq', 'largeurMaxCcq', 'hauteurMaxCcq', 'optimisationCcq'];
    inputsCcq.forEach(inputId => {
        const element = document.getElementById(inputId);
        if (element) {
            element.addEventListener('input', function() {
                clearTimeout(this.timer);
                this.timer = setTimeout(() => calculerPoutre('ccq'), 500);
            });
        }
    });
    
    // Ajouter des événements pour les largeurs tributaires dynamiques - Versa-Lam
    document.getElementById('largeursContainerVersa').addEventListener('input', function(e) {
        if (e.target.tagName === 'INPUT') {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => calculerPoutre('versa'), 500);
        }
    });
    
    // Ajouter des événements pour les largeurs tributaires dynamiques - CCQ
    document.getElementById('largeursContainerCcq').addEventListener('input', function(e) {
        if (e.target.tagName === 'INPUT') {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => calculerPoutre('ccq'), 500);
        }
    });
});
