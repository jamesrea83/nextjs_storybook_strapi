import {
	createSlice,
	PayloadAction,
	createAsyncThunk,
	SerializedError,
} from '@reduxjs/toolkit';

type RequestState = 'pending' | 'fulfilled' | 'rejected';

export type UserState = {
	jwt: string;
	username: string;
	email: string;
	requestState?: RequestState;
	error?: SerializedError;
};

export type LoginData = {
	identifier?: string;
	password?: string;
};

type UserPayload = {
	jwt: string;
	user: {
		username: string;
		email: string;
	};
};

export const initialState: UserState = {
	jwt: '',
	username: '',
	email: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		update: (state, { payload }: PayloadAction<Partial<UserState>>) => ({
			...state,
			...payload,
		}),
		clear: () => initialState,
	},
	extraReducers: builder => {
		builder
			.addCase(login.fulfilled, (state, { payload }) => {
				state.requestState = 'fulfilled';
				state.jwt = payload.jwt;
				state.username = payload.user.username;
				state.email = payload.user.email;
				state.error = undefined;
			})
			.addCase(login.pending, state => {
				state.requestState = 'pending';
				state.error = undefined;
			})
			.addCase(login.rejected, (state, { payload }) => {
				const payloadError = (payload as { error: SerializedError })?.error;
				state.requestState = 'rejected';
				state.error = payloadError;
			});
	},
});

export const { actions, reducer } = userSlice;

const api_url = process.env.NEXT_PUBLIC_STRAPI_API_URL;

const clearUserFromLocalStorage = () => {
	localStorage.removeItem('jwt');
	localStorage.removeItem('username');
	localStorage.removeItem('email');
};

const saveUserToLocalStorage = (result: UserPayload) => {
	localStorage.setItem('jwt', result.jwt);
	localStorage.setItem('username', result.user.username);
	localStorage.setItem('email', result.user.email);
};

export const login = createAsyncThunk<UserPayload, LoginData>(
	'user/login',
	async (loginData, { rejectWithValue }) => {
		try {
			const jwt = localStorage.getItem('jwt');
			const response = jwt
				? await fetch(`${api_url}/users/me`, {
						method: 'GET',
						headers: {
							Authorization: `Bearer ${jwt}`,
						},
				  })
				: await fetch(`${api_url}/auth/local`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(loginData),
				  });

			const data = await response.json();
			const { status } = response;
			if (status < 200 || status > 300) {
				clearUserFromLocalStorage();
				return rejectWithValue(data);
			}

			const result = (jwt ? { jwt, user: data } : data) as UserPayload;
			saveUserToLocalStorage(result);

			return result;
		} catch (error) {
			clearUserFromLocalStorage();
			return rejectWithValue(error);
		}
	}
);
