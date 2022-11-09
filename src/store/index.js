import { createSlice, configureStore } from "@reduxjs/toolkit";
  
const counterData = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: counterData,
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state, action) {
      state.counter = state.counter - action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const authData = {
  authStatus : false
};

const authSlice = createSlice({
  name : "auth",
  initialState : authData ,
  reducers : {
    login(state){
      state.authStatus = true
    },
    logout(state){
      state.authStatus = false
    }
  }
})
const store = configureStore({
  reducer: {
    counter : counterSlice.reducer,
    auth : authSlice.reducer
  }
});
export const counterAction = counterSlice.actions;
export const authAction = authSlice.actions;
export default store;
  