import styled from "styled-components"

const ProductContainer = styled.article`
    display: flex;
    flex-direction: column;

    width: 100%;

    position: relative;

    img {
        width: 100%;
        height: auto;

        @media(min-width: 1200px) {

        };
    };
`

const BadgeContainer = styled.div`
    position: absolute;
    bottom: 38px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #fff;

    padding: 4px;
    margin-left: 10px;

    font-family: Roboto;
    font-size: 10.5px;
    font-weight: 300;
`

const ProductCardDetails = styled.div`
    display: flex;
    flex-direction: column;

    height: 35px;

    p {
        width: 100%;
        text-align: left;
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 9px;
        line-height: 8px;
        color: #000000;

        margin-bottom: 5px;
    }
`

export {
  ProductContainer,
  BadgeContainer,
  ProductCardDetails
}
