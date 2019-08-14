import Koa from 'koa';
import {asClass,asValue,Lifetime,createContainer} from 'awilix';
import {loadControllers,scopePerRequest} from 'awilix-koa';

const app = new Koa();
//创建容器
const container = createContainer();
//要将所有的类装载到container中
container.loadModules([__dirname + "/services/*.js"],{
  formatName:"camelCase",
  resolverOptions:{
    lifetime:Lifetime.SCOPED
  }
})
app.use(scopePerRequest(container));
//自动去装载路由
app.use(loadControllers(__dirname + "/controllers/*.js"));

app.listen(3000);