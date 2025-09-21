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

// Données CCQ pour poutres composées - converties en système impérial
// Basé sur les tableaux des portées du Code du bâtiment du Canada
const CCQ_COMPOSITE_BEAM_DATA = {
    "douglas": {
        "select": {
            "3-1.5x7.25": { // 3 - 38x184
                2.4: 11.02, 3.0: 10.24, 3.6: 9.65, 4.2: 9.15, 4.8: 8.76, 5.4: 8.33, 6.0: 7.91
            },
            "4-1.5x7.25": {
                2.4: 12.14, 3.0: 11.29, 3.6: 10.59, 4.2: 10.07, 4.8: 9.65, 5.4: 9.28, 6.0: 8.96
            },
            "5-1.5x7.25": {
                2.4: 13.09, 3.0: 12.14, 3.6: 11.42, 4.2: 10.86, 4.8: 10.40, 5.4: 9.97, 6.0: 9.65
            },
            "3-1.5x9.25": {
                2.4: 14.11, 3.0: 13.09, 3.6: 12.30, 4.2: 11.55, 4.8: 10.79, 5.4: 10.20, 6.0: 9.68
            },
            "4-1.5x9.25": {
                2.4: 15.52, 3.0: 14.40, 3.6: 13.55, 4.2: 12.86, 4.8: 12.30, 5.4: 11.78, 6.0: 11.15
            },
            "5-1.5x9.25": {
                2.4: 16.70, 3.0: 15.52, 3.6: 14.60, 4.2: 13.88, 4.8: 13.25, 5.4: 12.76, 6.0: 12.30
            },
            "3-1.5x11.25": {
                2.4: 17.16, 3.0: 15.88, 3.6: 14.47, 4.2: 13.42, 4.8: 12.53, 5.4: 11.81, 6.0: 11.22
            },
            "4-1.5x11.25": {
                2.4: 18.57, 3.0: 17.52, 3.6: 16.50, 4.2: 15.49, 4.8: 14.47, 5.4: 13.65, 6.0: 12.96
            },
            "5-1.5x11.25": {
                2.4: 19.65, 3.0: 18.57, 3.6: 17.75, 4.2: 16.86, 4.8: 16.14, 5.4: 15.26, 6.0: 14.47
            }
        },
        "no1-2": {
            "3-1.5x7.25": {
                2.4: 9.74, 3.0: 8.69, 3.6: 7.94, 4.2: 7.35, 4.8: 6.89, 5.4: 6.50, 6.0: 6.17
            },
            "4-1.5x7.25": {
                2.4: 11.22, 3.0: 10.04, 3.6: 9.19, 4.2: 8.50, 4.8: 7.94, 5.4: 7.48, 6.0: 7.12
            },
            "5-1.5x7.25": {
                2.4: 12.53, 3.0: 11.22, 3.6: 10.27, 4.2: 9.48, 4.8: 8.89, 5.4: 8.37, 6.0: 7.94
            },
            "3-1.5x9.25": {
                2.4: 11.91, 3.0: 10.63, 3.6: 9.71, 4.2: 8.99, 4.8: 8.40, 5.4: 7.94, 6.0: 7.51
            },
            "4-1.5x9.25": {
                2.4: 13.75, 3.0: 12.30, 3.6: 11.22, 4.2: 10.40, 4.8: 9.71, 5.4: 9.15, 6.0: 8.69
            },
            "5-1.5x9.25": {
                2.4: 15.35, 3.0: 13.75, 3.6: 12.53, 4.2: 11.61, 4.8: 10.86, 5.4: 10.24, 6.0: 9.71
            },
            "3-1.5x11.25": {
                2.4: 13.82, 3.0: 12.34, 3.6: 11.29, 4.2: 10.43, 4.8: 9.78, 5.4: 9.22, 6.0: 8.73
            },
            "4-1.5x11.25": {
                2.4: 15.95, 3.0: 14.27, 3.6: 13.02, 4.2: 12.04, 4.8: 11.29, 5.4: 10.63, 6.0: 10.07
            },
            "5-1.5x11.25": {
                2.4: 17.81, 3.0: 15.95, 3.6: 14.57, 4.2: 13.48, 4.8: 12.60, 5.4: 11.88, 6.0: 11.29
            }
        }
    },
    "hem-fir": {
        "select": {
            "3-1.5x7.25": {
                2.4: 10.89, 3.0: 10.10, 3.6: 9.51, 4.2: 9.02, 4.8: 8.63, 5.4: 8.17, 6.0: 7.48
            },
            "4-1.5x7.25": {
                2.4: 11.98, 3.0: 11.12, 3.6: 10.46, 4.2: 9.94, 4.8: 9.51, 5.4: 9.15, 6.0: 8.83
            },
            "5-1.5x7.25": {
                2.4: 12.89, 3.0: 11.98, 3.6: 11.29, 4.2: 10.73, 4.8: 10.24, 5.4: 9.84, 6.0: 9.51
            },
            "3-1.5x9.25": {
                2.4: 13.91, 3.0: 12.89, 3.6: 12.14, 4.2: 11.38, 4.8: 10.63, 5.4: 9.68, 6.0: 8.86
            },
            "4-1.5x9.25": {
                2.4: 15.29, 3.0: 14.20, 3.6: 13.38, 4.2: 12.70, 4.8: 12.14, 5.4: 11.58, 6.0: 10.99
            },
            "5-1.5x9.25": {
                2.4: 16.50, 3.0: 15.29, 3.6: 14.40, 4.2: 13.68, 4.8: 13.09, 5.4: 12.57, 6.0: 12.14
            },
            "3-1.5x11.25": {
                2.4: 16.93, 3.0: 15.62, 3.6: 14.27, 4.2: 13.19, 4.8: 12.01, 5.4: 10.89, 6.0: 9.97
            },
            "4-1.5x11.25": {
                2.4: 18.40, 3.0: 17.29, 3.6: 16.27, 4.2: 15.26, 4.8: 14.27, 5.4: 13.45, 6.0: 12.70
            },
            "5-1.5x11.25": {
                2.4: 19.46, 3.0: 18.40, 3.6: 17.52, 4.2: 16.63, 4.8: 15.91, 5.4: 15.03, 6.0: 14.27
            }
        },
        "no1-2": {
            "3-1.5x7.25": {
                2.4: 10.20, 3.0: 9.12, 3.6: 8.33, 4.2: 7.71, 4.8: 7.22, 5.4: 6.79, 6.0: 6.46
            },
            "4-1.5x7.25": {
                2.4: 11.65, 3.0: 10.53, 3.6: 9.61, 4.2: 8.92, 4.8: 8.33, 5.4: 7.84, 6.0: 7.45
            },
            "5-1.5x7.25": {
                2.4: 12.53, 3.0: 11.65, 3.6: 10.76, 4.2: 9.97, 4.8: 9.32, 5.4: 8.79, 6.0: 8.33
            },
            "3-1.5x9.25": {
                2.4: 12.47, 3.0: 11.15, 3.6: 10.20, 4.2: 9.45, 4.8: 8.83, 5.4: 8.33, 6.0: 7.91
            },
            "4-1.5x9.25": {
                2.4: 14.40, 3.0: 12.89, 3.6: 11.78, 4.2: 10.89, 4.8: 10.20, 5.4: 9.61, 6.0: 9.12
            },
            "5-1.5x9.25": {
                2.4: 16.01, 3.0: 14.40, 3.6: 13.16, 4.2: 12.17, 4.8: 11.38, 5.4: 10.73, 6.0: 10.20
            },
            "3-1.5x11.25": {
                2.4: 14.47, 3.0: 12.96, 3.6: 11.81, 4.2: 10.96, 4.8: 10.24, 5.4: 9.65, 6.0: 9.15
            },
            "4-1.5x11.25": {
                2.4: 16.73, 3.0: 14.96, 3.6: 13.65, 4.2: 12.63, 4.8: 11.81, 5.4: 11.15, 6.0: 10.56
            },
            "5-1.5x11.25": {
                2.4: 18.70, 3.0: 16.73, 3.6: 15.26, 4.2: 14.14, 4.8: 13.22, 5.4: 12.47, 6.0: 11.81
            }
        }
    },
    "spf": {
        "select": {
            "3-1.5x7.25": {
                2.4: 10.40, 3.0: 9.68, 3.6: 9.09, 4.2: 8.63, 4.8: 8.27, 5.4: 7.94, 6.0: 7.68
            },
            "4-1.5x7.25": {
                2.4: 11.45, 3.0: 10.63, 3.6: 10.01, 4.2: 9.51, 4.8: 9.09, 5.4: 8.76, 6.0: 8.43
            },
            "5-1.5x7.25": {
                2.4: 12.34, 3.0: 11.45, 3.6: 10.79, 4.2: 10.24, 4.8: 9.81, 5.4: 9.42, 6.0: 9.09
            },
            "3-1.5x9.25": {
                2.4: 13.29, 3.0: 12.34, 3.6: 11.61, 4.2: 11.02, 4.8: 10.56, 5.4: 10.14, 6.0: 9.68
            },
            "4-1.5x9.25": {
                2.4: 14.63, 3.0: 13.58, 3.6: 12.80, 4.2: 12.14, 4.8: 11.61, 5.4: 11.19, 6.0: 10.79
            },
            "5-1.5x9.25": {
                2.4: 15.78, 3.0: 14.63, 3.6: 13.78, 4.2: 13.09, 4.8: 12.50, 5.4: 12.04, 6.0: 11.61
            },
            "3-1.5x11.25": {
                2.4: 16.17, 3.0: 15.03, 3.6: 14.14, 4.2: 13.42, 4.8: 12.53, 5.4: 11.81, 6.0: 10.89
            },
            "4-1.5x11.25": {
                2.4: 17.78, 3.0: 16.54, 3.6: 15.55, 4.2: 14.80, 4.8: 14.14, 5.4: 13.58, 6.0: 12.96
            },
            "5-1.5x11.25": {
                2.4: 18.80, 3.0: 17.78, 3.6: 16.76, 4.2: 15.91, 4.8: 15.23, 5.4: 14.63, 6.0: 14.14
            }
        },
        "no1-2": {
            "3-1.5x7.25": {
                2.4: 10.07, 3.0: 9.35, 3.6: 8.63, 4.2: 8.01, 4.8: 7.48, 5.4: 7.05, 6.0: 6.69
            },
            "4-1.5x7.25": {
                2.4: 11.09, 3.0: 10.30, 3.6: 9.68, 4.2: 9.19, 4.8: 8.63, 5.4: 8.14, 6.0: 7.71
            },
            "5-1.5x7.25": {
                2.4: 11.94, 3.0: 11.09, 3.6: 10.43, 4.2: 9.91, 4.8: 9.48, 5.4: 9.09, 6.0: 8.63
            },
            "3-1.5x9.25": {
                2.4: 12.86, 3.0: 11.55, 3.6: 10.56, 4.2: 9.78, 4.8: 9.15, 5.4: 8.63, 6.0: 8.17
            },
            "4-1.5x9.25": {
                2.4: 14.17, 3.0: 13.16, 3.6: 12.17, 4.2: 11.29, 4.8: 10.56, 5.4: 9.94, 6.0: 9.45
            },
            "5-1.5x9.25": {
                2.4: 15.26, 3.0: 14.17, 3.6: 13.32, 4.2: 12.60, 4.8: 11.81, 5.4: 11.12, 6.0: 10.56
            },
            "3-1.5x11.25": {
                2.4: 14.99, 3.0: 13.42, 3.6: 12.24, 4.2: 11.35, 4.8: 10.59, 5.4: 10.01, 6.0: 9.48
            },
            "4-1.5x11.25": {
                2.4: 17.22, 3.0: 15.49, 3.6: 14.14, 4.2: 13.09, 4.8: 12.24, 5.4: 11.55, 6.0: 10.96
            },
            "5-1.5x11.25": {
                2.4: 18.34, 3.0: 17.22, 3.6: 15.81, 4.2: 14.63, 4.8: 13.68, 5.4: 12.89, 6.0: 12.24
            }
        }
    },
    "northern": {
        "select": {
            "3-1.5x7.25": {
                2.4: 9.32, 3.0: 8.63, 3.6: 8.14, 4.2: 7.58, 4.8: 7.09, 5.4: 6.69, 6.0: 6.33
            },
            "4-1.5x7.25": {
                2.4: 10.24, 3.0: 9.51, 3.6: 8.96, 4.2: 8.50, 4.8: 8.14, 5.4: 7.71, 6.0: 7.32
            },
            "5-1.5x7.25": {
                2.4: 11.02, 3.0: 10.24, 3.6: 9.65, 4.2: 9.15, 4.8: 8.76, 5.4: 8.43, 6.0: 8.14
            },
            "3-1.5x9.25": {
                2.4: 11.88, 3.0: 10.96, 3.6: 10.01, 4.2: 9.25, 4.8: 8.66, 5.4: 8.17, 6.0: 7.74
            },
            "4-1.5x9.25": {
                2.4: 13.09, 3.0: 12.14, 3.6: 11.42, 4.2: 10.70, 4.8: 10.01, 5.4: 9.42, 6.0: 8.96
            },
            "5-1.5x9.25": {
                2.4: 14.11, 3.0: 13.09, 3.6: 12.30, 4.2: 11.71, 4.8: 11.19, 5.4: 10.53, 6.0: 10.01
            },
            "3-1.5x11.25": {
                2.4: 14.21, 3.0: 12.73, 3.6: 11.61, 4.2: 10.76, 4.8: 10.04, 5.4: 9.48, 6.0: 8.99
            },
            "4-1.5x11.25": {
                2.4: 15.91, 3.0: 14.67, 3.6: 13.38, 4.2: 12.40, 4.8: 11.61, 5.4: 10.96, 6.0: 10.37
            },
            "5-1.5x11.25": {
                2.4: 17.16, 3.0: 15.91, 3.6: 14.99, 4.2: 13.88, 4.8: 12.99, 5.4: 12.24, 6.0: 11.61
            }
        },
        "no1-2": {
            "3-1.5x7.25": {
                2.4: 8.50, 3.0: 7.58, 3.6: 6.92, 4.2: 6.40, 4.8: 6.00, 5.4: 5.64, 6.0: 5.38
            },
            "4-1.5x7.25": {
                2.4: 9.81, 3.0: 8.76, 3.6: 8.01, 4.2: 7.42, 4.8: 6.92, 5.4: 6.53, 6.0: 6.20
            },
            "5-1.5x7.25": {
                2.4: 10.79, 3.0: 9.81, 3.6: 8.96, 4.2: 8.27, 4.8: 7.74, 5.4: 7.32, 6.0: 6.92
            },
            "3-1.5x9.25": {
                2.4: 10.37, 3.0: 9.28, 3.6: 8.46, 4.2: 7.84, 4.8: 7.35, 5.4: 6.92, 6.0: 6.56
            },
            "4-1.5x9.25": {
                2.4: 11.98, 3.0: 10.73, 3.6: 9.78, 4.2: 9.06, 4.8: 8.46, 5.4: 7.97, 6.0: 7.58
            },
            "5-1.5x9.25": {
                2.4: 13.38, 3.0: 11.98, 3.6: 10.92, 4.2: 10.14, 4.8: 9.48, 5.4: 8.92, 6.0: 8.46
            },
            "3-1.5x11.25": {
                2.4: 12.04, 3.0: 10.76, 3.6: 9.84, 4.2: 9.09, 4.8: 8.50, 5.4: 8.04, 6.0: 7.61
            },
            "4-1.5x11.25": {
                2.4: 13.91, 3.0: 12.44, 3.6: 11.35, 4.2: 10.50, 4.8: 9.84, 5.4: 9.25, 6.0: 8.79
            },
            "5-1.5x11.25": {
                2.4: 15.55, 3.0: 13.91, 3.6: 12.70, 4.2: 11.74, 4.8: 10.99, 5.4: 10.37, 6.0: 9.84
            }
        }
    }
};

