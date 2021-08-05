import styled from "styled-components"

const ProductContainer = styled.div`
    width: 100vw;
    max-width: 500px;
    height: auto;

    margin: 0 auto;

    padding: 0 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    figure {
        display: flex;
        justify-content: center;

        img {
            width: 100%;
            max-width: 500px;
            max-height: 500px;
            height: auto;
        }
    }

    div {
        max-width: 500px;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    button {
        cursor: pointer;
    }
`;

export {
    ProductContainer
};