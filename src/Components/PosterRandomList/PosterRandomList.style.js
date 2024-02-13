import styled from "styled-components"
import { Reset } from "../../Styled/Mixins.style"

export const PosterRandomListContainer = styled.section`
  display: grid;
  grid-column-gap: 1.5rem;
  grid-template-columns: 1fr;

  > div {
    display: block;
  }

  h2 {
    margin: 1rem 0;
  }

  @media screen and (min-width: ${(props) => props.theme.grid.breakpoints.m}) {
    grid-template-columns: repeat(4, 1fr);

    h2 {
      grid-area: 1 / 1 / 2 / 5;
    }
    > div:first-of-type {
      grid-area: 2 / 1 / 3 / 3;
    }
    > div:last-child {
      grid-area: 2 / 3 / 3 / 5;
    }
  }

  > div {
    display: block;
    text-align: left;
    margin-bottom: 1rem;

    figure {
      ${Reset}

      img {
        width: 100%;
        max-height: 500px;
        border: solid 1px ${(props) => props.theme.colors.senary};
      }
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.tertiary};
      font-size: 1rem;
      font-weight: bold;
    }

    h4,
    p:first-child {
      ${Reset}
    }

    h4 {
      font-size: 1.1rem;
    }

    p.description {
      content: "...";
      @media screen and (width < 768px) {
        display: none;
      }
    }

    p span {
      font-size: ${(props) => props.theme.fontsizes.xs};
      color: ${(props) => props.theme.colors.primary};
    }
  }

  @media screen and (min-width: ${(props) => props.theme.grid.breakpoints.l}) {
    > div {
      display: flex;
    }
  }

`
