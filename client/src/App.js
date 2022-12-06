import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";

import "./App.css";
import { Login } from "./components/features/login/Login";

import Home from "./components/pages/Home/Home";
import { dataContext } from "./context/dataContext";


function App() {
  const { userData } = useContext(dataContext);

  const token=localStorage.get("token")
 
  console.log(userData)

  return <div className="App">{token?(<Home /> ):( <Login />)}</div>;
}

export default App;
