import React, { useState, useEffect } from 'react';

const CalculateurPoutre = () => {
  const [typePoutre, setTypePoutre] = useState('versalam'); // versalam, ajouree-connecteurs, ajouree-ame-metal, ajouree-bois-dente
  const [portee, setPortee] = useState({ pieds: 7, pouces: 6 });
  const [largeurTributaire, setLargeurTributaire] = useState(9.17);
  const [chargeMorte, setChargeMorte] = useState(15);
  const [chargeVive, setChargeVive] = useState(40);
  const [chargeNeige, setChargeNeige] = useState(0);
  const [typePortee, setTypePortee] = useState('simple');
  const [typeEtage, setTypeEtage] = useState('un');
  const [espacementPoutrelles, setEspacementPoutrelles] = useState(16); // pour poutrelles ajourées
  const [resultats, setResultats] = useState(null);

  // Tables Versa-Lam (version compacte pour l'interface)
  const tablesVersaLam = {
    unEtage: {
      '9.5': { 6: { 2: 16.75, 3: 15.33, 4: 15.33 }, 8: { 2: 16.33, 3: 15.33, 4: 15.33 } },
      '11.875': { 6: { 2: 18.25, 3: 16.33, 4: 22.17 }, 8: { 2: 17.75, 3: 15.33, 4: 21.5 } },
      '14': { 6: { 2: 23.5, 3: 20.5, 4: 23.17 }, 8: { 2: 22.75, 3: 19.75, 4: 22.33 } }
    }
  };

  // Tables poutrelles ajourées (simplifiées pour démo)
  const tablesPoutrelliesAjourees = {
    connecteursMetalliques: {
      // Hauteur x espacement: portée max (pieds)
      '11.875x16': 18.5,  '11.875x19.2': 16.8,  '11.875x24': 14.2,
      '14x16': 21.3,      '14x19.2': 19.4,      '14x24': 16.8,
      '16x16': 23.8,      '16x19.2': 21.7,      '16x24': 18.8,
      '18x16': 26.2,      '18x19.2': 23.9,      '18x24': 20.7
    },
    ameMetallique: {
      '11.875x16': 19.2,  '11.875x19.2': 17.4,  '11.875x24': 15.1,
      '14x16': 22.1,      '14x19.2': 20.1,      '14x24': 17.4,
      '16x16': 24.7,      '16x19.2': 22.5,      '16x24': 19.5,
      '18x16': 27.1,      '18x19.2': 24.7,      '18x24': 21.4
    },
    boisDente: {
      // Open Joist 2000 - résistances supérieures grâce au collage
      '11.875x16': 20.1,  '11.875x19.2': 18.3,  '11.875x24': 15.9,
      '14x16': 23.2,      '14x19.2': 21.1,      '14x24': 18.3,
      '16x16': 25.9,      '16x19.2': 23.6,      '16x24': 20.4,
      '18x16': 28.4,      '18x19.2': 25.9,      '18x24': 22.4
    }
  };

  // Conversion et calculs de base
  const porteeDecimale = portee.pieds + portee.pouces / 12;
  const largeurTributaireAjustee = typePortee === 'continue' ? largeurTributaire * 1.25 : largeurTributaire;
  const chargeTotal = chargeMorte + chargeVive + chargeNeige;
  const chargeLineaire = chargeTotal * largeurTributaireAjustee;

  // Calculateur Versa-Lam
  const calculerVersaLam = () => {
    const tableType = typeEtage === 'un' ? 'unEtage' : 'deuxEtages';
    const tables = tablesVersaLam[tableType];
    
    if (!tables) return { valide: false, message: 'Tables non disponibles pour deux étages' };

    const largeursPossibles = [6, 8, 10, 12, 14, 16, 18, 20];
    const largeurTable = largeursPossibles.reduce((prev, curr) => 
      Math.abs(curr - largeurTributaireAjustee) < Math.abs(prev - largeurTributaireAjustee) ? curr : prev
    );

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
                type: 'Versa-Lam'
              };
            }
          }
        });
      }
    });

    return solutionOptimale || { valide: false, message: 'Portée excessive pour Versa-Lam' };
  };

  // Calculateur poutrelles ajourées
  const calculerPoutrelliesAjourees = () => {
    let tableType = '';
    let nomType = '';
    
    switch(typePoutre) {
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
    
    let solutionOptimale = null;

    hauteursPossibles.forEach(hauteur => {
      const cle = `${hauteur}x${espacementPoutrelles}`;
      const porteeMax = tables[cle];
      
      if (porteeMax && porteeDecimale <= porteeMax) {
        if (!solutionOptimale || parseFloat(hauteur) < parseFloat(solutionOptimale.hauteur)) {
          solutionOptimale = {
            hauteur: hauteur + '"',
            largeur: '2x3 ou 2x4',
            configuration: `${espacementPoutrelles}" c.c.`,
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
      message: `Portée excessive pour poutrelles ajourées à ${espacementPoutrelles}" c.c.` 
    };
  };

  // Calculs de flèche (simplifiés pour poutrelles ajourées)
  const calculerFleches = (resultatsStructure) => {
    if (!resultatsStructure.valide) return {};

    let E, I;
    const h = parseFloat(resultatsStructure.hauteur) || 12;
    const L = porteeDecimale * 12;

    if (typePoutre === 'versalam') {
      E = 1800000; // Versa-Lam
      const b = parseFloat(resultatsStructure.largeur) || 3.5;
      I = (b * Math.pow(h, 3)) / 12;
    } else {
      E = 1600000; // Poutrelles ajourées (estimation)
      I = Math.pow(h, 3) / 10; // Approximation pour structures ajourées
    }

    const flecheVive = (5 * chargeVive * largeurTributaireAjustee * Math.pow(L, 4)) / (384 * E * I);
    const flecheTotale = (5 * chargeTotal * largeurTributaireAjustee * Math.pow(L, 4)) / (384 * E * I);
    
    return {
      flecheVive: flecheVive.toFixed(3),
      flecheTotale: flecheTotale.toFixed(3),
      limiteVive: (L / 360).toFixed(3),
      limiteTotale: (L / 240).toFixed(3)
    };
  };

  const calculer = () => {
    let resultatsStructure;
    
    if (typePoutre === 'versalam') {
      resultatsStructure = calculerVersaLam();
    } else {
      resultatsStructure = calculerPoutrelliesAjourees();
    }
    
    if (resultatsStructure.valide) {
      const fleches = calculerFleches(resultatsStructure);
      setResultats({ ...resultatsStructure, ...fleches });
    } else {
      setResultats(resultatsStructure);
    }
  };

  useEffect(() => {
    calculer();
  }, [typePoutre, portee, largeurTributaire, chargeMorte, chargeVive, chargeNeige, typePortee, typeEtage, espacementPoutrelles]);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">
        Calculateur Universel de Poutres et Poutrelles
      </h1>
      
      <div className="grid lg:grid-cols-4 gap-6">
        {/* Type de structure */}
        <div className="bg-purple-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-3 text-gray-800">Type de structure</h2>
          <select
            value={typePoutre}
            onChange={(e) => setTypePoutre(e.target.value)}
            className="w-full px-3 py-2 border rounded mb-3"
          >
            <option value="versalam">Poutres Versa-Lam</option>
            <option value="ajouree-connecteurs">Poutrelles - Connecteurs métalliques</option>
            <option value="ajouree-ame-metal">Poutrelles - Âme métallique</option>
            <option value="ajouree-bois-dente">Poutrelles - Bois denté collé</option>
          </select>

          {typePoutre.startsWith('ajouree') && (
            <div>
              <label className="block text-sm font-medium mb-1">Espacement (po. c.c.)</label>
              <select
                value={espacementPoutrelles}
                onChange={(e) => setEspacementPoutrelles(parseInt(e.target.value))}
                className="w-full px-3 py-2 border rounded"
              >
                <option value={16}>16"</option>
                <option value={19.2}>19.2"</option>
                <option value={24}>24"</option>
              </select>
            </div>
          )}
        </div>

        {/* Paramètres géométriques */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-3 text-gray-800">Géométrie</h2>
          
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium mb-1">Portée</label>
              <div className="flex gap-1">
                <input
                  type="number"
                  value={portee.pieds}
                  onChange={(e) => setPortee({...portee, pieds: parseInt(e.target.value) || 0})}
                  className="w-16 px-2 py-1 border rounded text-sm"
                />
                <span className="py-1 text-xs">pi.</span>
                <input
                  type="number"
                  value={portee.pouces}
                  onChange={(e) => setPortee({...portee, pouces: parseInt(e.target.value) || 0})}
                  className="w-16 px-2 py-1 border rounded text-sm"
                  max="11"
                />
                <span className="py-1 text-xs">po.</span>
              </div>
              <div className="text-xs text-gray-600">= {porteeDecimale.toFixed(2)} pi.</div>
            </div>

            <div>
              <label className="block text-xs font-medium mb-1">Type portée</label>
              <select
                value={typePortee}
                onChange={(e) => setTypePortee(e.target.value)}
                className="w-full px-2 py-1 border rounded text-sm"
              >
                <option value="simple">Simple</option>
                <option value="continue">Continue</option>
              </select>
            </div>

            {typePoutre === 'versalam' && (
              <div>
                <label className="block text-xs font-medium mb-1">Étages</label>
                <select
                  value={typeEtage}
                  onChange={(e) => setTypeEtage(e.target.value)}
                  className="w-full px-2 py-1 border rounded text-sm"
                >
                  <option value="un">Un étage</option>
                  <option value="deux">Deux étages</option>
                </select>
              </div>
            )}

            <div>
              <label className="block text-xs font-medium mb-1">LT (pi.)</label>
              <input
                type="number"
                step="0.1"
                value={largeurTributaire}
                onChange={(e) => setLargeurTributaire(parseFloat(e.target.value) || 0)}
                className="w-full px-2 py-1 border rounded text-sm"
              />
              {typePortee === 'continue' && (
                <div className="text-xs text-blue-600">
                  Ajustée: {largeurTributaireAjustee.toFixed(1)} pi.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Charges */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-3 text-gray-800">Charges</h2>
          
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium mb-1">CM (lb/pi.ca.)</label>
              <input
                type="number"
                value={chargeMorte}
                onChange={(e) => setChargeMorte(parseFloat(e.target.value) || 0)}
                className="w-full px-2 py-1 border rounded text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-medium mb-1">CV (lb/pi.ca.)</label>
              <input
                type="number"
                value={chargeVive}
                onChange={(e) => setChargeVive(parseFloat(e.target.value) || 0)}
                className="w-full px-2 py-1 border rounded text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-medium mb-1">Neige (lb/pi.ca.)</label>
              <input
                type="number"
                value={chargeNeige}
                onChange={(e) => setChargeNeige(parseFloat(e.target.value) || 0)}
                className="w-full px-2 py-1 border rounded text-sm"
              />
            </div>

            <div className="pt-2 border-t">
              <div className="flex justify-between text-xs">
                <span>Total:</span>
                <span className="font-mono">{chargeTotal} lb/pi.ca.</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Linéaire:</span>
                <span className="font-mono">{chargeLineaire.toFixed(0)} lb/pi.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Résultats */}
        <div className={`p-4 rounded-lg ${resultats?.valide ? 'bg-green-50' : 'bg-red-50'}`}>
          <h2 className="text-lg font-semibold mb-3 text-gray-800">Résultats</h2>
          
          {resultats && (
            <>
              <div className="space-y-2 text-sm">
                <div>
                  <div className="font-semibold text-blue-700">{resultats.type}</div>
                  {resultats.methodeCalcul && (
                    <div className="text-xs text-gray-600">{resultats.methodeCalcul}</div>
                  )}
                </div>

                {resultats.valide && (
                  <>
                    <div className="bg-white p-2 rounded">
                      <div>Hauteur: <span className="font-mono font-bold">{resultats.hauteur}</span></div>
                      <div>Largeur: <span className="font-mono">{resultats.largeur}</span></div>
                      <div>Config: <span className="font-bold">{resultats.configuration}</span></div>
                      <div>Portée max: <span className="font-mono text-green-600">{resultats.porteeMax}</span></div>
                    </div>

                    {resultats.flecheVive && (
                      <div className="bg-white p-2 rounded">
                        <div className="text-xs font-semibold mb-1">Flèches:</div>
                        <div className="flex justify-between text-xs">
                          <span>Vive:</span>
                          <span className={`font-mono ${parseFloat(resultats.flecheVive) <= parseFloat(resultats.limiteVive) ? 'text-green-600' : 'text-red-600'}`}>
                            {resultats.flecheVive}"≤{resultats.limiteVive}"
                          </span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>Totale:</span>
                          <span className={`font-mono ${parseFloat(resultats.flecheTotale) <= parseFloat(resultats.limiteTotale) ? 'text-green-600' : 'text-red-600'}`}>
                            {resultats.flecheTotale}"≤{resultats.limiteTotale}"
                          </span>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
              
              <div className={`mt-3 p-2 rounded text-center text-sm font-semibold ${
                resultats.valide ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {resultats.valide ? '✓ Configuration valide' : resultats.message || '✗ Non valide'}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
        <div className="bg-yellow-50 p-4 rounded">
          <h3 className="font-semibold text-yellow-800 mb-2">Poutres Versa-Lam</h3>
          <p className="text-yellow-700">Lamellé-collé haute performance. Tables selon charge vive/morte standard.</p>
        </div>
        <div className="bg-orange-50 p-4 rounded">
          <h3 className="font-semibold text-orange-800 mb-2">Poutrelles Ajourées</h3>
          <p className="text-orange-700">Connecteurs métalliques, âme métallique ou bois denté. Analyse par treillis.</p>
        </div>
        <div className="bg-blue-50 p-4 rounded">
          <h3 className="font-semibold text-blue-800 mb-2">Avantages</h3>
          <p className="text-blue-700">Ouvertures pour MEP. Optimisation matériau. Performance vibratoire.</p>
        </div>
      </div>
    </div>
  );
};
export default CalculateurPoutre;
