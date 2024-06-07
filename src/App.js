import React, { useState } from 'react';
import StarRating from './components/StarRating';
import Dialog from './components/Dialog';
import './styles/index.css';
import './styles/reset.css';

function App() {
  const [isDialogOpen, setDialogOpen] = useState(false);

  return (
    <main className="app">
      <StarRating />
      {isDialogOpen && 
        <Dialog 
          title="Hello and welcome to the Rating System!" 
          content="Please rate our service on a scale of 1 to 5 stars"  
          onClose={() => setDialogOpen(false)} 
        />
      }
      <button className="dialog-button" onClick={() => setDialogOpen(true)}>Open Dialog</button>
    </main>
  );
};

export default App;
