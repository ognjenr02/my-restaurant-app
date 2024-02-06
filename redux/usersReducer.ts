import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  username: string;
  password: string;
}

interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
    },
    // Add other user actions here
  },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
