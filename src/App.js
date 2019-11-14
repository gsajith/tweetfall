import React, { useState, useRef } from 'react';
import './App.scss';
import subscribeToTimer from './api';

function App() {
  const [timestamp, setTimestamp] = useState('no time yet');

  const timerRef = useRef(null);
  if (timerRef.current === null) {
    subscribeToTimer((err, ts) => setTimestamp(ts));
    timerRef.current = 'subscribed';
  }

  return (
    <div className="App">
      <p className="App-intro">
      This is the timer value:
        {' '}
        {timestamp}
      </p>
    </div>
  );
}

export default App;
