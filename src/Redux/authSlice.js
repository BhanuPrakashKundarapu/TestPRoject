import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const Login = createAsyncThunk('auth/login', async ({ username, password }, thunkAPI) => {
    console.log(username,password)
  try {
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    console.log(response)
    const data = await response.json();

    if (!response.ok) {
      return thunkAPI.rejectWithValue(data.message || 'Login failed');
    }

    
    localStorage.setItem('token', data.accessToken);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Login failed');
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, loading: false, error: '' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Login.pending, (state) => { state.loading = true; })
      .addCase(Login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.accessToken;
        state.loading = false;
        state.error = ''; 
      })
      .addCase(Login.rejected, (state, action) => {
        state.error = action.payload; 
        state.loading = false;
      });
  },
});

export default authSlice.reducer;
