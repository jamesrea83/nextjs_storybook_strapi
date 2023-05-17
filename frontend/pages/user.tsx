import type { NextPage } from 'next';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { RootState, AppDispatch } from '@/store';
import { selectUser, logout } from '@/services/userSlice';

import { CenteredTile } from '@/components/Tile';
import { Button } from '@/components/Button';

const User: NextPage = () => {
	const { username, email, error } = useSelector<RootState, RootState['user']>(
		selectUser
	);
	const router = useRouter();
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		if (!username || error) {
			dispatch(logout());
			router.push('/login');
		}
	}, []);

	const logoutHandler = () => {
		dispatch(logout());
		router.push('/');
	};

	return username && email ? (
		<CenteredTile header="Profile">
			<h3>Username: {username}</h3>
			<h3>Email: {email}</h3>
			<Button onClick={logoutHandler}>Logout</Button>
		</CenteredTile>
	) : null;
};

export default User;
