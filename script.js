// Tables des portées Versa-Lam 2.0E
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

// Données CCQ complètes
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
            "3-38x184": { 2.4: 7.94, 3.0: 7.35, 3.6: 6.89, 4.2: 6.50, 4.8: 6.20, 5.4: 5.94, 6.0: 5.64 },
            "4-38x184": { 2.4: 8.76, 3.0: 8.11, 3.6: 7.58, 4.2: 7.15, 4.8: 6.82, 5.4: 6.56, 6.0: 6.33 },
            "5-38x184": { 2.4: 9.45, 3.0: 8.76, 3.6: 8.20, 4.2: 7.74, 4.8: 7.38, 5.4: 7.09, 6.0: 6.82 },
            "3-38x235": { 2.4: 10.14, 3.0: 9.38, 3.6: 8.79, 4.2: 8.33, 4.8: 7.97, 5.4: 7.64, 6.0: 7.32 },
            "4-38x235": { 2.4: 11.15, 3.0: 10.33, 3.6: 9.71, 4.2: 9.22, 4.8: 8.79, 5.4: 8.43, 6.0: 8.11 },
            "5-38x235": { 2.4: 12.01, 3.0: 11.15, 3.6: 10.47, 4.2: 9.94, 4.8: 9.48, 5.4: 9.09, 6.0: 8.79 },
            "3-38x286": { 2.4: 12.34, 3.0: 11.42, 3.6: 10.69, 4.2: 10.14, 4.8: 9.68, 5.4: 9.22, 6.0: 8.79 },
            "4-38x286": { 2.4: 13.58, 3.0: 12.57, 3.6: 11.81, 4.2: 11.22, 4.8: 10.69, 5.4: 10.24, 6.0: 9.81 },
            "5-38x286": { 2.4: 14.63, 3.0: 13.58, 3.6: 12.73, 4.2: 12.08, 4.8: 11.52, 5.4: 11.06, 6.0: 10.63 }
        },
        "no1et2": {
            "3-38x184": { 2.4: 7.22, 3.0: 6.43, 3.6: 5.84, 4.2: 5.38, 4.8: 5.03, 5.4: 4.72, 6.0: 4.47 },
            "4-38x184": { 2.4: 8.37, 3.0: 7.48, 3.6: 6.79, 4.2: 6.27, 4.8: 5.87, 5.4: 5.51, 6.0: 5.25 },
            "5-38x184": { 2.4: 9.09, 3.0: 8.37, 3.6: 7.61, 4.2: 7.02, 4.8: 6.56, 5.4: 6.17, 6.0: 5.87 },
            "3-38x235": { 2.4: 8.86, 3.0: 7.87, 3.6: 7.15, 4.2: 6.59, 4.8: 6.17, 5.4: 5.81, 6.0: 5.51 },
            "4-38x235": { 2.4: 10.24, 3.0: 9.15, 3.6: 8.33, 4.2: 7.68, 4.8: 7.18, 5.4: 6.76, 6.0: 6.40 },
            "5-38x235": { 2.4: 11.12, 3.0: 10.24, 3.6: 9.32, 4.2: 8.63, 4.8: 8.04, 5.4: 7.58, 6.0: 7.18 },
            "3-38x286": { 2.4: 10.27, 3.0: 9.15, 3.6: 8.33, 4.2: 7.68, 4.8: 7.18, 5.4: 6.76, 6.0: 6.40 },
            "4-38x286": { 2.4: 11.88, 3.0: 10.63, 3.6: 9.68, 4.2: 8.92, 4.8: 8.33, 5.4: 7.84, 6.0: 7.41 },
            "5-38x286": { 2.4: 12.89, 3.0: 11.88, 3.6: 10.79, 4.2: 9.97, 4.8: 9.32, 5.4: 8.76, 6.0: 8.30 }
        }
    }
};

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

const HAUTEURS = ["9¼", "9½", "11¼", "11⅞", "14", "16", "18"];

