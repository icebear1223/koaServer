import { route,GET } from "awilix-koa";

@route("/index")
class IndexController {
    constructor({indexService}){
        this.indexService = indexService;
    }

    @route("/")
    @GET()
    async actionIndex(ctx,next){
        ctx.body = "Hello Index"
    }

    @route("/list")
    @GET()
    async actionList(ctx,next){
        const data = this.indexService.getData({msg:'需要list数据'})
        ctx.body = data;
    }
}

export default IndexController;