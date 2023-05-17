import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';

import { RootState, AppDispatch } from '@/store';
import { selectUser, login } from '@/services/userSlice';

import { CenteredTile } from '@/components/Tile';
import { Input, ConditionalFeedback } from '@/components/Input';
import { Button } from '@/components/Button';
import { StyledLink } from '@/components/StyledLink';

const StyledInput = styled(Input)`
	margin-bottom: 1rem;
`;

export type LoginForm = {
	identifier: string;
	password: string;
};

const Login: NextPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginForm>();
	const router = useRouter();
	const dispatch = useDispatch<AppDispatch>();
	const { jwt, error } = useSelector<RootState, RootState['user']>(selectUser);

	if (Boolean(jwt) && !error) {
		router.push('/user');
	}

	const onSubmit = async (data: LoginForm) => await dispatch(login(data));

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<CenteredTile header="Login">
				<h3>
					<ConditionalFeedback>{error?.message}</ConditionalFeedback>
				</h3>
				<StyledInput
					{...register('identifier', {
						required: 'Required field',
						minLength: { value: 6, message: 'Min length 6!' },
					})}
					feedback={
						<ConditionalFeedback>
							{errors?.identifier?.message}
						</ConditionalFeedback>
					}
					label="Identifier"
					placeholder="username or email"
					height={8}
					role="textbox"
				/>
				<StyledInput
					{...register('password', {
						required: 'Required field',
						minLength: { value: 6, message: 'Min length 6!' },
					})}
					feedback={
						<ConditionalFeedback>
							{errors?.password?.message}
						</ConditionalFeedback>
					}
					label="Password"
					placeholder="password"
					height={8}
					type="password"
					role="textbox"
				/>
				<Button type="submit">Sign in</Button>
				<h3>
					<StyledLink href="/registration" underline={1}>
						Create account
					</StyledLink>
				</h3>
			</CenteredTile>
		</form>
	);
};

export default Login;
