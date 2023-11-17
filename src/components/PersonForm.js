import React, { useState } from 'react';
import { createCompetition } from '../services/competitionService';
import './styles.css'

const CompetitionForm = ({ onAddCompetition }) => {
  const [competitionData, setCompetitionData] = useState({
    name: '',
    category: '', // Agora, um campo de seleção
    description: '',
    registration_fee: 0.0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompetitionData({
      ...competitionData,
      [name]: value,
    });
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();
    const newCompetition = await createCompetition(competitionData);
    onAddCompetition(newCompetition);
    setCompetitionData({
      name: '',
      category: '',
      description: '',
      registration_fee: 0.0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={competitionData.name}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="category">Category:</label>
      <select
        id="category"
        name="category"
        value={competitionData.category}
        onChange={handleInputChange}
        required
      >
        <option value="" disabled>Select a category</option>
        <option value="Autonomous Sumo">Autonomous Sumo</option>
        <option value="Robocode">Robocode</option>
        <option value="Line Following">Line Following</option>
        {/* Adicione mais opções conforme necessário */}
      </select>

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={competitionData.description}
        onChange={handleInputChange}
        required
      ></textarea>

      <label htmlFor="registration_fee">Registration Fee:</label>
      <input
        type="number"
        id="registration_fee"
        name="registration_fee"
        value={competitionData.registration_fee}
        onChange={handleInputChange}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default CompetitionForm;
