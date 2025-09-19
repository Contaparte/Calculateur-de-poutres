// Calculateur Universel de Poutres et Poutrelles
// Script JavaScript avec méthode de calcul corrigée

// =============================================================================
// DONNÉES ET TABLES AVEC LIMITES DE CHARGES
// =============================================================================

// Tables Versa-Lam avec limites de charges (WV, WT, WF par pli)
const tablesVersaLam = {
    unEtage: {
        '7.25': {
            limites: { WV: 183, WT: 252, WF: 361 }, // Limites par pli
            portees: { 6: 16.75, 8: 16.33, 10: 15.75, 12: 15.0, 14: 14.25 }
        },
        '9.5': {
            limites: { WV: 262, WT: 360, WF: 516 },
            portees: { 6: 18.25, 8: 17.75, 10: 17.0, 12: 16.25, 14: 15.5, 16: 14.75, 18: 14.0, 20: 13.25 }
        },
        '11.875': {
            limites: { WV: 445, WT: 636, WF: 877 },
            portees: { 6: 23.5, 8: 22.75, 10: 22.0, 12: 21.25, 14: 20.5, 16: 19.75, 18: 19.0, 20: 18.25 }
        },
        '14': {
            limites: { WV: 650, WT: 900, WF: 1250 },
            portees: { 6: 29.0, 8: 28.0, 10: 27.0, 12: 26.0, 14: 25.0, 16: 24.0, 18: 23.0, 20: 22.0 }
        },
        '16': {
            limites: { WV: 850, WT: 1180, WF: 1600 },
            portees: { 6: 31.75, 8: 30.5, 10: 29.25, 12: 28.0, 14: 26.75, 16: 25.5, 18: 24.25, 20: 23.0 }
        },
        '18': {
            limites: { WV: 1050, WT: 1450, WF: 1950 },
            portees: { 6: 35.0, 8: 34.0, 10: 33.0, 12: 32.0, 14: 31.0, 16: 30.0, 18: 29.0, 20: 28.0 }
        }
    }
};

// Tables poutrelles ajourées (simplifiées)
const tablesPoutrelliesAjourees = {
    connecteursMetalliques: {
        '11.875x16': { portee: 18.5, chargeMax: 125 },
        '14x16': { portee: 21.3, chargeMax: 150 },
        '16x16': { portee: 23.8, chargeMax: 175 },
        '18x16': { portee: 26.2, chargeMax: 200 }
    },
    ameMetallique: {
        '11.875x16': { portee: 19.2, chargeMax: 135 },
        '14x16': { portee: 22.1, chargeMax: 160 },
        '16x16': { portee: 24.7, chargeMax: 185 },
        '18x16': { portee: 27.1, chargeMax: 210 }
    },
    boisDente: {
        '11.875x16': { portee: 20.1, chargeMax: 145 },
        '14x16': { portee: 23.2, chargeMax: 170 },
        '16x16': { portee: 25.9, chargeMax: 195 },
        '18x16': { portee: 28.4, chargeMax: 220 }
    }
};

// =============================================================================
// VARIABLES GLOBALES
// =============================================================================

let calculateurData = {
    typePoutre: 'versalam',
    portee: { pieds: 7, pouces: 6 },
    largeurTributaire: 9.17,
    chargeMorte: 15,
    chargeVive: 40,
    chargeNeige: 0,
    typePortee: 'simple',
    typeEtage: 'un',
    espacementPoutrelles: 16
};

// =============================================================================
// FONCTIONS DE CALCUL CORRIGÉES
// =============================================================================

function obtenirPorteeDecimale() {
    return calculateurData.portee.pieds + calculateurData.portee.pouces / 12;
}

function obtenirLargeurTributaireAjustee() {
    return calculateurData.typePortee === 'continue' 
        ? calculateurData.largeurTributaire * 1.25 
        : calculateurData.largeurTributaire;
}

function calculerChargesLineaires() {
    const largeurTributaire = obtenirLargeurTributaireAjustee();
    
    const WV = calculateurData.chargeVive * largeurTributaire; // Charge vive linéaire
    const WM = calculateurData.chargeMorte * largeurTributaire; // Charge morte linéaire
    const WN = calculateurData.chargeNeige * largeurTributaire; // Charge neige linéaire
    
    const WT = WV + WM + WN; // Charge totale non pondérée
    const WF = WV * 1.5 + WM * 1.25 + WN * 1.5; // Charge totale pondérée
    
    return { WV, WM, WN, WT, WF };
}

