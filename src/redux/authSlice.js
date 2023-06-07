import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        user: {
            email: null,
            nome: null,
            token: null,
        },
    },

    reducers: {
        login: (state, actions) => {
            const { payload } = actions;
            if (payload && payload.email) {
                state.user.nome = payload.nome || null;
                state.user.email = payload.email || null;
                state.user.token = payload.token || null;
                localStorage.setItem('loggedUser', JSON.stringify(state.user))
                state.isAuthenticated = true;
            }
        },
        logout: (state) => {
            localStorage.removeItem('loggedUser')
            state.user = {
                email: null,
                nome: null,
                token: null,
            };
            state.isAuthenticated = false;
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
