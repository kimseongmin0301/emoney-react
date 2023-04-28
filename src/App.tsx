import './App.css';
import { Button } from './components/Button';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
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

  const number = 0;
  
  return (
    <div className="App">
      <Greet messageCount={10} name="name" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />

      <hr />
      {/* React Node 이용 */}
      <Oscar>
        <Heading>안녕하세요1</Heading>
        <Heading>안녕하세요2</Heading>
      </Oscar>
      
      <hr />
      {/* Button, Input 이벤트 */}
      <Button handleClick={(e, number) => console.log(e, number)}/>
      <Input value={""} handleChange={(e) => console.log(e)}/>

      <hr />
      


    </div>
  );
}

export default App;
