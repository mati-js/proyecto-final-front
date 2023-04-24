import { Link } from 'react-router-dom';
import Login from '../../login/components/Login';
import '../styles/header.css';

const Header = () => {
  return (
    <div className='header'>
      <Link className='header-button' to='/'>Home</Link>
      <Link className='header-button' to='/contacto'>Contacto</Link>
      <Login />
    </div>
  )
}

export default Header;