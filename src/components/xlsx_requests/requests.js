import React, { useEffect, useState } from "react";
import jsonData from './data.json';

export default function Requests() {
    // Exemple de données d'entrée
    const exampleJson = [
        { value: "Germany", label: "Country" }
    ];

    // État pour stocker les données filtrées
    const [data, setData] = useState([]);

    useEffect(() => {
        // Filtrer les données en fonction de l'exemple JSON
        const filteredData = jsonData.filter(item => {
            // Vérifier chaque élément de l'exemple JSON
            for (let i = 0; i < exampleJson.length; i++) {
                const input = exampleJson[i];
                // Vérifier si la propriété correspondante existe dans les données JSON
                if (item[input.label] !== input.value) {
                    return false; // Si une correspondance n'est pas trouvée, retourner false
                }
            }
            return true; // Si toutes les correspondances sont trouvées, retourner true
        });
        // Mettre à jour les données filtrées dans l'état
        setData(filteredData);
    }, [exampleJson]);

    console.log(data);

    return (
        <div>
            <h1>Volcanoes</h1>
            {/* Afficher les données filtrées ici */}
        </div>
    );
}
