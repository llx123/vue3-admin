import axios, { type InternalAxiosRequestConfig } from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/';

axios.interceptors.request.use((config: InternalAxiosRequestConfig) => config)

axios.interceptors.response.use(res => {
  return res;
}, err => {
  return Promise.reject(err)
})

interface IHttp {
  get<T>(url: string, params?: unknown): Promise<T>
}

const http: IHttp = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      axios.get(url, { params }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default http
