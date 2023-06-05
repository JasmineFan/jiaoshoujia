#!/usr/bin/env node

const lib = require('fan-test-lib')
const arg = require('process').argv
console.log(arg)
const command = arg[2]
// console.log(command)
const options = arg.slice(3)
console.log(options)
if (options.length>1) {
    let [option, param] = options
    option = option.replace('--', '')
    console.log(option, param)

    if (command) {
        if (lib[command]) {
            lib[command]({ option, param })
        } else {
            console.log('无效的命令')
        }
    } else {
        console.log('请输入命令')
    }
}
if(command.startsWith('--')||command.startsWith('-')){
    const globalOption = command.replace(/--|-/g,'')
    console.log(globalOption)
    if(globalOption==='version'||globalOption ==='V'){
        console.log('1.1.1')
    }
}

// console.log("welcome to fan test!!!, now success")