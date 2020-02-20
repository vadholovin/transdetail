"use strict";

const { build } = require('./gulp/tasks/build');
const { watch } = require('./gulp/tasks/watch');
const { dev } = require('./gulp/tasks/dev');

exports.build = build;
exports.watch = watch;
exports.default = dev;
