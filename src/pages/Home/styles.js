import styled from "styled-components"

const MainContainer = styled.main`
    width: 100vw;
`

const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;

    padding: 0 20px;
    margin-top: 10px;

    @media(min-width: 700px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    };

    div {
        display: flex;
        justify-content: center;
        align-items: center;
    };
`

export {
  ProductsContainer,
  MainContainer
}