// === FONCTIONS VERSA-LAM ===

function updateLargeursEtages() {
    const nbEtages = parseInt(document.getElementById('nbEtages').value) || 1;
    const container = document.getElementById('largeursContainer');
    
    let html = '';
    for (let i = 1; i <= nbEtages; i++) {
        html += `
            <div class="input-row">
                <div class="input-field">
                    <label for="largeur${i}Pieds">L.T. Étage ${i}</label>
                    <div class="input-with-unit">
                        <input type="number" id="largeur${i}Pieds" min="0" max="50" step="1" value="">
                        <span class="unit">pi</span>
                    </div>
                </div>
                <div class="input-field">
                    <label>&nbsp;</label>
                    <div class="input-with-unit">
                        <input type="number" id="largeur${i}Pouces" min="0" max="11" step="1" value="">
                        <span class="unit">po</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    container.innerHTML = html;
}

function calculer() {
    const porteePieds = parseInt(document.getElementById('porteePieds').value) || 0;
    const porteePouces = parseInt(document.getElementById('porteePouces').value) || 0;
    const portee = porteePieds + (porteePouces / 12);
    
    const nbEtages = parseInt(document.getElementById('nbEtages').value) || 1;
    
    let largeurTributaireTotale = 0;
    for (let i = 1; i <= nbEtages; i++) {
        const ltPieds = parseFloat(document.getElementById(`largeur${i}Pieds`).value) || 0;
        const ltPouces = parseFloat(document.getElementById(`largeur${i}Pouces`).value) || 0;
        largeurTributaireTotale += ltPieds + (ltPouces / 12);
    }
    
    const chargeMorte = parseFloat(document.getElementById('chargeMorte').value) || 0;
    const chargeVive = parseFloat(document.getElementById('chargeVive').value) || 0;
    const chargeViveNeige = parseFloat(document.getElementById('chargeViveNeige').value) || 0;
    
    if (!portee || portee < 6 || portee > 30) {
        document.getElementById('resultWv').textContent = '-';
        document.getElementById('resultWm').textContent = '-';
        document.getElementById('resultWt').textContent = '-';
        document.getElementById('resultWf').textContent = '-';
        document.getElementById('poutreResults').innerHTML = `
            <p style="text-align: center; color: #A0522D; margin-top: 50px;">
                Entrez les paramètres pour voir les options de poutres.
            </p>
        `;
        return;
    }
    
    const Wv = (chargeVive + chargeViveNeige) * largeurTributaireTotale;
    const Wm = chargeMorte * largeurTributaireTotale;
    const Wt = Wv + Wm;
    const Wf = (Wv * 1.5) + (Wm * 1.25);
    
    document.getElementById('resultWv').textContent = `${Wv.toFixed(1)} lb/pi`;
    document.getElementById('resultWm').textContent = `${Wm.toFixed(1)} lb/pi`;
    document.getElementById('resultWt').textContent = `${Wt.toFixed(1)} lb/pi`;
    document.getElementById('resultWf').textContent = `${Wf.toFixed(1)} lb/pi`;
    
    const largeurMax = parseFloat(document.getElementById('largeurMax').value) || null;
    const hauteurMax = parseFloat(document.getElementById('hauteurMax').value) || null;
    const optimisation = document.getElementById('optimisation').value;
    
    const poutresViables = trouverPoutresViables(portee, Wv, Wt, Wf, largeurMax, hauteurMax, optimisation);
    afficherResultatsPoutres(poutresViables, portee, Wv, Wm, Wt, Wf);
}

function trouverPoutresViables(portee, Wv, Wt, Wf, largeurMax, hauteurMax, optimisation) {
    const poutresViables = [];
    
    let porteeArrondie = Math.round(portee / 2) * 2;
    if (porteeArrondie < 10) porteeArrondie = 10;
    if (porteeArrondie > 30) porteeArrondie = 30;
    
    if (!VERSA_LAM_TABLE[porteeArrondie]) {
        return poutresViables;
    }
    
    for (const hauteur of HAUTEURS) {
        const capacites = VERSA_LAM_TABLE[porteeArrondie][hauteur];
        if (!capacites) continue;
        
        const hauteurNum = parseFloat(hauteur.replace('¼', '.25').replace('½', '.5').replace('⅞', '.875'));
        if (hauteurMax && hauteurNum > hauteurMax) continue;
        
        let nbPlisMin = Math.max(
            Math.ceil(Wv / capacites.wv),
            Math.ceil(Wt / capacites.wt),
            Math.ceil(Wf / capacites.wf)
        );
        
        if (nbPlisMin > 5) continue;
        
        const largeurPoutre = 1.75 * nbPlisMin;
        if (largeurMax && largeurPoutre > largeurMax) continue;
        
        poutresViables.push({
            hauteur: hauteur,
            hauteurNum: hauteurNum,
            nbPlis: nbPlisMin,
            largeurPoutre: largeurPoutre,
            capaciteWv: capacites.wv,
            capaciteWt: capacites.wt,
            capaciteWf: capacites.wf
        });
    }
    
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

function afficherResultatsPoutres(poutresViables, portee, Wv, Wm, Wt, Wf) {
    const container = document.getElementById('poutreResults');
    
    if (poutresViables.length === 0) {
        container.innerHTML = `
            <div class="no-solution">
                <h3>Aucune poutre viable trouvée</h3>
                <p>Aucune poutre Versa-Lam ne peut supporter cette portée de ${portee.toFixed(1)}' avec les charges calculées.</p>
                <p>Suggestions :</p>
                <ul style="text-align: left; margin-top: 10px;">
                    <li>Augmenter les contraintes de largeur/hauteur</li>
                    <li>Réduire la portée</li>
                    <li>Réduire les charges</li>
                    <li>Réduire les largeurs tributaires</li>
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
        const dimension = `${epaisseur} × ${poutre.hauteur}"`;
        const largeurImperiale = `${Math.floor(poutre.largeurPoutre)}" ${poutre.largeurPoutre % 1 !== 0 ? '¾"' : ''}`.trim();
        
        const capaciteWvTotale = (poutre.capaciteWv * poutre.nbPlis).toFixed(0);
        const capaciteWtTotale = (poutre.capaciteWt * poutre.nbPlis).toFixed(0);
        const capaciteWfTotale = (poutre.capaciteWf * poutre.nbPlis).toFixed(0);
        
        const utilizationWv = ((Wv / (poutre.capaciteWv * poutre.nbPlis)) * 100).toFixed(0);
        const utilizationWt = ((Wt / (poutre.capaciteWt * poutre.nbPlis)) * 100).toFixed(0);
        const utilizationWf = ((Wf / (poutre.capaciteWf * poutre.nbPlis)) * 100).toFixed(0);
        
        html += `
            <div class="poutre-option" onclick="selectionnerPoutre(${index})">
                <div class="poutre-title">
                    ${dimension} (${largeurImperiale} × ${poutre.hauteur}")
                </div>
                <div class="poutre-details">
                    <div class="poutre-specs">
                        <div><strong>Portée:</strong> ${portee.toFixed(1)}'</div>
                        <div><strong>Nombre de plis:</strong> ${poutre.nbPlis}</div>
                    </div>
                    <div class="poutre-capacites">
                        <div><strong>Capacité Wv:</strong> ${capaciteWvTotale} lb/pi</div>
                        <div><strong>Capacité Wt:</strong> ${capaciteWtTotale} lb/pi</div>
                        <div><strong>Capacité Wf:</strong> ${capaciteWfTotale} lb/pi</div>
                    </div>
                    <div class="poutre-utilization">
                        <div><strong>Utilisation Wv:</strong> ${utilizationWv}%</div>
                        <div><strong>Utilisation Wt:</strong> ${utilizationWt}%</div>
                        <div><strong>Utilisation Wf:</strong> ${utilizationWf}%</div>
                    </div>
                </div>
            </div>
        `;
    });
    
    html += `
        <div style="margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 8px; font-size: 0.9em;">
            <strong>Paramètres de conception:</strong><br>
            Portée: ${portee.toFixed(1)}' | 
            Wv: ${Wv.toFixed(1)} lb/pi | 
            Wm: ${Wm.toFixed(1)} lb/pi | 
            Wt: ${Wt.toFixed(1)} lb/pi | 
            Wf: ${Wf.toFixed(1)} lb/pi
        </div>
    `;
    
    html += '</div>';
    container.innerHTML = html;
}

