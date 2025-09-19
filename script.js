// Tableaux VERSALAM extraits de la base de connaissances - PORTÉES en pieds
const TABLES_VERSALAM = {
    // Poutre de plancher (un étage) - CV 40 lb/pi², CM 15 lb/pi²
    plancher_1_etage: {
        "9.5": {
            "2": { 6: 16.4, 8: 13.2, 10: 11.1, 12: 9.5, 14: 8.3, 16: 7.4, 18: 6.7, 20: 6.1 },
            "3": { 6: 24.4, 8: 19.6, 10: 16.4, 12: 14.1, 14: 12.3, 16: 11.0, 18: 9.9, 20: 9.0 },
            "4": { 6: 32.1, 8: 25.8, 10: 21.6, 12: 18.5, 14: 16.2, 16: 14.5, 18: 13.0, 20: 11.8 }
        },
        "11.875": {
            "2": { 6: 22.6, 8: 18.1, 10: 15.2, 12: 13.0, 14: 11.4, 16: 10.1, 18: 9.1, 20: 8.3 },
            "3": { 6: 33.6, 8: 27.0, 10: 22.6, 12: 19.4, 14: 16.9, 16: 15.1, 18: 13.6, 20: 12.3 },
            "4": { 6: 44.2, 8: 35.5, 10: 29.7, 12: 25.5, 14: 22.3, 16: 19.9, 18: 17.9, 20: 16.2 }
        },
        "14": {
            "2": { 6: 29.7, 8: 23.9, 10: 20.0, 12: 17.1, 14: 15.0, 16: 13.4, 18: 12.0, 20: 10.9 },
            "3": { 6: 44.2, 8: 35.5, 10: 29.7, 12: 25.5, 14: 22.3, 16: 19.9, 18: 17.9, 20: 16.2 },
            "4": { 6: 58.2, 8: 46.8, 10: 39.2, 12: 33.6, 14: 29.4, 16: 26.2, 18: 23.6, 20: 21.3 }
        },
        "16": {
            "2": { 6: 38.9, 8: 31.2, 10: 26.1, 12: 22.4, 14: 19.6, 16: 17.5, 18: 15.7, 20: 14.2 },
            "3": { 6: 57.8, 8: 46.4, 10: 38.9, 12: 33.3, 14: 29.1, 16: 26.0, 18: 23.3, 20: 21.1 },
            "4": { 6: 76.2, 8: 61.2, 10: 51.2, 12: 43.9, 14: 38.4, 16: 34.3, 18: 30.8, 20: 27.8 }
        },
        "18": {
            "2": { 6: 50.1, 8: 40.2, 10: 33.7, 12: 28.9, 14: 25.2, 16: 22.5, 18: 20.2, 20: 18.3 },
            "3": { 6: 74.4, 8: 59.8, 10: 50.1, 12: 42.9, 14: 37.5, 16: 33.5, 18: 30.1, 20: 27.2 },
            "4": { 6: 98.1, 8: 78.8, 10: 66.0, 12: 56.6, 14: 49.5, 16: 44.2, 18: 39.7, 20: 35.9 }
        }
    },
    
    // Poutre de plancher (deux étages) - CV 40 lb/pi², CM 15 lb/pi²
    plancher_2_etages: {
        "9.5": {
            "2": { 6: 11.9, 8: 9.6, 10: 8.0, 12: 6.9, 14: 6.0, 16: 5.4, 18: 4.8, 20: 4.4 },
            "3": { 6: 17.7, 8: 14.2, 10: 11.9, 12: 10.2, 14: 8.9, 16: 8.0, 18: 7.2, 20: 6.5 },
            "4": { 6: 23.3, 8: 18.7, 10: 15.7, 12: 13.4, 14: 11.7, 16: 10.5, 18: 9.4, 20: 8.5 }
        },
        "11.875": {
            "2": { 6: 16.4, 8: 13.2, 10: 11.0, 12: 9.4, 14: 8.2, 16: 7.3, 18: 6.6, 20: 6.0 },
            "3": { 6: 24.4, 8: 19.6, 10: 16.4, 12: 14.0, 14: 12.3, 16: 11.0, 18: 9.9, 20: 8.9 },
            "4": { 6: 32.1, 8: 25.8, 10: 21.6, 12: 18.5, 14: 16.2, 16: 14.5, 18: 13.0, 20: 11.8 }
        },
        "14": {
            "2": { 6: 22.6, 8: 18.1, 10: 15.2, 12: 13.0, 14: 11.4, 16: 10.1, 18: 9.1, 20: 8.3 },
            "3": { 6: 33.6, 8: 27.0, 10: 22.6, 12: 19.4, 14: 16.9, 16: 15.1, 18: 13.6, 20: 12.3 },
            "4": { 6: 44.2, 8: 35.5, 10: 29.7, 12: 25.5, 14: 22.3, 16: 19.9, 18: 17.9, 20: 16.2 }
        },
        "16": {
            "2": { 6: 29.7, 8: 23.9, 10: 20.0, 12: 17.1, 14: 15.0, 16: 13.4, 18: 12.0, 20: 10.9 },
            "3": { 6: 44.2, 8: 35.5, 10: 29.7, 12: 25.5, 14: 22.3, 16: 19.9, 18: 17.9, 20: 16.2 },
            "4": { 6: 58.2, 8: 46.8, 10: 39.2, 12: 33.6, 14: 29.4, 16: 26.2, 18: 23.6, 20: 21.3 }
        },
        "18": {
            "2": { 6: 38.9, 8: 31.2, 10: 26.1, 12: 22.4, 14: 19.6, 16: 17.5, 18: 15.7, 20: 14.2 },
            "3": { 6: 57.8, 8: 46.4, 10: 38.9, 12: 33.3, 14: 29.1, 16: 26.0, 18: 23.3, 20: 21.1 },
            "4": { 6: 76.2, 8: 61.2, 10: 51.2, 12: 43.9, 14: 38.4, 16: 34.3, 18: 30.8, 20: 27.8 }
        }
    }
};

