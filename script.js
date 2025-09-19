// Tableaux de données Versa-Lam basés sur la base de connaissances CECOBOIS
const TABLES_VERSALAM = {
    // Table pour poutre de plancher (deux étages) - Charge vive 40 lb/pi², Charge morte 15 lb/pi²
    plancher_2_etages: {
        // Hauteur 5.5" - 2 plis et 3 plis
        "5.5": {
            "2": { 20: 450, 24: 350, 28: 300, 32: 250, 36: 220, 40: 200 },
            "3": { 20: 650, 24: 500, 28: 425, 32: 375, 36: 325, 40: 290 }
        },
        // Hauteur 7.25" - 2 plis et 3 plis  
        "7.25": {
            "2": { 20: 750, 24: 600, 28: 500, 32: 425, 36: 375, 40: 325 },
            "3": { 20: 1050, 24: 850, 28: 725, 32: 625, 36: 550, 40: 490 }
        },
        // Hauteur 9.25" - 2 plis et 3 plis
        "9.25": {
            "2": { 20: 1100, 24: 875, 28: 750, 32: 650, 36: 575, 40: 515 },
            "3": { 20: 1525, 24: 1225, 28: 1050, 32: 925, 36: 825, 40: 740 }
        },
        // Hauteur 9.5" - 2 plis et 3 plis
        "9.5": {
            "2": { 20: 1125, 24: 900, 28: 775, 32: 675, 36: 600, 40: 535 },
            "3": { 20: 1575, 24: 1275, 28: 1100, 32: 950, 36: 850, 40: 765 }
        },
        // Hauteur 11.25" - 2 plis et 3 plis
        "11.25": {
            "2": { 20: 1550, 24: 1250, 28: 1075, 32: 925, 36: 825, 40: 740 },
            "3": { 20: 2175, 24: 1750, 28: 1500, 32: 1300, 36: 1150, 40: 1040 }
        },
        // Hauteur 11.875" - 2 plis et 3 plis
        "11.875": {
            "2": { 20: 1725, 24: 1400, 28: 1200, 32: 1050, 36: 925, 40: 835 },
            "3": { 20: 2425, 24: 1950, 28: 1675, 32: 1450, 36: 1300, 40: 1175 }
        },
        // Hauteur 14" - 2 plis et 3 plis
        "14": {
            "2": { 20: 2375, 24: 1925, 28: 1650, 32: 1425, 36: 1275, 40: 1150 },
            "3": { 20: 3350, 24: 2700, 28: 2325, 32: 2025, 36: 1800, 40: 1625 }
        },
        // Hauteur 16" - 2 plis et 3 plis
        "16": {
            "2": { 20: 3175, 24: 2575, 28: 2200, 32: 1925, 36: 1725, 40: 1550 },
            "3": { 20: 4475, 24: 3625, 28: 3100, 32: 2700, 36: 2425, 40: 2175 }
        },
        // Hauteur 18" - 2 plis et 3 plis
        "18": {
            "2": { 20: 4225, 24: 3425, 28: 2925, 32: 2550, 36: 2275, 40: 2050 },
            "3": { 20: 5950, 24: 4825, 28: 4125, 32: 3600, 36: 3225, 40: 2900 }
        }
    },

    // Table pour poutre de plancher (un étage) - Charge vive 40 lb/pi², Charge morte 15 lb/pi²
    plancher_1_etage: {
        "5.5": {
            "2": { 20: 675, 24: 540, 28: 460, 32: 400, 36: 355, 40: 320 },
            "3": { 20: 950, 24: 760, 28: 650, 32: 565, 36: 505, 40: 455 }
        },
        "7.25": {
            "2": { 20: 1125, 24: 900, 28: 775, 32: 675, 36: 600, 40: 540 },
            "3": { 20: 1575, 24: 1275, 28: 1100, 32: 950, 36: 850, 40: 765 }
        },
        "9.25": {
            "2": { 20: 1650, 24: 1325, 28: 1125, 32: 985, 36: 875, 40: 790 },
            "3": { 20: 2300, 24: 1850, 28: 1575, 32: 1375, 36: 1225, 40: 1100 }
        },
        "9.5": {
            "2": { 20: 1700, 24: 1375, 28: 1175, 32: 1025, 36: 915, 40: 825 },
            "3": { 20: 2375, 24: 1925, 28: 1650, 32: 1425, 36: 1275, 40: 1150 }
        },
        "11.25": {
            "2": { 20: 2350, 24: 1900, 28: 1625, 32: 1425, 36: 1275, 40: 1150 },
            "3": { 20: 3300, 24: 2675, 28: 2300, 32: 2000, 36: 1800, 40: 1625 }
        },
        "11.875": {
            "2": { 20: 2625, 24: 2125, 28: 1825, 32: 1600, 36: 1425, 40: 1285 },
            "3": { 20: 3675, 24: 2975, 28: 2550, 32: 2225, 36: 1975, 40: 1785 }
        },
        "14": {
            "2": { 20: 3625, 24: 2925, 28: 2500, 32: 2200, 36: 1950, 40: 1775 },
            "3": { 20: 5075, 24: 4100, 28: 3525, 32: 3075, 36: 2750, 40: 2475 }
        },
        "16": {
            "2": { 20: 4850, 24: 3925, 28: 3375, 32: 2950, 36: 2625, 40: 2375 },
            "3": { 20: 6800, 24: 5500, 28: 4725, 32: 4125, 36: 3675, 40: 3325 }
        },
        "18": {
            "2": { 20: 6450, 24: 5225, 28: 4475, 32: 3925, 36: 3500, 40: 3150 },
            "3": { 20: 9050, 24: 7325, 28: 6275, 32: 5500, 36: 4900, 40: 4425 }
        }
    },

    // Table pour linteau (toit seulement) - Charge neige 20 lb/pi², Charge morte 15 lb/pi²
    linteau_toit_neige20: {
        "5.5": {
            "2": { 20: 825, 24: 715, 28: 635, 32: 575, 36: 525, 40: 485 },
            "3": { 20: 975, 24: 845, 28: 750, 32: 680, 36: 620, 40: 575 }
        },
        "7.25": {
            "2": { 20: 1325, 24: 1150, 28: 1025, 32: 925, 36: 845, 40: 775 },
            "3": { 20: 1565, 24: 1355, 28: 1205, 32: 1090, 36: 995, 40: 915 }
        },
        "9.25": {
            "2": { 20: 1950, 24: 1695, 28: 1505, 32: 1360, 36: 1245, 40: 1145 },
            "3": { 20: 2305, 24: 2000, 28: 1775, 32: 1605, 36: 1465, 40: 1350 }
        }
    },

    // Table pour linteau (toit seulement) - Charge neige 40 lb/pi², Charge morte 15 lb/pi²
    linteau_toit_neige40: {
        "5.5": {
            "2": { 20: 675, 24: 585, 28: 520, 32: 470, 36: 430, 40: 395 },
            "3": { 20: 800, 24: 695, 28: 615, 32: 560, 36: 510, 40: 470 }
        },
        "7.25": {
            "2": { 20: 1090, 24: 945, 28: 840, 32: 760, 36: 695, 40: 640 },
            "3": { 20: 1290, 24: 1120, 28: 995, 32: 900, 36: 820, 40: 755 }
        },
        "9.25": {
            "2": { 20: 1600, 24: 1390, 28: 1235, 32: 1115, 36: 1020, 40: 940 },
            "3": { 20: 1895, 24: 1645, 28: 1460, 32: 1320, 36: 1205, 40: 1110 }
        }
    }
};

