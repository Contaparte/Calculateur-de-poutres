// Calculateur Universel de Poutres et Poutrelles
// Script JavaScript principal

// =============================================================================
// DONNÉES ET TABLES
// =============================================================================

// Tables Versa-Lam
const tablesVersaLam = {
    unEtage: {
        '9.5': {
            6: { 2: 16.75, 3: 15.33, 4: 15.33 },
            8: { 2: 16.33, 3: 15.33, 4: 15.33 },
            10: { 2: 15.75, 3: 15.33, 4: 15.33 },
            12: { 2: 15.0, 3: 15.33, 4: 15.33 },
            14: { 2: 14.25, 3: 15.0, 4: 15.33 },
            16: { 2: 13.5, 3: 14.5, 4: 15.33 },
            18: { 2: 12.75, 3: 14.0, 4: 15.0 },
            20: { 2: 12.0, 3: 13.5, 4: 14.5 }
        },
        '11.875': {
            6: { 2: 18.25, 3: 16.33, 4: 22.17 },
            8: { 2: 17.75, 3: 15.33, 4: 21.5 },
            10: { 2: 17.0, 3: 15.33, 4: 20.75 },
            12: { 2: 16.25, 3: 15.33, 4: 20.0 },
            14: { 2: 15.5, 3: 15.0, 4: 19.25 },
            16: { 2: 14.75, 3: 14.5, 4: 18.5 },
            18: { 2: 14.0, 3: 14.0, 4: 17.75 },
            20: { 2: 13.25, 3: 13.5, 4: 17.0 }
        },
        '14': {
            6: { 2: 23.5, 3: 20.5, 4: 23.17 },
            8: { 2: 22.75, 3: 19.75, 4: 22.33 },
            10: { 2: 22.0, 3: 19.0, 4: 21.5 },
            12: { 2: 21.25, 3: 18.25, 4: 20.67 },
            14: { 2: 20.5, 3: 17.5, 4: 19.83 },
            16: { 2: 19.75, 3: 16.75, 4: 19.0 },
            18: { 2: 19.0, 3: 16.0, 4: 18.17 },
            20: { 2: 18.25, 3: 15.25, 4: 17.33 }
        },
        '16': {
            6: { 2: 29.0, 3: 24.67, 4: 30.83 },
            8: { 2: 28.0, 3: 23.67, 4: 29.67 },
            10: { 2: 27.0, 3: 22.67, 4: 28.5 },
            12: { 2: 26.0, 3: 21.67, 4: 27.33 },
            14: { 2: 25.0, 3: 20.67, 4: 26.17 },
            16: { 2: 24.0, 3: 19.67, 4: 25.0 },
            18: { 2: 23.0, 3: 18.67, 4: 23.83 },
            20: { 2: 22.0, 3: 17.67, 4: 22.67 }
        }
    },
    deuxEtages: {
        '9.5': {
            6: { 2: 11.33, 3: 13.0, 4: 14.25 },
            8: { 2: 9.17, 3: 11.42, 4: 12.58 },
            10: { 2: 8.25, 3: 11.17, 4: 12.33 },
            12: { 2: 8.0, 3: 10.58, 4: 11.67 }
        }
    }
};

