import { defineStore } from 'pinia'
import { IBanner } from "@/models/interface";

export const usePlayerStore = defineStore({
  id: 'player',
  state: () => ({
    audio: new Audio(),
    isPause: false,
    curObj: {
      author: '',
    },
  }),
  actions: {
    async play(item: IBanner) {
      this.isPause = true;
      this.curObj = item;
    },
    togglePlay() {
      this.isPause = !this.isPause;
    }
  }
})