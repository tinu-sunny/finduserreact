import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Index from '../pages/Index';
function Header() {
  return (
    <>
     {/* navbar */}
    <div>
         <Navbar className="bg-info w-100">
      <Container>
       <img src="https://cdn.pixabay.com/photo/2016/03/31/18/27/coding-1294373_1280.png" alt="no-img" width={'100px'} height={'100px'} />
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand >
           Find User
          </Navbar.Brand>
         
              <Navbar.Brand >
                 <Link to={'/'} element={<Index/>}>
           <FaHome />
           </Link>
            </Navbar.Brand>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>
  )
}

export default Header