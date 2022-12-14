import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { GiHamburgerMenu } from "react-icons/gi";
import { dataContext } from '../../../context/dataContext';


function SideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {userData}=useContext(dataContext)

  const logoUT=()=>{
localStorage.removeItem("token")
window.location.reload()
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2" style={{background:"#032B45" ,border:"none",fontSize:20}}>
     Dashboard {"   "}<GiHamburgerMenu size={30}/> 
      </Button>
      <Offcanvas  show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>

          <Offcanvas.Title >Hello {" "+ userData.name} <Button onClick={logoUT} >Logout</Button> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='list'>

          
          <a>DASHBOARD</a>
          <a>STATISTIC</a>
          <a>CATEGORY</a>
          <a>DEPARTMENTS</a>
          <a>STORES</a>
          <a>ADMIN USERS</a>
          <a>USERS</a>
          <a>PRODUCTS</a>
          <a>SALES</a>
          <a>ORDERS</a>
          <a>INFORMATION</a>
          <a>SETTINGS</a>
          </div>










        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar
