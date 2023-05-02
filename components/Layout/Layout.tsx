import { FC, ReactNode } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

import { Logo } from '@/components/Logo';
import { Input } from '@/components/Input';
import { IconButton } from '@/components/IconButton';
import { transition } from '@/components/styles';

const Wrapper = styled.div`
	display: grid;
	gap: 0.1rem;
	color: ${({ theme }) => theme.font.regular};
	background-color: ${({ theme }) => theme.background};
	padding: 0.5rem;
	grid-template-areas:
		'header'
		'nav'
		'search'
		'content'
		'sidebar'
		'footer';
	${transition()}
	@media (min-width: 500px) {
		grid-template-columns: 1fr 3fr;
		grid-template-areas:
			'header 	search'
			'nav 		nav'
			'content 	content'
			'footer 	footer';
		nav {
			flex-direction: row;
			justify-content: space-between;
		}
	}
`;

const StyledLogo = styled(Logo)`
	grid-area: header;
`;

const MainNav = styled.nav`
	grid-area: nav;
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 0.5rem;
	a {
		cursor: pointer;
		color: ${({ theme }) => theme.font.regular};
		&:hover {
			opacity: 0.7;
		}
	}
`;

const SearchInput = styled(Input)`
	grid-area: search;
	width: 100%;
	height: 4rem;
`;

const Content = styled.main`
	grid-area: content;
`;

const Footer = styled.footer`
	grid-area: footer;
`;

type LayoutProps = {
	children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<Wrapper>
			<StyledLogo size={3}>C8X</StyledLogo>
			<MainNav>
				<Link href="/all">All</Link>
				<Link href="/news">News</Link>
				<IconButton name="Moon" size={1} onClick={() => null} />
			</MainNav>
			<SearchInput icon="Search" placeholder="Search" onChange={() => null} />
			<Content>{children}</Content>
			<Footer>Jimbob</Footer>
		</Wrapper>
	);
};
