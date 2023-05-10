import styled from '@emotion/styled';

export type Props = { size?: number };

export const Logo = styled.header<Props>`
	font-family: Monoton;
	font-size: ${({ size = 3 }) => `${size}rem`};
	color: ${({ theme }) => theme.font.regular};
`;
