import axios from 'axios';

const API_URL = 'http://localhost:3000/api/robots';

const getAllRobots = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getRobotById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

const createRobot = async (robotData) => {
  const response = await axios.post(API_URL, robotData);
  return response.data;
};

const updateRobot = async (id, updatedRobotData) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedRobotData);
  return response.data;
};

const deleteRobot = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

export { getAllRobots, getRobotById, createRobot, updateRobot, deleteRobot };
