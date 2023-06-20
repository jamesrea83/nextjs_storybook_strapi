import { FC, ReactElement } from 'react';
import Image, { ImageProps } from 'next/image';
import styled from '@emotion/styled';

import { boxShadow, borderRadius } from '@/components/styles';
import { StyledLink } from '@/components/StyledLink';

const CourseLink = styled(StyledLink)`
	display: flex;
	width: 90vw;
	height: 56vh;
	@media (min-width: 900px) {
		width: 45vw;
	}
`;

const Section = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 2vmin;
	background: ${({ theme }) => theme.background};
	color: ${({ theme }) => theme.font.regular};
	${borderRadius};
	${({ theme }) =>
		boxShadow(theme.components.shadow1, theme.components.shadow2)};

	img {
		width: auto;
		height: 100%;
	}

	time {
		font-size: 0.8rem;
		opacity: 0.8;
	}
`;

type Props = {
	header: string;
	children: ReactElement | string;
	link: string;
	imageProps: ImageProps;
};

export const Course: FC<Props> = ({ header, children, imageProps, link }) => (
	<CourseLink href={link}>
		<Section>
			<h2>{header}</h2>
			<Image {...imageProps} alt={header} />
			{children}
		</Section>
	</CourseLink>
);
