// Tableaux de données Versa-Lam basés sur la base de connaissances CECOBOIS
const TABLES_VERSALAM = {
    // Table pour poutre de plancher (deux étages) - Charge vive 40 lb/pi², Charge morte 15 lb/pi²
    plancher_2_etages: {
        // Hauteur en pouces : { plis : { largeur_tributaire : capacité_lb_pi }}
        "5.5": {
            "2": { 6: 825, 8: 665, 10: 555, 12: 475, 14: 415, 16: 370, 18: 330, 20: 300 },
            "3": { 6: 1225, 8: 985, 10: 825, 12: 705, 14: 615, 16: 550, 18: 490, 20: 445 }
        },
        "7.25": {
            "2": { 6: 1375, 8: 1105, 10: 925, 12: 790, 14: 690, 16: 615, 18: 550, 20: 500 },
            "3": { 6: 2040, 8: 1640, 10: 1375, 12: 1175, 14: 1025, 16: 915, 18: 820, 20: 740 }
        },
        "9.25": {
            "2": { 6: 2015, 8: 1620, 10: 1355, 12: 1155, 14: 1010, 16: 900, 18: 805, 20: 730 },
            "3": { 6: 2990, 8: 2405, 10: 2015, 12: 1720, 14: 1500, 16: 1340, 18: 1200, 20: 1085 }
        },
        "9.5": {
            "2": { 6: 2075, 8: 1670, 10: 1395, 12: 1190, 14: 1040, 16: 925, 18: 830, 20: 750 },
            "3": { 6: 3080, 8: 2475, 10: 2075, 12: 1770, 14: 1545, 16: 1380, 18: 1235, 20: 1115 }
        },
        "11.25": {
            "2": { 6: 2860, 8: 2300, 10: 1925, 12: 1645, 14: 1435, 16: 1280, 18: 1150, 20: 1040 },
            "3": { 6: 4245, 8: 3415, 10: 2860, 12: 2440, 14: 2135, 16: 1905, 18: 1710, 20: 1545 }
        },
        "11.875": {
            "2": { 6: 3185, 8: 2560, 10: 2145, 12: 1830, 14: 1600, 16: 1425, 18: 1280, 20: 1155 },
            "3": { 6: 4730, 8: 3805, 10: 3185, 12: 2720, 14: 2375, 16: 2120, 18: 1900, 20: 1715 }
        },
        "14": {
            "2": { 6: 4390, 8: 3530, 10: 2955, 12: 2525, 14: 2205, 16: 1965, 18: 1765, 20: 1595 },
            "3": { 6: 6520, 8: 5240, 10: 4390, 12: 3745, 14: 3275, 16: 2925, 18: 2625, 20: 2370 }
        },
        "16": {
            "2": { 6: 5870, 8: 4720, 10: 3950, 12: 3375, 14: 2950, 16: 2630, 18: 2360, 20: 2135 },
            "3": { 6: 8720, 8: 7010, 10: 5870, 12: 5010, 14: 4375, 16: 3905, 18: 3505, 20: 3165 }
        },
        "18": {
            "2": { 6: 7810, 8: 6280, 10: 5255, 12: 4490, 14: 3925, 16: 3500, 18: 3140, 20: 2840 },
            "3": { 6: 11600, 8: 9325, 10: 7810, 12: 6670, 14: 5830, 16: 5205, 18: 4670, 20: 4220 }
        }
    },

    // Table pour poutre de plancher (un étage) - Charge vive 40 lb/pi², Charge morte 15 lb/pi²
    plancher_1_etage: {
        "5.5": {
            "2": { 6: 1245, 8: 1000, 10: 835, 12: 715, 14: 625, 16: 555, 18: 500, 20: 450 },
            "3": { 6: 1845, 8: 1485, 10: 1245, 12: 1060, 14: 930, 16: 830, 18: 745, 20: 675 }
        },
        "7.25": {
            "2": { 6: 2075, 8: 1665, 10: 1395, 12: 1190, 14: 1040, 16: 925, 18: 830, 20: 750 },
            "3": { 6: 3080, 8: 2475, 10: 2075, 12: 1770, 14: 1545, 16: 1380, 18: 1235, 20: 1115 }
        },
        "9.25": {
            "2": { 6: 3040, 8: 2445, 10: 2045, 12: 1745, 14: 1525, 16: 1360, 18: 1220, 20: 1100 },
            "3": { 6: 4510, 8: 3625, 10: 3040, 12: 2595, 14: 2270, 16: 2025, 18: 1815, 20: 1640 }
        },
        "9.5": {
            "2": { 6: 3140, 8: 2525, 10: 2115, 12: 1805, 14: 1575, 16: 1405, 18: 1260, 20: 1140 },
            "3": { 6: 4660, 8: 3745, 10: 3140, 12: 2680, 14: 2340, 16: 2090, 18: 1875, 20: 1695 }
        },
        "11.25": {
            "2": { 6: 4325, 8: 3475, 10: 2910, 12: 2485, 14: 2170, 16: 1935, 18: 1735, 20: 1570 },
            "3": { 6: 6420, 8: 5160, 10: 4325, 12: 3690, 14: 3225, 16: 2880, 18: 2585, 20: 2335 }
        },
        "11.875": {
            "2": { 6: 4820, 8: 3875, 10: 3245, 12: 2770, 14: 2420, 16: 2160, 18: 1940, 20: 1750 },
            "3": { 6: 7160, 8: 5755, 10: 4820, 12: 4115, 14: 3595, 16: 3210, 18: 2880, 20: 2605 }
        },
        "14": {
            "2": { 6: 6655, 8: 5345, 10: 4475, 12: 3820, 14: 3340, 16: 2980, 18: 2675, 20: 2415 },
            "3": { 6: 9880, 8: 7940, 10: 6655, 12: 5680, 14: 4965, 16: 4430, 18: 3975, 20: 3590 }
        },
        "16": {
            "2": { 6: 8900, 8: 7155, 10: 5995, 12: 5115, 14: 4470, 16: 3990, 18: 3580, 20: 3235 },
            "3": { 6: 13210, 8: 10620, 10: 8900, 12: 7595, 14: 6640, 16: 5925, 18: 5315, 20: 4805 }
        },
        "18": {
            "2": { 6: 11840, 8: 9515, 10: 7975, 12: 6810, 14: 5950, 16: 5310, 18: 4765, 20: 4305 },
            "3": { 6: 17580, 8: 14130, 10: 11840, 12: 10105, 14: 8835, 16: 7885, 18: 7075, 20: 6395 }
        }
    }
};

