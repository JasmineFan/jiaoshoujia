module.exports = {
    sum(a,b){
        return a+b
    },
    init({option, param}){
        console.log('执行init 流程',option, param)
    }
}