function calculerVersaLam() {
    const charges = calculerChargesLineaires();
    const porteeDecimale = obtenirPorteeDecimale();
    const largeurTributaire = obtenirLargeurTributaireAjustee();
    
    // Trouver largeur tributaire la plus proche
    const largeursPossibles = [6, 8, 10, 12, 14, 16, 18, 20];
    const largeurTable = largeursPossibles.reduce((prev, curr) => 
        Math.abs(curr - largeurTributaire) < Math.abs(prev - largeurTributaire) ? curr : prev
    );

    const tables = tablesVersaLam.unEtage;
    let solutionOptimale = null;
    const hauteursPossibles = ['7.25', '9.5', '11.875', '14', '16', '18'];

    // Tester chaque hauteur
    hauteursPossibles.forEach(hauteur => {
        const tableHauteur = tables[hauteur];
        if (!tableHauteur || !tableHauteur.portees[largeurTable]) return;

        const porteeMax = tableHauteur.portees[largeurTable];
        if (porteeDecimale > porteeMax) return;

        // Tester chaque nombre de plis pour cette hauteur
        [2, 3, 4].forEach(plis => {
            // Calculer les valeurs à comparer (divisées par nombre de plis)
            const WV_compare = charges.WV / plis;
            const WT_compare = charges.WT / plis;  
            const WF_compare = charges.WF / plis;

            // Vérifier si les charges sont dans les limites pour ce nombre de plis
            const limites = tableHauteur.limites;
            const chargesValides = 
                WV_compare <= limites.WV && 
                WT_compare <= limites.WT && 
                WF_compare <= limites.WF;

            if (!chargesValides) return;

            // Score pour optimisation : favoriser moins de plis, puis moins de hauteur
            const score = plis * 1000 + parseFloat(hauteur);
            
            if (!solutionOptimale || score < solutionOptimale.score) {
                solutionOptimale = {
                    hauteur: hauteur + '"',
                    largeur: (1.75 * plis).toFixed(2) + '"',
                    configuration: plis + ' plis',
                    porteeMax: porteeMax.toFixed(1) + ' pi.',
                    valide: true,
                    type: 'Versa-Lam',
                    score: score,
                    plis: plis,
                    details: {
                        WV_compare: WV_compare.toFixed(1),
                        WT_compare: WT_compare.toFixed(1),
                        WF_compare: WF_compare.toFixed(1),
                        limite_WV: limites.WV,
                        limite_WT: limites.WT,
                        limite_WF: limites.WF
                    }
                };
            }
        });
    });

    if (!solutionOptimale) {
        return { 
            valide: false, 
            message: 'Charges ou portée excessive - Augmenter hauteur/plis',
            details: {
                WV: charges.WV.toFixed(1),
                WT: charges.WT.toFixed(1),  
                WF: charges.WF.toFixed(1),
                portee: porteeDecimale.toFixed(1),
                largeurTrib: largeurTable
            }
        };
    }

    return solutionOptimale;
}

function calculerPoutrelliesAjourees() {
    let tableType = '';
    let nomType = '';
    
    switch(calculateurData.typePoutre) {
        case 'ajouree-connecteurs':
            tableType = 'connecteursMetalliques';
            nomType = 'Connecteurs métalliques';
            break;
        case 'ajouree-ame-metal':
            tableType = 'ameMetallique';
            nomType = 'Âme métallique';
            break;
        case 'ajouree-bois-dente':
            tableType = 'boisDente';
            nomType = 'Bois denté collé';
            break;
        default:
            return { valide: false };
    }

    const charges = calculerChargesLineaires();
    const porteeDecimale = obtenirPorteeDecimale();
    const tables = tablesPoutrelliesAjourees[tableType];
    const hauteursPossibles = ['11.875', '14', '16', '18'];
    
    let solutionOptimale = null;

    hauteursPossibles.forEach(hauteur => {
        const cle = `${hauteur}x${calculateurData.espacementPoutrelles}`;
        const donnees = tables[cle];
        
        if (!donnees) return;
        
        // Vérifier portée et charge
        const porteeOK = porteeDecimale <= donnees.portee;
        const chargeOK = charges.WF <= donnees.chargeMax;
        
        if (porteeOK && chargeOK) {
            if (!solutionOptimale || parseFloat(hauteur) < parseFloat(solutionOptimale.hauteur)) {
                solutionOptimale = {
                    hauteur: hauteur + '"',
                    largeur: '2x3 ou 2x4',
                    configuration: `${calculateurData.espacementPoutrelles}" c.c.`,
                    porteeMax: donnees.portee.toFixed(1) + ' pi.',
                    valide: true,
                    type: nomType,
                    methodeCalcul: 'Analyse par treillis'
                };
            }
        }
    });

    return solutionOptimale || { 
        valide: false, 
        message: `Portée ou charges excessives pour ${calculateurData.espacementPoutrelles}" c.c.`
    };
}

