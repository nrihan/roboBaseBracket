import axios from 'axios';

const API_URL = 'http://localhost:3000/api/competitions';

const getAllCompetitions = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getCompetitionById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

const createCompetition = async (competitionData) => {
  const response = await axios.post(API_URL, competitionData);
  return response.data;
};

const updateCompetition = async (id, updatedCompetitionData) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedCompetitionData);
  return response.data;
};

const deleteCompetition = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

export { getAllCompetitions, getCompetitionById, createCompetition, updateCompetition, deleteCompetition };
