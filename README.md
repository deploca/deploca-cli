deploca-cli
===========

Command-line tool for deploca cloud services

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/deploca-cli.svg)](https://npmjs.org/package/deploca-cli)
[![Downloads/week](https://img.shields.io/npm/dw/deploca-cli.svg)](https://npmjs.org/package/deploca-cli)
[![License](https://img.shields.io/npm/l/deploca-cli.svg)](https://github.com/deploca/deploca-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g deploca-cli
$ deploca COMMAND
running command...
$ deploca (-v|--version|version)
deploca-cli/0.0.1 win32-x64 node-v10.16.0
$ deploca --help [COMMAND]
USAGE
  $ deploca COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`deploca hello [FILE]`](#deploca-hello-file)
* [`deploca help [COMMAND]`](#deploca-help-command)
* [`deploca package [FILE]`](#deploca-package-file)

## `deploca hello [FILE]`

describe the command here

```
USAGE
  $ deploca hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ deploca hello
  hello world from ./src/hello.ts!
```

_See code: [src\commands\hello.ts](https://github.com/deploca/deploca-cli/blob/v0.0.1/src\commands\hello.ts)_

## `deploca help [COMMAND]`

display help for deploca

```
USAGE
  $ deploca help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src\commands\help.ts)_

## `deploca package [FILE]`

describe the command here

```
USAGE
  $ deploca package [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src\commands\package.ts](https://github.com/deploca/deploca-cli/blob/v0.0.1/src\commands\package.ts)_
<!-- commandsstop -->
