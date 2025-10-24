import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import User from './User';
import Header from '../components/Header';
import "./Style.css"

export default function Index() {

  const [users, setUsers] = useState([])
  console.log(users);


  const baseUrl = 'https://dummyjson.com/users'
  const getData = async () => {
    const response = await fetch(baseUrl)
    const data = await response.json()
    //    console.log(data.users);
    setUsers(data.users)

  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <Header />

      {/* Data table */}
      <div className='container'>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>

            </tr>
          </thead>
          <tbody>
            {

              users.length > 0 ? users.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.firstName}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td><Link to={`/user/${item.id}`} element={<User />}>
                    <button className='btn btn-info p-2'>View</button></Link></td>

                </tr>

              ))


                : 'data not found'

            }
          </tbody>


        </Table>
      </div>
    </>
  )
}
