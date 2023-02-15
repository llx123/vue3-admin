import { defineStore } from 'pinia';
import { IBanner } from '@/models/interface'

import { ref } from 'vue';
export const useBannerStore = defineStore('banner', () => {
  const banners = ref<IBanner[]>([])
  banners.value = [
    { pic: '11', bannerId: 1, author: '111' },
    { pic: '11', bannerId: 2, author: '222' },
    { pic: '11', bannerId: 3, author: '333' },
    { pic: '11', bannerId: 4, author: '444' },
    { pic: '11', bannerId: 5, author: '555' },
    { pic: '11', bannerId: 6, author: '666' },
    { pic: '11', bannerId: 7, author: '777' },
    { pic: '11', bannerId: 8, author: '888' }]
  return { banners };
})
