import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';

import { CenteredTile } from '@/components/Tile';
import { Input, ConditionalFeedback } from '@/components/Input';
import { Button } from '@/components/Button';
import { StyledLink } from '@/components/StyledLink';

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
					label="Username"
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
					label="Email"
					placeholder="email"
					{...register('email', {
						required: 'Required field',
						pattern: {
							value: /^\S+@\S+$/,
							message: 'Invalid email',
						},
					})}
					feedback={
						<ConditionalFeedback>{errors?.email?.message}</ConditionalFeedback>
					}
				></StyledInput>
				<StyledInput
					label="Password"
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
				<Button type="submit">Sign up</Button>
				<h3>
					<StyledLink href="/login" underline={1}>
						Log in
					</StyledLink>
				</h3>
			</CenteredTile>
		</form>
	);
};

export default Registration;
