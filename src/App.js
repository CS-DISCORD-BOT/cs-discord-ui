import { Switch, Redirect, Route } from 'react-router-dom'
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
  return (
    <div>
      <Sidebar guild={guild} />
      <Menubar channels={channels} />
      <Switch>
        <Redirect path="/" exact={true} to ="/dashboard"/>
        <Route path="/dashboard" exact={true} component={DashboardPage} />
      </Switch>
    </div>
  );
}

export default App;
