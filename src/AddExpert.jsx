import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddExpert = () => {
    const [data , setData] = useState()
    const [show , setShow] = useState(false)
    const naviagte = useNavigate()
    
    const handleChange = (e) => {
        setData({...data , [e.target.name] : e.target.value})
    }
    const handleAdd = () => {
        const payload = {
            id: Date.now(),
            nom_complet: "Martin Pierre",
            événements: [
                {
                    théme: data.theme,
                    date_debut: data.datedeb,
                    date_fin: data.datefin,
                    description: "Introduction à l'intelligence artificielle",
                    cout_journalier: data.cout,
                    durée: 10
                },
                {
                    théme: "Big Data",
                    date_debut: "2024-06-01",
                    date_fin: "2024-06-10",
                    description: "Analyse et traitement des grandes données",
                    cout_journalier: 900,
                    durée: 9
                }
            ]
        };
        axios.post('http://localhost:3000/experts', payload)
            .then(response => {
                setShow(true);
                navigate('/')
            })
            .catch(error => {
                console.error("There was an error posting the data!", error);
            });
    };
return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md min-h-screen">
        <div >
            <h2 className="text-xl font-bold mb-4">Formulaire de l’événément</h2>
            <div className="mb-4"></div>
            <label htmlFor="theme" className="block text-sm font-medium text-gray-700">Théme :</label>
            <input type="text" name="theme" id="theme" onChange={(e) => handleChange(e)} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="mb-4">
            <label htmlFor="datedeb" className="block text-sm font-medium text-gray-700">Date de début :</label>
            <input type="date" name="datedeb" id="datedeb" onChange={(e) => handleChange(e)} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="mb-4">
            <label htmlFor="datefin" className="block text-sm font-medium text-gray-700">Date de fin :</label>
            <input type="date" name="datefin" id="datefin" onChange={(e) => handleChange(e)} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="mb-4">
            <label htmlFor="cout" className="block text-sm font-medium text-gray-700">Cout :</label>
            <input type="number" name="cout" id="cout" onChange={(e) => handleChange(e)} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="mb-4">
            <label htmlFor="expert" className="block text-sm font-medium text-gray-700">Expert :</label>
            <input type="text" name="expert" id="expert" onChange={(e) => handleChange(e)} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <button onClick={handleAdd} className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Confirmer</button>

       
    {show && (
        <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Résumé de l'événement</h3>
            <p><strong>Thème :</strong> {data.theme}</p>
            <p><strong>Date de début :</strong> {data.datedeb}</p>
            <p><strong>Date de fin :</strong> {data.datefin}</p>
            <p><strong>Coût journalier :</strong> {data.cout} DH</p>
            <p><strong>Expert :</strong> {data.expert}</p>
            <p><strong>Durée :</strong> 4 jours</p>
            <p><strong>Coût total :</strong> {data.cout * 4} DH</p>
        </div>
    )}
    </div>
   

)
}

export default AddExpert