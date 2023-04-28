import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first: 'firstName',
    last: 'lastName'
  }
  const nameList = [
    {
      first: 'charlie',
      last: 'brown'
    },
    {
      first: 'snoopy',
      last: 'brown'
    },
    {
      first: 'lucy',
      last: 'van pelt',
    }
  ]
  return (
    <div className="App">
      <Greet messageCount={10} name="name" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
