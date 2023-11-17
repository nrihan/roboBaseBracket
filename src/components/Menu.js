// Menu.js
import React from 'react';

const Menu = ({ setScreen }) => {
  return (
    <nav>
      <button onClick={() => setScreen('create')}>Create Competition</button>
      <button onClick={() => setScreen('list')}>Competition List</button>
    </nav>
  );
};

export default Menu;
