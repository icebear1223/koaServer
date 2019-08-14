"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class IndexService {
  constructor(app) {}

  getData(options) {
    let msg = options.msg ? options.msg : '没有数据传入';
    return {
      code: 1,
      msg
    };
  }

}

var _default = IndexService;
exports.default = _default;