// Variables globales
let resultatsCalcul = {
    wv: 0, wm: 0, wt: 0, wf: 0,
    wvEtage: 0, wmEtage: 0, wvRC: 0, wmRC: 0
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
        const elem = document.getElementById(id);
        if (elem) elem.addEventListener('input', calculerCharges);
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

    // Logique de calcul générique selon les exemples CECOBOIS
    if (etages === '2') {
        // Deux étages - WV = CV × LT, WM = CM × LT pour chaque niveau
        const ltEtage = parseFloat(document.getElementById('ltEtage').value) || 0;
        const ltRC = parseFloat(document.getElementById('ltRC').value) || 0;
        
        wvRC = cv * ltRC;          // WV1 = CV × LT (RC)
        wvEtage = cv * ltEtage;    // WV2 = CV × LT (Étage)
        wv = wvRC + wvEtage;       // WV = WV1 + WV2
        
        wmRC = cm * ltRC;          // WM1 = CM × LT (RC)
        wmEtage = cm * ltEtage;    // WM2 = CM × LT (Étage)
        wm = wmRC + wmEtage;       // WM = WM1 + WM2
    } else {
        // Un étage
        const ltUnique = parseFloat(document.getElementById('ltUnique').value) || 0;
        wv = cv * ltUnique;
        wm = cm * ltUnique;
        wvEtage = wv;
        wmEtage = wm;
    }

    // Calculs selon formules CECOBOIS
    const wt = wv + wm;                    // WT = WV + WM
    const wf = wv * 1.5 + wm * 1.25;      // WF = WV × 1.5 + WM × 1.25

    // Stockage des résultats
    resultatsCalcul = { wv, wm, wt, wf, wvEtage, wmEtage, wvRC, wmRC };

    // Affichage
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
        afficherResultat('Poutrelles CECOBOIS', 'Les poutrelles ajourées nécessitent une analyse spécialisée.', false);
    }
}

