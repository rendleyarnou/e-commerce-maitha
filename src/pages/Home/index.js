import React, { Fragment, useEffect, useState } from "react";
import { MainContainer, ProductsContainer } from "./styles";
import { Header, Product, Footer } from "../../components/index";

import { Link } from "react-router-dom";

const Home = () => {
  document.title = "Shoe's - Catálogo";

  const [productCatalogItens, setProductCatalogItens] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const products = await fetch('http://localhost:3004/products');
        const data = await products.json();
        console.log(data)
        setProductCatalogItens(data);
      } catch (error) {
        setProductCatalogItens([]);
      }
    })()
  }, []);

  return (
    <Fragment>
      <Header />
      <MainContainer>
        <ProductsContainer>
          {productCatalogItens.length &&
            productCatalogItens.map((element) => {
              return (
                <div key={element.id}>
                  <Link
                    to={`/product/${element.id}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      color: "#000",
                      textDecoration: "none",
                    }}
                  >
                    <Product
                      keychield={element.prodcutName}
                      image={element.principalImageUrl}
                      title={element.prodcutName}
                      price={element.price}
                      models={element.colors}
                      brand={element.brand}
                    />
                  </Link>
                </div>
              );
            })}
        </ProductsContainer>
      </MainContainer>
      <Footer />
    </Fragment>
  );
};

export default Home;
