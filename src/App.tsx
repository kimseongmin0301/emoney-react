import './App.css';
import { Button } from './components/Button';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { LoggedIn } from './components/LoggedIn';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { User } from './components/User';
import { UserContextProvider } from './components/context/UserContext';
import { Test } from './components/state/Test';

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

const person = {
  first: "nick",
  last: "name",
}

const number = 0;
  
  return (
    <div className="App">
      Greet Person PersonList
      <Greet messageCount={10} name="name" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />

      <hr />
      {/* React Node 이용 */}
      Oscar Heading
      <Oscar>
        <Heading>안녕하세요1</Heading>
        <Heading>안녕하세요2</Heading>
      </Oscar>
      
      <hr />
      {/* Button, Input 이벤트 */}
      Button Input
      <Button handleClick={(e, number) => console.log(e, number)}/>
      <Input value={""} handleChange={(e) => console.log(e)}/>

      {/* 상태값에 따른 값변경 */}
      {/* 파라미터 넣어줘야 함 */}
      <hr />
      Status
      <Status status='loading'/>
      <Status status='success'/>
      <Status status='error'/>
      <hr />
      {/* useState 데이터값변경 */}
      User, LoggedIn
      <User />
      <hr />
      <LoggedIn />

      {/*  */}
      <hr />
      <hr />
      <UserContextProvider>
        <User />
        <Test />
      </UserContextProvider>


    </div>
  );
}

export default App;
