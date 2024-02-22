import styled from 'styled-components'

export const RatingContainer = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;

    svg {
        width: 25px;
        fill: #CECECE;

        .selected, &:hover {
            fill: rgb(255, 217, 0);
        }
    }
`
