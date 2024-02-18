import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  username: string;
  password: string;
}

interface UsersState {
  users: User[];
  token: string | null;
}

const initialState: UsersState = {
  users: [],
  token: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
    },
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    removeToken(state) {
      state.token = null;
    },
    // Add other actions here
  },
});

export const { addUser, setToken, removeToken } = usersSlice.actions;

export default usersSlice.reducer;
