import http from './http'
import { IBanner } from '@/models/interface'


export async function getBanner() {
  return await http.get<{ banner: IBanner[] }>('/banner', { type: 1 })
}