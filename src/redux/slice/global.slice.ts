import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CombineReducersModel } from '..';

export interface GlobalStateModel {
  isDarkModel: boolean;
}

const initialState: GlobalStateModel = { isDarkModel: false };

const GlobalState = createSlice({
  name: 'GlobalState',
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkModel = action.payload;
    }
  },
});

export const globalState = (state: CombineReducersModel) => state.global;

export const { setDarkMode } = GlobalState.actions;
export default GlobalState.reducer;

