import { FC, SVGProps } from 'react';
import styled from '@emotion/styled';

import { Icons } from './Icons';

export type AvailableIcons = keyof typeof Icons;

export type Props = {
	/**  Width & height */
	size?: number;
	/**  Icon name */
	name: AvailableIcons;
} & SVGProps<SVGSVGElement>;

export const Icon: FC<Props> = ({ name, size = 2, ...rest }) => {
	const Icon = styled(Icons[name])`
		color: ${({ theme }) => theme.font.regular};
	`;
	const sizeInRem = `${size}rem`;
	const sizes = { width: sizeInRem, height: sizeInRem };

	return <Icon role="img" aria-label={name} {...sizes} {...rest} />;
};