// Variables globales
let resultatsCalcul = {
    wv: 0,
    wm: 0,
    wt: 0,
    wf: 0,
    wvEtage: 0,
    wmEtage: 0,
    wvRC: 0,
    wmRC: 0
};

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    // Écouteurs d'événements
    document.getElementById('portee').addEventListener('input', updatePorteeDecimal);
    document.getElementById('porteeInches').addEventListener('input', updatePorteeDecimal);
    document.getElementById('etages').addEventListener('change', toggleLargeurTributaire);
    document.getElementById('contrainteLargeur').addEventListener('change', toggleLargeurMax);
    document.getElementById('contrainteHauteur').addEventListener('change', toggleHauteurMax);
    document.getElementById('typePoutre').addEventListener('change', updateSourceInfo);
    
    // Écouteurs pour les calculs
    ['ltUnique', 'ltEtage', 'ltRC', 'chargeMorte', 'chargeVive', 'chargeNeige'].forEach(id => {
        document.getElementById(id).addEventListener('input', calculerCharges);
    });

    ['typePoutre', 'typeUsage', 'etages', 'typePortee', 'optimiser'].forEach(id => {
        document.getElementById(id).addEventListener('change', calculerStructure);
    });

    // Initialisation
    toggleLargeurTributaire();
    updateSourceInfo();
    calculerCharges();
});

