const { parallel, series } = require("gulp")
const { html } = require("./templates")
const { css } = require("./styles")
const { js } = require("./scripts")
const { staticFiles } = require("./staticFiles")
const { fontredir } = require("./fonts")

const build = series(parallel(css, js, staticFiles,fontredir), html)

module.exports = {
  build
}
