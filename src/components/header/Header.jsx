import { NavLink } from 'react-router';
import icon from '../../../public/images/header-icon.png'
import './header.css'

export default function Header() {
  return (
      <>
      <div className='header'>

        <div className='icon'><img src={icon} alt="Loading.." />
            <p className='header-text'>Moviegram</p>
        </div>

        <div className='nav'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/movies'}>Movies</NavLink>
        <NavLink to={'/about'}>About us</NavLink>
        <NavLink to={'/contact'}>Contact us</NavLink>

        </div>

     

      </div>
      </>
    );
}