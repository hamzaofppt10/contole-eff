import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [expert, setExpert] = useState(null);
  const [expertsData, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/experts")
      .then((data) =>{console.log(data),  setData(data.data)});
  }, []);
  
  useEffect(() => {
    console.log(expert);
  }, [expert]);

  const calculateTotalCost = (events) => {
    return events.reduce(
      (total, event) => total + event.cout_journalier * event.durée,
      0
    );
  };

  return (
    <div className="p-4">
      <select
        name=""
        id=""
        onChange={(e) => setExpert(parseInt(e.target.value))}
        className="mb-4 p-2 border border-gray-300 rounded"
      >
        <option value="">Select an expert</option>
        {expertsData &&
          expertsData.map((el) => (
            <option key={el.id} value={el.id}>
              {el.nom_complet}
            </option>
          ))}
      </select>
      {!expert && <div>Select an expert</div>}
      {expert && (
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
            {expert &&
              expertsData
                .find((el) => el.id === expert)
                ?.événements.map((event, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b">{event.théme}</td>
                    <td className="py-2 px-4 border-b">{event.date_debut}</td>
                    <td className="py-2 px-4 border-b">{event.date_fin}</td>
                    <td className="py-2 px-4 border-b">{event.description}</td>
                    <td className="py-2 px-4 border-b">
                      {event.cout_journalier}DH
                    </td>
                    <td className="py-2 px-4 border-b">{event.durée}</td>
                    <td className="py-2 px-4 border-b">
                      {event.cout_journalier * event.durée}DH
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      )}
      {expert && (
        <div className="mt-4 text-lg font-semibold">
          Total des coûts des événements assurés est :{" "}
          {calculateTotalCost(
            expertsData.find((el) => el.id === expert).événements
          )}
          DH
        </div>
      )}
    </div>
  );
};

export default Home;
