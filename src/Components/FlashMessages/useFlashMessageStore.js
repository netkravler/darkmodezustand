import create from "zustand";

const useFlashMessageStore = create((set) => ({
  flashMessages: null,

  setFlashMessage: (flashMessages) => set(() => ({ flashMessages: flashMessages })),
  removeFlashMessage: () => set(() => ({ flashMessages: null })),

}));

export default useFlashMessageStore;