function calculerFleches(resultatsStructure) {
    if (!resultatsStructure.valide) return {};

    const charges = calculerChargesLineaires();
    let E, I;
    const h = parseFloat(resultatsStructure.hauteur) || 12;
    const L = obtenirPorteeDecimale() * 12;

    if (calculateurData.typePoutre === 'versalam') {
        E = 1800000;
        const b = parseFloat(resultatsStructure.largeur) || 3.5;
        I = (b * Math.pow(h, 3)) / 12;
    } else {
        E = 1600000;
        I = Math.pow(h, 3) / 10;
    }

    const flecheVive = (5 * charges.WV * Math.pow(L, 4)) / (384 * E * I);
    const flecheTotale = (5 * charges.WT * Math.pow(L, 4)) / (384 * E * I);
    
    return {
        flecheVive: flecheVive.toFixed(3),
        flecheTotale: flecheTotale.toFixed(3),
        limiteVive: (L / 360).toFixed(3),
        limiteTotale: (L / 240).toFixed(3)
    };
}

function calculerStructure() {
    let resultatsStructure;
    
    if (calculateurData.typePoutre === 'versalam') {
        resultatsStructure = calculerVersaLam();
    } else {
        resultatsStructure = calculerPoutrelliesAjourees();
    }
    
    if (resultatsStructure.valide) {
        const fleches = calculerFleches(resultatsStructure);
        return { ...resultatsStructure, ...fleches };
    }
    
    return resultatsStructure;
}

// =============================================================================
// FONCTIONS INTERFACE
// =============================================================================

function mettreAJourAffichagePortee() {
    const porteeDecimale = obtenirPorteeDecimale();
    document.getElementById('porteeDecimale').textContent = `= ${porteeDecimale.toFixed(2)} pi.`;
}

function mettreAJourAffichageLargeurTributaire() {
    const largeurAjusteeElement = document.getElementById('largeurAjustee');
    if (calculateurData.typePortee === 'continue') {
        const largeurAjustee = obtenirLargeurTributaireAjustee();
        largeurAjusteeElement.textContent = `Ajustée: ${largeurAjustee.toFixed(1)} pi.`;
        largeurAjusteeElement.style.display = 'block';
    } else {
        largeurAjusteeElement.style.display = 'none';
    }
}

function mettreAJourAffichageCharges() {
    const charges = calculerChargesLineaires();
    
    document.getElementById('chargeTotal').textContent = `${charges.WT.toFixed(0)} lb/pi.ca.`;
    document.getElementById('chargeLineaire').textContent = `${charges.WF.toFixed(0)} lb/pi. (pond.)`;
}

function afficherEspacement() {
    const espacementContainer = document.getElementById('espacementContainer');
    espacementContainer.style.display = calculateurData.typePoutre.startsWith('ajouree') ? 'block' : 'none';
}

function afficherTypeEtage() {
    const typeEtageContainer = document.getElementById('typeEtageContainer');
    typeEtageContainer.style.display = calculateurData.typePoutre === 'versalam' ? 'block' : 'none';
}

