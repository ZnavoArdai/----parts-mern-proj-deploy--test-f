import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useEffect } from "react";

import "./App.css";
import { Login } from "./components/features/login/Login";

import Home from "./components/pages/Home/Home";
import { dataContext } from "./context/dataContext";

function App() {
  const { userData } = useContext(dataContext);

  const myStorg = window.localStorage;

  if (userData._id) {
    myStorg.setItem("token", userData._id);
  }

  const userTokenEXIST = myStorg.getItem("token");

  console.log(userData);

  return <div className="App">{userTokenEXIST ? <Home /> : <Login />}</div>;
}

export default App;
