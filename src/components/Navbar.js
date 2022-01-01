import "./styles/Navbar.css"

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid d-flex">
      <a class="navbar-brand ps-2 me-auto" href="/">Sidharth Bhatla</a>
        
        <div class="navbar-collapse collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="/">Home</a></li>
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="#about">About</a></li>
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="#skills">Skills</a></li>
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="#experience">Experience</a></li>
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="#projects">Projects</a></li>
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="#contact">Contact Me</a></li>
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
