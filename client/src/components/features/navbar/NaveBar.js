import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SideBar from "../SideBar/SideBar";


function NavBar() {
  return (
    <Navbar
    style={{background:"#032B45"}}
      className="text-dark  d-flex justify-content-between"
    >
        <Navbar.Brand className="acc w-25  ">
          <Image src="logo192.png" width={60} />
        </Navbar.Brand>
        <Nav>

          
           <SideBar/>
          
        </Nav>
      
       
    </Navbar>
  );
}

export default NavBar;
