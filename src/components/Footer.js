import "./styles/footer.css";

function Footer() {
  return (
    <footer>
      <div className="d-flex flex-column justify-content-center footer">
        <div>
          <h3>sidhArth bhAtlA</h3>
        </div>
        <div>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sidharth-bhatla-811154202/">
            <i class="fab fa-linkedin p-3"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/s-bhatla">
            <i class="fab fa-github p-3"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/14859624/sidharth-bhatla">
            <i class="fab fa-stack-overflow p-3"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="mailto:sidroot02@gmail.com">
            <i class="fas fa-envelope p-3"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.hackerrank.com/sidroot02">
            <i class="fab fa-hackerrank p-3"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
