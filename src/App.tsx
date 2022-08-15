import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import Button from "./components/Button";
import Conditional from "./components/Conditional";
import Container from "./components/Container";
import Box from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import InputComp from "./components/InputComp";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import { DomRef } from "./components/ref/DomRef";
import Couter from "./components/state/Couter";
import Status from "./components/Status";
import User from "./components/User";


function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }
  const names = [
    { first: "Nidhi", last: "Bhat" },
    { first: "Yukti", last: "Bhat" },
    { first: "Shreya", last: "Bhat" },
    { first: "Sonu", last: "Bhat" }
  ]
  return (
    <div className="App">
      {/* example for type string , number and boolean*/}
      <Greet name='Nidhi' messageCount={10} isLoggedIn={false} />

      {/* example for type object */}
      <Person name={personName} />


      {/* example for type array */}
      <PersonList names={names} />


      {/* fixed value validation */}
      <Status status="loading" />

      {/*  type childrem: string */}
      <Heading>This is heading</Heading>


      {/* example for type reactNode */}
      <Oscar>
        <Heading>This is another heading</Heading>
      </Oscar>


      {/* optional props */}
      <Conditional  name='Nidhi' isLoggedIn={true} />


      {/* handling event */}

      <Button handleClick={(event)=>{
        console.log(event)
      }}/>
      <InputComp value='' handleChange={(e)=>console.log(e.target.value)}/>


      {/* style props */}
      <Container styles={{border:"2px solid black", padding:"2px", margin:"2rem"}}/>

      {/*  useState Future Value */}
        <User/>

        {/* useReducer */}
        <Couter/>

        {/* useContext */}
        <ThemeContextProvider>
          <Box/>
        </ThemeContextProvider>

        {/* useRef */}
        <DomRef/>

        {/* Component prop */}
        <Private isLoggedIn={true} component={Profile}/>
    </div>
  );
}

export default App;
