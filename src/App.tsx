import React from 'react';
import { useState } from 'react';
import './App.css';
import Login from './Login';
import Main from './Main';
import { StoreOne } from './StoreSystem';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState<StoreOne | null>(null);

  return (
    <div className="App">
      {isLoggedIn ? <Main data={data} /> : <Login setData={setData} setIsLoggedIn={setIsLoggedIn} />}       
    </div>
  );
}

export default App;
