import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import "./User.css"
import Card from "../components/Card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function User() {

  const { id } = useParams()
  const [user, SetUser] = useState([])
  // console.log(user.bank);

  // const atm = user.bank

  // console.log(atm);
    // const atmnum= atm.cardNumber
    // console.log(atmnum);
    

  const baseurl = `https://dummyjson.com/users/${id}`

  const getData = async () => {
    const response = await fetch(baseurl)
    const data = await response.json()
    // console.log(data);
    SetUser(data)

  }

  useEffect(() => {
    getData()
  }, [])



  return (
    <>
      <Header />


    <Container>
      <Row className="m-5" id="row">
        <Col>
         <div id="cont" >

        <img
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}

        />


        <h2>
          {user.firstName} {user.maidenName} {user.lastName}
        </h2>



        <div id="info">
          <p><strong>Username : </strong> {user.username}</p>
          <p><strong>Age :</strong> {user.age}</p>

          <p><strong>Blood Group :</strong> {user.bloodGroup}</p>

          <p><strong>DOB :</strong> {user.birthDate}</p>

          <p><strong>Password : </strong> {user.password}</p>
          <p><strong>University : </strong> {user.university}</p>
          <p><strong>Phone : </strong> {user.phone}</p>

          <p><strong>Email : </strong> {user.email}</p>

        </div>
      </div>
        </Col>

        <Col>
         <div id='atm'>
        <Card atm={user} name={user.firstName}/>
      </div>
      </Col>
      </Row>
    </Container>


     



     
    </>





  )
}
