import { Usercard } from "./Usercard";
import { Wrapper } from "./Wrapper";
export default function App(){

const users = [
  {name : "Virat Kolhi",
    role : "Batsman",
    country : "India" 
  },
  {
    name : "Dhoni",
    role : "Wk-BatsMan",
    country : "India"
  }
];

  return (<div>
    <h1>User Dashboard</h1>
    <Wrapper title="User List">
      {
      users.map((data)=>(<Usercard data={data}/>))
      }
    </Wrapper>

    

  </div>);
}

