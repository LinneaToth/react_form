import logo from "../assets/img/logo.png";

export default function Navbar() {
  return (
    <header className="navbar navbar-dark bg-dark ps-1">
      <div className="container-fluid">
        <div className="navbar-brand">
          <img
            src={logo}
            alt=""
            width="30"
            height="30"
            className="d-none d-sm-inline-block align-text-top me-2 me-md-5 ms-3"
          />
          <h1 className="d-inline-block align-text-center display-3">
            Buck Banking - Dreams come true
          </h1>
        </div>
      </div>
    </header>
  );
}
