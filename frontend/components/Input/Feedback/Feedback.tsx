import { FC } from 'react';
import styled from '@emotion/styled';

type FeedbackProps = {
	isValid?: boolean;
};

type ConditionalFeedbackProps = {
	children?: string;
};

export const Feedback = styled.span<FeedbackProps>`
	color: ${({ isValid, theme }) =>
		isValid ? theme.font.valid : theme.font.invalid};
`;

export const ConditionalFeedback: FC<ConditionalFeedbackProps> = ({
	children,
}) => (children ? <Feedback>{children}</Feedback> : <>&nbsp;</>);