// Variables globales
let resultatsCalcul = {
    wv: 0,
    wm: 0,
    wt: 0,
    wf: 0,
    chargeEtage: 0,
    chargeRC: 0,
    totalLineaire: 0,
    totalLinearePond: 0
};

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    // Écouteurs d'événements
    document.getElementById('portee').addEventListener('input', updatePorteeDecimal);
    document.getElementById('porteeInches').addEventListener('input', updatePorteeDecimal);
    document.getElementById('ltEtage').addEventListener('input', calculerCharges);
    document.getElementById('ltRC').addEventListener('input', calculerCharges);
    document.getElementById('chargeMorte').addEventListener('input', calculerCharges);
    document.getElementById('chargeVive').addEventListener('input', calculerCharges);
    document.getElementById('chargeNeige').addEventListener('input', calculerCharges);
    document.getElementById('typePoutre').addEventListener('change', calculerStructure);
    document.getElementById('typeUsage').addEventListener('change', calculerStructure);
    document.getElementById('etages').addEventListener('change', calculerStructure);
    document.getElementById('typePortee').addEventListener('change', calculerStructure);
    document.getElementById('optimiser').addEventListener('change', calculerStructure);

    // Calcul initial
    calculerCharges();
    calculerStructure();
});

function updatePorteeDecimal() {
    const portee = parseFloat(document.getElementById('portee').value) || 0;
    const inches = parseInt(document.getElementById('porteeInches').value) || 0;
    const totalDecimal = portee + (inches / 12);
    
    document.getElementById('porteeDecimal').textContent = `= ${totalDecimal.toFixed(2)} pi.`;
    calculerStructure();
}

