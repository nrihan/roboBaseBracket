import React, { useState, useEffect } from 'react';
import { getAllCompetitions, deleteCompetition } from '../services/competitionService';

const CompetitionList = () => {
  const [competitions, setCompetitions] = useState([]);
  const [confirmDelete, setConfirmDelete] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllCompetitions();
      setCompetitions(data);
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    setConfirmDelete(id);
  };

  const handleConfirmDelete = async () => {
    await deleteCompetition(confirmDelete);
   
    setCompetitions((prevCompetitions) =>
      prevCompetitions.filter((competition) => competition.id !== confirmDelete)
    );
    
    setConfirmDelete(null);
  };

  const handleCancelDelete = () => {
    setConfirmDelete(null);
  };

  return (
    <div>
      <h2>Competition List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Description</th>
            <th>Registration Fee</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {competitions.map((competition) => (
            <tr key={competition.id}>
              <td>{competition.name}</td>
              <td>{competition.category}</td>
              <td>{competition.description}</td>
              <td>{competition.registration_fee}</td>
              <td>
                <button onClick={() => handleDelete(competition.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Janela de Confirmação */}
      {confirmDelete !== null && (
        <div className="confirmation-modal">
          <p>Confirm deletion?</p>
          <button onClick={handleConfirmDelete}>Yes</button>
          <button onClick={handleCancelDelete}>No</button>
        </div>
      )}
    </div>
  );
};

export default CompetitionList;
