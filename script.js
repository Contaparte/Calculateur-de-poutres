// Tables des portées Versa-Lam 2.0E (Ne pas modifier - fonctionne parfaitement)
const VERSA_LAM_TABLE = {
    10: {
        "9¼": { wv: 235, wt: 344, wf: 642 },
        "9½": { wv: 254, wt: 372, wf: 673 },
        "11¼": { wv: 428, wt: 628, wf: 1093 },
        "11⅞": { wv: 504, wt: 740, wf: 1212 },
        "14": { wv: 815, wt: 1200, wf: 1891 },
        "16": { wv: 1187, wt: 1750, wf: 2467 },
        "18": { wv: 1641, wt: 2425, wf: 3130 }
    },
    12: {
        "9¼": { wv: 163, wt: 236, wf: 466 },
        "9½": { wv: 177, wt: 256, wf: 489 },
        "11¼": { wv: 297, wt: 435, wf: 795 },
        "11⅞": { wv: 350, wt: 514, wf: 882 },
        "14": { wv: 567, wt: 834, wf: 1374 },
        "16": { wv: 825, wt: 1216, wf: 1794 },
        "18": { wv: 1141, wt: 1685, wf: 2277 }
    },
    14: {
        "9¼": { wv: 120, wt: 171, wf: 352 },
        "9½": { wv: 130, wt: 186, wf: 370 },
        "11¼": { wv: 218, wt: 319, wf: 601 },
        "11⅞": { wv: 257, wt: 377, wf: 667 },
        "14": { wv: 417, wt: 613, wf: 1040 },
        "16": { wv: 607, wt: 895, wf: 1361 },
        "18": { wv: 840, wt: 1240, wf: 1730 }
    },
    16: {
        "9¼": { wv: 93, wt: 132, wf: 280 },
        "9½": { wv: 101, wt: 144, wf: 294 },
        "11¼": { wv: 169, wt: 247, wf: 479 },
        "11⅞": { wv: 199, wt: 292, wf: 532 },
        "14": { wv: 324, wt: 476, wf: 831 },
        "16": { wv: 471, wt: 694, wf: 1092 },
        "18": { wv: 651, wt: 962, wf: 1388 }
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

// Données CCQ complètes basées sur les tableaux du Code du bâtiment du Canada
const CCQ_COMPOSITE_BEAM_DATA = {
    "douglas": {
        "select": {
            "3-38x184": { 2.4: 11.02, 3.0: 10.24, 3.6: 9.65, 4.2: 9.15, 4.8: 8.76, 5.4: 8.33, 6.0: 7.91 },
            "4-38x184": { 2.4: 12.14, 3.0: 11.29, 3.6: 10.59, 4.2: 10.07, 4.8: 9.65, 5.4: 9.28, 6.0: 8.96 },
            "5-38x184": { 2.4: 13.09, 3.0: 12.14, 3.6: 11.42, 4.2: 10.86, 4.8: 10.40, 5.4: 9.97, 6.0: 9.65 },
            "3-38x235": { 2.4: 14.11, 3.0: 13.09, 3.6: 12.30, 4.2: 11.55, 4.8: 10.79, 5.4: 10.20, 6.0: 9.68 },
            "4-38x235": { 2.4: 15.52, 3.0: 14.40, 3.6: 13.55, 4.2: 12.86, 4.8: 12.30, 5.4: 11.78, 6.0: 11.15 },
            "5-38x235": { 2.4: 16.70, 3.0: 15.52, 3.6: 14.60, 4.2: 13.88, 4.8: 13.25, 5.4: 12.76, 6.0: 12.30 },
            "3-38x286": { 2.4: 17.16, 3.0: 15.88, 3.6: 14.47, 4.2: 13.42, 4.8: 12.53, 5.4: 11.81, 6.0: 11.22 },
            "4-38x286": { 2.4: 18.57, 3.0: 17.52, 3.6: 16.50, 4.2: 15.49, 4.8: 14.47, 5.4: 13.65, 6.0: 12.96 },
            "5-38x286": { 2.4: 19.65, 3.0: 18.57, 3.6: 17.75, 4.2: 16.86, 4.8: 16.14, 5.4: 15.26, 6.0: 14.47 }
        },
        "no1et2": {
            "3-38x184": { 2.4: 9.75, 3.0: 8.69, 3.6: 7.94, 4.2: 7.35, 4.8: 6.89, 5.4: 6.50, 6.0: 6.17 },
            "4-38x184": { 2.4: 11.22, 3.0: 10.04, 3.6: 9.19, 4.2: 8.50, 4.8: 7.94, 5.4: 7.48, 6.0: 7.12 },
            "5-38x184": { 2.4: 12.53, 3.0: 11.22, 3.6: 10.27, 4.2: 9.48, 4.8: 8.89, 5.4: 8.37, 6.0: 7.94 },
            "3-38x235": { 2.4: 11.91, 3.0: 10.63, 3.6: 9.71, 4.2: 8.99, 4.8: 8.40, 5.4: 7.94, 6.0: 7.51 },
            "4-38x235": { 2.4: 13.75, 3.0: 12.30, 3.6: 11.22, 4.2: 10.40, 4.8: 9.71, 5.4: 9.15, 6.0: 8.69 },
            "5-38x235": { 2.4: 15.35, 3.0: 13.75, 3.6: 12.53, 4.2: 11.61, 4.8: 10.86, 5.4: 10.24, 6.0: 9.71 },
            "3-38x286": { 2.4: 13.81, 3.0: 12.34, 3.6: 11.29, 4.2: 10.43, 4.8: 9.78, 5.4: 9.22, 6.0: 8.73 },
            "4-38x286": { 2.4: 15.95, 3.0: 14.27, 3.6: 13.02, 4.2: 12.05, 4.8: 11.29, 5.4: 10.63, 6.0: 10.07 },
            "5-38x286": { 2.4: 17.82, 3.0: 15.95, 3.6: 14.56, 4.2: 13.48, 4.8: 12.63, 5.4: 11.91, 6.0: 11.29 }
        }
    },
    "hemfir": {
        "select": {
            "3-38x184": { 2.4: 10.89, 3.0: 10.10, 3.6: 9.51, 4.2: 9.02, 4.8: 8.63, 5.4: 8.17, 6.0: 7.48 },
            "4-38x184": { 2.4: 11.98, 3.0: 11.12, 3.6: 10.47, 4.2: 9.94, 4.8: 9.51, 5.4: 9.15, 6.0: 8.83 },
            "5-38x184": { 2.4: 12.89, 3.0: 11.98, 3.6: 11.29, 4.2: 10.73, 4.8: 10.24, 5.4: 9.84, 6.0: 9.51 },
            "3-38x235": { 2.4: 13.91, 3.0: 12.89, 3.6: 12.14, 4.2: 11.38, 4.8: 10.63, 5.4: 9.71, 6.0: 8.86 },
            "4-38x235": { 2.4: 15.29, 3.0: 14.21, 3.6: 13.38, 4.2: 12.70, 4.8: 12.14, 5.4: 11.58, 6.0: 10.99 },
            "5-38x235": { 2.4: 16.50, 3.0: 15.29, 3.6: 14.40, 4.2: 13.68, 4.8: 13.05, 5.4: 12.57, 6.0: 12.14 },
            "3-38x286": { 2.4: 16.93, 3.0: 15.62, 3.6: 14.27, 4.2: 13.18, 4.8: 12.01, 5.4: 10.89, 6.0: 9.97 },
            "4-38x286": { 2.4: 18.40, 3.0: 17.29, 3.6: 16.27, 4.2: 15.26, 4.8: 14.27, 5.4: 13.45, 6.0: 12.70 },
            "5-38x286": { 2.4: 19.46, 3.0: 18.40, 3.6: 17.52, 4.2: 16.63, 4.8: 15.91, 5.4: 15.03, 6.0: 14.27 }
        },
        "no1et2": {
            "3-38x184": { 2.4: 10.20, 3.0: 9.12, 3.6: 8.33, 4.2: 7.71, 4.8: 7.22, 5.4: 6.82, 6.0: 6.46 },
            "4-38x184": { 2.4: 11.65, 3.0: 10.53, 3.6: 9.61, 4.2: 8.92, 4.8: 8.33, 5.4: 7.84, 6.0: 7.45 },
            "5-38x184": { 2.4: 12.53, 3.0: 11.65, 3.6: 10.76, 4.2: 9.97, 4.8: 9.32, 5.4: 8.79, 6.0: 8.33 },
            "3-38x235": { 2.4: 12.47, 3.0: 11.15, 3.6: 10.20, 4.2: 9.45, 4.8: 8.83, 5.4: 8.33, 6.0: 7.91 },
            "4-38x235": { 2.4: 14.40, 3.0: 12.89, 3.6: 11.78, 4.2: 10.92, 4.8: 10.20, 5.4: 9.61, 6.0: 9.12 },
            "5-38x235": { 2.4: 16.08, 3.0: 14.40, 3.6: 13.15, 4.2: 12.18, 4.8: 11.39, 5.4: 10.73, 6.0: 10.20 },
            "3-38x286": { 2.4: 14.47, 3.0: 12.96, 3.6: 11.81, 4.2: 10.95, 4.8: 10.24, 5.4: 9.65, 6.0: 9.15 },
            "4-38x286": { 2.4: 16.73, 3.0: 14.96, 3.6: 13.65, 4.2: 12.63, 4.8: 11.81, 5.4: 11.12, 6.0: 10.56 },
            "5-38x286": { 2.4: 18.70, 3.0: 16.73, 3.6: 15.26, 4.2: 14.14, 4.8: 13.22, 5.4: 12.47, 6.0: 11.81 }
        }
    },
    "spf": {
        "select": {
            "3-38x184": { 2.4: 8.67, 3.0: 8.04, 3.6: 7.58, 4.2: 7.20, 4.8: 6.89, 5.4: 6.59, 6.0: 6.30 },
            "4-38x184": { 2.4: 9.55, 3.0: 8.86, 3.6: 8.33, 4.2: 7.91, 4.8: 7.58, 5.4: 7.28, 6.0: 7.02 },
            "5-38x184": { 2.4: 10.30, 3.0: 9.55, 3.6: 8.99, 4.2: 8.56, 4.8: 8.17, 5.4: 7.84, 6.0: 7.58 },
            "3-38x235": { 2.4: 11.06, 3.0: 10.27, 3.6: 9.68, 4.2: 9.22, 4.8: 8.86, 5.4: 8.53, 6.0: 8.20 },
            "4-38x235": { 2.4: 12.17, 3.0: 11.29, 3.6: 10.63, 4.2: 10.10, 4.8: 9.68, 5.4: 9.28, 6.0: 8.92 },
            "5-38x235": { 2.4: 13.12, 3.0: 12.17, 3.6: 11.45, 4.2: 10.89, 4.8: 10.40, 5.4: 9.97, 6.0: 9.61 },
            "3-38x286": { 2.4: 13.48, 3.0: 12.47, 3.6: 11.71, 4.2: 11.12, 4.8: 10.66, 5.4: 10.14, 6.0: 9.71 },
            "4-38x286": { 2.4: 14.83, 3.0: 13.75, 3.6: 12.93, 4.2: 12.27, 4.8: 11.71, 5.4: 11.22, 6.0: 10.79 },
            "5-38x286": { 2.4: 15.98, 3.0: 14.83, 3.6: 13.94, 4.2: 13.25, 4.8: 12.66, 5.4: 12.14, 6.0: 11.68 }
        },
        "no1et2": {
            "3-38x184": { 2.4: 7.91, 3.0: 7.09, 3.6: 6.46, 4.2: 5.97, 4.8: 5.58, 5.4: 5.25, 6.0: 4.98 },
            "4-38x184": { 2.4: 9.15, 3.0: 8.20, 3.6: 7.45, 4.2: 6.89, 4.8: 6.46, 5.4: 6.07, 6.0: 5.77 },
            "5-38x184": { 2.4: 9.94, 3.0: 9.15, 3.6: 8.33, 4.2: 7.71, 4.8: 7.22, 5.4: 6.79, 6.0: 6.46 },
            "3-38x235": { 2.4: 9.68, 3.0: 8.63, 3.6: 7.87, 4.2: 7.28, 4.8: 6.82, 5.4: 6.43, 6.0: 6.10 },
            "4-38x235": { 2.4: 11.19, 3.0: 10.01, 3.6: 9.12, 4.2: 8.43, 4.8: 7.87, 5.4: 7.41, 6.0: 7.02 },
            "5-38x235": { 2.4: 12.15, 3.0: 11.19, 3.6: 10.20, 4.2: 9.45, 4.8: 8.83, 5.4: 8.33, 6.0: 7.91 },
            "3-38x286": { 2.4: 11.22, 3.0: 10.04, 3.6: 9.15, 4.2: 8.46, 4.8: 7.94, 5.4: 7.48, 6.0: 7.09 },
            "4-38x286": { 2.4: 12.96, 3.0: 11.61, 3.6: 10.59, 4.2: 9.81, 4.8: 9.15, 5.4: 8.63, 6.0: 8.17 },
            "5-38x286": { 2.4: 14.07, 3.0: 12.96, 3.6: 11.81, 4.2: 10.92, 4.8: 10.24, 5.4: 9.65, 6.0: 9.15 }
        }
    },
    "northern": {
        "select": {
            "3-38x184": { 2.4: 9.32, 3.0: 8.63, 3.6: 8.14, 4.2: 7.74, 4.8: 7.41, 5.4: 7.09, 6.0: 6.79 },
            "4-38x184": { 2.4: 10.27, 3.0: 9.51, 3.6: 8.96, 4.2: 8.50, 4.8: 8.14, 5.4: 7.81, 6.0: 7.51 },
            "5-38x184": { 2.4: 11.06, 3.0: 10.27, 3.6: 9.65, 4.2: 9.19, 4.8: 8.79, 5.4: 8.43, 6.0: 8.14 },
            "3-38x235": { 2.4: 11.91, 3.0: 10.99, 3.6: 10.36, 4.2: 9.84, 4.8: 9.42, 5.4: 9.02, 6.0: 8.63 },
            "4-38x235": { 2.4: 13.09, 3.0: 12.14, 3.6: 11.42, 4.2: 10.86, 4.8: 10.36, 5.4: 9.94, 6.0: 9.58 },
            "5-38x235": { 2.4: 14.11, 3.0: 13.09, 3.6: 12.30, 4.2: 11.71, 4.8: 11.19, 5.4: 10.73, 6.0: 10.33 },
            "3-38x286": { 2.4: 14.50, 3.0: 13.42, 3.6: 12.60, 4.2: 11.95, 4.8: 11.42, 5.4: 10.86, 6.0: 10.36 },
            "4-38x286": { 2.4: 15.95, 3.0: 14.76, 3.6: 13.88, 4.2: 13.18, 4.8: 12.60, 5.4: 12.05, 6.0: 11.55 },
            "5-38x286": { 2.4: 17.19, 3.0: 15.95, 3.6: 15.00, 4.2: 14.24, 4.8: 13.61, 5.4: 13.05, 6.0: 12.54 }
        },
        "no1et2": {
            "3-38x184": { 2.4: 8.50, 3.0: 7.61, 3.6: 6.93, 4.2: 6.40, 4.8: 6.00, 5.4: 5.64, 6.0: 5.35 },
            "4-38x184": { 2.4: 9.81, 3.0: 8.79, 3.6: 8.01, 4.2: 7.41, 4.8: 6.93, 5.4: 6.53, 6.0: 6.20 },
            "5-38x184": { 2.4: 10.66, 3.0: 9.81, 3.6: 8.96, 4.2: 8.30, 4.8: 7.77, 5.4: 7.32, 6.0: 6.93 },
            "3-38x235": { 2.4: 10.47, 3.0: 9.35, 3.6: 8.53, 4.2: 7.90, 4.8: 7.38, 5.4: 6.96, 6.0: 6.59 },
            "4-38x235": { 2.4: 12.08, 3.0: 10.83, 3.6: 9.87, 4.2: 9.12, 4.8: 8.53, 5.4: 8.04, 6.0: 7.61 },
            "5-38x235": { 2.4: 13.12, 3.0: 12.08, 3.6: 11.02, 4.2: 10.20, 4.8: 9.55, 5.4: 9.00, 6.0: 8.53 },
            "3-38x286": { 2.4: 12.18, 3.0: 10.89, 3.6: 9.94, 4.2: 9.19, 4.8: 8.60, 5.4: 8.11, 6.0: 7.68 },
            "4-38x286": { 2.4: 14.07, 3.0: 12.60, 3.6: 11.48, 4.2: 10.62, 4.8: 9.94, 5.4: 9.35, 6.0: 8.86 },
            "5-38x286": { 2.4: 15.26, 3.0: 14.07, 3.6: 12.83, 4.2: 11.87, 4.8: 11.12, 5.4: 10.47, 6.0: 9.94 }
        }
    }
};

// Constantes
const HAUTEURS_CCQ = ["7.25", "9.25", "11.25"]; // équivalent à 184mm, 235mm, 286mm
const HAUTEURS_VERSA_LAM = ["7¼", "9¼", "9½", "11¼", "11⅞", "14", "16", "18"];

const essenceLabels = {
    "douglas": "Douglas Fir-Larch",
    "hemfir": "Hem-Fir", 
    "spf": "Spruce-Pine-Fir",
    "northern": "Northern Species"
};

const qualiteLabels = {
    "select": "Select Structural",
    "no1et2": "N°s 1 et 2"
};

// === FONCTIONS COMMUNES DE CALCUL ===

function calculerCharges(suffix = '') {
    // Récupération des valeurs de base
    const porteePieds = parseFloat(document.getElementById(`porteePieds${suffix}`).value) || 0;
    const porteePouces = parseFloat(document.getElementById(`porteePouces${suffix}`).value) || 0;
    const portee = porteePieds + (porteePouces / 12);
    
    const nbEtages = parseInt(document.getElementById(`nbEtages${suffix}`).value);
    const chargeMorte = parseFloat(document.getElementById(`chargeMorte${suffix}`).value) || 0;
    const chargeVive = parseFloat(document.getElementById(`chargeVive${suffix}`).value) || 0;
    const chargeViveNeige = parseFloat(document.getElementById(`chargeViveNeige${suffix}`).value) || 0;

    // Calcul des largeurs tributaires totales
    let ltTotal = 0;
    for (let i = 1; i <= nbEtages; i++) {
        const pieds = parseFloat(document.getElementById(`ltEtage${i}Pieds${suffix}`).value) || 0;
        const pouces = parseFloat(document.getElementById(`ltEtage${i}Pouces${suffix}`).value) || 0;
        const largeur = pieds + (pouces / 12);
        ltTotal += largeur;
    }

    // Validation des entrées
    if (!portee || portee < 6 || (suffix === '' && portee > 30) || (suffix === '-ccq' && portee > 35)) {
        return { erreur: `Veuillez entrer une portée valide entre 6 et ${suffix === '' ? '30' : '35'} pieds.` };
    }

    if (!ltTotal || ltTotal <= 0 || !chargeMorte || chargeMorte <= 0 || !chargeVive || chargeVive <= 0) {
        return { erreur: 'Veuillez remplir tous les champs obligatoires avec des valeurs valides.' };
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

    return {
        portee: portee,
        ltTotal: ltTotal,
        wvTotal: wvTotal,
        wmTotal: wmTotal,
        wtTotal: wtTotal,
        wfTotal: wfTotal
    };
}

// === FONCTIONS POUR VERSA-LAM ===

function updateLargeursEtages() {
    const nbEtages = parseInt(document.getElementById('nbEtages').value);
    const container = document.getElementById('largeursContainer');
    
    let html = '<label>Largeurs tributaires par étage</label>';
    
    for (let i = 1; i <= nbEtages; i++) {
        const etageLabel = `Étage ${i}`;
        
        html += `
            <div class="largeur-etage">
                <div class="input-row">
                    <div class="input-field">
                        <label for="ltEtage${i}">L.T. ${etageLabel}</label>
                        <div class="dimension-input">
                            <input type="number" id="ltEtage${i}Pieds" step="0.1" min="0" onchange="calculer()">
                            <span>pi</span>
                            <input type="number" id="ltEtage${i}Pouces" step="0.1" min="0" max="11.9" onchange="calculer()">
                            <span>po</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    container.innerHTML = html;
}

function calculer() {
    const resultat = calculerCharges('');
    
    if (resultat.erreur) {
        document.getElementById('poutreResults').innerHTML = `
            <p style="text-align: center; color: #A0522D; margin-top: 50px;">
                ${resultat.erreur}
            </p>
        `;
        return;
    }

    // Affichage des résultats de calcul
    document.getElementById('resultWv').textContent = `${resultat.wvTotal.toFixed(1)} lb/pi`;
    document.getElementById('resultWm').textContent = `${resultat.wmTotal.toFixed(1)} lb/pi`;
    document.getElementById('resultWt').textContent = `${resultat.wtTotal.toFixed(1)} lb/pi`;
    document.getElementById('resultWf').textContent = `${resultat.wfTotal.toFixed(1)} lb/pi`;

    // Récupération des paramètres additionnels pour Versa-Lam
    const largeurMax = parseFloat(document.getElementById('largeurMax').value) || null;
    const hauteurMax = parseFloat(document.getElementById('hauteurMax').value) || null;
    const optimisation = document.getElementById('optimisation').value;

    // Recherche des poutres viables
    const poutresViables = trouverPoutresViablesVersaLam(resultat.portee, resultat.wvTotal, resultat.wtTotal, resultat.wfTotal, largeurMax, hauteurMax, optimisation);
    
    afficherResultatsPoutresVersaLam(poutresViables, resultat.wvTotal, resultat.wtTotal, resultat.wfTotal);
}

function trouverPoutresViablesVersaLam(portee, wvTotal, wtTotal, wfTotal, largeurMax, hauteurMax, optimisation) {
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
        for (let hauteur of HAUTEURS_VERSA_LAM) {
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
                        wfMax: spec.wf || 'N/A'
                    });
                }
            }
        }
    }
    
    // Trier selon l'optimisation choisie
    if (optimisation === 'economique') {
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

function afficherResultatsPoutresVersaLam(poutresViables, wvTotal, wtTotal, wfTotal) {
    const container = document.getElementById('poutreResults');
    
    if (poutresViables.length === 0) {
        container.innerHTML = `
            <div class="no-solution">
                <h3>Aucune poutre viable trouvée</h3>
                <p>Les charges dépassent les capacités des poutres Versa-Lam® 2.0E pour cette portée.</p>
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
                Poutres Versa-Lam® viables (${poutresViables.length} option${poutresViables.length > 1 ? 's' : ''})
            </h3>
    `;

    poutresViables.forEach((poutre, index) => {
        const epaisseur = poutre.nbPlis === 1 ? "1¾\"" : `${poutre.nbPlis} × 1¾\"`;
        
        html += `
            <div class="poutre-option" onclick="selectionnerPoutre(${index})">
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

// === FONCTIONS POUR CCQ ===

function updateLargeursEtagesCCQ() {
    const nbEtages = parseInt(document.getElementById('nbEtages-ccq').value);
    const container = document.getElementById('largeursContainer-ccq');
    
    let html = '<label>Largeurs tributaires par étage (longueur supportée)</label>';
    
    for (let i = 1; i <= nbEtages; i++) {
        const etageLabel = `Étage ${i}`;
        
        html += `
            <div class="largeur-etage">
                <div class="input-row">
                    <div class="input-field">
                        <label for="ltEtage${i}-ccq">L.T. ${etageLabel}</label>
                        <div class="dimension-input">
                            <input type="number" id="ltEtage${i}Pieds-ccq" step="0.1" min="0" onchange="calculerCCQ()">
                            <span>pi</span>
                            <input type="number" id="ltEtage${i}Pouces-ccq" step="0.1" min="0" max="11.9" onchange="calculerCCQ()">
                            <span>po</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    container.innerHTML = html;
}

function calculerCCQ() {
    const resultat = calculerCharges('-ccq');
    
    if (resultat.erreur) {
        document.getElementById('poutreResults-ccq').innerHTML = `
            <p style="text-align: center; color: #A0522D; margin-top: 50px;">
                ${resultat.erreur}
            </p>
        `;
        return;
    }

    // Affichage des résultats de calcul
    document.getElementById('resultWv-ccq').textContent = `${resultat.wvTotal.toFixed(1)} lb/pi`;
    document.getElementById('resultWm-ccq').textContent = `${resultat.wmTotal.toFixed(1)} lb/pi`;
    document.getElementById('resultWt-ccq').textContent = `${resultat.wtTotal.toFixed(1)} lb/pi`;
    document.getElementById('resultWf-ccq').textContent = `${resultat.wfTotal.toFixed(1)} lb/pi`;

    // Récupération des paramètres additionnels pour CCQ
    const essence = document.getElementById('essence-ccq').value;
    const qualite = document.getElementById('qualite-ccq').value;
    const largeurMax = parseFloat(document.getElementById('largeurMax-ccq').value) || null;
    const hauteurMax = parseFloat(document.getElementById('hauteurMax-ccq').value) || null;
    const optimisation = document.getElementById('optimisation-ccq').value;

    // Conversion de la largeur tributaire totale en mètres pour les tables CCQ
    const longueurSupporteeMetres = resultat.ltTotal * 0.3048;

    // Recherche des poutres viables selon CCQ
    const poutresViables = trouverPoutresViablesCCQ(resultat.portee, longueurSupporteeMetres, essence, qualite, largeurMax, hauteurMax, optimisation);
    
    afficherResultatsPoutresCCQ(poutresViables, resultat.portee, resultat.ltTotal, essence, qualite);
}

function trouverPoutresViablesCCQ(portee, longueurSupporteeMetres, essence, qualite, largeurMax, hauteurMax, optimisation) {
    const poutresViables = [];
    
    // Vérifier si l'essence et la qualité existent dans les données
    if (!CCQ_COMPOSITE_BEAM_DATA[essence] || !CCQ_COMPOSITE_BEAM_DATA[essence][qualite]) {
        return [];
    }

    const donnees = CCQ_COMPOSITE_BEAM_DATA[essence][qualite];
    
    // Trouver la longueur supportée appropriée dans les tables (2.4, 3.0, 3.6, 4.2, 4.8, 5.4, 6.0m)
    const longueursSupportees = [2.4, 3.0, 3.6, 4.2, 4.8, 5.4, 6.0];
    let longueurSupporteeTable = null;
    
    for (let longueur of longueursSupportees) {
        if (longueur >= longueurSupporteeMetres) {
            longueurSupporteeTable = longueur;
            break;
        }
    }
    
    if (!longueurSupporteeTable) {
        return []; // Longueur supportée trop grande
    }
    
    // Tester différents nombres de plis (3, 4, 5) et hauteurs
    for (let nbPlis = 3; nbPlis <= 5; nbPlis++) {
        for (let hauteur of HAUTEURS_CCQ) {
            const configKey = `${nbPlis}-38x${hauteur === "7.25" ? "184" : hauteur === "9.25" ? "235" : "286"}`;
            
            if (donnees[configKey]) {
                const largeurPoutre = nbPlis * 1.5; // 38mm = 1.5"
                const hauteurPoutre = parseFloat(hauteur);
                
                // Vérifier contraintes dimensionnelles
                if (largeurMax && largeurPoutre > largeurMax) {
                    continue;
                }
                
                if (hauteurMax && hauteurPoutre > hauteurMax) {
                    continue;
                }
                
                // Vérifier si cette configuration peut supporter la portée demandée
                const porteeData = donnees[configKey];
                
                if (porteeData[longueurSupporteeTable]) {
                    const porteeMaximale = porteeData[longueurSupporteeTable];
                    
                    if (porteeMaximale >= portee) {
                        const ratio = porteeMaximale / portee;
                        poutresViables.push({
                            essence: essence,
                            qualite: qualite,
                            nbPlis: nbPlis,
                            hauteur: hauteur,
                            largeurPoutre: largeurPoutre,
                            porteeMaximale: porteeMaximale,
                            longueurSupportee: longueurSupporteeTable,
                            ratio: ratio,
                            hauteurNum: hauteurPoutre
                        });
                    }
                }
            }
        }
    }
    
    // Tri selon le critère d'optimisation
    if (optimisation === 'economique') {
        // Trier par coût (nbPlis puis hauteur)
        poutresViables.sort((a, b) => {
            if (a.nbPlis !== b.nbPlis) return a.nbPlis - b.nbPlis;
            return a.hauteurNum - b.hauteurNum;
        });
    } else {
        // Trier par hauteur minimale puis nombre de plis
        poutresViables.sort((a, b) => {
            if (a.hauteurNum !== b.hauteurNum) return a.hauteurNum - b.hauteurNum;
            return a.nbPlis - b.nbPlis;
        });
    }
    
    return poutresViables;
}

function afficherResultatsPoutresCCQ(poutresViables, portee, longueurSupportee, essence, qualite) {
    const container = document.getElementById('poutreResults-ccq');
    
    if (poutresViables.length === 0) {
        container.innerHTML = `
            <div class="no-solution">
                <h3>Aucune poutre viable trouvée</h3>
                <p>Aucune poutre CCQ ne peut supporter cette portée de ${portee.toFixed(1)}' avec une longueur supportée de ${longueurSupportee.toFixed(1)}'.</p>
                <p>Suggestions :</p>
                <ul style="text-align: left; margin-top: 10px;">
                    <li>Augmenter les contraintes de largeur/hauteur</li>
                    <li>Choisir une essence de bois supérieure</li>
                    <li>Choisir une qualité de bois supérieure</li>
                    <li>Réduire la portée</li>
                    <li>Réduire la longueur supportée</li>
                </ul>
            </div>
        `;
        return;
    }

    let html = `
        <div class="poutre-options">
            <h3 style="margin-bottom: 20px; color: #D2691E;">
                Poutres CCQ viables (${poutresViables.length} option${poutresViables.length > 1 ? 's' : ''})
            </h3>
    `;

    poutresViables.forEach((poutre, index) => {
        const epaisseur = `${poutre.nbPlis} × 1½"`;
        const porteeStr = `${poutre.porteeMaximale.toFixed(1)}'`;
        const longueurSupporteeStr = `${(poutre.longueurSupportee * 3.28084).toFixed(1)}'`;
        const utilizationPercent = ((portee / poutre.porteeMaximale) * 100).toFixed(0);
        
        html += `
            <div class="poutre-option" onclick="selectionnerPoutre(${index})">
                <div class="poutre-title">
                    ${epaisseur} × ${poutre.hauteur}" - ${essenceLabels[essence]} ${qualiteLabels[qualite]}
                </div>
                <div class="poutre-specs">
                    <div><strong>Portée max:</strong> ${porteeStr}</div>
                    <div><strong>Nombre de plis:</strong> ${poutre.nbPlis}</div>
                    <div><strong>Largeur:</strong> ${poutre.largeurPoutre}"</div>
                    <div><strong>Hauteur:</strong> ${poutre.hauteur}"</div>
                    <div><strong>Long. supportée:</strong> ${longueurSupporteeStr}</div>
                    <div><strong>Utilisation:</strong> ${utilizationPercent}%</div>
                </div>
            </div>
        `;
    });

    html += `
        <div style="margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 8px; font-size: 0.9em;">
            <strong>Paramètres de conception:</strong><br>
            Portée demandée: ${portee.toFixed(1)}' | 
            Longueur supportée: ${longueurSupportee.toFixed(1)}'<br>
            <strong>Spécifications:</strong> ${essenceLabels[essence]} - ${qualiteLabels[qualite]}<br>
            <em>Les portées indiquées sont les portées maximales selon les tableaux CCQ.<br>
            Note CCQ: La longueur supportée correspond à la moitié de la somme des portées des solives de part et d'autre de la poutre.</em>
        </div>
    `;

    html += '</div>';
    container.innerHTML = html;
}

// === FONCTIONS UTILITAIRES ===

function selectionnerPoutre(index) {
    // Retirer la sélection précédente
    document.querySelectorAll('.poutre-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Ajouter la sélection à l'option cliquée
    document.querySelectorAll('.poutre-option')[index].classList.add('selected');
}

// Fonctions pour les onglets
function showTab(tabName) {
    // Masquer tous les contenus d'onglets
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    
    // Retirer la classe active de tous les onglets
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Afficher le contenu de l'onglet sélectionné
    document.getElementById(tabName).classList.add('active');
    
    // Ajouter la classe active à l'onglet correspondant
    const activeTab = Array.from(tabs).find(tab => 
        tab.getAttribute('onclick').includes(tabName)
    );
    if (activeTab) {
        activeTab.classList.add('active');
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    showTab('versalam');
    updateLargeursEtages();
    updateLargeursEtagesCCQ();
    
    // Auto-calcul pour Versa-Lam
    const inputsVersaLam = ['porteePieds', 'porteePouces', 'nbEtages', 'chargeMorte', 'chargeVive', 'chargeViveNeige', 'largeurMax', 'hauteurMax', 'optimisation'];
    inputsVersaLam.forEach(inputId => {
        const element = document.getElementById(inputId);
        if (element) {
            element.addEventListener('input', function() {
                clearTimeout(this.timer);
                this.timer = setTimeout(calculer, 500);
            });
        }
    });
    
    // Auto-calcul pour CCQ
    const inputsCCQ = ['porteePieds-ccq', 'porteePouces-ccq', 'nbEtages-ccq', 'chargeMorte-ccq', 'chargeVive-ccq', 'chargeViveNeige-ccq', 'essence-ccq', 'qualite-ccq', 'largeurMax-ccq', 'hauteurMax-ccq', 'optimisation-ccq'];
    inputsCCQ.forEach(inputId => {
        const element = document.getElementById(inputId);
        if (element) {
            element.addEventListener('input', function() {
                clearTimeout(this.timer);
                this.timer = setTimeout(calculerCCQ, 500);
            });
        }
    });
    
    // Ajouter des événements pour les largeurs tributaires dynamiques
    document.getElementById('largeursContainer').addEventListener('input', function(e) {
        if (e.target.tagName === 'INPUT') {
            clearTimeout(this.timer);
            this.timer = setTimeout(calculer, 500);
        }
    });
    
    document.getElementById('largeursContainer-ccq').addEventListener('input', function(e) {
        if (e.target.tagName === 'INPUT') {
            clearTimeout(this.timer);
            this.timer = setTimeout(calculerCCQ, 500);
        }
    });
});
