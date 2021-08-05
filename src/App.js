import React, { useState} from 'react';

import { DashboardPage } from './pages/Dashboard';
import { Sidebar } from './components/Sidebar'
import { Menubar } from './components/Menu';

const guild = { id: 1, name: "test", avatar: "test" };
const channels = [
  { id: 1, name: "first course", type: "category" },
  { id: 2, name: "first channel", type: "text", parent: 1 },
  { id: 3, name: "second course", type: "category"},
  { id: 4, name: "second channel", type: "text", parent: 3 },
];

function App() {

  const [course, setCourse] = useState({})
  const [channel, setChannel] = useState({})
  
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
