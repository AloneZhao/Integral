import axios from 'axios'

// const BASE = process.env.NODE_ENV === "production" ? "" : "http://test4.tx131.com:8713/"
const BASE = "http://test4.tx131.com:8713/"

const service = axios.create({
  baseURL: BASE,
  timeout: 30000
})

// 添加请求拦截器
service.interceptors.request.use(
  // 请求之前做的操作
  function (config) {
    return config
  },
  // 请求失败做的事情
  function (error) {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  function (response) {
    // 取出axios返回数据中的data属性与相关值
    const {
      data
    } = response
    // 取与后端商议后code的值来判断响应是否成功
    const {
      code
    } = data
    if (code !== 0) {
      return Promise.reject(data)
    } else {
      return data
    }
  },
  function (error) {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '请求错误';
          break
        case 401:
          error.message = '未授权，请登录';
          break
        case 403:
          error.message = '拒绝访问';
          break
        case 404:
          error.message = '请求地址出错';
          break
        case 408:
          error.message = '请求超时';
          break
        case 500:
          error.message = '服务器内部错误';
          break
        case 501:
          error.message = '服务未实现';
          break
        case 502:
          error.message = '网关错误';
          break
        case 503:
          error.message = '服务不可用';
          break
        case 504:
          error.message = '网关超时';
          break
        case 505:
          error.message = 'HTTP版本不受支持';
          break
        default:
          break
      }
    }
    return Promise.reject(error)
  }
)

export default service