function calculerVersaLam() {
    const typeUsage = document.getElementById('typeUsage').value;
    const portee = parseFloat(document.getElementById('portee').value) || 0;
    const inches = parseInt(document.getElementById('porteeInches').value) || 0;
    const porteeTotal = portee + (inches / 12);
    const optimiser = document.getElementById('optimiser').value;
    const etages = document.getElementById('etages').value;

    if (porteeTotal <= 0 || !resultatsCalcul.wf) {
        afficherResultat('Données incomplètes', 'Veuillez remplir tous les champs requis.', false);
        return;
    }

    // Déterminer la largeur tributaire selon la logique CECOBOIS
    let largeurTributaireEffective;
    if (etages === '2') {
        const ltEtage = parseFloat(document.getElementById('ltEtage').value) || 0;
        const ltRC = parseFloat(document.getElementById('ltRC').value) || 0;
        // Pour les tables, utiliser la plus grande largeur tributaire
        largeurTributaireEffective = Math.max(ltEtage, ltRC);
    } else {
        largeurTributaireEffective = parseFloat(document.getElementById('ltUnique').value) || 0;
    }

    // Sélection de la table
    let tableData = null;
    switch(typeUsage) {
        case 'plancher-1-etage':
            tableData = TABLES_VERSALAM.plancher_1_etage;
            break;
        case 'plancher-2-etages':
            tableData = TABLES_VERSALAM.plancher_2_etages;
            break;
        default:
            afficherResultat('Type non supporté', 'Seules les poutres de plancher sont disponibles.', false);
            return;
    }

    // Recherche de solutions par interpolation
    const solutions = trouverSolutionsInterpolees(tableData, largeurTributaireEffective, porteeTotal, optimiser);
    
    if (solutions.length > 0) {
        const meilleure = solutions[0];
        afficherResultat(
            `${meilleure.plis} plis de 1¾" × ${meilleure.hauteur}" hauteur`,
            `Portée supportée: ${meilleure.porteeMax.toFixed(1)} pi. - Portée demandée: ${porteeTotal.toFixed(1)} pi.`,
            true
        );
        afficherSolutions(solutions);
    } else {
        afficherResultat(
            'Aucune solution trouvée',
            'Portée trop grande pour cette largeur tributaire. Réduisez la portée ou la largeur tributaire.',
            false
        );
    }
}

function trouverSolutionsInterpolees(tableData, largeurTributaire, porteeRequise, optimiser) {
    const solutions = [];
    const hauteurs = Object.keys(tableData);
    
    for (const hauteur of hauteurs) {
        for (const plis of ['2', '3', '4']) {
            if (!tableData[hauteur] || !tableData[hauteur][plis]) continue;
            
            // Interpolation de la portée maximale pour cette largeur tributaire
            const porteeMax = interpolerPortee(tableData[hauteur][plis], largeurTributaire);
            
            if (porteeMax && porteeMax >= porteeRequise) {
                solutions.push({
                    hauteur: hauteur,
                    plis: plis,
                    porteeMax: porteeMax,
                    porteeRequise: porteeRequise,
                    marge: porteeMax - porteeRequise,
                    ratio: porteeMax / porteeRequise,
                    largeurTrib: largeurTributaire
                });
            }
        }
    }

    // Tri selon l'optimisation
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
        solutions.sort((a, b) => parseFloat(a.hauteur) - parseFloat(b.hauteur));
    }

    return solutions;
}

function interpolerPortee(donneesHauteurPlis, largeurTributaire) {
    const largeurs = Object.keys(donneesHauteurPlis).map(Number).sort((a, b) => a - b);
    
    // Si largeur exacte trouvée
    for (const largeur of largeurs) {
        if (Math.abs(largeurTributaire - largeur) < 0.01) {
            return donneesHauteurPlis[largeur];
        }
    }
    
    // Interpolation linéaire
    for (let i = 0; i < largeurs.length - 1; i++) {
        const l1 = largeurs[i];
        const l2 = largeurs[i + 1];
        
        if (largeurTributaire >= l1 && largeurTributaire <= l2) {
            const p1 = donneesHauteurPlis[l1];
            const p2 = donneesHauteurPlis[l2];
            const ratio = (largeurTributaire - l1) / (l2 - l1);
            return p1 + (p2 - p1) * ratio;
        }
    }
    
    // Extrapolation
    if (largeurTributaire < largeurs[0]) {
        return donneesHauteurPlis[largeurs[0]]; // Conservative
    } else if (largeurTributaire > largeurs[largeurs.length - 1]) {
        return null; // Trop grand
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
                Portée max: ${solution.porteeMax.toFixed(1)} pi.<br>
                Marge: ${solution.marge.toFixed(1)} pi. (${(((solution.ratio - 1) * 100)).toFixed(1)}%)<br>
                <span class="text-xs">LT: ${solution.largeurTrib.toFixed(1)} pi.</span>
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
