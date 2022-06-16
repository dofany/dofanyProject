import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");

    fetch('/list')
      .then(response => response.text())
      .then(message => {
        setMessage(message);
      });



      fetch('/list2')
        .then(response => response.text())
        .then(message2 => {
          setMessage2(message2);
        });

  return (
    <div className="App">

        <div>첫번째 데이터 : {message}</div>
        <div>두번째 데이터 : {message2}</div>

    </div>
  );
}

export default App;
