// =============================================================================
// TABLES DE DONNÉES
// =============================================================================

const tablesVersaLam = {
    unEtage: {
        '7.25': {
            6: { 2: 10.5, 3: 12.0, 4: 13.25 },
            8: { 2: 9.75, 3: 11.0, 4: 12.25 },
            10: { 2: 9.0, 3: 10.25, 4: 11.25 },
            12: { 2: 8.5, 3: 9.75, 4: 10.5 },
            14: { 2: 8.0, 3: 9.25, 4: 10.0 },
            16: { 2: 7.5, 3: 8.75, 4: 9.5 },
            18: { 2: 7.25, 3: 8.25, 4: 9.0 },
            20: { 2: 6.75, 3: 7.75, 4: 8.5 }
        },
        '9.5': {
            6: { 2: 10.42, 3: 12.0, 4: 13.17 },
            8: { 2: 9.5, 3: 10.92, 4: 12.0 },
            10: { 2: 8.83, 3: 10.08, 4: 11.08 },
            12: { 2: 8.25, 3: 9.42, 4: 10.33 },
            14: { 2: 8.5, 3: 9.5, 4: 10.5 },
            16: { 2: 7.75, 3: 8.75, 4: 9.5 },
            18: { 2: 7.25, 3: 8.25, 4: 9.0 },
            20: { 2: 6.75, 3: 7.75, 4: 8.5 }
        },
        '11.875': {
            6: { 2: 13.08, 3: 15.0, 4: 16.5 },
            8: { 2: 11.92, 3: 13.58, 4: 15.0 },
            10: { 2: 11.0, 3: 12.67, 4: 13.92 },
            12: { 2: 10.25, 3: 11.83, 4: 13.0 },
            14: { 2: 9.67, 3: 11.08, 4: 12.17 },
            16: { 2: 9.17, 3: 10.5, 4: 11.5 },
            18: { 2: 8.75, 3: 10.0, 4: 10.92 },
            20: { 2: 8.33, 3: 9.58, 4: 10.42 }
        },
        '14': {
            6: { 2: 15.42, 3: 17.67, 4: 19.42 },
            8: { 2: 14.0, 3: 16.08, 4: 17.67 },
            10: { 2: 13.0, 3: 14.92, 4: 16.42 },
            12: { 2: 12.17, 3: 13.92, 4: 15.33 },
            14: { 2: 11.5, 3: 13.17, 4: 14.5 },
            16: { 2: 10.83, 3: 12.42, 4: 13.67 },
            18: { 2: 10.33, 3: 11.83, 4: 13.0 },
            20: { 2: 9.83, 3: 11.33, 4: 12.42 }
        },
        '16': {
            6: { 2: 17.67, 3: 20.17, 4: 22.25 },
            8: { 2: 16.0, 3: 18.33, 4: 20.17 },
            10: { 2: 14.83, 3: 17.0, 4: 18.75 },
            12: { 2: 13.92, 3: 15.92, 4: 17.5 },
            14: { 2: 13.17, 3: 15.08, 4: 16.58 },
            16: { 2: 12.5, 3: 14.33, 4: 15.75 },
            18: { 2: 11.92, 3: 13.67, 4: 15.0 },
            20: { 2: 11.42, 3: 13.08, 4: 14.33 }
        },
        '18': {
            6: { 2: 19.83, 3: 22.75, 4: 25.0 },
            8: { 2: 18.0, 3: 20.67, 4: 22.75 },
            10: { 2: 16.75, 3: 19.17, 4: 21.08 },
            12: { 2: 15.67, 3: 17.92, 4: 19.67 },
            14: { 2: 14.83, 3: 16.92, 4: 18.58 },
            16: { 2: 14.08, 3: 16.08, 4: 17.67 },
            18: { 2: 13.42, 3: 15.33, 4: 16.83 },
            20: { 2: 12.83, 3: 14.67, 4: 16.08 }
        }
    },
    deuxEtages: {
        '9.5': {
            6: { 2: 8.33, 3: 9.58, 4: 10.5 },
            8: { 2: 7.58, 3: 8.75, 4: 9.58 },
            10: { 2: 7.0, 3: 8.08, 4: 8.83 },
            12: { 2: 6.5, 3: 7.5, 4: 8.25 },
            14: { 2: 6.08, 3: 7.0, 4: 7.75 },
            16: { 2: 5.75, 3: 6.58, 4: 7.25 },
            18: { 2: 5.42, 3: 6.25, 4: 6.83 },
            20: { 2: 5.17, 3: 5.92, 4: 6.5 }
        },
        '11.875': {
            6: { 2: 10.42, 3: 12.0, 4: 13.17 },
            8: { 2: 9.5, 3: 10.92, 4: 12.0 },
            10: { 2: 8.75, 3: 10.08, 4: 11.08 },
            12: { 2: 8.17, 3: 9.42, 4: 10.33 },
            14: { 2: 7.67, 3: 8.83, 4: 9.67 },
            16: { 2: 7.25, 3: 8.33, 4: 9.17 },
            18: { 2: 6.92, 3: 7.92, 4: 8.67 },
            20: { 2: 6.58, 3: 7.58, 4: 8.25 }
        },
        '14': {
            6: { 2: 12.33, 3: 14.17, 4: 15.58 },
            8: { 2: 11.17, 3: 12.83, 4: 14.17 },
            10: { 2: 10.33, 3: 11.92, 4: 13.08 },
            12: { 2: 9.67, 3: 11.17, 4: 12.25 },
            14: { 2: 9.17, 3: 10.5, 4: 11.58 },
            16: { 2: 8.67, 3: 10.0, 4: 10.92 },
            18: { 2: 8.25, 3: 9.5, 4: 10.42 },
            20: { 2: 7.92, 3: 9.08, 4: 9.92 }
        },
        '16': {
            6: { 2: 14.08, 3: 16.17, 4: 17.75 },
            8: { 2: 12.75, 3: 14.67, 4: 16.17 },
            10: { 2: 11.83, 3: 13.58, 4: 14.92 },
            12: { 2: 11.08, 3: 12.75, 4: 14.0 },
            14: { 2: 10.5, 3: 12.08, 4: 13.25 },
            16: { 2: 9.92, 3: 11.42, 4: 12.58 },
            18: { 2: 9.5, 3: 10.92, 4: 12.0 },
            20: { 2: 9.08, 3: 10.42, 4: 11.5 }
        },
        '18': {
            6: { 2: 15.83, 3: 18.17, 4: 20.0 },
            8: { 2: 14.33, 3: 16.5, 4: 18.17 },
            10: { 2: 13.33, 3: 15.33, 4: 16.83 },
            12: { 2: 12.5, 3: 14.33, 4: 15.75 },
            14: { 2: 11.83, 3: 13.58, 4: 14.92 },
            16: { 2: 11.25, 3: 12.92, 4: 14.17 },
            18: { 2: 10.75, 3: 12.33, 4: 13.5 },
            20: { 2: 10.25, 3: 11.75, 4: 12.92 }
        }
    }
};

