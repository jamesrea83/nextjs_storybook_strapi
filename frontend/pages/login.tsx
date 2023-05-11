import type { NextPage } from 'next';
import { forwardRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';

import { CenteredTile } from '@/components/Tile';
import { Input } from '@/components/Input';
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
	const { register, handleSubmit, setValue, setError } = useForm<LoginForm>();
	const onSubmit = (data: LoginForm) => {
		console.log(data);
	};

	useEffect(() => {
		register('identifier', { required: true, minLength: 6 });
		register('password', { required: true, minLength: 6 });
	}, []);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<CenteredTile header="Login">
				<StyledInput
					name="identifier"
					onChange={event => setValue('identifier', event.target.value)}
					label="Identifier"
					placeholder="username or email"
					height={6}
				/>
				<StyledInput
					name="password"
					onChange={event => setValue('password', event.target.value)}
					label="Password"
					placeholder="password"
					height={6}
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
