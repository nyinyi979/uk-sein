import { create } from "zustand";

type UserData = {
  preferredLanguage: "en" | "my";
  userToken: string;
};

type Actions = {
  updateLanguage: (lang: UserData["preferredLanguage"]) => void;
  updateUserToken: (token: UserData["userToken"]) => void;
};

export const useUserStore = create<UserData & Actions>((set) => ({
  preferredLanguage: "en",
  userToken: "",
  updateLanguage: (lang: "en" | "my") =>
    set(() => ({ preferredLanguage: lang })),
  updateUserToken: (token: string) => set(() => ({ userToken: token })),
}));
