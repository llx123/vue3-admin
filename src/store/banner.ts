import { defineStore } from 'pinia';
import { IBanner } from '@/models/interface'

import { ref } from 'vue';
export const useBannerStore = defineStore('banner', () => {
  const banners = ref<IBanner[]>([])
  banners.value = [{ pic: '11', bannerId: 22 }, { pic: '11', bannerId: 22 }, { pic: '11', bannerId: 22 }, { pic: '11', bannerId: 22 }, { pic: '11', bannerId: 22 }, { pic: '11', bannerId: 22 }, { pic: '11', bannerId: 22 }, { pic: '11', bannerId: 22 }]
  return { banners };
})
