import { FC, ChangeEvent } from 'react';
import styled from '@emotion/styled';

import { boxShadow, transition } from '../styles';
import { useId } from '../hooks/useId';

const Wrapper = styled.label`
	& input {
		display: none;
	}
	& input:checked {
		& ~ label {
			background: ${({ theme }) => theme.components.primary};
			&::after {
				margin-left: 3.5rem;
				background: ${({ theme }) => theme.components.active};
			}
		}
	}
`;

const VisiblePart = styled.label`
	display: flex;
	align-items: center;
	justify-self: flex-start;
	cursor: pointer;
	height: 3rem;
	width: 6rem;
	border-radius: 1.6rem;
	background: ${({ theme }) => theme.components.background};
	${({ theme }) =>
		boxShadow(theme?.components?.shadow1, theme?.components?.shadow2)}
	&::after {
		content: '';
		margin-left: 0.5rem;
		width: 2.1rem;
		height: 2.1rem;
		border-radius: 50%;
		background: ${({ theme }) => theme.components.nonActive};
		${transition()};
	}
`;

type Props = {
	/** onChange callback */
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Switch: FC<Props> = ({ onChange }) => {
	const fieldID = useId();
	return (
		<Wrapper>
			<input id={fieldID} type="checkbox" onChange={onChange} />
			<VisiblePart htmlFor={fieldID} data-testid="SwitchVisiblePart" />
		</Wrapper>
	);
};
