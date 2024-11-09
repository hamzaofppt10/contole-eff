import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Expert = () => {
    const [expertsData , setData] = useState()
    useEffect(() => {
        axios.get('http://localhost:3000/experts').then(data => setData(data.data))
    }, [])
  return (
    <ul className="p-4">
        
      {expertsData && expertsData.map(el => (
        <li key={el.id} className="mb-8">
          <h1 className="text-2xl font-bold mb-4">{el.nom_complet}</h1>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Thème</th>
                <th className="py-2 px-4 border-b">Date de début</th>
                <th className="py-2 px-4 border-b">Date de fin</th>
                <th className="py-2 px-4 border-b">Description</th>
                <th className="py-2 px-4 border-b">Coût Journalier</th>
                <th className="py-2 px-4 border-b">Durée (jours)</th>
                <th className="py-2 px-4 border-b">Coût Total</th>
              </tr>
            </thead>
            <tbody>
              {el.événements.map(ev => (
                <tr key={ev.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{ev.théme}</td>
                  <td className="py-2 px-4 border-b">{ev.date_debut}</td>
                  <td className="py-2 px-4 border-b">{ev.date_fin}</td>
                  <td className="py-2 px-4 border-b">{ev.description}</td>
                  <td className="py-2 px-4 border-b">{ev.cout_journalier}DH</td>
                  <td className="py-2 px-4 border-b">{ev.durée}</td>
                  <td className="py-2 px-4 border-b">{ev.cout_journalier * ev.durée}DH</td>
                </tr>
              ))}
            </tbody>
          </table>
        </li>
      ))}
    </ul>
  );
};

export default Expert;