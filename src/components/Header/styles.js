import styled from "styled-components"
import colors from '../../styles/index';

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    width: 100vw;
    padding: 10px 20px;
`;

const HeaderIconsContainer = styled.nav`
    display: flex;
    justify-content: space-between;
`;

const Title = styled.h1`
    font-family: Jost;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 35px;
    color: ${colors.text};
`;

const HamburgerContainer = styled.div`
    display: inline-block;
    cursor: pointer;
`;

const HamburgerBarOne = styled.div`
  width: 30px;
  height: 3px;
  background-color: #333;
  margin: 5px 0;
  transition: 0.4s;
`;

const HamburgerBarTwo = styled.div`
  width: 30px;
  height: 3px;
  background-color: #333;
  margin: 5px 0;
  transition: 0.4s;
`;

const HamburgerBarTree = styled.div`
  width: 30px;
  height: 3px;
  background-color: #333;
  margin: 5px 0;
  transition: 0.4s;
`;

const IconButton = styled.button`
    background: none;
    border: 0;
    cursor: pointer;
`;

export {
    HeaderContainer,
    HeaderIconsContainer,
    Title,
    IconButton,
    HamburgerContainer,
    HamburgerBarOne,
    HamburgerBarTwo,
    HamburgerBarTree
};