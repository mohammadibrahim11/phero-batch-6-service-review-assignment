import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Header = () => {

 const {user,logOut} = useContext(AuthContext);

 const handleSignOut=()=>{
  logOut()
  .then(()=>{})
  .catch(error => console.error(error));
 }

    return (

<nav class="navbar container navbar-expand-lg bg-white">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Printress</Link >
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto  m-auto center mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/home">Home</Link >
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/services">Services</Link >
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/blog">Blog</Link >
        </li>
      </ul>
      <div class="d-flex gap-4">

        {
          user?.email ?  <div   onClick={handleSignOut} className='btn btn-primary'>log out</div> : <> <Link to='/login'> <button class="btn btn-outline-success" >log in</button></Link>

          <Link to='/signin'> <button class="btn btn-outline-success" >sign in</button></Link>
          </> 
        }
       
    

        
    </div>
  </div>
  </div>
</nav>
    );
};

export default Header;