// Hauteurs disponibles
const HAUTEURS = ["7¼", "9¼", "9½", "11¼", "11⅞", "14", "16", "18"];

// Hauteurs CCQ disponibles en pouces (converties du métrique)
const HAUTEURS_CCQ = ["7.25", "9.25", "11.25"]; // Équivalent de 184mm, 235mm, 286mm

// Labels pour l'affichage CCQ
const essenceLabels = {
    "douglas": "Douglas Fir - Larch",
    "hem-fir": "Hem-Fir", 
    "spf": "Spruce-Pine-Fir (SPF)",
    "northern": "Northern Species"
};

const qualiteLabels = {
    "select": "Select Structural",
    "no1-2": "No 1 & 2",
    "no3": "No 3",
    "construction": "Construction",
    "standard": "Standard"
};

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
                            <input type="number" id="ltEtage${i}Pieds" step="0.1" min="0" placeholder="Pieds">
                            <span>pi</span>
                            <input type="number" id="ltEtage${i}Pouces" step="0.1" min="0" max="11.9" placeholder="Pouces">
                            <span>po</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    container.innerHTML = html;
}

function updateLargeursEtagesCCQ() {
    const nbEtages = parseInt(document.getElementById('nbEtages-ccq').value);
    const container = document.getElementById('largeursContainer-ccq');
    
    let html = '<label>Largeurs tributaires par étage</label>';
    
    for (let i = 1; i <= nbEtages; i++) {
        const etageLabel = `Étage ${i}`;
        
        html += `
            <div class="largeur-etage">
                <div class="input-row">
                    <div class="input-field">
                        <label for="ltEtage${i}-ccq">L.T. ${etageLabel}</label>
                        <div class="dimension-input">
                            <input type="number" id="ltEtage${i}Pieds-ccq" step="0.1" min="0" placeholder="Pieds">
                            <span>pi</span>
                            <input type="number" id="ltEtage${i}Pouces-ccq" step="0.1" min="0" max="11.9" placeholder="Pouces">
                            <span>po</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    container.innerHTML = html;
}

function calculerPoutre() {
    // Récupération des valeurs d'entrée
    const porteePieds = parseFloat(document.getElementById('porteePieds').value) || 0;
    const porteePouces = parseFloat(document.getElementById('porteePouces').value) || 0;
    const portee = porteePieds + (porteePouces / 12);
    
    const nbEtages = parseInt(document.getElementById('nbEtages').value);
    const chargeMorte = parseFloat(document.getElementById('chargeMorte').value) || 0;
    const chargeVive = parseFloat(document.getElementById('chargeVive').value) || 0;
    const chargeViveNeige = parseFloat(document.getElementById('chargeViveNeige').value) || 0;
    const largeurMax = parseFloat(document.getElementById('largeurMax').value) || null;
    const hauteurMax = parseFloat(document.getElementById('hauteurMax').value) || null;
    const optimisation = document.getElementById('optimisation').value;

    // Validation des entrées
    if (!portee || portee < 6 || portee > 30) {
        document.getElementById('poutreResults').innerHTML = `
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
        const pieds = parseFloat(document.getElementById(`ltEtage${i}Pieds`).value) || 0;
        const pouces = parseFloat(document.getElementById(`ltEtage${i}Pouces`).value) || 0;
        const largeur = pieds + (pouces / 12);
        largeurs.push(largeur);
        ltTotal += largeur;
    }

    // Vérification qu'il y a au moins des valeurs pour calculer
    if (ltTotal === 0 || chargeMorte === 0 || chargeVive === 0) {
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
    document.getElementById('resultWv').textContent = `${wvTotal.toFixed(1)} lb/pi`;
    document.getElementById('resultWm').textContent = `${wmTotal.toFixed(1)} lb/pi`;
    document.getElementById('resultWt').textContent = `${wtTotal.toFixed(1)} lb/pi`;
    document.getElementById('resultWf').textContent = `${wfTotal.toFixed(1)} lb/pi`;

    // Étape 8: Recherche des poutres viables
    const poutresViables = trouverPoutresViables(portee, wvTotal, wtTotal, wfTotal, largeurMax, hauteurMax, optimisation);
    
    afficherResultatsPoutres(poutresViables, wvTotal, wtTotal, wfTotal);
}

function calculerPoutreCCQ() {
    // Récupération des valeurs d'entrée
    const porteePieds = parseFloat(document.getElementById('porteePieds-ccq').value) || 0;
    const porteePouces = parseFloat(document.getElementById('porteePouces-ccq').value) || 0;
    const portee = porteePieds + (porteePouces / 12);
    
    const nbEtages = parseInt(document.getElementById('nbEtages-ccq').value);
    const essence = document.getElementById('essence-ccq').value;
    const qualite = document.getElementById('qualite-ccq').value;
    const chargeMorte = parseFloat(document.getElementById('chargeMorte-ccq').value) || 0;
    const chargeVive = parseFloat(document.getElementById('chargeVive-ccq').value) || 0;
    const chargeViveNeige = parseFloat(document.getElementById('chargeViveNeige-ccq').value) || 0;
    const largeurMax = parseFloat(document.getElementById('largeurMax-ccq').value) || null;
    const hauteurMax = parseFloat(document.getElementById('hauteurMax-ccq').value) || null;
    const optimisation = document.getElementById('optimisation-ccq').value;

    // Validation des entrées
    if (!portee || portee < 6 || portee > 30) {
        document.getElementById('poutreResults-ccq').innerHTML = `
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
        const pieds = parseFloat(document.getElementById(`ltEtage${i}Pieds-ccq`).value) || 0;
        const pouces = parseFloat(document.getElementById(`ltEtage${i}Pouces-ccq`).value) || 0;
        const largeur = pieds + (pouces / 12);
        largeurs.push(largeur);
        ltTotal += largeur;
    }

    // Vérification qu'il y a au moins des valeurs pour calculer
    if (ltTotal === 0 || chargeMorte === 0 || chargeVive === 0 || !essence || !qualite) {
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

    // Calculs selon la méthodologie CCQ
    
    // Charge vive uniformément répartie
    const chargeViveTotale = chargeVive + chargeViveNeige;
    const wvTotal = chargeViveTotale * ltTotal;

    // Charge morte uniformément répartie
    const wmTotal = chargeMorte * ltTotal;

    // Charge totale non pondérée
    const wtTotal = wvTotal + wmTotal;

    // Charge totale pondérée
    const wfTotal = wvTotal * 1.5 + wmTotal * 1.25;

    // Affichage des résultats de calcul
    document.getElementById('resultWv-ccq').textContent = `${wvTotal.toFixed(1)} lb/pi`;
    document.getElementById('resultWm-ccq').textContent = `${wmTotal.toFixed(1)} lb/pi`;
    document.getElementById('resultWt-ccq').textContent = `${wtTotal.toFixed(1)} lb/pi`;
    document.getElementById('resultWf-ccq').textContent = `${wfTotal.toFixed(1)} lb/pi`;

    // Recherche des poutres viables selon CCQ
    const poutresViables = trouverPoutresViablesCCQ(portee, ltTotal, essence, qualite, largeurMax, hauteurMax, optimisation);
    
    afficherResultatsPoutresCCQ(poutresViables, wvTotal, wtTotal, wfTotal, essence, qualite);
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

function trouverPoutresViablesCCQ(portee, ltTotal, essence, qualite, largeurMax, hauteurMax, optimisation) {
    const poutresViables = [];
    
    // Vérifier si l'essence et la qualité existent dans les données
    if (!CCQ_COMPOSITE_BEAM_DATA[essence] || !CCQ_COMPOSITE_BEAM_DATA[essence][qualite]) {
        return [];
    }

    const donnees = CCQ_COMPOSITE_BEAM_DATA[essence][qualite];
    
    // Tester différents nombres de plis (3, 4, 5) et hauteurs
    for (let nbPlis = 3; nbPlis <= 5; nbPlis++) {
        for (let hauteur of HAUTEURS_CCQ) {
            const configKey = `${nbPlis}-1.5x${hauteur}`;
            
            if (donnees[configKey]) {
                const largeurPoutre = nbPlis * 1.5;
                const hauteurPoutre = parseFloat(hauteur);
                
                // Vérifier contraintes dimensionnelles
                if (largeurMax && largeurPoutre > largeurMax) {
                    continue;
                }
                
                if (hauteurMax && hauteurPoutre > hauteurMax) {
                    continue;
                }
                
                // Vérifier les portées pour différentes longueurs supportées
                const porteeData = donnees[configKey];
                
                for (let longueurSupportee of [2.4, 3.0, 3.6, 4.2, 4.8, 5.4, 6.0]) {
                    if (porteeData[longueurSupportee] && longueurSupportee >= ltTotal) {
                        const porteeMaximale = porteeData[longueurSupportee];
                        
                        if (porteeMaximale >= portee) {
                            const ratio = porteeMaximale / portee;
                            poutresViables.push({
                                essence: essence,
                                qualite: qualite,
                                hauteur: hauteur,
                                hauteurNum: hauteurPoutre,
                                nbPlis: nbPlis,
                                largeurPoutre: largeurPoutre,
                                longueurSupportee: longueurSupportee,
                                porteeMaximale: porteeMaximale,
                                ratio: ratio,
                                configKey: configKey
                            });
                        }
                    }
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

function afficherResultatsPoutres(poutresViables, wvTotal, wtTotal, wfTotal) {
    const container = document.getElementById('poutreResults');
    
    if (poutresViables.length === 0) {
        container.innerHTML = `
            <div class="no-solution">
                <h3>Aucune poutre viable trouvée</h3>
                <p>Les charges dépassent les capacités des poutres Versa-Lam 2.0E pour cette portée.</p>
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

function afficherResultatsPoutresCCQ(poutresViables, wvTotal, wtTotal, wfTotal, essence, qualite) {
    const container = document.getElementById('poutreResults-ccq');
    
    if (poutresViables.length === 0) {
        container.innerHTML = `
            <div class="no-solution">
                <h3>Aucune poutre viable trouvée</h3>
                <p>Les charges dépassent les capacités des poutres CCQ pour cette portée.</p>
                <p>Suggestions :</p>
                <ul style="text-align: left; margin-top: 10px;">
                    <li>Augmenter les contraintes de largeur/hauteur</li>
                    <li>Choisir une essence de bois supérieure</li>
                    <li>Choisir une qualité de bois supérieure</li>
                    <li>Réduire la portée</li>
                    <li>Réduire les charges</li>
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
        const utilizationPercent = ((1 / poutre.ratio) * 100).toFixed(0);
        
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
            <strong>Charges de conception totales:</strong><br>
            Wv = ${wvTotal.toFixed(1)} lb/pi | 
            Wt = ${wtTotal.toFixed(1)} lb/pi | 
            Wf = ${wfTotal.toFixed(1)} lb/pi<br>
            <strong>Spécifications:</strong> ${essenceLabels[essence]} - ${qualiteLabels[qualite]}<br>
            <em>Les valeurs ci-dessus représentent les charges totales supportées par la poutre complète.</em>
        </div>
    `;

    html += '</div>';
    container.innerHTML = html;
}

function selectionnerPoutre(index) {
    // Retirer la sélection précédente
    document.querySelectorAll('.poutre-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Ajouter la sélection à l'option cliquée
    document.querySelectorAll('.poutre-option')[index].classList.add('selected');
}

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
    // Initialiser les largeurs tributaires pour Versa-Lam
    updateLargeursEtages();
    
    // Initialiser les largeurs tributaires pour CCQ
    updateLargeursEtagesCCQ();
    
    // Calculer automatiquement lors des changements de valeurs - Versa-Lam
    const inputs = ['porteePieds', 'porteePouces', 'nbEtages', 'chargeMorte', 'chargeVive', 'chargeViveNeige', 'largeurMax', 'hauteurMax', 'optimisation'];
    inputs.forEach(inputId => {
        const element = document.getElementById(inputId);
        if (element) {
            element.addEventListener('input', function() {
                clearTimeout(this.timer);
                this.timer = setTimeout(calculerPoutre, 500);
            });
        }
    });
    
    // Calculer automatiquement lors des changements de valeurs - CCQ
    const inputsCCQ = ['porteePieds-ccq', 'porteePouces-ccq', 'nbEtages-ccq', 'essence-ccq', 'qualite-ccq', 'chargeMorte-ccq', 'chargeVive-ccq', 'chargeViveNeige-ccq', 'largeurMax-ccq', 'hauteurMax-ccq', 'optimisation-ccq'];
    inputsCCQ.forEach(inputId => {
        const element = document.getElementById(inputId);
        if (element) {
            element.addEventListener('input', function() {
                clearTimeout(this.timer);
                this.timer = setTimeout(calculerPoutreCCQ, 500);
            });
            element.addEventListener('change', calculerPoutreCCQ);
        }
    });
    
    // Ajouter des événements pour les largeurs tributaires dynamiques - Versa-Lam
    document.getElementById('largeursContainer').addEventListener('input', function(e) {
        if (e.target.tagName === 'INPUT') {
            clearTimeout(this.timer);
            this.timer = setTimeout(calculerPoutre, 500);
        }
    });
    
    // Ajouter des événements pour les largeurs tributaires dynamiques - CCQ
    document.getElementById('largeursContainer-ccq').addEventListener('input', function(e) {
        if (e.target.tagName === 'INPUT') {
            clearTimeout(this.timer);
            this.timer = setTimeout(calculerPoutreCCQ, 500);
        }
    });
});
