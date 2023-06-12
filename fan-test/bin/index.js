#!/usr/bin/env node
const yargs = require('yargs/yargs')
const {hideBin} = require('yargs/helpers')
const dedent = require('dedent')
const pkg = require("../package.json");

const arg = hideBin(process.argv)
const cli = yargs(arg)
const argv = process.argv.slice(2)

const context = {
  fanVersion: pkg.version,
};
cli
    .usage('Usage: imooc-test [command] <options>')
    .demandCommand(1, "A command is required. Pass --help to see all available commands and options.")
    .recommendCommands()
    .fail((err,msg)=>{
      console.log(err)
    })
    .strict()
    .alias("h", "help")
    .alias("v", "version")
    .wrap(cli.terminalWidth())
    .epilogue(dedent`
    When a command fails, all logs are written to lerna-debug.log in the current working directory.

    For more information, check out the docs at https://lerna.js.org/docs/introduction
  `)
  .options({
    debug:{
        type:'boolean',
        describe:'Bootstrap debug mode',
        alias:'d'
    }
  })
  .option('registry',{
    type:'string',
    describe:'Define registry',
    alias:'r'
  })
  .group(['debug'],'Dev options')
  .group(['registry'],'Extra options')
  .command('init [name]', 'Do init a project', (yargs) => {
    return yargs
      .option('name', {
        describe: 'Name of a project',
        type:'string',
        alias:'n'
      })
  }, (argv) => {
    console.log(argv)
  })
  .command({
    command:'list',
    aliases: ["ls", "la", "ll"],
    describe: "List local packages",
    builder:(yargs)=>{},
    handler:(argv)=>{console.log(argv)}
  })
  .parse(argv, context)