import React, { Fragment, useEffect, useState } from "react";
import { Footer, Header } from "../../components";
import {
  ProductContainer
} from "./styles";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Product = () => {
  document.title = "Shoe's - Produto";

  const urlParams = window.location.href;
  const id = urlParams.split("/");

  const [productData, setProductData] = useState(null);

  const handleSetCart = (sendToBuy = false) => {
    const storage = localStorage;
    let teste = [JSON.parse(storage.getItem('cart')) !== null && JSON.parse(storage.getItem('cart'))]
    teste.push({
      name: productData.prodcutName,
      imageUrl: productData.principalImageUrl,
      brand: productData.brand,
      price: productData.price
    });
    console.log(teste)
  };

  useEffect(() => {
    (async () => {
      try {
        const product = await fetch(
          "http://localhost:3004/products?id=" + id[id.length - 1]
        );
        const data = await product.json();
        setProductData(data[0]);
      } catch (error) {
        console.log(error.message);
        setProductData([]);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <Header />
      {productData && (
        <ProductContainer>
          <Carousel>
              {
                productData.imagesUrl.map(element => {
                  return (
                    <div key={element.colorName}>
                      <img src={element.url} alt={element.colorName} />
                    </div>
                  )
                })
              }
          </Carousel>
          <div>
            <h3>{productData.prodcutName}</h3>
            <p>Marca: {productData.brand}</p>
            <p>Preço: R$ {productData.price}</p>
            <p>
              Cores: {
                productData.colors.map((element, index) => `${element} ${index === productData.colors.length - 1 ? '' : ', '}`)
              }
            </p>
          </div>
          <button style={{marginBottom: 10}} onClick={handleSetCart}>Adicionar ao carrinho</button>
          <button onClick={() => handleSetCart(true)}>Comprar</button>
        </ProductContainer>
      )}
      <Footer />
    </Fragment>
  );
};

export default Product;
