// TournamentBracket.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TournamentBracket = () => {
  const [initialMatches, setInitialMatches] = useState([]);

  useEffect(() => {
    const fetchInitialMatches = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/tournament/initial-matches');
        setInitialMatches(response.data);
      } catch (error) {
        console.error('Erro ao buscar lutas iniciais:', error.message);
      }
    };

    fetchInitialMatches();
  }, []);

  return (
    <div>
      <h2>Torneio de Sumô - Chave Inicial</h2>
      <ul>
        {initialMatches.map((match, index) => (
          <li key={index}>
            {`${match.robot1} vs ${match.robot2}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TournamentBracket;
