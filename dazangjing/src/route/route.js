export default [
  require("./register/route"),
  require("./login/route"),
  ...require("./proofread/route"),
  require("./jiaokan/route")
]