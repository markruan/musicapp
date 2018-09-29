const _baseUrl = 'http://47.99.116.131:3000'
const _baseUrl2 = 'https://api.imjad.cn/cloudmusic/'
export default {
  getPlayListByWhere (cat, order, offset, total, limit) {
    return _baseUrl + '/top/playlist?&cat=' + cat + '&offset=' + offset + '&limit=' + limit
  },
  getLrc (id) {
    return _baseUrl2 + '?type=lyric&id=' + id
  },
  getSong (id) {
    return _baseUrl + '/music/url?id=' + id
  },
  getPlayListDetail (id) {
    return _baseUrl2 + '?type=playlist&id=' + id
  },
  getMv (id) {
    return _baseUrl2 + '?type=mv&id=' + id
  },
  search (words) {
    return _baseUrl2 + '?type=search&s=' + words
  },
  getMvList () {
    return _baseUrl + '/mv/first?limit=10'
  },
  getBanner () {
    return _baseUrl + '/banner'
  },
  getKu () {
    return _baseUrl + '/user/playlist?uid=1602618880'
  },
  getMvDetail(id){
     return _baseUrl + '/mv?mvid='+id
  }
}
