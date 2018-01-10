# eCmd
> Easier way to do commands in cmd through Node.js

<!-- [![NPM Version][npm-image]][https://www.npmjs.com/package/ecmd]
[![Downloads Stats][npm-downloads]][https://www.npmjs.com/package/ecmd] -->

I created this npm with the intention of facilitating the execution of commands in the CMD that need many parameters and that need "interaction with the user" like asking the password or permission to perform some command ...

<!-- ![](header.png) -->

## Installation

OS X & Linux & Windows:

```sh
npm install ecmd
```

## Usage example

Expected params:
```js
var cli = require('ecmd')

var Cli = new cli()
Cli.execute("command", ['param1','param2'],[['line','user answer'],['line','user answer']])
```
>command is the command expected to be done like "tree" in windows

>param is an array of are the parameters that accompany the command, can be 0 or more parameters

>line is the text in the line that is asking for user interaction. Ex: "name:"

>user answer is the user interaction expected for the line param. Ex: "Bruno"

>You can have the much as you want of lines and user answer

Simple command
```js
var cli = require('ecmd')

var Cli = new cli()
Cli.execute("tree")
```

Command with params
```js
var cli = require('ecmd')

var Cli = new cli()
Cli.execute("mkdir",['Bruno'])
```


Command with params and User Interaction
```js
var cli = require('ecmd')

var Cli = new cli()
Cli.execute("npm",['init'],[['name: (npm init)','test'],['version: (1.0.0)','0.0.1'],['description:',''],['entry point: (index.js)',''],['test command:',''],['git repository:',''],['keywords:',''],['author:','brutom'],['license: (ISC)',''],['Is this ok? (yes)','yes'],])
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
    * FIX: Crash when calling `baz()` (Thanks @GenerousContributorName!)
* 0.1.0
    * The first proper release
    * CHANGE: Rename `foo()` to `bar()` -->
* 0.0.1
    * First release

## Meta

Bruno Couto

Distributed under the XYZ license. See ``LICENSE`` for more information.

[https://github.com/yourname/github-link](https://github.com/BrunoTCouto/ecmd)

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
<!-- [wiki]: https://github.com/yourname/yourproject/wiki -->
