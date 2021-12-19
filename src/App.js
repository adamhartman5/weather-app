import './App.css';
import { useState, useEffect } from 'react'
import axios from './axios';

function App() {
  const [city, setCity] = useState('')
  return (
    <div className="App">
      <input 
        placeholder='City name' 
        value={city} 
        onChange={event => setCity(event.target.value)} 
        />
      <button type="submit">Get Weather</button>
    </div>
  );
}

export default App;
