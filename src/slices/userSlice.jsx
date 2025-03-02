import { createSlice } from '@reduxjs/toolkit';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: cookies.get('user') || false,
        role: cookies.get('role') || null,
        token: cookies.get('token') || null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
            state.role = action.payload.role;
            state.token = action.payload.token;

            // Save to cookies
            cookies.set('user', action.payload.user, { path: '/' });
            cookies.set('role', action.payload.role, { path: '/' });
            cookies.set('token', action.payload.token, { path: '/' });
        },

        logout: (state) => {
            state.user = false;
            state.role = null;
            state.token = null;

            // Clear cookies
            cookies.remove('user', { path: '/' });
            cookies.remove('role', { path: '/' });
            cookies.remove('token', { path: '/' });
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;