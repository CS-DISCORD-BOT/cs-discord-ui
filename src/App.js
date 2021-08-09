import React, { useState, useEffect } from 'react';
import { DashboardPage } from './pages/Dashboard';
import { Sidebar } from './components/Sidebar'
import { Menubar } from './components/Menu';

const axios = require("axios");

const guild = { id: 1, name: "test", avatar: "test" };

function App() {

  const [course, setCourse] = useState({});
  const [channel, setChannel] = useState({});
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/channels")
      .then(({ data }) => {
        setChannels(data);
      })
      .catch(console.error);
  }, [])

  return (
    <div>
      <Sidebar guild={guild}/>
      <Menubar 
        channels={channels}
        course={course}
        setCourse={setCourse}
        channel={channel}
        setChannel={setChannel}
      />
      <DashboardPage channel={channel}/>
    </div>
  );
}

export default App;
