import { Link } from 'react-router-dom'
import '../assets/styles/Header.css'
import 'bootstrap/js/src/collapse.js'

export default function Header(){
  return(
    <header className="bg-primary navbar navbar-expand-md container-fluid header">
      <Link to={"/"}><h2 className="nav-logo-text">DSCatalog</h2></Link>
      <button
        className="navbar-toggle"
      >
        <span className="navbar-toggle-icon">teste</span>
      </button>
      <nav className="collapse navbar-collapse navbar-nav offset-md-2 main-menu">
        <Link to={"/"} className="active">HOME</Link>
        <Link to={"/catalogo"}>CATÁLOGO</Link>
        <Link to={"/admin"}>ADMIN</Link>
      </nav>
    </header>
  )
}