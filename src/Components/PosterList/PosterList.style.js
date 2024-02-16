import styled from "styled-components"
import { Reset } from "../../Styled/Mixins.style"

export const PosterListContainer = styled.div`
  > div {
    display: grid;
    grid-template-columns: 12fr;

    @media screen and (min-width: ${(props) => props.theme.grid.breakpoints.m}) {
      grid-template-columns: 6fr 6fr;
      grid-column-gap: 1rem;
    }

    @media screen and (min-width: ${(props) => props.theme.grid.breakpoints.l}) {
      grid-template-columns: 4fr 4fr 4fr;
    }

    div {
      padding-bottom: 2rem;
      text-align: center;

      figure {
        ${Reset};

        img {
          width: 100%;
          border: solid 1px ${(props) => props.theme.colors.senary};

          @media screen and (min-width: ${(props) =>props.theme.grid.breakpoints.l}) {
            max-height: 300px;
          }
        }
      }

      a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.tertiary};
        font-size: 1rem;
        font-weight: bold;
      }

      p span {
        font-size: ${(props) => props.theme.fontsizes.xs};
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }
`
