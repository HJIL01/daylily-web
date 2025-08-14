import { create } from "zustand";
import { createUserSlice, UserSliceType } from "./user.slice";
import { devtools, subscribeWithSelector } from "zustand/middleware";

type UserStoreType = UserSliceType;

export const userStore = create<UserStoreType>()(
  devtools(
    subscribeWithSelector((...a) => ({
      ...createUserSlice(...a),
    }))
  )
);
