import Link from 'next/link';
import styled from '@emotion/styled';

export type Props = {
	underline?: number;
};

export const StyledLink = styled(Link)<Props>`
	all: unset;
	cursor: pointer;
	color: ${({ theme }) => theme.font.regular};
	text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
	&:hover {
		opacity: 0.7;
	}
`;
