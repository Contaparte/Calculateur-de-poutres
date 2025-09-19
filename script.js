// Calculateur Universel de Poutres et Poutrelles
// Script JavaScript avec méthode de calcul corrigée

// =============================================================================
// DONNÉES ET TABLES AVEC LIMITES DE CHARGES
// =============================================================================

// Tables Versa-Lam corrigées selon documentation officielle
const tablesVersaLam = {
    unEtage: {
        '9.5': {
            6: { 2: 11.33, 3: 13.0, 4: 14.25 },
            8: { 2: 10.42, 3: 11.92, 4: 13.08 },
            10: { 2: 9.67, 3: 11.08, 4: 12.25 },
            12: { 2: 9.0, 3: 10.33, 4: 11.42 },
            14: { 2: 8.42, 3: 9.67, 4: 10.67 },
            16: { 2: 7.92, 3: 9.08, 4: 10.0 },
            18: { 2: 7.5, 3: 8.58, 4: 9.42 },
            20: { 2: 7.08, 3: 8.08, 4: 8.92 }
        },
        '11.875': {
            6: { 2: 14.17, 3: 16.25, 4: 17.83 },
            8: { 2: 13.0, 3: 14.92, 4: 16.33 },
            10: { 2: 12.17, 3: 13.92, 4: 15.33 },
            12: { 2: 11.33, 3: 13.0, 4: 14.33 },
            14: { 2: 10.67, 3: 12.25, 4: 13.5 },
            16: { 2: 10.08, 3: 11.58, 4: 12.75 },
            18: { 2: 9.58, 3: 10.92, 4: 12.08 },
            20: { 2: 9.08, 3: 10.42, 4: 11.42 }
        },
        '14': {
            6: { 2: 16.75, 3: 19.08, 4: 21.0 },
            8: { 2: 15.33, 3: 17.58, 4: 19.25 },
            10: { 2: 14.33, 3: 16.42, 4: 18.0 },
            12: { 2: 13.42, 3: 15.42, 4: 16.92 },
            14: { 2: 12.67, 3: 14.5, 4: 15.92 },
            16: { 2: 11.92, 3: 13.67, 4: 15.0 },
            18: { 2: 11.33, 3: 13.0, 4: 14.25 },
            20: { 2: 10.75, 3: 12.33, 4: 13.58 }
        },
        '16': {
            6: { 2: 19.08, 3: 21.83, 4: 23.92 },
            8: { 2: 17.58, 3: 20.0, 4: 22.0 },
            10: { 2: 16.33, 3: 18.75, 4: 20.58 },
            12: { 2: 15.33, 3: 17.67, 4: 19.42 },
            14: { 2: 14.5, 3: 16.67, 4: 18.33 },
            16: { 2: 13.75, 3: 15.75, 4: 17.33 },
            18: { 2: 13.08, 3: 15.0, 4: 16.5 },
            20: { 2: 12.5, 3: 14.33, 4: 15.75 }
        },
        '18': {
            6: { 2: 21.5, 3: 24.5, 4: 26.83 },
            8: { 2: 19.75, 3: 22.5, 4: 24.75 },
            10: { 2: 18.42, 3: 21.08, 4: 23.08 },
            12: { 2: 17.33, 3: 19.83, 4: 21.75 },
            14: { 2: 16.42, 3: 18.75, 4: 20.58 },
            16: { 2: 15.58, 3: 17.83, 4: 19.58 },
            18: { 2: 14.83, 3: 17.0, 4: 18.67 },
            20: { 2: 14.17, 3: 16.25, 4: 17.83 }
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
    espacementPoutrelles: 16,
    largeurMax: 5.5,
    typeOptimisation: 'plis'
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
    
    // Trouver largeur tributaire la plus proche dans les tables
    const largeursPossibles = [6, 8, 10, 12, 14, 16, 18, 20];
    const largeurTable = largeursPossibles.reduce((prev, curr) => 
        Math.abs(curr - largeurTributaire) < Math.abs(prev - largeurTributaire) ? curr : prev
    );

    const tables = tablesVersaLam.unEtage;
    let solutionOptimale = null;
    const hauteursPossibles = ['9.5', '11.875', '14', '16', '18'];

    // Limites approximatives par hauteur (à ajuster selon vraies tables)
    const limitesParHauteur = {
        '9.5': { WV: 262, WT: 360, WF: 516 },
        '11.875': { WV: 445, WT: 636, WF: 877 },
        '14': { WV: 650, WT: 900, WF: 1250 },
        '16': { WV: 850, WT: 1180, WF: 1600 },
        '18': { WV: 1050, WT: 1450, WF: 1950 }
    };

    hauteursPossibles.forEach(hauteur => {
        const tableHauteur = tables[hauteur];
        if (!tableHauteur || !tableHauteur[largeurTable]) return;

        [2, 3, 4].forEach(plis => {
            // Vérifier contrainte de largeur
            const largeurPoutre = plis * 1.75;
            if (largeurPoutre > calculateurData.largeurMax) return;

            // Vérifier portée dans les tables
            const porteeTableMax = tableHauteur[largeurTable][plis];
            if (!porteeTableMax || porteeDecimale > porteeTableMax) return;

            // DIVISION par nombre de plis pour comparer aux limites
            const WV_parPli = charges.WV / plis;
            const WT_parPli = charges.WT / plis;  
            const WF_parPli = charges.WF / plis;

            // Vérifier si les charges divisées sont dans les limites
            const limites = limitesParHauteur[hauteur];
            const chargesValides = 
                WV_parPli <= limites.WV && 
                WT_parPli <= limites.WT && 
                WF_parPli <= limites.WF;

            if (!chargesValides) return;

            // Score selon optimisation
            let score;
            if (calculateurData.typeOptimisation === 'plis') {
                score = plis * 1000 + parseFloat(hauteur);
            } else {
                score = parseFloat(hauteur) * 1000 + plis;
            }
            
            if (!solutionOptimale || score < solutionOptimale.score) {
                solutionOptimale = {
                    hauteur: hauteur + '"',
                    largeur: largeurPoutre.toFixed(2) + '"',
                    configuration: plis + ' plis',
                    porteeMax: porteeTableMax.toFixed(1) + ' pi.',
                    valide: true,
                    type: 'Versa-Lam',
                    score: score,
                    plis: plis,
                    chargesParPli: {
                        WV: WV_parPli.toFixed(0),
                        WT: WT_parPli.toFixed(0),
                        WF: WF_parPli.toFixed(0)
                    }
                };
            }
        });
    });

    if (!solutionOptimale) {
        return { 
            valide: false, 
            message: 'Aucune configuration valide - Charges ou portée excessive',
            details: {
                WV: charges.WV.toFixed(1),
                WT: charges.WT.toFixed(1),  
                WF: charges.WF.toFixed(1)
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
    const optimisationContainer = document.getElementById('optimisationContainer');
    
    if (calculateurData.typePoutre === 'versalam') {
        typeEtageContainer.style.display = 'block';
        optimisationContainer.style.display = 'block';
    } else {
        typeEtageContainer.style.display = 'none';
        optimisationContainer.style.display = 'none';
    }
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

    document.getElementById('largeurMax').addEventListener('input', (e) => {
        calculateurData.largeurMax = parseFloat(e.target.value) || 0;
        mettreAJourInterface();
    });

    document.getElementById('typeOptimisation').addEventListener('change', (e) => {
        calculateurData.typeOptimisation = e.target.value;
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
