"use strict";

var _koa = _interopRequireDefault(require("koa"));

var _awilix = require("awilix");

var _awilixKoa = require("awilix-koa");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa.default(); //创建容器

const container = (0, _awilix.createContainer)(); //要将所有的类装载到container中

container.loadModules([__dirname + "/services/*.js"], {
  formatName: "camelCase",
  resolverOptions: {
    lifetime: _awilix.Lifetime.SCOPED
  }
});
app.use((0, _awilixKoa.scopePerRequest)(container)); //自动去装载路由

app.use((0, _awilixKoa.loadControllers)(__dirname + "/controllers/*.js"));
app.listen(3000);