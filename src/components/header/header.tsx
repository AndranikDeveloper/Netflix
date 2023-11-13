import netflixIcon from '../../assets/netflix.png';
import { useNavigate } from 'react-router-dom';
import HeaderNavbar from './header-navbar';
import {
  HeaderContentTag,
  HeaderIconTag,
  HeaderImageTag,
  HeaderTag,
} from '../styled-components/header-styles/header-styles';

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderTag>
      <div className='header-container'>
        <HeaderContentTag>
          <HeaderIconTag onClick={() => navigate('/')}>
            <HeaderImageTag
              className='header-image'
              src={netflixIcon}
              alt='Netflix Icon'
            />
          </HeaderIconTag>
          <HeaderNavbar />
        </HeaderContentTag>
      </div>
    </HeaderTag>
  );
};

export default Header;
