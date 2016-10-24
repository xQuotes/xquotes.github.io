const api = '/db/jingshu'

const Api = {
  login: `${api}/signin`,
  register: `${api}/signup`,
  getJingShuText: `${api}/collection/text/580a17c82c4cbb0cb579602a`,
  putJingShuText: `${api}/collection/text/580a17c82c4cbb0cb579602a`,
  getJingShuImage: `${api}/collection/img/580a1d8e2c4cbb0cb579602f`,
  putJingShuImage: `${api}/collection/img/580a1d8e2c4cbb0cb579602f`
}

export default Api