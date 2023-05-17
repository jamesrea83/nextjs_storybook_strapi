import { rest } from 'msw';

import { LoginData, RegistrationData } from '@/services/userSlice';
import { mockUser, ValidationError, RegistrationError } from '@/mocks/user';

const api_url = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export const handlers = [
	rest.post<LoginData>(`${api_url}/auth/local`, async (req, res, ctx) => {
		const { identifier, password } = await req.json();

		if (
			identifier === mockUser.user.email &&
			password === mockUser.user.password
		) {
			return res(ctx.status(200), ctx.json(mockUser));
		}

		return res(ctx.status(400), ctx.json(ValidationError));
	}),

	rest.get(`${api_url}/users/me`, (req, res, ctx) => {
		if (req.headers.get('Authorization') === `Bearer ${mockUser.jwt}`) {
			return res(ctx.status(200), ctx.json(mockUser.user));
		}

		return res(ctx.status(400), ctx.json(ValidationError));
	}),

	rest.post<RegistrationData>(
		`${api_url}/auth/local/register`,
		async (req, res, ctx) => {
			const { email, password, username } = await req.json();

			if (
				email === mockUser.user.email &&
				password === mockUser.user.password &&
				username === mockUser.user.username
			) {
				return res(ctx.status(200), ctx.json(mockUser));
			}

			return res(ctx.status(400), ctx.json(RegistrationError));
		}
	),
];
