import styled from '@emotion/styled';

import { Logo } from '@/components/Logo';
import { Input } from '@/components/Input';
import { StyledLink } from '@/components/StyledLink';

export const Wrapper = styled.div`
	display: grid;
	gap: 0.1rem;
	color: ${({ theme }) => theme.font.regular};
	background-color: ${({ theme }) => theme.background};
	padding: 0.5rem;
	grid-template-areas:
		'header nav'
		'search search'
		'content content'
		'footer footer';
	nav {
		justify-content: flex-end;
		gap: 5vmin;
	}
	@media (min-width: 500px) {
		grid-template-columns: 1fr 3fr;
	}
	@media (min-width: 960px) {
		grid-template-columns: 1fr 4fr 2fr;
		grid-template-areas:
			'header		search 	nav'
			'content 	content	content'
			'footer 	footer	footer';
	}
`;

export const LogoLink = styled(StyledLink)`
	padding-right: 1vw;
`;

export const StyledLogo = styled(Logo)`
	grid-area: header;
	display: flex;
	align-items: center;
	height: 4rem;
	& .logo_full {
		display: none;
	}
	@media (min-width: 560px) {
		& .logo_short {
			display: none;
		}
		& .logo_full {
			display: inline;
		}
	}
`;

export const MainNav = styled.nav`
	grid-area: nav;
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin: 0 2vmin;
`;

export const SearchInput = styled(Input)`
	grid-area: search;
	width: 100%;
	height: 4rem;
`;

export const Content = styled.main`
	grid-area: content;
	min-height: 84vh;
	margin-top: 1rem;
`;

export const Footer = styled.footer`
	grid-area: footer;
	display: flex;
	align-items: center;
	justify-content: space-around;
	height: 5rem;
`;