function calculerCharges() {
    const ltEtage = parseFloat(document.getElementById('ltEtage').value) || 0;
    const ltRC = parseFloat(document.getElementById('ltRC').value) || 0;
    const cm = parseFloat(document.getElementById('chargeMorte').value) || 0;
    const cv = parseFloat(document.getElementById('chargeVive').value) || 0;
    const neige = parseFloat(document.getElementById('chargeNeige').value) || 0;

    // Calculs selon la démarche CECOBOIS
    const wvEtage = cv * ltEtage;
    const wvRC = cv * ltRC;
    const wv = wvEtage + wvRC;

    const wmEtage = cm * ltEtage;
    const wmRC = cm * ltRC;
    const wm = wmEtage + wmRC;

    const wt = wv + wm;
    const wf = wv * 1.5 + wm * 1.25;

    // Stockage des résultats
    resultatsCalcul = {
        wv: wv,
        wm: wm,
        wt: wt,
        wf: wf,
        chargeEtage: wvEtage + wmEtage,
        chargeRC: wvRC + wmRC,
        totalLineaire: wt,
        totalLinearePond: wf
    };

    // Affichage
    document.getElementById('totalLineaire').textContent = Math.round(wt);
    document.getElementById('totalLinearePond').textContent = Math.round(wf);
    document.getElementById('chargeEtage').textContent = Math.round(resultatsCalcul.chargeEtage);
    document.getElementById('chargeRC').textContent = Math.round(resultatsCalcul.chargeRC);

    calculerStructure();
}

function calculerStructure() {
    const typePoutre = document.getElementById('typePoutre').value;
    
    if (typePoutre === 'versalam') {
        calculerVersaLam();
    } else {
        // Pour les poutrelles ajourées, afficher un message
        afficherResultat('Configuration non supportée', 'Les poutrelles ajourées nécessitent une analyse spécialisée avec logiciel.', false);
    }
}

function calculerVersaLam() {
    const typeUsage = document.getElementById('typeUsage').value;
    const portee = parseFloat(document.getElementById('portee').value) || 0;
    const inches = parseInt(document.getElementById('porteeInches').value) || 0;
    const porteeTotal = portee + (inches / 12);
    const optimiser = document.getElementById('optimiser').value;

    if (porteeTotal <= 0 || resultatsCalcul.wf <= 0) {
        afficherResultat('Données incomplètes', 'Veuillez remplir tous les champs requis.', false);
        return;
    }

    // Sélection de la table appropriée
    let tableData = null;
    const neige = parseFloat(document.getElementById('chargeNeige').value) || 0;

    switch(typeUsage) {
        case 'plancher-1-etage':
            tableData = TABLES_VERSALAM.plancher_1_etage;
            break;
        case 'plancher-2-etages':
            tableData = TABLES_VERSALAM.plancher_2_etages;
            break;
        case 'linteau-toit':
            if (neige <= 25) {
                tableData = TABLES_VERSALAM.linteau_toit_neige20;
            } else {
                tableData = TABLES_VERSALAM.linteau_toit_neige40;
            }
            break;
        default:
            afficherResultat('Type d\'usage non supporté', 'Veuillez sélectionner un type d\'usage valide.', false);
            return;
    }

    if (!tableData) {
        afficherResultat('Table non trouvée', 'Aucune table de données disponible pour cette configuration.', false);
        return;
    }

    // Recherche de solutions
    const solutions = trouverSolutions(tableData, porteeTotal, resultatsCalcul.wf, optimiser);
    
    if (solutions.length > 0) {
        const meilleureSolution = solutions[0];
        afficherResultat(
            `${meilleureSolution.plis} plis de 1¾" × ${meilleureSolution.hauteur}" hauteur`,
            `Capacité: ${meilleureSolution.capacite} lb/pi. - Charge appliquée: ${Math.round(resultatsCalcul.wf)} lb/pi.`,
            true
        );
        afficherSolutions(solutions);
    } else {
        afficherResultat(
            'Aucune solution trouvée',
            'Les charges sont trop élevées pour la portée demandée. Considérez réduire la portée ou les charges.',
            false
        );
    }
}