function mettreAJourResultats() {
    const resultats = calculerStructure();
    const resultatsContainer = document.getElementById('resultatsContainer');
    
    resultatsContainer.className = resultats.valide ? 'bg-green-50 p-4 rounded-lg' : 'bg-red-50 p-4 rounded-lg';
    
    document.getElementById('typeStructure').textContent = resultats.type || 'Structure';
    
    const methodeElement = document.getElementById('methodeCalcul');
    if (resultats.methodeCalcul) {
        methodeElement.textContent = resultats.methodeCalcul;
        methodeElement.style.display = 'block';
    } else {
        methodeElement.style.display = 'none';
    }
    
    if (resultats.valide) {
        document.getElementById('hauteurResultat').textContent = resultats.hauteur;
        document.getElementById('largeurResultat').textContent = resultats.largeur;
        document.getElementById('configurationResultat').textContent = resultats.configuration;
        document.getElementById('porteeMaxResultat').textContent = resultats.porteeMax;
        
        document.getElementById('dimensionsContainer').style.display = 'block';
        
        if (resultats.flecheVive) {
            const flecheViveElement = document.getElementById('flecheViveResultat');
            const flecheTotaleElement = document.getElementById('flecheTotaleResultat');
            
            const flecheViveValide = parseFloat(resultats.flecheVive) <= parseFloat(resultats.limiteVive);
            const flecheTotaleValide = parseFloat(resultats.flecheTotale) <= parseFloat(resultats.limiteTotale);
            
            flecheViveElement.textContent = `${resultats.flecheVive}"≤${resultats.limiteVive}"`;
            flecheViveElement.className = `font-mono ${flecheViveValide ? 'fleche-valid' : 'fleche-invalid'}`;
            
            flecheTotaleElement.textContent = `${resultats.flecheTotale}"≤${resultats.limiteTotale}"`;
            flecheTotaleElement.className = `font-mono ${flecheTotaleValide ? 'fleche-valid' : 'fleche-invalid'}`;
            
            document.getElementById('flechesContainer').style.display = 'block';
        } else {
            document.getElementById('flechesContainer').style.display = 'none';
        }
        
        const statusElement = document.getElementById('statusMessage');
        statusElement.textContent = '✓ Configuration valide';
        statusElement.className = 'mt-3 p-2 rounded text-center text-sm font-semibold result-valid';
        
    } else {
        document.getElementById('dimensionsContainer').style.display = 'none';
        document.getElementById('flechesContainer').style.display = 'none';
        
        const statusElement = document.getElementById('statusMessage');
        statusElement.textContent = `✗ ${resultats.message || 'Configuration non valide'}`;
        statusElement.className = 'mt-3 p-2 rounded text-center text-sm font-semibold result-invalid';
    }
}

function mettreAJourInterface() {
    mettreAJourAffichagePortee();
    mettreAJourAffichageLargeurTributaire();
    mettreAJourAffichageCharges();
    afficherEspacement();
    afficherTypeEtage();
    mettreAJourResultats();
}

// =============================================================================
// GESTION DES ÉVÉNEMENTS
// =============================================================================

function configurerEvenements() {
    document.getElementById('typePoutre').addEventListener('change', (e) => {
        calculateurData.typePoutre = e.target.value;
        mettreAJourInterface();
    });

    document.getElementById('espacementPoutrelles').addEventListener('change', (e) => {
        calculateurData.espacementPoutrelles = parseFloat(e.target.value);
        mettreAJourInterface();
    });

    document.getElementById('porteePieds').addEventListener('input', (e) => {
        calculateurData.portee.pieds = parseInt(e.target.value) || 0;
        mettreAJourInterface();
    });

    document.getElementById('porteePouces').addEventListener('input', (e) => {
        calculateurData.portee.pouces = parseInt(e.target.value) || 0;
        mettreAJourInterface();
    });

    document.getElementById('typePortee').addEventListener('change', (e) => {
        calculateurData.typePortee = e.target.value;
        mettreAJourInterface();
    });

    document.getElementById('typeEtage').addEventListener('change', (e) => {
        calculateurData.typeEtage = e.target.value;
        mettreAJourInterface();
    });

    document.getElementById('largeurTributaire').addEventListener('input', (e) => {
        calculateurData.largeurTributaire = parseFloat(e.target.value) || 0;
        mettreAJourInterface();
    });

    document.getElementById('chargeMorte').addEventListener('input', (e) => {
        calculateurData.chargeMorte = parseFloat(e.target.value) || 0;
        mettreAJourInterface();
    });

    document.getElementById('chargeVive').addEventListener('input', (e) => {
        calculateurData.chargeVive = parseFloat(e.target.value) || 0;
        mettreAJourInterface();
    });

    document.getElementById('chargeNeige').addEventListener('input', (e) => {
        calculateurData.chargeNeige = parseFloat(e.target.value) || 0;
        mettreAJourInterface();
    });
}

// =============================================================================
// INITIALISATION
// =============================================================================

document.addEventListener('DOMContentLoaded', function() {
    configurerEvenements();
    mettreAJourInterface();
    
    console.log('Calculateur corrigé - Méthode avec charges pondérées et plis variables');
});

// =============================================================================
// API EXTERNE
// =============================================================================

window.CalculateurPoutres = {
    obtenirResultats: () => calculerStructure(),
    obtenirCharges: () => calculerChargesLineaires(),
    obtenirDonnees: () => calculateurData
};
