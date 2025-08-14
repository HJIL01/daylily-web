import { StateCreator } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type UserSliceStateType = {
  isLogin: boolean;
};

type UserSliceActionType = {
  setLogin: () => void;
  setLogout: () => void;
};

export type UserSliceType = UserSliceStateType & UserSliceActionType;

const initialState: UserSliceStateType = {
  isLogin: false,
};

export const createUserSlice: StateCreator<
  UserSliceType,
  [],
  [["zustand/immer", never]],
  UserSliceType
> = immer(
  combine(initialState, (set) => ({
    setLogin: () => {
      set((state) => {
        state.isLogin = true;
      });
    },
    setLogout: () => {
      set((state) => {
        state.isLogin = false;
      });
    },
  }))
);
