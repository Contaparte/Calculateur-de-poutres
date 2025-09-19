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

// Hauteurs disponibles
const HAUTEURS = ["7¼", "9¼", "9½", "11¼", "11⅞", "14", "16", "18"];

function updateLargeursEtages() {
    const nbEtages = parseInt(document.getElementById('nbEtages').value);
    const container = document.getElementById('largeursContainer');
    
    let html = '<label>Largeurs tributaires par étage</label>';
    
    for (let i = 1; i <= nbEtages; i++) {
        const etageLabel = `Étage ${i}`;
        const defaultValue = i === 1 ? '13.1' : '9.17';
        
        html += `
            <div class="largeur-etage">
                <div class="input-row">
                    <div class="input-field">
                        <label for="ltEtage${i}">L.T. ${etageLabel}</label>
                        <div class="dimension-input">
                            <input type="number" id="ltEtage${i}Pieds" step="0.1" min="0" value="${Math.floor(defaultValue)}">
                            <span>pi</span>
                            <input type="number" id="ltEtage${i}Pouces" step="0.1" min="0" max="11.9" value="${((defaultValue % 1) * 12).toFixed(1)}">
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
        alert('La portée doit être entre 6 et 30 pieds');
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

function selectionnerPoutre(index) {
    // Retirer la sélection précédente
    document.querySelectorAll('.poutre-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Ajouter la sélection à l'option cliquée
    document.querySelectorAll('.poutre-option')[index].classList.add('selected');
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser les largeurs tributaires
    updateLargeursEtages();
    
    // Calculer automatiquement lors des changements de valeurs
    const inputs = ['porteePieds', 'porteePouces', 'nbEtages', 'chargeMorte', 'chargeVive', 'chargeViveNeige', 'largeurMax', 'hauteurMax', 'optimisation'];
    inputs.forEach(inputId => {
        const element = document.getElementById(inputId);
        if (element) {
            element.addEventListener('input', function() {
                // Auto-calcul avec un délai pour éviter trop de calculs
                clearTimeout(this.timer);
                this.timer = setTimeout(calculerPoutre, 500);
            });
        }
    });
    
    // Ajouter des événements pour les largeurs tributaires dynamiques
    document.getElementById('largeursContainer').addEventListener('input', function(e) {
        if (e.target.tagName === 'INPUT') {
            clearTimeout(this.timer);
            this.timer = setTimeout(calculerPoutre, 500);
        }
    });
    
    // Calcul initial
    calculerPoutre();
});
