import service from '@/utils/request'

/**
 * 获取单一用户的总积分与季度积分
 */
function getUserIntegral(data) {
  return service.request({
    method: 'get',
    url: 'pointssystem/' + data
  })
}

/**
 * 获取单一用户每日积分来源情况
 */
function getUserIntegralSource(data, id) {
  return service.request({
    method: 'post',
    url: `pointssystem/pointsRecord/${id}`,
    params: data
  })
}

/**
 * 获取季度总积分与总积分排行
 */
function getUserRank(data, id) {
  return service.request({
    method: 'post',
    url: `pointssystem/pointsRank/${id}`,
    params: data
  })
}
export {
  getUserIntegral,
  getUserIntegralSource,
  getUserRank
}