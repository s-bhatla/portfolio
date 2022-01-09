import "./styles/Navbar.css"
import { useState, useEffect } from "react";

function Navbar() {
  const [show, setShow] = useState("transy")
  const controlNavbar = () =>{
    if(window.scrollY<10){
      setShow("transy")
    }
    else if(window.scrollY>600){
      setShow(" ")
    }else{
      setShow("navinvis")
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])


  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${show}`}>
      <div class="container-fluid d-flex">
      <a class="navbar-brand ps-2 me-auto my-name" href="/">sidhArth bhAtlA</a>
        
        <div class="navbar-collapse collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link active nav-effect" aria-current="page" href="#landing">Home</a></li>
            <li class="nav-item"><a class="nav-link active nav-effect" aria-current="page" href="#about">About</a></li>
            <li class="nav-item"><a class="nav-link active nav-effect" aria-current="page" href="#skills">Skills</a></li>
            <li class="nav-item"><a class="nav-link active nav-effect" aria-current="page" href="#experience">Experience</a></li>
            <li class="nav-item"><a class="nav-link active nav-effect" aria-current="page" href="#projects">Projects</a></li>
            <li class="nav-item"><a class="nav-link active nav-effect contact-nav" aria-current="page" href="#contact">Contact Me</a></li>
          </ul>
        </div>
        <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
