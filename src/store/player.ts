import { defineStore } from 'pinia'

export const usePlayerStore = defineStore({
  id: 'player',
  state: () => ({
    audio: new Audio(),
    isPause: false,
  }),
  actions: {
    async play(id: number) {
      console.log(id);
      this.isPause = true;
    },
    togglePlay() {
      this.isPause = !this.isPause;
    }
  }
})