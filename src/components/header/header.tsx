import './style.css';
import netflixIcon from '../../assets/netflix.png';
import { useNavigate } from 'react-router-dom';
import HeaderNavbar from './header-navbar';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className='header'>
      <div className='header-container'>
        <div className='header-content'>
          <div className='header-icon' onClick={() => navigate('/')}>
            <img
              className='header-image'
              src={netflixIcon}
              alt='Netflix Icon'
            />
          </div>
          <HeaderNavbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
