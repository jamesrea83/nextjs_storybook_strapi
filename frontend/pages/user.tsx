import type { NextPage } from 'next';

import { CenteredTile } from '@/components/Tile';
import { Button } from '@/components/Button';

const User: NextPage = () => {
	const userMock = { username: 'Billy Bob', email: 'billy@bob.com' };
	const logoutHandler = async () => {
		console.log('logout');
	};

	return (
		<CenteredTile header="Profile">
			<h3>Username: {userMock.username}</h3>
			<h3>Email: {userMock.email}</h3>
			<Button onClick={logoutHandler}>Logout</Button>
		</CenteredTile>
	);
};

export default User;