function updatePorteeDecimal() {
    const portee = parseFloat(document.getElementById('portee').value) || 0;
    const inches = parseInt(document.getElementById('porteeInches').value) || 0;
    const totalDecimal = portee + (inches / 12);
    
    document.getElementById('porteeDecimal').textContent = `= ${totalDecimal.toFixed(2)} pi.`;
    calculerStructure();
}

function toggleLargeurTributaire() {
    const etages = document.getElementById('etages').value;
    const ltUnEtage = document.getElementById('ltUnEtage');
    const ltDeuxEtages = document.getElementById('ltDeuxEtages');
    
    if (etages === '2') {
        ltUnEtage.style.display = 'none';
        ltDeuxEtages.style.display = 'block';
    } else {
        ltUnEtage.style.display = 'block';
        ltDeuxEtages.style.display = 'none';
    }
    calculerCharges();
}

function toggleLargeurMax() {
    const checked = document.getElementById('contrainteLargeur').checked;
    document.getElementById('largeurMaxContainer').style.display = checked ? 'block' : 'none';
}

function toggleHauteurMax() {
    const checked = document.getElementById('contrainteHauteur').checked;
    document.getElementById('hauteurMaxContainer').style.display = checked ? 'block' : 'none';
}

function updateSourceInfo() {
    const typePoutre = document.getElementById('typePoutre').value;
    const sourceInfo = document.getElementById('sourceInfo');
    
    if (typePoutre === 'versalam-poutre') {
        sourceInfo.textContent = 'Calculs basés sur les tableaux VERSALAM 2.0E';
    } else {
        sourceInfo.textContent = 'Calculs basés sur les tableaux CECOBOIS';
    }
}

function calculerCharges() {
    const etages = document.getElementById('etages').value;
    const cm = parseFloat(document.getElementById('chargeMorte').value) || 0;
    const cv = parseFloat(document.getElementById('chargeVive').value) || 0;
    const neige = parseFloat(document.getElementById('chargeNeige').value) || 0;

    let wv = 0, wm = 0, wvEtage = 0, wmEtage = 0, wvRC = 0, wmRC = 0;

    if (etages === '2') {
        // Deux étages - selon exemple P2a
        const ltEtage = parseFloat(document.getElementById('ltEtage').value) || 0;
        const ltRC = parseFloat(document.getElementById('ltRC').value) || 0;
        
        // WV1 = CV × LT (RC), WV2 = CV × LT (Étage)
        wvRC = cv * ltRC;
        wvEtage = cv * ltEtage;
        wv = wvRC + wvEtage;
        
        // WM1 = CM × LT (RC), WM2 = CM × LT (Étage)  
        wmRC = cm * ltRC;
        wmEtage = cm * ltEtage;
        wm = wmRC + wmEtage;
    } else {
        // Un étage
        const ltUnique = parseFloat(document.getElementById('ltUnique').value) || 0;
        wv = cv * ltUnique;
        wm = cm * ltUnique;
        wvEtage = wv;
        wmEtage = wm;
    }

    const wt = wv + wm;
    const wf = wv * 1.5 + wm * 1.25;

    // Stockage des résultats
    resultatsCalcul = {
        wv: wv,
        wm: wm,
        wt: wt,
        wf: wf,
        wvEtage: wvEtage,
        wmEtage: wmEtage,
        wvRC: wvRC,
        wmRC: wmRC
    };

    // Affichage - selon format exemple P2a
    document.getElementById('totalLineaire').textContent = Math.round(wt);
    document.getElementById('totalLinearePond').textContent = Math.round(wf);
    document.getElementById('chargeEtage').textContent = Math.round(wvEtage + wmEtage);
    document.getElementById('chargeRC').textContent = Math.round(wvRC + wmRC);

    calculerStructure();
}

