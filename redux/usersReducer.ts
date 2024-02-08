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
    // Add other user actions here
  },
});

export const { addUser, setToken } = usersSlice.actions;

export default usersSlice.reducer;