// === FONCTIONS CCQ ===

function updateLargeursEtagesCCQ() {
    const nbEtages = parseInt(document.getElementById('nbEtages-ccq').value) || 1;
    const container = document.getElementById('largeursContainer-ccq');
    
    let html = '';
    for (let i = 1; i <= nbEtages; i++) {
        html += `
            <div class="input-row">
                <div class="input-field">
                    <label for="largeur${i}Pieds-ccq">L.T. Étage ${i}</label>
                    <div class="input-with-unit">
                        <input type="number" id="largeur${i}Pieds-ccq" min="0" max="50" step="1" value="">
                        <span class="unit">pi</span>
                    </div>
                </div>
                <div class="input-field">
                    <label>&nbsp;</label>
                    <div class="input-with-unit">
                        <input type="number" id="largeur${i}Pouces-ccq" min="0" max="11" step="1" value="">
                        <span class="unit">po</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    container.innerHTML = html;
}

function calculerCCQ() {
    const porteePieds = parseInt(document.getElementById('porteePieds-ccq').value) || 0;
    const porteePouces = parseInt(document.getElementById('porteePouces-ccq').value) || 0;
    const portee = porteePieds + (porteePouces / 12);
    const porteeMetres = portee * 0.3048;
    
    const nbEtages = parseInt(document.getElementById('nbEtages-ccq').value) || 1;
    
    let largeurTributaireTotale = 0;
    for (let i = 1; i <= nbEtages; i++) {
        const ltPieds = parseFloat(document.getElementById(`largeur${i}Pieds-ccq`).value) || 0;
        const ltPouces = parseFloat(document.getElementById(`largeur${i}Pouces-ccq`).value) || 0;
        largeurTributaireTotale += ltPieds + (ltPouces / 12);
    }
    
    const longueurSupporteeMetres = largeurTributaireTotale * 0.3048;
    
    const chargeMorte = parseFloat(document.getElementById('chargeMorte-ccq').value) || 0;
    const chargeVive = parseFloat(document.getElementById('chargeVive-ccq').value) || 0;
    const chargeViveNeige = parseFloat(document.getElementById('chargeViveNeige-ccq').value) || 0;
    const essence = document.getElementById('essence-ccq').value;
    const qualite = document.getElementById('qualite-ccq').value;
    
    if (!portee || portee < 6 || portee > 30) {
        document.getElementById('resultWv-ccq').textContent = '-';
        document.getElementById('resultWm-ccq').textContent = '-';
        document.getElementById('resultWt-ccq').textContent = '-';
        document.getElementById('resultWf-ccq').textContent = '-';
        document.getElementById('poutreResults-ccq').innerHTML = `
            <p style="text-align: center; color: #A0522D; margin-top: 50px;">
                Entrez les paramètres pour voir les options de poutres CCQ.
            </p>
        `;
        return;
    }
    
    const Wv = (chargeVive + chargeViveNeige) * largeurTributaireTotale;
    const Wm = chargeMorte * largeurTributaireTotale;
    const Wt = Wv + Wm;
    const Wf = (Wv * 1.5) + (Wm * 1.25);
    
    document.getElementById('resultWv-ccq').textContent = `${Wv.toFixed(1)} lb/pi`;
    document.getElementById('resultWm-ccq').textContent = `${Wm.toFixed(1)} lb/pi`;
    document.getElementById('resultWt-ccq').textContent = `${Wt.toFixed(1)} lb/pi`;
    document.getElementById('resultWf-ccq').textContent = `${Wf.toFixed(1)} lb/pi`;
    
    const largeurMax = parseFloat(document.getElementById('largeurMax-ccq').value) || null;
    const hauteurMax = parseFloat(document.getElementById('hauteurMax-ccq').value) || null;
    const optimisation = document.getElementById('optimisation-ccq').value;
    
    const poutresViables = trouverPoutresViablesCCQ(
        porteeMetres, 
        longueurSupporteeMetres, 
        essence, 
        qualite, 
        largeurMax, 
        hauteurMax, 
        optimisation
    );
    
    afficherResultatsPoutresCCQ(poutresViables, portee, largeurTributaireTotale, essence, qualite);
}

function trouverPoutresViablesCCQ(porteeMetres, longueurSupporteeMetres, essence, qualite, largeurMax, hauteurMax, optimisation) {
    const poutresViables = [];
    
    if (!CCQ_COMPOSITE_BEAM_DATA[essence] || !CCQ_COMPOSITE_BEAM_DATA[essence][qualite]) {
        return poutresViables;
    }
    
    const tableauPoutres = CCQ_COMPOSITE_BEAM_DATA[essence][qualite];
    
    const longueursSupportees = [2.4, 3.0, 3.6, 4.2, 4.8, 5.4, 6.0];
    let longueurArrondie = longueursSupportees[0];
    
    for (let ls of longueursSupportees) {
        if (longueurSupporteeMetres <= ls) {
            longueurArrondie = ls;
            break;
        }
    }
    
    if (longueurSupporteeMetres > 6.0) {
        longueurArrondie = 6.0;
    }
    
    for (const [config, portees] of Object.entries(tableauPoutres)) {
        const [nbPlisStr, largeurStr, hauteurStr] = config.split('-');
        const nbPlis = parseInt(nbPlisStr);
        const largeurMm = parseInt(largeurStr);
        const hauteurMm = parseInt(hauteurStr);
        
        const largeurPouces = (largeurMm / 25.4) * nbPlis;
        const hauteurPouces = hauteurMm / 25.4;
        
        if (largeurMax && largeurPouces > largeurMax) continue;
        if (hauteurMax && hauteurPouces > hauteurMax) continue;
        
        if (!portees[longueurArrondie]) continue;
        
        const porteeMaximale = portees[longueurArrondie];
        
        if (porteeMaximale >= porteeMetres) {
            poutresViables.push({
                nbPlis: nbPlis,
                largeurPoutre: largeurPouces,
                hauteur: hauteurPouces.toFixed(1),
                hauteurNum: hauteurPouces,
                porteeMaximale: porteeMaximale,
                longueurSupportee: longueurArrondie,
                config: config
            });
        }
    }
    
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
        const porteeStr = `${(poutre.porteeMaximale * 3.28084).toFixed(1)}'`;
        const longueurSupporteeStr = `${(poutre.longueurSupportee * 3.28084).toFixed(1)}'`;
        const utilizationPercent = ((portee / (poutre.porteeMaximale * 3.28084)) * 100).toFixed(0);
        
        html += `
            <div class="poutre-option" onclick="selectionnerPoutre(${index})">
                <div class="poutre-title">
                    ${epaisseur} × ${poutre.hauteur}" - ${essenceLabels[essence]} ${qualiteLabels[qualite]}
                </div>
                <div class="poutre-specs">
                    <div><strong>Portée max:</strong> ${porteeStr}</div>
                    <div><strong>Nombre de plis:</strong> ${poutre.nbPlis}</div>
                    <div><strong>Largeur:</strong> ${poutre.largeurPoutre.toFixed(1)}"</div>
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
    document.querySelectorAll('.poutre-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    document.querySelectorAll('.poutre-option')[index].classList.add('selected');
}

function showTab(tabName) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    document.getElementById(tabName).classList.add('active');
    
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