const tablesPoutrelliesAjourees = {
    connecteursMetalliques: {
        '11.875x16': { portee: 18.5, chargeMax: 125 },
        '14x16': { portee: 21.3, chargeMax: 150 },
        '16x16': { portee: 23.8, chargeMax: 175 },
        '18x16': { portee: 26.1, chargeMax: 200 }
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
    portee: { pieds: 0, pouces: 0 },
    largeurTributaire: 0,
    largeurTributaireEtage: 0,
    largeurTributaireRC: 0,
    chargeMorte: 0,
    chargeVive: 0,
    chargeNeige: 0,
    typePortee: 'simple',
    typeEtage: 'un',
    espacementPoutrelles: 16,
    largeurMax: 0,
    hauteurMax: 0,
    activerLargeurMax: false,
    activerHauteurMax: false,
    typeOptimisation: 'plis'
};

// =============================================================================
// FONCTIONS DE CALCUL CORRIGÉES
// =============================================================================

function obtenirPorteeDecimale() {
    return calculateurData.portee.pieds + calculateurData.portee.pouces / 12;
}

function obtenirLargeurTributaireAjustee() {
    const facteur = calculateurData.typePortee === 'continue' ? 1.25 : 1;
    
    if (calculateurData.typeEtage === 'deux') {
        return {
            etage: calculateurData.largeurTributaireEtage * facteur,
            rc: calculateurData.largeurTributaireRC * facteur
        };
    } else {
        return calculateurData.largeurTributaire * facteur;
    }
}

function calculerChargesLineaires() {
    const largeurTributaire = obtenirLargeurTributaireAjustee();
    
    if (calculateurData.typeEtage === 'deux') {
        // Calculs pour deux étages avec largeurs différentes
        const WV_etage = calculateurData.chargeVive * largeurTributaire.etage;
        const WM_etage = calculateurData.chargeMorte * largeurTributaire.etage;
        const WN_etage = calculateurData.chargeNeige * largeurTributaire.etage;
        
        const WV_rc = calculateurData.chargeVive * largeurTributaire.rc;
        const WM_rc = calculateurData.chargeMorte * largeurTributaire.rc;
        const WN_rc = calculateurData.chargeNeige * largeurTributaire.rc;
        
        // Charges totales (étage + RC)
        const WV = WV_etage + WV_rc;
        const WM = WM_etage + WM_rc;
        const WN = WN_etage + WN_rc;
        
        const WT = WV + WM + WN;
        const WF = WV * 1.5 + WM * 1.25 + WN * 1.5;
        
        return { 
            WV, WM, WN, WT, WF,
            deuxEtages: {
                etage: { WV: WV_etage, WM: WM_etage, WN: WN_etage, WT: WV_etage + WM_etage + WN_etage },
                rc: { WV: WV_rc, WM: WM_rc, WN: WN_rc, WT: WV_rc + WM_rc + WN_rc }
            }
        };
    } else {
        // Calculs pour un étage
        const WV = calculateurData.chargeVive * largeurTributaire;
        const WM = calculateurData.chargeMorte * largeurTributaire;
        const WN = calculateurData.chargeNeige * largeurTributaire;
        
        const WT = WV + WM + WN;
        const WF = WV * 1.5 + WM * 1.25 + WN * 1.5;
        
        return { WV, WM, WN, WT, WF };
    }
}

function calculerVersaLam() {
    const charges = calculerChargesLineaires();
    const porteeDecimale = obtenirPorteeDecimale();
    const largeurTributaire = obtenirLargeurTributaireAjustee();
    
    // Déterminer la largeur tributaire effective pour les tables
    let largeurTableEffective;
    if (calculateurData.typeEtage === 'deux') {
        // Pour deux étages, prendre la plus grande largeur
        largeurTableEffective = Math.max(largeurTributaire.etage, largeurTributaire.rc);
    } else {
        largeurTableEffective = largeurTributaire;
    }
    
    // Trouver largeur tributaire la plus proche dans les tables
    const largeursPossibles = [6, 8, 10, 12, 14, 16, 18, 20];
    const largeurTable = largeursPossibles.reduce((prev, curr) => 
        Math.abs(curr - largeurTableEffective) < Math.abs(prev - largeurTableEffective) ? curr : prev
    );

    // Sélectionner la table appropriée
    const tables = calculateurData.typeEtage === 'deux' ? tablesVersaLam.deuxEtages : tablesVersaLam.unEtage;
    let solutionOptimale = null;
    const hauteursPossibles = ['7.25', '9.5', '11.875', '14', '16', '18'];

    // Limites basées sur les exemples de calcul officiels (charges par pli)
    const limitesParHauteur = {
        '7.25': { WV: 400, WT: 550, WF: 750 },
        '9.5': { WV: 300, WT: 420, WF: 570 },
        '11.875': { WV: 450, WT: 630, WF: 850 },
        '14': { WV: 650, WT: 900, WF: 1200 },
        '16': { WV: 850, WT: 1180, WF: 1600 },
        '18': { WV: 1050, WT: 1450, WF: 1950 }
    };

    hauteursPossibles.forEach(hauteur => {
        const tableHauteur = tables[hauteur];
        if (!tableHauteur || !tableHauteur[largeurTable]) return;

        [2, 3, 4].forEach(plis => {
            // Vérifier contrainte de largeur SEULEMENT si activée
            const largeurPoutre = plis * 1.75;
            if (calculateurData.activerLargeurMax && largeurPoutre > calculateurData.largeurMax) return;

            // Vérifier contrainte de hauteur SEULEMENT si activée
            if (calculateurData.activerHauteurMax && parseFloat(hauteur) > calculateurData.hauteurMax) return;

            // Vérifier portée dans les tables
            const porteeTableMax = tableHauteur[largeurTable][plis];
            if (!porteeTableMax || porteeDecimale > porteeTableMax) return;

            // Division par nombre de plis pour comparer aux limites (méthodologie P1)
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
                        WV: WV_parPli.toFixed(1),
                        WT: WT_parPli.toFixed(1),
                        WF: WF_parPli.toFixed(1)
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
    if (calculateurData.typeEtage === 'deux') {
        const largeurAjustee = obtenirLargeurTributaireAjustee();
        
        const largeurAjusteeEtageElement = document.getElementById('largeurAjusteeEtage');
        const largeurAjusteeRCElement = document.getElementById('largeurAjusteeRC');
        
        if (calculateurData.typePortee === 'continue') {
            largeurAjusteeEtageElement.textContent = `Ajustée: ${largeurAjustee.etage.toFixed(1)} pi.`;
            largeurAjusteeRCElement.textContent = `Ajustée: ${largeurAjustee.rc.toFixed(1)} pi.`;
            largeurAjusteeEtageElement.style.display = 'block';
            largeurAjusteeRCElement.style.display = 'block';
        } else {
            largeurAjusteeEtageElement.style.display = 'none';
            largeurAjusteeRCElement.style.display = 'none';
        }
    } else {
        const largeurAjusteeElement = document.getElementById('largeurAjustee');
        if (calculateurData.typePortee === 'continue') {
            const largeurAjustee = obtenirLargeurTributaireAjustee();
            largeurAjusteeElement.textContent = `Ajustée: ${largeurAjustee.toFixed(1)} pi.`;
            largeurAjusteeElement.style.display = 'block';
        } else {
            largeurAjusteeElement.style.display = 'none';
        }
    }
}

function mettreAJourAffichageCharges() {
    const charges = calculerChargesLineaires();
    
    document.getElementById('chargeTotal').textContent = `${charges.WT.toFixed(0)} lb/pi.ca.`;
    document.getElementById('chargeLineaire').textContent = `${charges.WF.toFixed(0)} lb/pi. (pond.)`;
    
    // Afficher détails pour deux étages
    const chargesDetailleesElement = document.getElementById('chargesDetaillees');
    if (calculateurData.typeEtage === 'deux' && charges.deuxEtages) {
        document.getElementById('chargeEtage').textContent = `${charges.deuxEtages.etage.WT.toFixed(0)} lb/pi.ca.`;
        document.getElementById('chargeRC').textContent = `${charges.deuxEtages.rc.WT.toFixed(0)} lb/pi.ca.`;
        chargesDetailleesElement.style.display = 'block';
    } else {
        chargesDetailleesElement.style.display = 'none';
    }
}

function afficherLargeurMax() {
    const largeurMaxContainer = document.getElementById('largeurMaxContainer');
    largeurMaxContainer.style.display = calculateurData.activerLargeurMax ? 'block' : 'none';
}

function afficherHauteurMax() {
    const hauteurMaxContainer = document.getElementById('hauteurMaxContainer');
    hauteurMaxContainer.style.display = calculateurData.activerHauteurMax ? 'block' : 'none';
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
    
    // Gérer l'affichage des largeurs tributaires
    afficherLargeursTributaires();
}

function afficherLargeursTributaires() {
    const largeurUnEtage = document.getElementById('largeurUnEtage');
    const largeurDeuxEtages = document.getElementById('largeurDeuxEtages');
    
    if (calculateurData.typeEtage === 'deux' && calculateurData.typePoutre === 'versalam') {
        largeurUnEtage.style.display = 'none';
        largeurDeuxEtages.style.display = 'block';
    } else {
        largeurUnEtage.style.display = 'block';
        largeurDeuxEtages.style.display = 'none';
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
    afficherLargeurMax();
    afficherHauteurMax();
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

    // Événements pour largeur tributaire simple
    document.getElementById('largeurTributaire').addEventListener('input', (e) => {
        calculateurData.largeurTributaire = parseFloat(e.target.value) || 0;
        mettreAJourInterface();
    });

    // Événements pour largeurs tributaires séparées (deux étages)
    document.getElementById('largeurTributaireEtage').addEventListener('input', (e) => {
        calculateurData.largeurTributaireEtage = parseFloat(e.target.value) || 0;
        mettreAJourInterface();
    });

    document.getElementById('largeurTributaireRC').addEventListener('input', (e) => {
        calculateurData.largeurTributaireRC = parseFloat(e.target.value) || 0;
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

    document.getElementById('activerLargeurMax').addEventListener('change', (e) => {
        calculateurData.activerLargeurMax = e.target.checked;
        afficherLargeurMax();
        mettreAJourInterface();
    });

    document.getElementById('largeurMax').addEventListener('input', (e) => {
        calculateurData.largeurMax = parseFloat(e.target.value) || 0;
        mettreAJourInterface();
    });

    document.getElementById('activerHauteurMax').addEventListener('change', (e) => {
        calculateurData.activerHauteurMax = e.target.checked;
        afficherHauteurMax();
        mettreAJourInterface();
    });

    document.getElementById('hauteurMax').addEventListener('input', (e) => {
        calculateurData.hauteurMax = parseFloat(e.target.value) || 0;
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
    
    console.log('Calculateur mis à jour - Deux largeurs tributaires pour deux étages');
});

// =============================================================================
// API EXTERNE
// =============================================================================

window.CalculateurPoutres = {
    obtenirResultats: () => calculerStructure(),
    obtenirCharges: () => calculerChargesLineaires(),
    obtenirDonnees: () => calculateurData
};