// Tables poutrelles ajourées
const tablesPoutrelliesAjourees = {
    connecteursMetalliques: {
        '11.875x16': 18.5, '11.875x19.2': 16.8, '11.875x24': 14.2,
        '14x16': 21.3, '14x19.2': 19.4, '14x24': 16.8,
        '16x16': 23.8, '16x19.2': 21.7, '16x24': 18.8,
        '18x16': 26.2, '18x19.2': 23.9, '18x24': 20.7
    },
    ameMetallique: {
        '11.875x16': 19.2, '11.875x19.2': 17.4, '11.875x24': 15.1,
        '14x16': 22.1, '14x19.2': 20.1, '14x24': 17.4,
        '16x16': 24.7, '16x19.2': 22.5, '16x24': 19.5,
        '18x16': 27.1, '18x19.2': 24.7, '18x24': 21.4
    },
    boisDente: {
        '11.875x16': 20.1, '11.875x19.2': 18.3, '11.875x24': 15.9,
        '14x16': 23.2, '14x19.2': 21.1, '14x24': 18.3,
        '16x16': 25.9, '16x19.2': 23.6, '16x24': 20.4,
        '18x16': 28.4, '18x19.2': 25.9, '18x24': 22.4
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
// FONCTIONS DE CALCUL
// =============================================================================

function obtenirPorteeDecimale() {
    return calculateurData.portee.pieds + calculateurData.portee.pouces / 12;
}

function obtenirLargeurTributaireAjustee() {
    return calculateurData.typePortee === 'continue' 
        ? calculateurData.largeurTributaire * 1.25 
        : calculateurData.largeurTributaire;
}

function obtenirChargeTotal() {
    return calculateurData.chargeMorte + calculateurData.chargeVive + calculateurData.chargeNeige;
}

function obtenirChargeLineaire() {
    return obtenirChargeTotal() * obtenirLargeurTributaireAjustee();
}

function calculerVersaLam() {
    const tableType = calculateurData.typeEtage === 'un' ? 'unEtage' : 'deuxEtages';
    const tables = tablesVersaLam[tableType];
    
    if (!tables) {
        return { valide: false, message: 'Tables non disponibles pour deux étages' };
    }

    const largeursPossibles = [6, 8, 10, 12, 14, 16, 18, 20];
    const largeurTributaireAjustee = obtenirLargeurTributaireAjustee();
    const largeurTable = largeursPossibles.reduce((prev, curr) => 
        Math.abs(curr - largeurTributaireAjustee) < Math.abs(prev - largeurTributaireAjustee) ? curr : prev
    );

    const porteeDecimale = obtenirPorteeDecimale();
    let solutionOptimale = null;

    Object.keys(tables).forEach(hauteur => {
        if (tables[hauteur][largeurTable]) {
            [2, 3, 4].forEach(plis => {
                const porteeMax = tables[hauteur][largeurTable][plis];
                
                if (porteeMax && porteeDecimale <= porteeMax) {
                    const score = parseFloat(hauteur) * plis;
                    
                    if (!solutionOptimale || score < solutionOptimale.score) {
                        solutionOptimale = {
                            hauteur: hauteur + '"',
                            largeur: (1.75 * plis).toFixed(2) + '"',
                            configuration: plis + ' plis',
                            porteeMax: porteeMax.toFixed(1) + ' pi.',
                            valide: true,
                            type: 'Versa-Lam',
                            score: score
                        };
                    }
                }
            });
        }
    });

    return solutionOptimale || { 
        valide: false, 
        message: 'Portée excessive pour Versa-Lam' 
    };
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
            nomType = 'Bois denté collé (Open Joist 2000)';
            break;
        default:
            return { valide: false };
    }

    const tables = tablesPoutrelliesAjourees[tableType];
    const hauteursPossibles = ['11.875', '14', '16', '18'];
    const porteeDecimale = obtenirPorteeDecimale();
    
    let solutionOptimale = null;

    hauteursPossibles.forEach(hauteur => {
        const cle = `${hauteur}x${calculateurData.espacementPoutrelles}`;
        const porteeMax = tables[cle];
        
        if (porteeMax && porteeDecimale <= porteeMax) {
            if (!solutionOptimale || parseFloat(hauteur) < parseFloat(solutionOptimale.hauteur)) {
                solutionOptimale = {
                    hauteur: hauteur + '"',
                    largeur: '2x3 ou 2x4',
                    configuration: `${calculateurData.espacementPoutrelles}" c.c.`,
                    porteeMax: porteeMax.toFixed(1) + ' pi.',
                    valide: true,
                    type: nomType,
                    methodeCalcul: 'Analyse par treillis'
                };
            }
        }
    });

    return solutionOptimale || { 
        valide: false, 
        message: `Portée excessive pour poutrelles ajourées à ${calculateurData.espacementPoutrelles}" c.c.` 
    };
}

function calculerFleches(resultatsStructure) {
    if (!resultatsStructure.valide) return {};

    let E, I;
    const h = parseFloat(resultatsStructure.hauteur) || 12;
    const L = obtenirPorteeDecimale() * 12;
    const largeurTributaireAjustee = obtenirLargeurTributaireAjustee();

    if (calculateurData.typePoutre === 'versalam') {
        E = 1800000; // Versa-Lam
        const b = parseFloat(resultatsStructure.largeur) || 3.5;
        I = (b * Math.pow(h, 3)) / 12;
    } else {
        E = 1600000; // Poutrelles ajourées
        I = Math.pow(h, 3) / 10; // Approximation pour structures ajourées
    }

    const flecheVive = (5 * calculateurData.chargeVive * largeurTributaireAjustee * Math.pow(L, 4)) / (384 * E * I);
    const flecheTotale = (5 * obtenirChargeTotal() * largeurTributaireAjustee * Math.pow(L, 4)) / (384 * E * I);
    
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
    const chargeTotal = obtenirChargeTotal();
    const chargeLineaire = obtenirChargeLineaire();
    
    document.getElementById('chargeTotal').textContent = `${chargeTotal} lb/pi.ca.`;
    document.getElementById('chargeLineaire').textContent = `${Math.round(chargeLineaire)} lb/pi.`;
}

function afficherEspacement() {
    const typePoutre = calculateurData.typePoutre;
    const espacementContainer = document.getElementById('espacementContainer');
    
    if (typePoutre.startsWith('ajouree')) {
        espacementContainer.style.display = 'block';
    } else {
        espacementContainer.style.display = 'none';
    }
}

function afficherTypeEtage() {
    const typePoutre = calculateurData.typePoutre;
    const typeEtageContainer = document.getElementById('typeEtageContainer');
    
    if (typePoutre === 'versalam') {
        typeEtageContainer.style.display = 'block';
    } else {
        typeEtageContainer.style.display = 'none';
    }
}

function mettreAJourResultats() {
    const resultats = calculerStructure();
    const resultatsContainer = document.getElementById('resultatsContainer');
    
    // Changer la couleur de fond selon la validité
    if (resultats.valide) {
        resultatsContainer.className = 'bg-green-50 p-4 rounded-lg';
    } else {
        resultatsContainer.className = 'bg-red-50 p-4 rounded-lg';
    }
    
    // Mettre à jour le type de structure
    document.getElementById('typeStructure').textContent = resultats.type || 'Structure';
    
    // Afficher/masquer la méthode de calcul
    const methodeElement = document.getElementById('methodeCalcul');
    if (resultats.methodeCalcul) {
        methodeElement.textContent = resultats.methodeCalcul;
        methodeElement.style.display = 'block';
    } else {
        methodeElement.style.display = 'none';
    }
    
    if (resultats.valide) {
        // Dimensions
        document.getElementById('hauteurResultat').textContent = resultats.hauteur;
        document.getElementById('largeurResultat').textContent = resultats.largeur;
        document.getElementById('configurationResultat').textContent = resultats.configuration;
        document.getElementById('porteeMaxResultat').textContent = resultats.porteeMax;
        
        document.getElementById('dimensionsContainer').style.display = 'block';
        
        // Flèches
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
        
        // Message de statut
        const statusElement = document.getElementById('statusMessage');
        statusElement.textContent = '✓ Configuration valide';
        statusElement.className = 'mt-3 p-2 rounded text-center text-sm font-semibold result-valid';
        
    } else {
        // Masquer les détails si non valide
        document.getElementById('dimensionsContainer').style.display = 'none';
        document.getElementById('flechesContainer').style.display = 'none';
        
        // Message d'erreur
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
    // Type de poutre
    document.getElementById('typePoutre').addEventListener('change', (e) => {
        calculateurData.typePoutre = e.target.value;
        mettreAJourInterface();
    });

    // Espacement poutrelles
    document.getElementById('espacementPoutrelles').addEventListener('change', (e) => {
        calculateurData.espacementPoutrelles = parseFloat(e.target.value);
        mettreAJourInterface();
    });

    // Portée
    document.getElementById('porteePieds').addEventListener('input', (e) => {
        calculateurData.portee.pieds = parseInt(e.target.value) || 0;
        mettreAJourInterface();
    });

    document.getElementById('porteePouces').addEventListener('input', (e) => {
        calculateurData.portee.pouces = parseInt(e.target.value) || 0;
        mettreAJourInterface();
    });

    // Type de portée
    document.getElementById('typePortee').addEventListener('change', (e) => {
        calculateurData.typePortee = e.target.value;
        mettreAJourInterface();
    });

    // Type d'étage
    document.getElementById('typeEtage').addEventListener('change', (e) => {
        calculateurData.typeEtage = e.target.value;
        mettreAJourInterface();
    });

    // Largeur tributaire
    document.getElementById('largeurTributaire').addEventListener('input', (e) => {
        calculateurData.largeurTributaire = parseFloat(e.target.value) || 0;
        mettreAJourInterface();
    });

    // Charges
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
    
    console.log('Calculateur de poutres initialisé');
    console.log('Version: Poutres Versa-Lam + Poutrelles Ajourées');
});

// =============================================================================
// FONCTIONS UTILITAIRES EXPORTÉES (si besoin)
// =============================================================================

window.CalculateurPoutres = {
    obtenirResultats: () => calculerStructure(),
    obtenirDonnees: () => calculateurData,
    reinitialiser: () => {
        calculateurData = {
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
        mettreAJourInterface();
    }
};