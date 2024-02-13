import styled from "styled-components"
import { ResetList } from "../../Styled/Mixins.style"

export const NavBarBurgerContainer = styled.nav`


  width: 25px;
  height: 25px;
  position: relative;
  cursor: pointer;

  @media screen and (min-width: ${props => props.theme.grid.breakpoints.m}) {
    display: none;
  }

  .burgerMenu div {
    position: absolute;
    width: 100%;
    height: 12%;
    background-color: black;
    transition: 0.2s ease-in-out;

    &:first-child {
      top: 0;
      left: 0;
    }

    &:nth-child(2) {
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }

    &:last-child {
      top: 90%;
      left: 0;
    }
  }

  .burgerMenuActive div {
    position: absolute;
    width: 100%;
    height: 12%;
    background-color: black;
    transition: 0.2s ease-in-out;

    &:first-child {
      top: 50%;
      left: 0;
      transform: translateY(-50%) rotate(45deg);
    }

    &:nth-child(2) {
      top: 50%;
      left: 0;
      transform: translateY(-50%) rotate(45deg);
    }

    &:last-child {
      top: 50%;
      left: 0;
      transform: translateY(-50%) rotate(-45deg);
    }
  }

  .menu {
    display: none;
  }

  .activeMenu {
    ${ResetList};
    position: fixed;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    transition: 0.2s ease-in-out;
    top: 10vh;
    right: 0;
    width: 100%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.9);

    li {
      width: 90%;
    }

    .navigationLinks {
      text-decoration: none;
      color: $primaryColor;
      font-size: 1em;
    }
  }
`
