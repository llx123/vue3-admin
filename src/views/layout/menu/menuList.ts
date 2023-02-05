import { Camera, Music, VideoOne, Fm } from '@icon-park/vue-next'

interface IMenu {
  name: string,
  key: string,
  icon?: any,
}

interface IMenus {
  name: string,
  children?: IMenu[]
}


export function getMenuList() {
  const menus: IMenus[] = [
    {
      name: '在线音乐',
      children: [
        {
          name: '推荐',
          key: 'discover',
          icon: Camera
        }, {
          name: '音乐馆',
          key: 'music',
          icon: Music
        }, {
          name: '视频',
          key: 'video',
          icon: VideoOne
        }, {
          name: '电台',
          key: 'dj',
          icon: Fm
        },
      ]
    },
    {
      name: '我的音乐',
      children: [],
    }
  ]
  return menus
}