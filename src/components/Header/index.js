import React from 'react';
import { HeaderContainer, HeaderIconsContainer, Title,IconButton} from './styles';

import showMoreIcon from '../../assets/icons/show-more.svg'
import cart from '../../assets/icons/cart.svg'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderIconsContainer>
        <div/>
        <Title>
          <Link style={{color: '#000', textDecoration: '#FFFF'}} to="/">
            Shoe's
          </Link>
        </Title>
        <IconButton type='button'>
          <img src={cart} alt='Show More Icon' />
        </IconButton>
      </HeaderIconsContainer>
    </HeaderContainer>
  )
}

export default Header
