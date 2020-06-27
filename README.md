deploca-cli
===========

Command-line tool for deploca cloud services

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @deploca/cli
$ deploca COMMAND
running command...
$ deploca (-v|--version|version)
@deploca/cli/0.0.1-alpha.2 win32-x64 node-v10.16.0
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
* [`deploca package:deploy [FILE]`](#deploca-packagedeploy-file)
* [`deploca package:validate [FILE]`](#deploca-packagevalidate-file)

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

_See code: [src\commands\hello.ts](https://github.com/deploca/deploca-cli/blob/v0.0.1-alpha.2/src\commands\hello.ts)_

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

## `deploca package:deploy [FILE]`

deploys the package to the cloud

```
USAGE
  $ deploca package:deploy [FILE]

OPTIONS
  -h, --help           show CLI help
  -p, --path=path      define the package root directory path
  -t, --target=target  the <project>/<branch> to deploy to

EXAMPLES
  $ deploca package:deploy
  $ deploca package:deploy --target|-t project/branch
  $ deploca package:deploy --path|-p /path/to/package/dir
```

_See code: [src\commands\package\deploy.ts](https://github.com/deploca/deploca-cli/blob/v0.0.1-alpha.2/src\commands\package\deploy.ts)_

## `deploca package:validate [FILE]`

validate the package to check its ok to deploy

```
USAGE
  $ deploca package:validate [FILE]

OPTIONS
  -h, --help       show CLI help
  -p, --path=path  define the package root directory path

EXAMPLE
  $ deploca package:validate
```

_See code: [src\commands\package\validate.ts](https://github.com/deploca/deploca-cli/blob/v0.0.1-alpha.2/src\commands\package\validate.ts)_
<!-- commandsstop -->
