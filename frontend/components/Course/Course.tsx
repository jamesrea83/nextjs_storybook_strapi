import { FC, ReactElement } from 'react';
import Image, { ImageProps } from 'next/image';
import styled from '@emotion/styled';

import { boxShadow, borderRadius } from '@/components/styles';
import { StyledLink } from '@/components/StyledLink';

const Section = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.font.regular};
	background: ${({ theme }) => theme.background};
	${borderRadius}
	${({ theme }) =>
		boxShadow(theme?.components?.shadow1, theme?.components?.shadow2)}
	width: 94vw;
	@media (min-width: 900px) {
		width: 46vw;
	}
	img {
		width: 100%;
		height: auto;
	}
`;

const CourseLink = styled(StyledLink)`
	padding: 1vmin 4vmin;
`;

type Props = {
	header: string;
	children: ReactElement;
	link: string;
	imageProps: ImageProps;
};

export const Course: FC<Props> = ({ header, children, imageProps, link }) => (
	<Section>
		<CourseLink href={link}>
			<h2>{header}</h2>
			<Image {...imageProps} alt={header} />
			{children}
		</CourseLink>
	</Section>
);
