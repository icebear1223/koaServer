class IndexService {
    constructor (app) {

    }

    getData(options){
        let msg = options.msg ? options.msg : '没有数据传入';
        return {code:1,msg}
    }
}

export default IndexService;