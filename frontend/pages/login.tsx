import type { NextPage } from 'next';
import Link from 'next/link';
import styled from '@emotion/styled';

import { CenteredTile } from '@/components/Tile';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { StyledLink } from '@/components/StyledLink';

const StyledInput = styled(Input)`
	margin-bottom: 1rem;
`;

const Login: NextPage = () => {
	const onSubmit = () => null;

	return (
		<form onSubmit={onSubmit}>
			<CenteredTile header="Login">
				<StyledInput label="Identifier" placeholder="username or email" />
				<StyledInput label="Password" placeholder="password" />
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
