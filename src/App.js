import React, { useState } from 'react';
import CompetitionList from './components/CompetitionList';
import CompetitionForm from './components/CompetitionForm';
import Menu from './components/Menu';
import TournamentBracket from './components/TournamentBracket';

function App() {
  const handleAddCompetition = (newCompetition) => {
    // Atualize a lista de competições ou execute qualquer ação necessária
    console.log('Competition added:', newCompetition);
  };

  const [screen, setScreen] = useState('list');

  return (
    <div>
      <Menu setScreen={setScreen} />
      {screen === 'list' && <CompetitionList />}
      {screen === 'create' && <CompetitionForm onAddCompetition={handleAddCompetition} />}
      {screen === 'bracket' && <TournamentBracket />}
    </div>
  );
}

export default App;
