module.exports ={
    //关闭自动检查
    lintOnSave:false,
    //配置代理
    devServer:{
        proxy:{
            '/api':{
                target:'http://gmall-h5-api.atguigu.cn',
                //pathRewrite{'^/api':''},
            }
        }
    }
}