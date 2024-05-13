import React, { useEffect, useState} from "react";


export default function Requests() {

    const exampleJson = {"Country": "Italy", "Primary Volcano Type": "Stratovolcano(es)"}
    

    const json = exampleJson; // modifier pour la lecture de l'input

    // on met une variable qui va stocker les données en se mettant à jour en fonction du menu 
    const [data, setData] = useState([]);

    useEffect(() => {
         // Fonction pour récupérer les données du fichier Excel et effectuer la recherche
         const fetchData = async () => {
            try {
                const volcanoesData = await fetch('./data.json');
                if (!volcanoesData.ok) {
                    throw new Error('Failed to fetch data');
                }
    
                const dataVolcanoes = await volcanoesData.json();

                // Filtrage des données
                // const filteredData = dataVolcanoes.filter((row) => {
                //     return Object.entries(json).every(([key, value]) => {
                //         return row[key] === value;
                //     });
                // });

                // Mise à jour de l'état avec les données filtrées
                setData(dataVolcanoes);
                console.log(dataVolcanoes);

            } catch (error) {
                console.error("Erreur de lecture du fichier", error);
            }
        };
        // Appel de la fonction fetchData
        fetchData();
        return () => {
            // Cleanup function if necessary
        };
    }, []);

    // on affiche les données filtrées
    return (
        <div>
            <h1>Volcanoes</h1>
            <table>
                <thead>
                    <tr>
                        <th>Volcano Name</th>
                        <th>Country</th>
                        <th>Primary Volcano Type</th>
                    </tr>
                </thead>
            </table>
        </div>
    );
}