function calculerStructure() {
    const typePoutre = document.getElementById('typePoutre').value;
    
    if (typePoutre === 'versalam-poutre') {
        calculerVersaLam();
    } else {
        // Pour les poutrelles CECOBOIS
        afficherResultat('Poutrelles CECOBOIS', 'Les poutrelles ajourées nécessitent une analyse spécialisée avec logiciel CECOBOIS.', false);
    }
}

function calculerVersaLam() {
    const typeUsage = document.getElementById('typeUsage').value;
    const portee = parseFloat(document.getElementById('portee').value) || 0;
    const inches = parseInt(document.getElementById('porteeInches').value) || 0;
    const porteeTotal = portee + (inches / 12);
    const optimiser = document.getElementById('optimiser').value;
    const etages = document.getElementById('etages').value;

    if (porteeTotal <= 0 || resultatsCalcul.wf <= 0) {
        afficherResultat('Données incomplètes', 'Veuillez remplir tous les champs requis.', false);
        return;
    }

    // Déterminer la largeur tributaire effective
    let largeurTributaireEffective;
    if (etages === '2') {
        const ltEtage = parseFloat(document.getElementById('ltEtage').value) || 0;
        const ltRC = parseFloat(document.getElementById('ltRC').value) || 0;
        largeurTributaireEffective = Math.max(ltEtage, ltRC);
    } else {
        largeurTributaireEffective = parseFloat(document.getElementById('ltUnique').value) || 0;
    }

    // Sélection de la table appropriée
    let tableData = null;
    switch(typeUsage) {
        case 'plancher-1-etage':
            tableData = TABLES_VERSALAM.plancher_1_etage;
            break;
        case 'plancher-2-etages':
            tableData = TABLES_VERSALAM.plancher_2_etages;
            break;
        default:
            afficherResultat('Type d\'usage non supporté', 'Seules les poutres de plancher sont supportées actuellement.', false);
            return;
    }

    if (!tableData) {
        afficherResultat('Table non trouvée', 'Aucune table de données disponible pour cette configuration.', false);
        return;
    }

    // Recherche de solutions
    const solutions = trouverSolutions(tableData, largeurTributaireEffective, resultatsCalcul.wf, optimiser);
    
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
            'Les charges sont trop élevées pour la largeur tributaire demandée. Considérez réduire les charges ou la largeur tributaire.',
            false
        );
    }
}

function trouverSolutions(tableData, largeurTributaire, chargeAppliquee, optimiser) {
    const solutions = [];
    const hauteurs = Object.keys(tableData);
    
    // Trouver la largeur tributaire la plus proche dans les tables
    const largeursPossibles = [6, 8, 10, 12, 14, 16, 18, 20];
    const largeurTable = largeursPossibles.reduce((prev, curr) => 
        Math.abs(curr - largeurTributaire) < Math.abs(prev - largeurTributaire) ? curr : prev
    );
    
    for (const hauteur of hauteurs) {
        for (const plis of ['2', '3']) {
            if (!tableData[hauteur] || !tableData[hauteur][plis] || !tableData[hauteur][plis][largeurTable]) {
                continue;
            }
            
            const capacite = tableData[hauteur][plis][largeurTable];
            
            if (capacite >= chargeAppliquee) {
                solutions.push({
                    hauteur: hauteur,
                    plis: plis,
                    capacite: capacite,
                    chargeAppliquee: Math.round(chargeAppliquee),
                    marge: Math.round(capacite - chargeAppliquee),
                    ratio: capacite / chargeAppliquee,
                    largeurTable: largeurTable
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
                Marge: ${solution.marge} lb/pi (${(((solution.ratio - 1) * 100)).toFixed(1)}%)<br>
                <span class="text-xs">LT table: ${solution.largeurTable} pi.</span>
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
