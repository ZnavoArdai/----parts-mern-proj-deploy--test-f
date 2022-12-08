import { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { dataContext } from '../../../context/dataContext';
import Cookie from "js-cookie"
function LoginFrom() {

    const [formName,setFormName]=useState({name:"",email:"",password:""})

    const {userData,setUserData}=useContext(dataContext)
    const hendelform=(e)=>{
        setFormName({...formName,[e.target.name]:e.target.value})
        console.log(formName)
    }

    const submitForm= async(e)=>{
    e.preventDefault()
        const user = await fetch('https://parts-backend-deploy.onrender.com/user/login', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name:formName.name,
                email:formName.email,
                password:formName.password,
            })
          })

          const userLog= await user.json()
          console.log(userLog)
          setUserData(userLog)
          
          Cookie.set("Token",JSON.stringify(userData.user._id) ,{
            expires:1,
          })
    }


   
    
  return (
    <Form onSubmit={(e)=>submitForm(e)}>

<Form.Group className="mb-3" controlId="name">
        <Form.Label>name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter name" onChange={(e)=>hendelform(e)}/>
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email'  placeholder="Enter email" onChange={(e)=>hendelform(e)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" name='password'  placeholder="Password" onChange={(e)=>hendelform(e)}  />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default LoginFrom;