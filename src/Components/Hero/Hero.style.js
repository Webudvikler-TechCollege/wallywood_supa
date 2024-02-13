import styled from 'styled-components'

export const HeroContainer = styled.div`
	grid-area: ${props => props.$area};
	display: none;

	img {
		width: 100%
	}

	@media screen and (min-width: ${props => props.theme.grid.breakpoints.m}) {
		display: block;
	}
`