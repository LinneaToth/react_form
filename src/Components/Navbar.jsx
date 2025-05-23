import logo from "../assets/img/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src={logo}
            alt=""
            width="30"
            height="30"
            class="d-inline-block align-text-top me-2 me-md-5 ms-3"
          />
          <h1 class="d-inline-block align-text-center display-4">
            Buck Banking - Dreams come true
          </h1>
        </a>
      </div>
    </nav>
  );
}
