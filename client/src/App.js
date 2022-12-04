import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Headrs from "./components/features/Header/Headrs";
import NavBar from "./components/features/navbar/NaveBar";
import BarChart from "./components/pages/lineChart/LineChart";
import TableAndCircles from "./components/pages/tableAndCircles/TableAndCircles";
import DataProvider from "./context/dataContext";

function App() {
  return (
    <div className="App">

      <DataProvider>
      <NavBar />
      <Headrs/>
      <BarChart/>
      <TableAndCircles/>
      </DataProvider>
   
    </div>
  );
}

export default App;
