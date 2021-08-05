import React from 'react';
import {
  ProductContainer,
  BadgeContainer,
  ProductCardDetails
} from './styles'

const Product = ({ image, title, price, models, keychield, brand }) => {
  return (
    <ProductContainer key={keychield}>
      <figure>
        <img src={image} alt='Product' />
      </figure>
      <BadgeContainer>
        R$ {price}
      </BadgeContainer>
      <ProductCardDetails>
        <p>{title}</p>
        <p>{brand}</p>
        <p>{models.length} cores disponíveis</p>
      </ProductCardDetails>
    </ProductContainer>
  )
}

export default Product
