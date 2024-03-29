import { FC, MouseEvent } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { boxShadow, transition } from '@/components/styles';
import { Icon, Props as IconProps, AvailableIcons } from '@/components/Icon';

type ButtonProps = {
	size: string;
};

const Button = styled.button<ButtonProps>`
	all: unset;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	${({ size }) => {
		return css`
			width: ${size};
			height: ${size};
		`;
	}}
	border-radius: 50%;
	${transition()};
	${({ theme }) =>
		boxShadow(theme?.components?.shadow1, theme?.components?.shadow2)}
	&:active {
		${({ theme }) =>
			boxShadow(theme?.components?.shadow1, theme?.components?.shadow2, true)}
	}
	&:hover {
		opacity: 0.9;
	}
`;

export type Props = {
	/**  Width & height */
	size?: number;
	/**  Icon name */
	name: AvailableIcons;
	/** onClick callback */
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const IconButton: FC<Props> = ({ onClick, ...props }) => (
	<Button
		onClick={onClick}
		size={`${(props.size || 2) * 2}rem`}
		title={props.name}
	>
		<Icon {...props} />
	</Button>
);
