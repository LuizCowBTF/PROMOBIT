import { response } from "express";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light fixed-top">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">Innovvatio Filmes</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item `}>
              {/* ${current ? "active" : ""} */}
              <Link href="/">
                <a className="nav-link">
                  Principal
                  <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link href="/pesquisar">
                <a className="nav-link">Pesquisar</a>
                <input type="text" onChange={(event) => handleSearch(event)} />
              </Link>
            </li> */}
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link">Somos</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/services">
                <a className="nav-link">Serviços</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link">Contatos</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
