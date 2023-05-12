import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';

import { CenteredTile } from '@/components/Tile';
import { Input, ConditionalFeedback } from '@/components/Input';

export type RegistrationForm = {
	username: string;
	email: string;
	password: string;
};

const StyledInput = styled(Input)`
	margin-bottom: 1rem;
`;

const Registration: NextPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegistrationForm>();

	const onSubmit = (data: RegistrationForm) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<CenteredTile header="Create an account">
				<StyledInput
					label="username"
					placeholder="username"
					{...register('username', {
						required: 'Required field',
						minLength: { value: 6, message: 'Min length 6!' },
						pattern: {
							value: /^[\w\d\s]+$/,
							message: 'Only letters, numbers & spaces',
						},
					})}
					feedback={
						<ConditionalFeedback>
							{errors?.username?.message}
						</ConditionalFeedback>
					}
				></StyledInput>
				<StyledInput
					label="email"
					placeholder="email"
					{...register('email', {
						required: 'Required field',
						minLength: { value: 6, message: 'Min length 6!' },
						pattern: {
							value: /^[\w\d\s]+$/,
							message: 'Only letters, numbers & spaces',
						},
					})}
					feedback={
						<ConditionalFeedback>{errors?.email?.message}</ConditionalFeedback>
					}
				></StyledInput>
				<StyledInput
					label="password"
					placeholder="password"
					{...register('password', {
						required: 'Required field',
						minLength: { value: 6, message: 'Min length 6!' },
						pattern: {
							value: /^[\w\d\s]+$/,
							message: 'Only letters, numbers & spaces',
						},
					})}
					feedback={
						<ConditionalFeedback>
							{errors?.password?.message}
						</ConditionalFeedback>
					}
				></StyledInput>
			</CenteredTile>
		</form>
	);
};

export default Registration;
