import { FC, ReactNode } from 'react';
import { boxShadow, borderRadius } from '@/components/styles';
import styled from '@emotion/styled';

export type Props = {
	children: ReactNode;
	/** Header */
	header: ReactNode;
};

const Section = styled.section`
	${borderRadius}
	padding: 1vmin 4vmin 4vmin;
	color: ${({ theme }) => theme.font.regular};
	background: ${({ theme }) => theme.background};
	${({ theme }) =>
		boxShadow(theme?.components?.shadow1, theme?.components?.shadow2)}
`;

export const Tile: FC<Props> = ({ children, header, ...rest }) => (
	<Section {...rest}>
		<h2>{header}</h2>
		{children}
	</Section>
);
