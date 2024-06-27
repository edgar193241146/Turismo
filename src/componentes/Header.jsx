import { FaCalendarAlt } from "react-icons/fa"
import { IoMdClose } from "react-icons/io"
import { IoMenu } from "react-icons/io5"
import { MdChurch, MdHomeFilled, MdNaturePeople, MdPhone } from "react-icons/md"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="header">
      <Link to='/' className="logo"><img src="/img/Logo.png" alt='' /></Link>
      <input type='checkbox' id="check" />
      <label htmlFor="check" className="icons">
        <IoMenu id="menu-icon" />
        <IoMdClose id="close-icon" />
      </label>
      <nav className="nav-bar">
        <Link to='/' style={{ "--i": 0 }}><MdHomeFilled className="icon" />Inicio</Link>
        <Link to='/pueblos-magicos' style={{ "--i": 1 }} className="active"><MdChurch className="icon" />Pueblos Mágicos</Link>
        <Link to='/eventos-internacionales' style={{ "--i": 2 }}><FaCalendarAlt className="icon" />Eventos Internacionales</Link>
        <Link to='/ecoturismo' style={{ "--i": 3 }}><MdNaturePeople className="icon" />Ecoturismo</Link>
        <Link to='/contacto' style={{ "--i": 4 }}><MdPhone className="icon" />Contacto</Link>
      </nav>
    </header>
  )
}

export default Header;