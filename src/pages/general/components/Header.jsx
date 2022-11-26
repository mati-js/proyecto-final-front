import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <div className='header'>
      <Link className='header-button' to='/'>Home</Link>
      <Link className='header-button' to='/contacto'>Contacto</Link>
    </div>
  )
}

export default Header;