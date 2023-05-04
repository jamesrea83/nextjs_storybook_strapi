import Link from 'next/link';
import styled from '@emotion/styled';

export const StyledLink = styled(Link)`
	all: unset;
	cursor: pointer;
	color: ${({ theme }) => theme.font.regular};
	&:hover {
		opacity: 0.7;
	}
`;