function trouverSolutions(tableData, portee, chargeAppliquee, optimiser) {
    const solutions = [];
    const hauteurs = Object.keys(tableData);
    
    for (const hauteur of hauteurs) {
        for (const plis of ['2', '3']) {
            if (!tableData[hauteur] || !tableData[hauteur][plis]) continue;
            
            // Interpolation pour la portée exacte
            const capacite = interpolerCapacite(tableData[hauteur][plis], portee);
            
            if (capacite && capacite >= chargeAppliquee) {
                solutions.push({
                    hauteur: hauteur,
                    plis: plis,
                    capacite: Math.round(capacite),
                    chargeAppliquee: Math.round(chargeAppliquee),
                    marge: Math.round(capacite - chargeAppliquee),
                    ratio: capacite / chargeAppliquee
                });
            }
        }
    }

    // Tri selon l'optimisation demandée
    if (optimiser === 'moins-plis') {
        solutions.sort((a, b) => {
            if (a.plis !== b.plis) return parseInt(a.plis) - parseInt(b.plis);
            return parseFloat(a.hauteur) - parseFloat(b.hauteur);
        });
    } else if (optimiser === 'plus-plis') {
        solutions.sort((a, b) => {
            if (a.plis !== b.plis) return parseInt(b.plis) - parseInt(a.plis);
            return parseFloat(a.hauteur) - parseFloat(b.hauteur);
        });
    } else { // hauteur-min
        solutions.sort((a, b) => {
            return parseFloat(a.hauteur) - parseFloat(b.hauteur);
        });
    }

    return solutions;
}

function interpolerCapacite(donnees, portee) {
    const largeurs = Object.keys(donnees).map(Number).sort((a, b) => a - b);
    
    // Si la portée correspond exactement à une largeur
    for (const largeur of largeurs) {
        if (Math.abs(portee - largeur) < 0.01) {
            return donnees[largeur];
        }
    }
    
    // Interpolation linéaire
    for (let i = 0; i < largeurs.length - 1; i++) {
        const l1 = largeurs[i];
        const l2 = largeurs[i + 1];
        
        if (portee >= l1 && portee <= l2) {
            const c1 = donnees[l1];
            const c2 = donnees[l2];
            const ratio = (portee - l1) / (l2 - l1);
            return c1 + (c2 - c1) * ratio;
        }
    }
    
    // Extrapolation au-delà des limites (avec prudence)
    if (portee < largeurs[0]) {
        // Portée trop courte - utiliser la première valeur
        return donnees[largeurs[0]];
    } else if (portee > largeurs[largeurs.length - 1]) {
        // Portée trop longue - pas de solution
        return null;
    }
    
    return null;
}

function afficherResultat(titre, description, valide) {
    const resultatDiv = document.getElementById('resultatStructure');
    resultatDiv.className = valide ? 'result-valid p-2 rounded text-sm' : 'result-invalid p-2 rounded text-sm';
    resultatDiv.innerHTML = `${valide ? '✓' : '✗'} ${titre}<br>${description}`;
}

function afficherSolutions(solutions) {
    const solutionsDiv = document.getElementById('solutionsList');
    solutionsDiv.innerHTML = '';

    solutions.slice(0, 10).forEach((solution, index) => {
        const solutionDiv = document.createElement('div');
        solutionDiv.className = 'p-2 bg-white border rounded text-xs';
        solutionDiv.innerHTML = `
            <div class="font-medium">${solution.plis} plis × ${solution.hauteur}"</div>
            <div class="text-gray-600">
                Capacité: ${solution.capacite} lb/pi<br>
                Marge: ${solution.marge} lb/pi (${(((solution.ratio - 1) * 100)).toFixed(1)}%)
            </div>
        `;
        
        if (index === 0) {
            solutionDiv.className += ' border-green-500 bg-green-50';
        }
        
        solutionsDiv.appendChild(solutionDiv);
    });

    if (solutions.length > 10) {
        const moreDiv = document.createElement('div');
        moreDiv.className = 'text-xs text-gray-500 text-center';
        moreDiv.textContent = `... et ${solutions.length - 10} autres solutions`;
        solutionsDiv.appendChild(moreDiv);
    }
}
