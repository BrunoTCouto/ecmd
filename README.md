# eCmd
> Easier way to do commands in cmd through Node.js

<!-- [![NPM Version][npm-image]][https://www.npmjs.com/package/ecmd]
[![Downloads Stats][npm-downloads]][https://www.npmjs.com/package/ecmd] -->

I created this npm with the intention of facilitating the execution of commands in the CMD that need many parameters and that need "interaction with the user". <br/> 
Ex: commands that ask passwords or permission to perform some action...

<!-- ![](header.png) -->

## Installation

OS X & Linux & Windows:

```sh
npm install ecmd --save
```

## Usage example

Expected params:
```js
var cli = require('ecmd')

var Cli = new cli()                                                                     //DEBUG HERE 
Cli.execute("command", ['param1','param2'],[['line','user answer'],['line','user answer']], true ).then(()=>{
    console.log("Succes Callback");
}).catch(()=>{
    console.log("Error Callback")
})
```
>command is the command expected to be done. Ex: "tree" in windows

>param is an array of are the parameters that goes with the command. Can be 0 or more parameters

>line is the text in the line that is asking for user interaction. Ex: "name:"

>user answer is the user interaction expected for the line that is asking for user interaction. Ex: "Bruno"

>The last array accept 0 or more arrays of "line" and 'user answer'

>The debug option will help you dicover what is the content of a line in the CMD. In the debug option you should pass true to enable it or leave it blank to turn it off.

>Use the callback to know when the command is completed with success or error and execute some code...

<br />
<br />

Simple command without Debug
```js
var cli = require('ecmd')

var Cli = new cli()
Cli.execute("tree").then(()=>{ //DEBUG DISABLED
    console.log("Command finished");
}).catch(()=>{
    console.log("Command not executed")
})
```

<br />
<br />

Simple command with Debug
```js
var cli = require('ecmd')

var Cli = new cli()
Cli.execute("tree", null,null,true).then(()=>{ //DEBUG ENABLED
    console.log("Command finished");
}).catch(()=>{
    console.log("Command not executed")
})
```

<br />
<br />

Command with params
```js
var cli = require('ecmd')

var Cli = new cli()
Cli.execute("mkdir",['Bruno']).then(()=>{
    console.log("Command finished");
}).catch(()=>{
    console.log("Command not executed")
})
```

<br />
<br />

Command with params and User Interaction
```js
var cli = require('ecmd')

var Cli = new cli()
Cli.execute("cf",['login'],[['Email> ',''],['Password> ','']]).then(()=>{
    console.log("Command finished");
}).catch(()=>{
    console.log("Command not executed")
})
```

<!-- ## Development setup

Describe how to install all development dependencies and how to run an automated test-suite of some kind. Potentially do this for multiple platforms.

```sh
make install
npm test
``` -->

## Release History

<!-- * 0.2.1
    * CHANGE: Update docs (module code remains unchanged)
* 0.2.0
    * CHANGE: Remove `setDefaultXYZ()`
    * ADD: Add `init()`
* 0.1.1
    * FIX: Crash when calling `baz()` (Thanks @GenerousContributorName!) -->
* 0.0.15
    * Added line Debug
* 0.0.12
    * Added Promise Callbacks
* 0.0.1
    * First release

## Meta

Bruno Couto

Distributed under the ISC license.

<!-- [https://github.com/yourname/github-link](https://github.com/BrunoTCouto/ecmd) -->

## Contributing

1. Fork it (<https://github.com/BrunoTCouto/ecmd/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
<!-- [wiki]: https://github.com/yourname/yourproject/wiki -->
