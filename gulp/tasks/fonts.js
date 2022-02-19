const notifier = require("node-notifier")
const notify = require("gulp-notify")
const gutil = require("gulp-util")
const plumber = require("gulp-plumber")
const { dest, src } = require("gulp")
const { fonts } = require("../config/paths")
const { plumberConfig } = require("../config/pluginsConfig")
const gulpif = require("gulp-if")
const { isDev } = require("../utils/env")


const fontredir = done => {
    src(fonts.srcfonts)
        .pipe(gulpif(isDev, dest(fonts.tmpfonts), dest(fonts.distfonts)))
    done()    
}

module.exports = {
    fontredir
}
