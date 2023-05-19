import styled from '@emotion/styled';

import { Logo } from '@/components/Logo';
import { StyledLink } from '@/components/StyledLink';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 75.75vh;
`;

const CustomLink = styled(StyledLink)`
	text-decoration: underline;
	font-size: 3rem;
`;

export default function Custom404() {
	return (
		<Wrapper>
			<Logo>404 - Page Not Found</Logo>

			<CustomLink href="/">Go Home</CustomLink>
		</Wrapper>
	);
}
